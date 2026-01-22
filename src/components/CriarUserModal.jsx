// components/CreateUserModal.jsx
import React, { useState } from 'react';
import { useAuth } from '../auth/AuthContext';
import { X, UserPlus, Mail, Lock, User, Shield } from 'lucide-react';

const roleOptions = [
    { value: 'admin', label: 'Administrador' },
    { value: 'client', label: 'Cliente' }
];

export default function CreateUserModal({ onClose, onSuccess }) {
    const { signup } = useAuth();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        displayName: '',
        role: 'client'
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // No componente CreateUserModal (dentro do UserManagement.jsx)
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

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
            // Usar a função signup do AuthContext
            await signup(
                formData.email,
                formData.password,
                formData.displayName,
                formData.role
            );

            // Mostrar mensagem de sucesso
            alert('✅ Usuário criado com sucesso! O usuário foi criado no Authentication e no Firestore.');

            // Recarregar a lista de usuários
            onSuccess?.();

            // Fechar modal
            onClose();

        } catch (error) {
            console.error('Erro ao criar usuário:', error);
            // Traduzir erros do Firebase
            switch (error.code) {
                case 'auth/email-already-in-use':
                    setError('Este email já está em uso por outra conta.');
                    break;
                case 'auth/invalid-email':
                    setError('Email inválido.');
                    break;
                case 'auth/operation-not-allowed':
                    setError('Operação não permitida. Contate o administrador.');
                    break;
                case 'auth/weak-password':
                    setError('A senha é muito fraca. Use pelo menos 6 caracteres.');
                    break;
                default:
                    setError('Erro ao criar usuário: ' + error.message);
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl">
                <div className="p-6 border-b flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="bg-green-100 p-2 rounded-lg text-green-600">
                            <UserPlus size={24} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900">Criar Novo Usuário</h3>
                            <p className="text-slate-500 text-sm">Adicione um novo usuário ao sistema</p>
                        </div>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-lg">
                        <X size={20} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    {error && (
                        <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm">
                            {error}
                        </div>
                    )}

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Nome Completo</label>
                        <div className="relative">
                            <User className="absolute left-3 top-3 text-slate-400" size={18} />
                            <input
                                type="text"
                                required
                                className="w-full pl-10 pr-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none"
                                value={formData.displayName}
                                onChange={(e) => setFormData({ ...formData, displayName: e.target.value })}
                                placeholder="João Silva"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-3 text-slate-400" size={18} />
                            <input
                                type="email"
                                required
                                className="w-full pl-10 pr-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                placeholder="usuario@exemplo.com"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Senha</label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-3 text-slate-400" size={18} />
                                <input
                                    type="password"
                                    required
                                    className="w-full pl-10 pr-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none"
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Confirmar Senha</label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-3 text-slate-400" size={18} />
                                <input
                                    type="password"
                                    required
                                    className="w-full pl-10 pr-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none"
                                    value={formData.confirmPassword}
                                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Cargo</label>
                        <div className="relative">
                            <Shield className="absolute left-3 top-3 text-slate-400" size={18} />
                            <select
                                className="w-full pl-10 pr-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none"
                                value={formData.role}
                                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                            >
                                {roleOptions.map(option => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="pt-4 flex gap-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 py-2 bg-slate-100 text-slate-700 rounded-lg font-medium hover:bg-slate-200 transition-colors"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            disabled={loading}
                            className="flex-1 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                        >
                            {loading ? (
                                <>
                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                    Criando...
                                </>
                            ) : (
                                <>
                                    <UserPlus size={18} />
                                    Criar Usuário
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}