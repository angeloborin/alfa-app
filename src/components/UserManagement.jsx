import React, { useState, useEffect } from 'react';
import { collection, getDocs, updateDoc, doc, setDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { useAuth } from '../auth/AuthContext';
import { 
    Users, Shield, CheckCircle, XCircle, 
    Edit, Save, X, Search, AlertCircle, RefreshCw,
    ChevronUp, ChevronDown, Plus, Mail, User, Key, Eye, EyeOff,
    Pencil, Trash2, Lock
} from 'lucide-react';

const roleColors = {
    admin: 'bg-red-100 text-red-800',
    client: 'bg-purple-100 text-purple-800'
};

const roleLabels = {
    admin: 'Administrador',
    client: 'Cliente'
};

// Componente de Modal para Criar Usuário
const CreateUserModal = ({ onClose, onSuccess }) => {
    const { signup, user } = useAuth();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        displayName: '',
        role: 'client'
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess(false);

        // Validações
        if (formData.password !== formData.confirmPassword) {
            setError('As senhas não conferem');
            return;
        }

        if (formData.password.length < 6) {
            setError('A senha deve ter pelo menos 6 caracteres');
            return;
        }

        setLoading(true);
        try {
            console.log('Criando usuário:', { 
                email: formData.email, 
                displayName: formData.displayName,
                role: formData.role 
            });
            
            // Usar a função signup do AuthContext com a senha do admin
            const result = await signup(
                formData.email,
                formData.password,
                formData.displayName,
                formData.role// Senha do admin para reautenticação
            );
            
            if (result.success) {
                console.log('Usuário criado com sucesso!', result);
                setSuccess(true);
                
                // Resetar formulário
                setFormData({
                    email: '',
                    password: '',
                    confirmPassword: '',
                    displayName: '',
                    role: 'client'
                });
                
                // Aguardar 2 segundos e então fechar modal e recarregar lista
                setTimeout(() => {
                    onSuccess?.();
                    onClose();
                }, 2000);
            }
            
        } catch (error) {
            console.error('Erro ao criar usuário:', error);
            // Traduzir erros do Firebase
            switch (error.message) {
                case 'Senha do admin incorreta.':
                    setError('Sua senha de administrador está incorreta. Por favor, verifique e tente novamente.');
                    break;
                case 'Este email já está em uso por outra conta.':
                    setError('Este email já está em uso por outra conta.');
                    break;
                case 'Email inválido.':
                    setError('Email inválido.');
                    break;
                case 'A senha é muito fraca. Use pelo menos 6 caracteres.':
                    setError('A senha é muito fraca. Use pelo menos 6 caracteres.');
                    break;
                default:
                    setError(error.message || 'Erro ao criar usuário. Verifique os dados e tente novamente.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-5">
            <div 
                className="fixed inset-0 bg-black/70 backdrop-blur-md"
                onClick={onClose}
            />
            
            <div className="relative z-50 bg-white rounded-2xl w-full max-w-md shadow-2xl transform transition-all duration-300 scale-100">
                <div className="p-6 border-b flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="bg-green-100 p-2 rounded-lg text-green-600">
                            <Plus size={24} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900">Criar Novo Usuário</h3>
                            <p className="text-slate-500 text-sm">Adicione um novo usuário ao sistema</p>
                        </div>
                    </div>
                    <button 
                        onClick={onClose} 
                        className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                        disabled={loading}
                    >
                        <X size={20} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    {error && (
                        <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm border border-red-200">
                            <div className="flex items-center gap-2 mb-1">
                                <AlertCircle size={16} />
                                <span className="font-bold">Erro</span>
                            </div>
                            {error}
                        </div>
                    )}

                    {success && (
                        <div className="bg-green-50 text-green-600 p-3 rounded-lg text-sm border border-green-200">
                            <div className="flex items-center gap-2 mb-1">
                                <CheckCircle size={16} />
                                <span className="font-bold">Sucesso!</span>
                            </div>
                            Usuário criado com sucesso! O usuário foi registrado no Authentication e no Firestore.
                            <div className="mt-2 text-xs">
                                Fechando o modal em instantes...
                            </div>
                        </div>
                    )}

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Nome Completo *</label>
                        <div className="relative">
                            <User className="absolute left-3 top-3 text-slate-400" size={18} />
                            <input
                                type="text"
                                required
                                className="w-full pl-10 pr-3 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                                value={formData.displayName}
                                onChange={(e) => setFormData({...formData, displayName: e.target.value})}
                                placeholder="João Silva"
                                disabled={loading || success}
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Email *</label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-3 text-slate-400" size={18} />
                            <input
                                type="email"
                                required
                                className="w-full pl-10 pr-3 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                placeholder="usuario@exemplo.com"
                                disabled={loading || success}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Senha *</label>
                            <div className="relative">
                                <Key className="absolute left-3 top-3 text-slate-400" size={18} />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    required
                                    className="w-full pl-10 pr-10 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                                    value={formData.password}
                                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                                    placeholder="••••••••"
                                    disabled={loading || success}
                                    minLength="6"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-3 text-slate-400 hover:text-slate-600"
                                    disabled={loading || success}
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Confirmar Senha *</label>
                            <div className="relative">
                                <Key className="absolute left-3 top-3 text-slate-400" size={18} />
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    required
                                    className="w-full pl-10 pr-10 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                                    value={formData.confirmPassword}
                                    onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                                    placeholder="••••••••"
                                    disabled={loading || success}
                                    minLength="6"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-3 top-3 text-slate-400 hover:text-slate-600"
                                    disabled={loading || success}
                                >
                                    {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Cargo *</label>
                        <div className="relative">
                            <Shield className="absolute left-3 top-3 text-slate-400" size={18} />
                            <select
                                className="w-full pl-10 pr-3 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all bg-white"
                                value={formData.role}
                                onChange={(e) => setFormData({...formData, role: e.target.value})}
                                disabled={loading || success}
                            >
                                {Object.entries(roleLabels).map(([value, label]) => (
                                    <option key={value} value={value}>
                                        {label}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="pt-4 flex gap-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 py-3 bg-slate-100 text-slate-700 rounded-lg font-medium hover:bg-slate-200 transition-colors disabled:opacity-50"
                            disabled={loading}
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            disabled={loading || success}
                            className="flex-1 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                        >
                            {loading ? (
                                <>
                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                    Criando...
                                </>
                            ) : success ? (
                                <>
                                    <CheckCircle size={18} />
                                    Usuário Criado!
                                </>
                            ) : (
                                <>
                                    <Plus size={18} />
                                    Criar Usuário
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

// Componente de Modal para Editar Usuário
const EditUserModal = ({ user, onClose, onSuccess }) => {
    const { updateUserData } = useAuth();
    const [formData, setFormData] = useState({
        displayName: user.displayName || '',
        role: user.role || 'client',
        newPassword: '',
        confirmNewPassword: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleSave = async () => {
        setLoading(true);
        setError('');
        setSuccess('');
        
        // Validação de senha se for preenchida
        if (formData.newPassword || formData.confirmNewPassword) {
            if (formData.newPassword !== formData.confirmNewPassword) {
                setError('As novas senhas não conferem');
                setLoading(false);
                return;
            }
            
            if (formData.newPassword.length < 6) {
                setError('A nova senha deve ter pelo menos 6 caracteres');
                setLoading(false);
                return;
            }
        }
        
        try {
            // Preparar dados para atualização
            const updateData = {
                displayName: formData.displayName,
                role: formData.role,
                updatedAt: new Date().toISOString()
            };
            
            // Se houver nova senha, adicionar ao updateData
            if (formData.newPassword) {
                // NOTA: No Firebase, não podemos atualizar a senha diretamente no Firestore
                // A senha é gerenciada pelo Authentication. Para atualizar a senha de outro usuário,
                // precisaríamos do Admin SDK no backend.
                // Vamos apenas atualizar os dados no Firestore por enquanto
                console.log('Nova senha definida (necessitaria Admin SDK para atualizar no Authentication)');
            }
            
            // Atualizar dados no Firestore
            await updateUserData(user.id, updateData);
            
            setSuccess('Dados do usuário atualizados com sucesso!');
            
            // Fechar o modal após 2 segundos
            setTimeout(() => {
                onSuccess?.();
                onClose();
            }, 2000);
        } catch (error) {
            console.error('Erro ao atualizar usuário:', error);
            setError('Erro ao atualizar usuário: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-5">
            <div 
                className="fixed inset-0 bg-black/70 backdrop-blur-md"
                onClick={onClose}
            />
            
            <div className="relative z-50 bg-white rounded-2xl w-full max-w-md shadow-2xl transform transition-all duration-300 scale-100">
                <div className="p-6 border-b flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                            <Pencil size={24} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900">Editar Usuário</h3>
                            <p className="text-slate-500 text-sm">Atualize os dados do usuário</p>
                        </div>
                    </div>
                    <button 
                        onClick={onClose} 
                        className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                        disabled={loading}
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className="p-6 space-y-4">
                    {error && (
                        <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm border border-red-200">
                            <div className="flex items-center gap-2 mb-1">
                                <AlertCircle size={16} />
                                <span className="font-bold">Erro</span>
                            </div>
                            {error}
                        </div>
                    )}
                    
                    {success && (
                        <div className="bg-green-50 text-green-600 p-3 rounded-lg text-sm border border-green-200">
                            <div className="flex items-center gap-2 mb-1">
                                <CheckCircle size={16} />
                                <span className="font-bold">Sucesso!</span>
                            </div>
                            {success}
                        </div>
                    )}

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Nome Completo</label>
                        <div className="relative">
                            <User className="absolute left-3 top-3 text-slate-400" size={18} />
                            <input
                                type="text"
                                className="w-full pl-10 pr-3 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                                value={formData.displayName}
                                onChange={(e) => setFormData({...formData, displayName: e.target.value})}
                                placeholder="João Silva"
                                disabled={loading}
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-3 text-slate-400" size={18} />
                            <input
                                type="email"
                                className="w-full pl-10 pr-3 py-2.5 border border-slate-300 rounded-lg bg-slate-50 cursor-not-allowed"
                                value={user.email}
                                disabled
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Cargo</label>
                        <div className="relative">
                            <Shield className="absolute left-3 top-3 text-slate-400" size={18} />
                            <select
                                className="w-full pl-10 pr-3 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                                value={formData.role}
                                onChange={(e) => setFormData({...formData, role: e.target.value})}
                                disabled={loading}
                            >
                                {Object.entries(roleLabels).map(([value, label]) => (
                                    <option key={value} value={value}>
                                        {label}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="pt-4 flex gap-3">
                        <button
                            onClick={onClose}
                            disabled={loading}
                            className="flex-1 py-2.5 bg-slate-100 text-slate-700 rounded-lg font-medium hover:bg-slate-200 transition-colors"
                        >
                            Cancelar
                        </button>
                        <button
                            onClick={handleSave}
                            disabled={loading}
                            className="flex-1 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                        >
                            {loading ? (
                                <>
                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                    Salvando...
                                </>
                            ) : (
                                <>
                                    <Save size={16} />
                                    Salvar Alterações
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Componente de Modal para Deletar Usuário
const DeleteUserModal = ({ user, onClose, onSuccess }) => {
    const { deleteUserAccount } = useAuth();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleDelete = async () => {
        setLoading(true);
        setError('');
        
        try {
            await deleteUserAccount(user.id);
            setSuccess('Usuário deletado com sucesso!');
            
            // Fechar o modal após 2 segundos
            setTimeout(() => {
                onSuccess?.();
                onClose();
            }, 2000);
        } catch (error) {
            console.error('Erro ao deletar usuário:', error);
            setError('Erro ao deletar usuário: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-5">
            <div 
                className="fixed inset-0 bg-black/70 backdrop-blur-md"
                onClick={onClose}
            />
            
            <div className="relative z-50 bg-white rounded-2xl w-full max-w-md shadow-2xl">
                <div className="p-6 border-b">
                    <div className="flex items-center gap-3">
                        <div className="bg-red-100 p-2 rounded-lg text-red-600">
                            <Trash2 size={24} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900">Deletar Usuário</h3>
                            <p className="text-slate-500 text-sm">Esta ação não pode ser desfeita</p>
                        </div>
                    </div>
                </div>

                <div className="p-6 space-y-4">
                    {error && (
                        <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm border border-red-200">
                            <div className="flex items-center gap-2 mb-1">
                                <AlertCircle size={16} />
                                <span className="font-bold">Erro</span>
                            </div>
                            {error}
                        </div>
                    )}
                    
                    {success && (
                        <div className="bg-green-50 text-green-600 p-3 rounded-lg text-sm border border-green-200">
                            <div className="flex items-center gap-2 mb-1">
                                <CheckCircle size={16} />
                                <span className="font-bold">Sucesso!</span>
                            </div>
                            {success}
                        </div>
                    )}

                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <p className="text-red-800 font-bold mb-2">⚠️ Atenção!</p>
                        <p className="text-red-700 text-sm">
                            Você está prestes a deletar o usuário <span className="font-bold">{user.displayName}</span> ({user.email}).
                            Esta ação removerá permanentemente o usuário do sistema.
                        </p>
                        <p className="text-red-700 text-sm mt-2">
                            <span className="font-bold">Nota:</span> A conta do Firebase Authentication não será deletada automaticamente.
                            O usuário ainda poderá fazer login, mas não terá acesso ao sistema.
                        </p>
                    </div>

                    <div className="pt-4 flex gap-3">
                        <button
                            onClick={onClose}
                            disabled={loading}
                            className="flex-1 py-2.5 bg-slate-100 text-slate-700 rounded-lg font-medium hover:bg-slate-200 transition-colors"
                        >
                            Cancelar
                        </button>
                        <button
                            onClick={handleDelete}
                            disabled={loading || success}
                            className="flex-1 py-2.5 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
                        >
                            {loading ? (
                                <>
                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                    Deletando...
                                </>
                            ) : success ? (
                                <>
                                    <CheckCircle size={16} />
                                    Deletado!
                                </>
                            ) : (
                                <>
                                    <Trash2 size={16} />
                                    Deletar Usuário
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function UserManagement() {
    const { userData, hasPermission, getAllUsers } = useAuth();
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [showPermissions, setShowPermissions] = useState({});
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [refreshTrigger, setRefreshTrigger] = useState(0);

    useEffect(() => {
        if (hasPermission('canManageUsers')) {
            loadUsers();
        }
    }, [hasPermission, refreshTrigger]);

    const loadUsers = async () => {
        setLoading(true);
        setError(null);
        try {
            // Usar a função getAllUsers do AuthContext
            const usersList = await getAllUsers();
            setUsers(usersList);
        } catch (error) {
            console.error("Erro ao carregar usuários:", error);
            setError("Falha ao carregar a lista de usuários. Verifique a conexão e tente novamente.");
        } finally {
            setLoading(false);
        }
    };

    const handleEditUser = (user) => {
        setSelectedUser(user);
        setShowEditModal(true);
    };

    const handleDeleteUser = (user) => {
        setSelectedUser(user);
        setShowDeleteModal(true);
    };

    const togglePermissions = (userId) => {
        setShowPermissions(prev => ({
            ...prev,
            [userId]: !prev[userId]
        }));
    };

    const filteredUsers = users.filter(u =>
        u.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        u.displayName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        u.role?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (!hasPermission('canManageUsers')) {
        return (
            <div className="p-8 text-center">
                <AlertCircle className="mx-auto text-amber-500 mb-4" size={48} />
                <h3 className="text-xl font-bold text-slate-800">Acesso Restrito</h3>
                <p className="text-slate-600 mt-2">Você não tem permissão para gerenciar usuários.</p>
            </div>
        );
    }

    return (
        <div className="p-6 space-y-6 relative">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-3xl font-black text-slate-900">Gerenciamento de Usuários</h2>
                    <p className="text-slate-500">Controle de cargos e permissões do sistema</p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <Search className="absolute left-4 top-3.5 text-slate-400" size={18} />
                        <input
                            type="text"
                            placeholder="Buscar usuários..."
                            className="pl-11 pr-4 py-3 rounded-xl border border-slate-200 w-64 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <button 
                        onClick={() => setRefreshTrigger(prev => prev + 1)}
                        className="bg-slate-200 text-slate-700 px-4 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-slate-300 transition-colors"
                    >
                        <RefreshCw size={18} />
                        Atualizar
                    </button>
                    <button 
                        onClick={() => setShowCreateModal(true)}
                        className="bg-green-600 text-white px-4 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-green-700 transition-colors"
                    >
                        <Plus size={18} />
                        Novo Usuário
                    </button>
                </div>
            </div>

            {error && (
                <div className="bg-red-50 text-red-600 p-4 rounded-xl mb-4 border border-red-200">
                    <div className="flex items-center gap-2 mb-2">
                        <AlertCircle size={20} />
                        <span className="font-bold">Erro</span>
                    </div>
                    {error}
                    <button 
                        onClick={loadUsers} 
                        className="mt-2 text-sm underline font-bold"
                    >
                        Tentar novamente
                    </button>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                    <div className="text-sm font-bold text-slate-400 uppercase mb-1">Total</div>
                    <div className="text-2xl font-black text-slate-900">{users.length}</div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                    <div className="text-sm font-bold text-slate-400 uppercase mb-1">Administradores</div>
                    <div className="text-2xl font-black text-red-600">
                        {users.filter(u => u.role === 'admin').length}
                    </div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                    <div className="text-sm font-bold text-slate-400 uppercase mb-1">Clientes</div>
                    <div className="text-2xl font-black text-purple-600">
                        {users.filter(u => u.role === 'client').length}
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-slate-50 border-b">
                            <tr>
                                <th className="text-left p-4 text-sm font-bold text-slate-400 uppercase">Usuário</th>
                                <th className="text-left p-4 text-sm font-bold text-slate-400 uppercase">Cargo</th>
                                <th className="text-left p-4 text-sm font-bold text-slate-400 uppercase">Permissões</th>
                                <th className="text-left p-4 text-sm font-bold text-slate-400 uppercase">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <tr><td colSpan="4" className="p-8 text-center"><div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-blue-600 border-t-transparent"></div></td></tr>
                            ) : filteredUsers.length === 0 ? (
                                <tr><td colSpan="4" className="p-8 text-center text-slate-400">Nenhum usuário encontrado</td></tr>
                            ) : (
                                filteredUsers.map(userItem => (
                                    <React.Fragment key={userItem.id}>
                                        <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                                            <td className="p-4">
                                                <div className="font-bold text-slate-800">{userItem.displayName}</div>
                                                <div className="text-sm text-slate-500">{userItem.email}</div>
                                            </td>
                                            <td className="p-4">
                                                <span className={`px-3 py-1 rounded-full text-xs font-bold ${roleColors[userItem.role] || 'bg-gray-100 text-gray-800'}`}>
                                                    {roleLabels[userItem.role] || userItem.role}
                                                </span>
                                            </td>
                                            <td className="p-4">
                                                <button
                                                    onClick={() => togglePermissions(userItem.id)}
                                                    className="text-blue-600 hover:text-blue-800 text-sm font-bold flex items-center gap-1 transition-colors"
                                                >
                                                    {showPermissions[userItem.id] ? 'Ocultar' : 'Ver'} Permissões
                                                    {showPermissions[userItem.id] ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                                                </button>
                                            </td>
                                            <td className="p-4">
                                                <div className="flex gap-2">
                                                    <button
                                                        onClick={() => handleEditUser(userItem)}
                                                        className="bg-blue-600 text-white px-3 py-1.5 rounded-lg text-sm font-bold flex items-center gap-1 hover:bg-blue-700 transition-colors"
                                                    >
                                                        <Edit size={14} /> 
                                                    </button>
                                                    <button
                                                        onClick={() => handleDeleteUser(userItem)}
                                                        className="bg-red-600 text-white px-3 py-1.5 rounded-lg text-sm font-bold flex items-center gap-1 hover:bg-red-700 transition-colors"
                                                        disabled={userItem.id === userData?.uid} // Não pode deletar a si mesmo
                                                    >
                                                        <Trash2 size={14} /> 
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                        {showPermissions[userItem.id] && (
                                            <tr className="bg-slate-50">
                                                <td colSpan="4" className="p-4">
                                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                                        {userItem.permissions && Object.entries(userItem.permissions).map(([key, value]) => (
                                                            <div key={key} className="flex items-center gap-2">
                                                                {value ? (
                                                                    <CheckCircle size={16} className="text-green-500" />
                                                                ) : (
                                                                    <XCircle size={16} className="text-red-300" />
                                                                )}
                                                                <span className="text-sm text-slate-700 capitalize">
                                                                    {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                                                                </span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </td>
                                            </tr>
                                        )}
                                    </React.Fragment>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
                    <Shield size={20} /> Legenda de Cargos
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    {Object.entries(roleLabels).map(([role, label]) => (
                        <div key={role} className="bg-white p-4 rounded-xl border">
                            <div className={`px-3 py-1 rounded-full text-xs font-bold inline-block mb-2 ${roleColors[role]}`}>
                                {label}
                            </div>
                            <ul className="text-sm text-slate-600 space-y-1">
                                {role === 'admin' && <li>• Acesso total ao sistema</li>}
                                {role === 'client' && <li>• Dados próprios apenas</li>}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal de Criação de Usuário */}
            {showCreateModal && (
                <CreateUserModal 
                    onClose={() => setShowCreateModal(false)} 
                    onSuccess={() => {
                        loadUsers();
                        setRefreshTrigger(prev => prev + 1);
                    }}
                />
            )}

            {/* Modal de Edição de Usuário */}
            {showEditModal && selectedUser && (
                <EditUserModal
                    user={selectedUser}
                    onClose={() => {
                        setShowEditModal(false);
                        setSelectedUser(null);
                    }}
                    onSuccess={() => {
                        loadUsers();
                        setRefreshTrigger(prev => prev + 1);
                    }}
                />
            )}

            {/* Modal de Deletar Usuário */}
            {showDeleteModal && selectedUser && (
                <DeleteUserModal
                    user={selectedUser}
                    onClose={() => {
                        setShowDeleteModal(false);
                        setSelectedUser(null);
                    }}
                    onSuccess={() => {
                        loadUsers();
                        setRefreshTrigger(prev => prev + 1);
                    }}
                />
            )}
        </div>
    );
}