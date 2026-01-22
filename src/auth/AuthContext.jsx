import React, { createContext, useContext, useEffect, useState } from "react";
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut as firebaseSignOut,
    onAuthStateChanged,
    sendPasswordResetEmail,
    updateProfile,
    EmailAuthProvider,
    reauthenticateWithCredential
} from 'firebase/auth';
import { collection, doc, getDoc, getDocs, setDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { auth, db } from "../firebase/firebase";

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isLoggingOut, setIsLoggingOut] = useState(false);

    // Permissões padrão por cargo
    const getDefaultPermissions = (role) => {
        const permissions = {
            admin: {
                canViewOS: true,
                canEditOS: true,
                canDeleteOS: true,
                canViewFinancial: true,
                canEditFinancial: true,
                canViewContracts: true,
                canEditContracts: true,
                canManageUsers: true,
                canViewAllClients: true,
                canViewOnlyOwnClient: false,
                canPrint: true,
                canExport: true
            },
            client: {
                canViewOS: true,
                canEditOS: false,
                canDeleteOS: false,
                canViewFinancial: false,
                canEditFinancial: false,
                canViewContracts: false,
                canEditContracts: false,
                canManageUsers: false,
                canViewAllClients: false,
                canViewOnlyOwnClient: true,
                canPrint: false,
                canExport: false
            }
        };
        return permissions[role] || permissions.client;
    };

    // Função de cadastro SIMPLIFICADA - cria usuário sem fazer login automático
    async function signup(email, password, displayName, role = 'client', adminPassword = null) {
        console.log("🔄 Iniciando criação de usuário:", { email, displayName, role });
        
        try {
            // Guardar o usuário atual ANTES de criar o novo
            const currentUser = auth.currentUser;
            const currentUserEmail = currentUser?.email;
            console.log("👤 Usuário atual antes da criação:", currentUserEmail);
            
            // Se tiver adminPassword, reautenticar o admin primeiro
            if (adminPassword && currentUser) {
                console.log("🔐 Reautenticando admin...");
                try {
                    const credential = EmailAuthProvider.credential(currentUserEmail, adminPassword);
                    await reauthenticateWithCredential(currentUser, credential);
                    console.log("✅ Admin reautenticado com sucesso");
                } catch (reauthError) {
                    console.error("❌ Erro na reautenticação:", reauthError);
                    throw new Error("Senha do admin incorreta. Por favor, verifique sua senha.");
                }
            }
            
            // 1. Criar usuário no Firebase Authentication
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log("✅ Usuário criado no Firebase Auth:", userCredential.user.email);
            
            // 2. Atualizar o perfil do usuário no Authentication
            if (displayName) {
                await updateProfile(userCredential.user, {
                    displayName: displayName
                });
                console.log("✅ Perfil atualizado no Auth");
            }
            
            // 3. Criar documento do usuário no Firestore
            const permissions = getDefaultPermissions(role);
            
            const userDataForFirestore = {
                uid: userCredential.user.uid,
                email: email,
                displayName: displayName || email.split('@')[0],
                role: role,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
                permissions: permissions,
                status: 'active',
                emailVerified: false,
                createdBy: currentUserEmail || 'system'
            };
            
            console.log("📝 Salvando dados no Firestore...");
            await setDoc(doc(db, "users", userCredential.user.uid), userDataForFirestore);
            console.log("✅ Dados salvos no Firestore");
            
            // 4. IMPORTANTE: Fazer logout do usuário recém-criado
            console.log("🔒 Fazendo logout do novo usuário...");
            await firebaseSignOut(auth);
            console.log("✅ Logout do novo usuário realizado");
            
            // 5. Tentar restaurar o admin se tivermos as credenciais
            if (currentUser && adminPassword) {
                console.log("🔄 Tentando restaurar sessão do admin...");
                try {
                    await signInWithEmailAndPassword(auth, currentUserEmail, adminPassword);
                    console.log("✅ Admin restaurado com sucesso!");
                } catch (restoreError) {
                    console.error("❌ Erro ao restaurar admin:", restoreError);
                    // O usuário precisará fazer login manualmente
                }
            }
            
            console.log("🎉 Usuário criado com sucesso em ambos os sistemas!");
            return { 
                success: true, 
                userId: userCredential.user.uid,
                adminRestored: !!adminPassword
            };
            
        } catch (error) {
            console.error("❌ Erro ao criar usuário:", error);
            
            // Traduzir erros do Firebase
            let errorMessage = error.message;
            switch (error.code) {
                case 'auth/email-already-in-use':
                    errorMessage = 'Este email já está em uso por outra conta.';
                    break;
                case 'auth/invalid-email':
                    errorMessage = 'Email inválido.';
                    break;
                case 'auth/operation-not-allowed':
                    errorMessage = 'Operação não permitida. Contate o administrador.';
                    break;
                case 'auth/weak-password':
                    errorMessage = 'A senha é muito fraca. Use pelo menos 6 caracteres.';
                    break;
                case 'auth/wrong-password':
                    errorMessage = 'Senha do admin incorreta.';
                    break;
                default:
                    errorMessage = 'Erro ao criar usuário: ' + error.message;
            }
            
            throw new Error(errorMessage);
        }
    }

    // Função de login (mantida igual)
    async function login(email, password) {
        console.log("Tentando login para:", email);
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log("✅ Login bem-sucedido:", userCredential.user.email);
            return userCredential;
        } catch (error) {
            console.error("❌ Erro no login:", error);
            throw error;
        }
    }

    // Função de logout
    async function logout() {
        if (isLoggingOut) {
            console.log("Logout já em andamento...");
            return;
        }
        
        setIsLoggingOut(true);
        try {
            console.log("Iniciando logout...");
            
            // Limpar estado local primeiro
            setUser(null);
            setUserData(null);
            
            // Fazer logout do Firebase
            await firebaseSignOut(auth);
            
            console.log("✅ Logout realizado com sucesso");
            
            return true;
        } catch (error) {
            console.error("❌ Erro ao fazer logout:", error);
            throw error;
        } finally {
            setIsLoggingOut(false);
        }
    }

    // Função para redefinir senha
    function resetPassword(email) {
        console.log("Solicitando redefinição de senha para:", email);
        return sendPasswordResetEmail(auth, email);
    }

    // Função para atualizar dados do usuário
    async function updateUserData(userId, data) {
        console.log("Atualizando dados do usuário:", userId);
        
        await updateDoc(doc(db, "users", userId), {
            ...data,
            updatedAt: new Date().toISOString()
        });
        
        // Recarregar dados do usuário se for o mesmo usuário
        if (userId === user?.uid) {
            console.log("Recarregando dados do usuário atual...");
            await loadUserData(userId);
        }
    }

    // Função para carregar dados do usuário do Firestore
    async function loadUserData(userId) {
        console.log("Carregando dados do usuário do Firestore:", userId);
        try {
            const userDoc = await getDoc(doc(db, "users", userId));
            if (userDoc.exists()) {
                const userDataFromDb = userDoc.data();
                
                // Garantir que as permissões estão completas
                const completePermissions = {
                    ...getDefaultPermissions(userDataFromDb.role || 'client'),
                    ...(userDataFromDb.permissions || {})
                };
                
                const completeUserData = {
                    ...userDataFromDb,
                    permissions: completePermissions
                };
                
                setUserData(completeUserData);
                return completeUserData;
            } else {
                console.log("Usuário não encontrado no Firestore");
                setUserData(null);
                return null;
            }
        } catch (error) {
            console.error("Erro ao carregar dados do usuário:", error);
            setUserData(null);
            return null;
        }
    }

    // Função para atualizar cargo e permissões
    const updateUserRole = async (userId, newRole) => {
        if (!user || userData?.role !== 'admin') {
            console.warn("Tentativa não autorizada de atualizar cargo");
            throw new Error("Sem permissão para atualizar cargos");
        }

        console.log("Atualizando cargo do usuário:", userId, "para", newRole);
        
        const permissions = getDefaultPermissions(newRole);
        const updateData = {
            role: newRole,
            permissions,
            updatedAt: new Date().toISOString()
        };

        await updateDoc(doc(db, "users", userId), updateData);
        
        return updateData;
    };

    // Função para deletar usuário (com validação)
    const deleteUserAccount = async (userId) => {
        if (!user || userData?.role !== 'admin') {
            console.warn("Tentativa não autorizada de deletar usuário");
            throw new Error("Sem permissão para deletar usuários");
        }

        console.log("Deletando conta do usuário:", userId);
        
        try {
            // Primeiro deletar do Firestore
            await deleteDoc(doc(db, "users", userId));
            console.log("✅ Usuário deletado do Firestore");
            
            // Nota: Para deletar do Authentication, precisaríamos do Admin SDK no backend
            // ou pedir ao usuário para deletar sua própria conta
            
            return { success: true };
        } catch (error) {
            console.error("❌ Erro ao deletar usuário:", error);
            throw error;
        }
    };

    // Função para verificar permissão
    function hasPermission(permission) {
        if (!userData) {
            return false;
        }
        if (userData.role === 'admin') {
            return true;
        }
        return userData.permissions?.[permission] || false;
    }

    // Função para buscar todos os usuários (para UserManagement)
    const getAllUsers = async () => {
        try {
            const usersRef = collection(db, "users");
            const snapshot = await getDocs(usersRef);
            const users = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            console.log("Total de usuários encontrados:", users.length);
            
            // Se o usuário não for admin e só pode ver clientes próprios
            if (userData?.role !== 'admin' && !hasPermission('canViewAllClients')) {
                // Filtrar apenas usuários criados por ele
                const filtered = users.filter(u => 
                    u.createdBy === user?.email || 
                    u.id === user?.uid
                );
                console.log("Usuários filtrados para visualização:", filtered.length);
                
                // Ordenar por data de criação (mais recente primeiro)
                filtered.sort((a, b) => {
                    const dateA = new Date(a.createdAt || 0);
                    const dateB = new Date(b.createdAt || 0);
                    return dateB - dateA;
                });
                
                return filtered;
            }
            
            // Ordenar por data de criação (mais recente primeiro)
            users.sort((a, b) => {
                const dateA = new Date(a.createdAt || 0);
                const dateB = new Date(b.createdAt || 0);
                return dateB - dateA;
            });
            
            return users;
        } catch (error) {
            console.error("Erro ao buscar todos os usuários:", error);
            throw error;
        }
    };

    // Observar mudanças no estado de autenticação
    useEffect(() => {
        console.log("🔧 Configurando listener onAuthStateChanged...");
        
        const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
            console.log("🚀 onAuthStateChanged disparado!");
            console.log("👤 Usuário do Firebase:", firebaseUser ? `${firebaseUser.email} (${firebaseUser.uid})` : "Nenhum");
            
            if (firebaseUser && !isLoggingOut) {
                console.log("🔄 Processando usuário autenticado...");
                try {
                    // Buscar dados do usuário no Firestore
                    const userDoc = await getDoc(doc(db, "users", firebaseUser.uid));

                    if (userDoc.exists()) {
                        const userDataFromDb = userDoc.data();
                        console.log("📊 Dados do Firestore encontrados para:", firebaseUser.email);
                        
                        // Garantir que as permissões estão completas
                        const completePermissions = {
                            ...getDefaultPermissions(userDataFromDb.role || 'client'),
                            ...(userDataFromDb.permissions || {})
                        };
                        
                        const completeUserData = {
                            ...userDataFromDb,
                            permissions: completePermissions
                        };
                        
                        setUserData(completeUserData);
                        console.log("✅ Dados do usuário carregados com sucesso");
                    } else {
                        console.log("⚠️ Usuário não encontrado no Firestore - criando...");
                        
                        // Criar documento com dados mínimos
                        const defaultUserData = {
                            uid: firebaseUser.uid,
                            email: firebaseUser.email,
                            displayName: firebaseUser.displayName || firebaseUser.email?.split('@')[0] || 'Usuário',
                            role: 'client',
                            createdAt: new Date().toISOString(),
                            updatedAt: new Date().toISOString(),
                            permissions: getDefaultPermissions('client'),
                            status: 'active',
                            emailVerified: firebaseUser.emailVerified,
                            createdBy: 'system'
                        };

                        await setDoc(doc(db, "users", firebaseUser.uid), defaultUserData);
                        setUserData(defaultUserData);
                        console.log("✅ Registro criado no Firestore");
                    }

                    setUser(firebaseUser);
                    setIsLoggingOut(false);
                    console.log("🎉 Estado atualizado com sucesso");
                } catch (error) {
                    console.error("❌ Erro ao carregar dados do usuário:", error);
                    setUser(firebaseUser);
                    
                    // Criar dados mínimos localmente
                    const defaultPermissions = getDefaultPermissions('client');
                    const minimalUserData = {
                        uid: firebaseUser.uid,
                        email: firebaseUser.email,
                        displayName: firebaseUser.displayName || firebaseUser.email?.split('@')[0] || 'Usuário',
                        role: 'client',
                        permissions: defaultPermissions
                    };
                    
                    setUserData(minimalUserData);
                    setIsLoggingOut(false);
                }
            } else {
                if (isLoggingOut) {
                    console.log("🔓 Logout confirmado - limpando estado");
                } else {
                    console.log("👤 Nenhum usuário autenticado");
                }
                setUser(null);
                setUserData(null);
            }
            setLoading(false);
        });

        return unsubscribe;
    }, [isLoggingOut]);

    const value = {
        user,
        userData,
        loading,
        isLoggingOut,
        // Funções de autenticação
        signup,
        login,
        logout,
        resetPassword,
        // Funções de gerenciamento de usuário
        updateUserRole,
        updateUserData,
        loadUserData,
        deleteUserAccount,
        getAllUsers,
        // Função de verificação de permissão
        hasPermission,
        // Funções auxiliares
        getDefaultPermissions
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}