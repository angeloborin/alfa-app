import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, getDocs, setDoc, doc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCfoxtQy_MCf5_fqKFq4OsXYvvyhkmwEYo",
    authDomain: "alfa-app-b4052.firebaseapp.com",
    projectId: "alfa-app-b4052",
    storageBucket: "alfa-app-b4052.firebasestorage.app",
    messagingSenderId: "644138783201",
    appId: "1:644138783201:web:16308247c9ef93f1d242a0"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

async function migrateUsers() {
    try {
        // Listar todos os usuários do Authentication
        // Nota: Em produção, você precisaria usar Admin SDK para isso
        // Esta é uma abordagem simplificada

        console.log("Iniciando migração de usuários...");

        // Se você já tem uma coleção de usuários, atualize
        // Se não, crie com base nos usuários logados

        const defaultPermissions = {
            admin: { canViewOS: true, canEditOS: true, canDeleteOS: true, canViewFinancial: true, canEditFinancial: true, canViewContracts: true, canEditContracts: true, canManageUsers: true, canViewAllClients: true, canViewOnlyOwnClient: false },
            client: { canViewOS: true, canEditOS: false, canDeleteOS: false, canViewFinancial: false, canEditFinancial: false, canViewContracts: false, canEditContracts: false, canManageUsers: false, canViewAllClients: false, canViewOnlyOwnClient: true }
        };

        // Exemplo: Criar um usuário admin padrão (substitua com seu email)
        const adminUserId = "zdE77VFvMnZTwbor9SxKPWMQFYl1"; // Obtenha do Firebase Authentication
        await setDoc(doc(db, "users", adminUserId), {
            email: "admin@alfa.com",
            displayName: "Administrador",
            role: "admin",
            permissions: defaultPermissions.admin,
            createdAt: new Date().toISOString()
        });

        console.log("Migração concluída!");

    } catch (error) {
        console.error("Erro na migração:", error);
    }
}

migrateUsers();