import React, { useState, useEffect, useMemo } from 'react';
import {
    Plus, Search, Edit2, Trash2, Save, X, FileSpreadsheet,
    AlertCircle, Clock, Truck, Package, Building2, User,
    MapPin, Loader2, ExternalLink, CalendarCheck,
    Wrench, RefreshCw, Printer, Mail, Globe, Calendar,
    DollarSign, ListPlus, ChevronRight, LayoutDashboard,
    Boxes, Users, Info, Menu, ShieldAlert, PieChart,
    BarChart3, TrendingUp, Wallet, CheckCircle2, Calculator,
    ChevronDown, ChevronUp, Filter, MousePointerClick,
    ArrowUpRight, ArrowDownRight, Percent, FileSignature,
    CheckSquare, CalendarDays, Receipt, Eye, EyeOff, Shield, LogOut
} from 'lucide-react';
import {
    collection, addDoc, updateDoc, deleteDoc,
    doc, onSnapshot, setDoc
} from 'firebase/firestore';
import { auth, db } from "./firebase/firebase";
import { useAuth } from "./auth/AuthContext";
import UserManagement from './components/UserManagement';
import Login from './components/Login';

const finalAppId = 'alfa-tecnologia-hospitalar-prod';

const MESES = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

// Componente de Gráfico Donut Simples
const SimpleDonutChart = ({ data, colors, onClick }) => {
    const total = data.reduce((acc, item) => acc + item.value, 0);
    let accumulatedAngle = 0;

    if (total === 0) return <div className="text-gray-400 text-xs text-center py-10">Sem dados</div>;

    return (
        <div className="relative w-48 h-48 mx-auto group cursor-pointer">
            <svg viewBox="0 0 100 100" className="transform -rotate-90 w-full h-full">
                {data.map((item, index) => {
                    const angle = (item.value / total) * 360;
                    const largeArc = angle > 180 ? 1 : 0;
                    const x1 = 50 + 40 * Math.cos((accumulatedAngle * Math.PI) / 180);
                    const y1 = 50 + 40 * Math.sin((accumulatedAngle * Math.PI) / 180);
                    const x2 = 50 + 40 * Math.cos(((accumulatedAngle + angle) * Math.PI) / 180);
                    const y2 = 50 + 40 * Math.sin(((accumulatedAngle + angle) * Math.PI) / 180);

                    const pathData = total === item.value
                        ? `M 50 10 a 40 40 0 1 1 0 80 a 40 40 0 1 1 0 -80` // Círculo completo
                        : `M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArc} 1 ${x2} ${y2} Z`;

                    accumulatedAngle += angle;

                    return (
                        <path
                            key={index}
                            d={pathData}
                            fill={colors[index % colors.length]}
                            stroke="white"
                            strokeWidth="2"
                            className="hover:opacity-80 transition-opacity"
                            onClick={(e) => { e.stopPropagation(); onClick(item.label); }}
                        />
                    );
                })}
                <circle cx="50" cy="50" r="25" fill="white" className="pointer-events-none" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center flex-col pointer-events-none">
                <span className="text-3xl font-black text-slate-800">{total}</span>
                <span className="text-[10px] uppercase font-bold text-slate-400">Total</span>
            </div>
            <div className="absolute -bottom-6 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-opacity text-[10px] text-blue-500 font-bold bg-white/90 py-1 rounded-full pointer-events-none">
                Clique para filtrar
            </div>
        </div>
    );
};

const SimpleBarChart = ({ data, maxVal, colorClass, onClick, showValues = true }) => (
    <div className="space-y-3">
        {data.map((item, i) => (
            <div
                key={i}
                className="space-y-1 cursor-pointer group hover:bg-slate-50 p-2 rounded-xl transition-colors"
                onClick={() => onClick && onClick(item.label)}
            >
                <div className="flex justify-between text-xs font-bold text-slate-600 group-hover:text-blue-600 transition-colors">
                    <span className="truncate pr-2">{item.label}</span>
                    <span className="whitespace-nowrap">
                        {showValues ? (item.valueFormatted || item.value) : '•••••'}
                    </span>
                </div>
                <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div
                        className={`h-full rounded-full ${colorClass} group-hover:brightness-90 transition-all`}
                        style={{ width: `${maxVal > 0 ? (item.value / maxVal) * 100 : 0}%` }}
                    />
                </div>
            </div>
        ))}
    </div>
);

// Componente Toast Notification
const ToastNotification = ({ message, type = 'error', onClose }) => {
    const config = {
        error: {
            bg: 'bg-red-500',
            icon: <AlertCircle size={20} />,
            title: 'Atenção!',
            border: 'border-l-4 border-red-600'
        },
        success: {
            bg: 'bg-green-500',
            icon: <CheckCircle2 size={20} />,
            title: 'Sucesso!',
            border: 'border-l-4 border-green-600'
        },
        info: {
            bg: 'bg-blue-500',
            icon: <Info size={20} />,
            title: 'Informação',
            border: 'border-l-4 border-blue-600'
        }
    };

    const { bg, icon, title, border } = config[type];

    return (
        <div className="fixed top-6 right-6 z-[100] animate-in slide-in-from-right-8 fade-in duration-300">
            <div className={`${bg} ${border} text-white px-6 py-4 rounded-r-2xl shadow-2xl flex items-start gap-3 min-w-[320px] max-w-[400px]`}>
                <div className="flex-shrink-0 mt-0.5">{icon}</div>
                <div className="flex-1">
                    <div className="font-bold text-sm mb-1">{title}</div>
                    <div className="text-sm opacity-90 whitespace-pre-line">{message}</div>
                </div>
                <button
                    onClick={onClose}
                    className="ml-2 opacity-70 hover:opacity-100 transition-opacity flex-shrink-0"
                >
                    <X size={16} />
                </button>
            </div>
        </div>
    );
};

// Função Auxiliar para Parse de Moeda Global
const parseCurrency = (value) => {
    if (!value) return 0;
    if (typeof value === 'number') return value;
    return parseFloat(value.toString().replace(/\./g, '').replace(',', '.')) || 0;
};

const NavItem = ({ icon, label, active, onClick, isSidebarOpen }) => (
    <button onClick={onClick} className={`w-full flex items-center gap-4 p-3 rounded-xl transition-colors ${active ? 'bg-blue-600 text-white' : 'text-slate-400 hover:bg-slate-800'}`}>
        {icon}
        {isSidebarOpen && <span className="text-sm font-bold tracking-tight">{label}</span>}
    </button>
);

export default function MainApp() {
    // === AUTENTICAÇÃO ===
    const { user, userData, loading: authLoading, hasPermission, logout } = useAuth();

    // Estados
    const [currentPage, setCurrentPage] = useState('os');
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [showValues, setShowValues] = useState(true);
    const [orders, setOrders] = useState([]);
    const [contracts, setContracts] = useState([]);
    const [clients, setClients] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    // Estados dos Modais
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isFinancialOpen, setIsFinancialOpen] = useState(false);
    const [isContractModalOpen, setIsContractModalOpen] = useState(false);
    const [isNewContractMode, setIsNewContractMode] = useState(false);

    const [editingOrder, setEditingOrder] = useState(null);
    const [orderToDelete, setOrderToDelete] = useState(null);
    const [isSaving, setIsSaving] = useState(false);
    const [selectedOrders, setSelectedOrders] = useState([]);

    // Estados temporários para adicionar itens à lista de soluções
    const [tempSolution, setTempSolution] = useState('');
    const [tempCost, setTempCost] = useState('');

    // --- ESTADO DO FORMULÁRIO OS ---
    const [formData, setFormData] = useState({
        client: '', cnpj: '', contactPerson: '', address: '', email: '',
        billingType: 'Avulso', maintenanceVisit: '',
        item: '', manufacturer: '', model: '', serial: '',
        defect: '',
        solutionType: 'Manual',
        solution: '',
        solutionsList: [],
        notRepairableDetail: '',
        costThirdPartyName: '', costThirdPartyShipping: '', costClientShipping: '', costParts: '',
        chargedAmount: '', paymentCondition: 'À vista', installments: '',
        status: 'Recebido', trackingCode: '', sentToThirdParty: 'Não',
        thirdPartyInfo: '', thirdPartyTracking: '', thirdPartyDate: '',
        osNumber: ''
    });

    // --- ESTADO DO FORMULÁRIO DE CONTRATO ---
    const [contractForm, setContractForm] = useState({
        clientName: '',
        cnpj: '', address: '', contactPerson: '', email: '',
        startDate: '', endDate: '',
        monthlyValue: '', annualValue: '',
        coveredItems: {
            videoSurgeryInstruments: false,
            openInstruments: false,
            videoSurgeryEquipment: false,
            endoscopes: false
        },
        observations: ''
    });

    // === ESTADOS DE VALIDAÇÃO ===
    const [fieldErrors, setFieldErrors] = useState({
        client: false,
        item: false,
        defect: false,
        solution: false,
        notRepairableDetail: false,
        solutionsList: false
    });

    // === ESTADO DE NOTIFICAÇÃO ===
    const [notification, setNotification] = useState({
        show: false,
        message: '',
        type: 'error',
    });

    const statusOptions = [
        "Recebido", "Em inspeção", "Em orçamento", "Aguardando aprovação do orçamento",
        "Em manutenção", "Em rota de entrega", "Finalizado"
    ];

    const billingOptions = ["Avulso", "Cortesia (visita sem custo)", "Contrato de manutenção"];
    const currentMonthName = MESES[new Date().getMonth()];

    // === FUNÇÕES UTILITÁRIAS ===

    // Função para mostrar notificação
    const showNotification = (message, type = 'error') => {
        setNotification({
            show: true,
            message,
            type
        });

        setTimeout(() => {
            setNotification(prev => ({ ...prev, show: false }));
        }, 5000);
    };

    // Helper para formatar moeda com máscara
    const formatMoney = (val) => {
        if (!showValues) return "R$ •••••";
        return val.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    };

    const calculateFinancials = () => {
        const cost3rd = parseCurrency(formData.costThirdPartyShipping);
        const costParts = parseCurrency(formData.costParts);
        const costClient = parseCurrency(formData.costClientShipping);
        const charged = parseCurrency(formData.chargedAmount);

        const solutionsTotal = formData.solutionsList.reduce((acc, curr) => acc + parseCurrency(curr.cost), 0);
        const totalCost = cost3rd + costParts + costClient;
        const suggestedValue = totalCost * 1.6;
        const profit = charged - totalCost;

        return { totalCost, profit, suggestedValue, solutionsTotal };
    };

    const { totalCost, profit, suggestedValue, solutionsTotal } = calculateFinancials();

    // Função de validação de campos
    const validateForm = () => {
        const errors = [];
        const newFieldErrors = { ...fieldErrors };

        // Reset dos erros visuais
        Object.keys(newFieldErrors).forEach(key => newFieldErrors[key] = false);

        if (!formData.client.trim()) {
            errors.push("• Cliente é obrigatório");
            newFieldErrors.client = true;
        }

        if (!formData.item.trim()) {
            errors.push("• Item/Equipamento é obrigatório");
            newFieldErrors.item = true;
        }

        if (!formData.defect.trim()) {
            errors.push("• Descrição do defeito é obrigatória");
            newFieldErrors.defect = true;
        }

        if (formData.solutionType === "Manual" && !formData.solution.trim()) {
            errors.push("• Descrição da solução é obrigatória no modo manual");
            newFieldErrors.solution = true;
        }

        if (formData.solutionType === "Não passível de conserto" && !formData.notRepairableDetail) {
            errors.push("• Selecione uma recomendação para equipamento não reparável");
            newFieldErrors.notRepairableDetail = true;
        }

        if (formData.solutionType === "Preenchimento manual, com custo" && formData.solutionsList.length === 0) {
            errors.push("• Adicione pelo menos um item na lista de soluções com custo");
            newFieldErrors.solutionsList = true;
        }

        setFieldErrors(newFieldErrors);

        if (errors.length > 0) {
            showNotification("Preencha os campos obrigatórios:\n" + errors.join("\n"), 'error');
            return true; // Tem erros
        }

        return false; // Sem erros
    };

    // Função para handleBlur (validação em tempo real)
    const handleBlur = (field) => {
        let hasError = false;

        switch (field) {
            case 'client':
                hasError = !formData.client.trim();
                break;
            case 'item':
                hasError = !formData.item.trim();
                break;
            case 'defect':
                hasError = !formData.defect.trim();
                break;
            case 'solution':
                hasError = formData.solutionType === "Manual" && !formData.solution.trim();
                break;
            case 'notRepairableDetail':
                hasError = formData.solutionType === "Não passível de conserto" && !formData.notRepairableDetail;
                break;
            case 'solutionsList':
                hasError = formData.solutionType === "Preenchimento manual, com custo" && formData.solutionsList.length === 0;
                break;
        }

        setFieldErrors(prev => ({ ...prev, [field]: hasError }));
    };

    // --- CÁLCULO FINANCEIRO GLOBAL ---
    const globalFinancials = useMemo(() => {
        let totalRevenue = 0;
        let totalCosts = 0;
        let totalProfit = 0;
        let revenueByClient = {};

        orders.forEach(o => {
            const revenue = parseCurrency(o.chargedAmount);
            const costs = parseCurrency(o.costThirdPartyShipping) + parseCurrency(o.costParts) + parseCurrency(o.costClientShipping);
            const profit = revenue - costs;

            totalRevenue += revenue;
            totalCosts += costs;
            totalProfit += profit;

            if (revenue > 0) {
                revenueByClient[o.client] = (revenueByClient[o.client] || 0) + revenue;
            }
        });

        const margin = totalRevenue > 0 ? (totalProfit / totalRevenue) * 100 : 0;
        const topClients = Object.entries(revenueByClient)
            .map(([label, value]) => ({
                label,
                value,
                valueFormatted: `R$ ${value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
            }))
            .sort((a, b) => b.value - a.value)
            .slice(0, 5);

        return { totalRevenue, totalCosts, totalProfit, margin, topClients };
    }, [orders]);

    // --- LISTA DE CONTRATOS COMBINADA (OS + SALVOS) ---
    const combinedContracts = useMemo(() => {
        const osClients = new Set(orders.filter(o => o.billingType === "Contrato de manutenção").map(o => o.client));
        const savedClients = new Set(contracts.map(c => c.clientName));
        const allClients = [...new Set([...osClients, ...savedClients])];

        return allClients.map(clientName => {
            const savedData = contracts.find(c => c.clientName === clientName);
            const latestOS = orders.find(o => o.client === clientName);

            return {
                clientName,
                cnpj: savedData?.cnpj || latestOS?.cnpj || '',
                address: savedData?.address || latestOS?.address || '',
                contactPerson: savedData?.contactPerson || latestOS?.contactPerson || '',
                email: savedData?.email || latestOS?.email || '',
                startDate: savedData?.startDate || '',
                endDate: savedData?.endDate || '',
                monthlyValue: savedData?.monthlyValue || '',
                annualValue: savedData?.annualValue || '',
                coveredItems: savedData?.coveredItems || {
                    videoSurgeryInstruments: false,
                    openInstruments: false,
                    videoSurgeryEquipment: false,
                    endoscopes: false
                },
                observations: savedData?.observations || '',
                isConfigured: !!savedData
            };
        }).sort((a, b) => a.clientName.localeCompare(b.clientName));
    }, [orders, contracts]);

    // === Verificar permissões de página ===
    const canAccessPage = () => {
        if (!userData) return false;

        // ADMIN tem acesso total a tudo
        if (userData.role === 'admin') {
            return true;
        }

        // CLIENTE tem acesso limitado apenas às suas próprias OS
        if (userData.role === 'client') {
            const clientPages = ['os', 'status', 'about'];
            return clientPages.includes(currentPage);
        }

        // Para outros papéis, verificar permissões específicas
        const pagePermissions = {
            'os': 'canViewOS',
            'status': 'canViewOS',
            'financial': 'canViewFinancial',
            'contracts': 'canViewContracts',
            'inventory': 'canViewOS',
            'clients': 'canViewAllClients',
            'users': 'canManageUsers',
            'about': true
        };

        const permission = pagePermissions[currentPage];
        return permission === true || hasPermission(permission);
    };

    // === EFFECTS ===
    useEffect(() => {
        if (!user || authLoading) return;

        const unsubOrders = onSnapshot(
            collection(db, 'artifacts', finalAppId, 'public', 'data', 'serviceOrders'),
            (snap) => {
                const list = snap.docs.map(d => ({ firestoreId: d.id, ...d.data() }));
                setOrders(list.sort((a, b) => b.osNumber?.localeCompare(a.osNumber)));
                setIsLoading(false);
            },
            (error) => {
                console.error("Erro ao buscar OS:", error);
                setIsLoading(false);
            }
        );

        const unsubContracts = onSnapshot(
            collection(db, 'artifacts', finalAppId, 'public', 'data', 'contracts'),
            (snap) => {
                setContracts(snap.docs.map(d => d.data()));
            },
            (error) => {
                console.error("Erro ao buscar contratos:", error);
            }
        );

        return () => {
            unsubOrders();
            unsubContracts();
        };
    }, [user, authLoading]);

    const dashboardData = useMemo(() => {
        const dataSource = selectedOrders.length > 0 ? orders.filter(o => selectedOrders.includes(o.firestoreId)) : orders;
        const statusCount = {};
        dataSource.forEach(o => { statusCount[o.status] = (statusCount[o.status] || 0) + 1 });
        const statusChartData = Object.keys(statusCount).map(k => ({ label: k, value: statusCount[k] }));
        const billingCount = {};
        dataSource.forEach(o => { billingCount[o.billingType] = (billingCount[o.billingType] || 0) + 1 });
        const billingChartData = Object.keys(billingCount).map(k => ({ label: k, value: billingCount[k] })).sort((a, b) => b.value - a.value);
        let totalInternalCosts = 0;
        let totalClientFreight = 0;
        dataSource.forEach(o => {
            totalInternalCosts += (parseCurrency(o.costThirdPartyShipping) + parseCurrency(o.costParts));
            totalClientFreight += parseCurrency(o.costClientShipping);
        });
        return { count: dataSource.length, statusChartData, billingChartData, totalInternalCosts, totalClientFreight, isFiltered: selectedOrders.length > 0 };
    }, [orders, selectedOrders]);

    // === FUNÇÕES PRINCIPAIS ===
    const generateNextOsNumber = (currentOrders) => {
        const year = new Date().getFullYear();
        const lastNum = currentOrders.filter(o => o.osNumber?.endsWith(`/${year}`)).length + 1;
        return `${String(lastNum).padStart(4, '0')}/${year}`;
    };

    const openModal = (order = null) => {
        setTempSolution('');
        setTempCost('');
        setIsFinancialOpen(false);

        // Reset erros ao abrir modal
        setFieldErrors({
            client: false,
            item: false,
            defect: false,
            solution: false,
            notRepairableDetail: false,
            solutionsList: false
        });

        if (order) {
            setEditingOrder(order);
            setFormData({ ...order, solutionsList: order.solutionsList || [] });
        } else {
            setEditingOrder(null);
            setFormData({
                client: '', cnpj: '', contactPerson: '', address: '', email: '',
                billingType: 'Avulso', maintenanceVisit: '', item: '', manufacturer: '', model: '', serial: '', defect: '', solutionType: 'Manual', solution: '', solutionsList: [], notRepairableDetail: '',
                costThirdPartyName: '', costThirdPartyShipping: '', costClientShipping: '', costParts: '',
                chargedAmount: '', paymentCondition: 'À vista', installments: '',
                status: 'Recebido', trackingCode: '', sentToThirdParty: 'Não',
                thirdPartyInfo: '', thirdPartyTracking: '', thirdPartyDate: '', osNumber: generateNextOsNumber(orders)
            });
        }
        setIsModalOpen(true);
    };

    const handleNewContract = () => {
        setContractForm({
            clientName: '', cnpj: '', address: '', contactPerson: '', email: '',
            startDate: '', endDate: '', monthlyValue: '', annualValue: '',
            coveredItems: { videoSurgeryInstruments: false, openInstruments: false, videoSurgeryEquipment: false, endoscopes: false },
            observations: ''
        });
        setIsNewContractMode(true);
        setIsContractModalOpen(true);
    };

    const openContractModal = (contract) => {
        setContractForm(contract);
        setIsNewContractMode(false);
        setIsContractModalOpen(true);
    };

    const handleSaveContract = async (e) => {
        e.preventDefault();
        if (!contractForm.clientName.trim()) {
            showNotification("Nome do cliente é obrigatório", 'error');
            return;
        }
        setIsSaving(true);
        try {
            const docId = contractForm.clientName.replace(/\s+/g, '_').toLowerCase();
            await setDoc(doc(db, 'artifacts', finalAppId, 'public', 'data', 'contracts', docId), contractForm);
            showNotification("Contrato salvo com sucesso!", 'success');
            setIsContractModalOpen(false);
        } catch (err) {
            console.error("Erro ao salvar contrato", err);
            showNotification("Erro ao salvar contrato: " + err.message, 'error');
        } finally {
            setIsSaving(false);
        }
    };

    const confirmDelete = (order) => {
        setOrderToDelete(order);
        setIsDeleteModalOpen(true);
    };

    const handleDelete = async () => {
        if (!orderToDelete) return;
        try {
            await deleteDoc(doc(db, 'artifacts', finalAppId, 'public', 'data', 'serviceOrders', orderToDelete.firestoreId));
            showNotification("OS excluída com sucesso!", 'success');
            setIsDeleteModalOpen(false);
            setOrderToDelete(null);
        } catch (err) {
            showNotification("Erro ao excluir: " + err.message, 'error');
        }
    };

    const addSolutionItem = () => {
        if (!tempSolution.trim()) {
            showNotification("Descrição do item/serviço é obrigatória", 'error');
            return;
        }
        setFormData(prev => ({
            ...prev,
            solutionsList: [...prev.solutionsList, {
                id: Date.now(),
                text: tempSolution,
                cost: tempCost || "0,00"
            }]
        }));
        setTempSolution('');
        setTempCost('');
    };

    const removeSolutionItem = (id) => {
        setFormData(prev => ({
            ...prev,
            solutionsList: prev.solutionsList.filter(item => item.id !== id)
        }));
    };

    const handleSubmit = async (e) => {
        if (e) e.preventDefault();

        // Validação
        const hasErrors = validateForm();
        if (hasErrors) {
            return;
        }

        setIsSaving(true);
        try {
            const { firestoreId, ...cleanData } = formData;
            if (editingOrder) {
                await updateDoc(doc(db, 'artifacts', finalAppId, 'public', 'data', 'serviceOrders', editingOrder.firestoreId), cleanData);
                showNotification("OS atualizada com sucesso!", 'success');
            } else {
                await addDoc(collection(db, 'artifacts', finalAppId, 'public', 'data', 'serviceOrders'), cleanData);
                showNotification("OS criada com sucesso!", 'success');
            }
            setIsModalOpen(false);
        } catch (err) {
            console.error(err);
            showNotification(`Erro ao salvar: ${err.message}`, 'error');
        } finally {
            setIsSaving(false);
        }
    };

    const handleSaveAndNewWithSameClient = async () => {
        // Validação
        const hasErrors = validateForm();
        if (hasErrors) {
            return;
        }

        setIsSaving(true);
        try {
            const { firestoreId, ...cleanData } = formData;
            if (editingOrder) {
                await updateDoc(doc(db, 'artifacts', finalAppId, 'public', 'data', 'serviceOrders', editingOrder.firestoreId), cleanData);
            } else {
                await addDoc(collection(db, 'artifacts', finalAppId, 'public', 'data', 'serviceOrders'), cleanData);
            }
            showNotification("OS salva e nova em branco criada!", 'success');
            setFormData({
                ...formData,
                osNumber: generateNextOsNumber([...orders, formData]),
                item: '',
                manufacturer: '',
                model: '',
                serial: '',
                defect: '',
                solutionType: 'Manual',
                solution: '',
                solutionsList: [],
                notRepairableDetail: '',
                costThirdPartyName: '',
                costThirdPartyShipping: '',
                costClientShipping: '',
                costParts: '',
                chargedAmount: '',
                paymentCondition: 'À vista',
                installments: '',
                status: 'Recebido',
                trackingCode: '',
                sentToThirdParty: 'Não',
                thirdPartyInfo: '',
                thirdPartyTracking: '',
                thirdPartyDate: ''
            });
            setEditingOrder(null);
        } catch (err) {
            console.error(err);
            showNotification(`Erro ao salvar: ${err.message}`, 'error');
        } finally {
            setIsSaving(false);
        }
    };

    const handleFilterByStatus = (status) => {
        setSelectedOrders(orders.filter(o => o.status === status).map(o => o.firestoreId));
    };

    const handleFilterByBilling = (type) => {
        setSelectedOrders(orders.filter(o => o.billingType === type).map(o => o.firestoreId));
    };

    const handleLogout = async () => {
        try {
            // Limpar tokens de restauração
            localStorage.removeItem('adminRestoreToken');
            localStorage.removeItem('adminEmail');

            // Fazer logout
            await logout();

            // Forçar atualização completa
            window.location.href = '/';
            setTimeout(() => {
                window.location.reload();
            }, 100);
        } catch (error) {
            console.error("Erro ao fazer logout:", error);
            window.location.reload();
        }
    };

    const handlePrint = (printType) => {
        const selectedData = orders.filter(o => selectedOrders.includes(o.firestoreId));
        if (selectedData.length === 0) return;
        const groups = {};
        selectedData.forEach(os => {
            const key = `${os.client}-${os.cnpj || 'no-cnpj'}-${os.billingType}-${os.maintenanceVisit || 'no-visit'}`;
            if (!groups[key]) {
                groups[key] = {
                    header: { client: os.client, cnpj: os.cnpj, contactPerson: os.contactPerson, email: os.email, address: os.address, billingType: os.billingType, maintenanceVisit: os.maintenanceVisit },
                    items: []
                };
            }
            groups[key].items.push(os);
        });

        const printWindow = window.open('', '_blank');
        const title = printType === 'internal' ? 'Relatório INTERNO - Alfa Tecnologia' : 'Relatório de Atendimento - Alfa Tecnologia';

        const content = `<html><head><title>${title}</title><style>
@media print{@page{margin:1cm}}body{font-family:'Segoe UI',sans-serif;color:#333;line-height:1.4;padding:0;margin:0}
.report-page{page-break-after:always;padding:20px;position:relative;min-height:27cm;border-bottom:1px solid #eee}
.header{display:flex;justify-content:space-between;align-items:center;border-bottom:2px solid #1a56db;padding-bottom:15px;margin-bottom:20px}
.logo-area{color:#1a56db}.logo-text{font-size:28px;font-weight:900;margin:0}
.logo-sub{font-size:10px;letter-spacing:2px;text-transform:uppercase;margin:0}
.report-info{text-align:right}.report-title{font-size:16px;font-weight:900;color:#1a56db;text-transform:uppercase}
.internal-badge{background:#b91c1c;color:white;padding:2px 6px;font-size:10px;border-radius:4px;font-weight:bold;margin-bottom:4px;display:inline-block}
.section{margin-bottom:25px}.section-title{background:#f8fafc;padding:6px 12px;font-size:11px;font-weight:900;text-transform:uppercase;border-left:5px solid #1a56db;margin-bottom:12px;color:#1e40af}
.client-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;font-size:12px;margin-bottom:20px}
.items-table{width:100%;border-collapse:collapse;margin-top:10px}
.items-table th{background:#f8fafc;text-align:left;padding:10px;font-size:10px;text-transform:uppercase;color:#64748b;border-bottom:2px solid #e2e8f0}
.items-table td{padding:12px 10px;font-size:11px;border-bottom:1px solid #f1f5f9;vertical-align:top}
.os-tag{font-weight:900;color:#1a56db;display:block;margin-bottom:4px}
.cost-list-table{width:100%;margin-top:8px;border:1px solid #f1f5f9;font-size:10px;border-radius:4px}
.cost-list-table th{background:#f8fafc;padding:4px 8px;font-size:9px}
.cost-list-table td{padding:4px 8px;border-bottom:1px solid #f8fafc}
.total-row{background:#f1f5f9;font-weight:bold}
.internal-costs{margin-top:8px;padding:8px;background:#fff1f2;border:1px dashed #fda4af;border-radius:4px;font-size:10px;color:#9f1239}
.signature-area{display:flex;justify-content:space-around;margin-top:80px}
.signature-box{border-top:1px solid #333;width:250px;text-align:center;padding-top:8px;font-size:11px;font-weight:600}</style></head><body>${Object.values(groups).map(group => `
        <div class="report-page">
            <div class="header">
                <div class="logo-area">
                    <h1 class="logo-text">ALFA</h1>
                    <p class="logo-sub">TECNOLOGIA HOSPITALAR</p>
                </div>
                <div class="report-info">
                    ${printType === 'internal' ? '<div class="internal-badge">USO INTERNO - CONFIDENCIAL</div>' : ''}
                    <div class="report-title">${printType === 'internal' ? 'Relatório Gerencial' : 'Relatório de Atendimento'}</div>
                    <div style="font-size:10px;">Data: ${new Date().toLocaleDateString()}</div>
                </div>
            </div>
            <div class="section">
                <div class="section-title">Dados do Cliente</div>
                <div class="client-grid">
                    <div><strong>Cliente:</strong> ${group.header.client}</div>
                    <div><strong>Atendimento:</strong> ${group.header.billingType} ${group.header.maintenanceVisit ? '- ' + group.header.maintenanceVisit : ''}</div>
                    <div style="grid-column:span 2;"><strong>Endereço:</strong> ${group.header.address || '---'}</div>
                </div>
            </div>
            <div class="section">
                <div class="section-title">Lista de Equipamentos</div>
                <table class="items-table">
                    <thead>
                        <tr>
                            <th width="15%">OS</th>
                            <th width="30%">Equipamento</th>
                            <th width="55%">Laudo Técnico</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${group.items.map(item => {
            const list = item.solutionsList || [];
            const total = list.reduce((acc, curr) => acc + parseFloat(curr.cost.replace('.', '').replace(',', '.') || 0), 0);
            const internalBlock = printType === 'internal' ?
                `<div class="internal-costs">
                                    <strong>CONTROLE FINANCEIRO:</strong><br/>
                                    Cobrado: <b>R$ ${item.chargedAmount || '0,00'}</b> (${item.paymentCondition} ${item.installments ? item.installments : ''})<br/>
                                    Custos Operacionais: Frete Terceiro R$ ${item.costThirdPartyShipping || '0,00'} | Peças R$ ${item.costParts || '0,00'} | Frete Cliente R$ ${item.costClientShipping || '0,00'}
                                </div>`
                : '';

            return `<tr>
                                <td>
                                    <span class="os-tag">${item.osNumber}</span>
                                    <small>${item.status}</small>
                                </td>
                                <td>
                                    <strong>${item.item}</strong><br>
                                    <div style="font-size:9px;color:#666;margin-bottom:2px;">${item.manufacturer || ''} ${item.model || ''}</div>
                                    <small>NS: ${item.serial || 'N/D'}</small>
                                </td>
                                <td>
                                    <div><strong>Defeito:</strong> ${item.defect || 'N/A'}</div>
                                    <div><strong>Solução:</strong> ${item.solutionType === "Não passível de conserto" ? `NÃO PASSÍVEL (${item.notRepairableDetail})` : (item.solutionType === "Preenchimento manual, com custo" ? 'Detalhamento abaixo:' : (item.solution || 'Em análise...'))}</div>
                                    ${item.solutionType === "Preenchimento manual, com custo" && list.length > 0 ?
                    `<table class="cost-list-table">
                                            <thead>
                                                <tr>
                                                    <th style="text-align:left">Item / Serviço</th>
                                                    <th style="text-align:right">Valor</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                ${list.map(s => `<tr><td>${s.text}</td><td style="text-align:right">R$ ${s.cost}</td></tr>`).join('')}
                                                <tr class="total-row">
                                                    <td>TOTAL</td>
                                                    <td style="text-align:right">R$ ${total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</td>
                                                </tr>
                                            </tbody>
                                        </table>`
                    : ''
                }
                                    ${internalBlock}
                                </td>
                            </tr>`;
        }).join('')}
                    </tbody>
                </table>
            </div>
            <div class="signature-area">
                <div class="signature-box">Técnico Responsável</div>
                <div class="signature-box">Cliente / Recebedor</div>
            </div>
        </div>`
        ).join('')
            }<script>window.onload=function(){window.print();window.close()}</script></body></html>`;

        printWindow.document.write(content);
        printWindow.document.close();
    };

    // === RENDERIZAÇÃO ===
    if (authLoading) {
        return (
            <div className="min-h-screen bg-slate-50 flex items-center justify-center">
                <div className="text-center">
                    <Loader2 className="animate-spin mx-auto text-blue-600 mb-4" size={40} />
                    <p className="text-slate-600 font-medium">Verificando autenticação...</p>
                </div>
            </div>
        );
    }

    if (!user) {
        return <Login />;
    }

    // Verificar permissão para a página atual
    if (!canAccessPage()) {
        return (
            <div className="min-h-screen bg-slate-50 flex items-center justify-center">
                <div className="text-center p-8">
                    <ShieldAlert className="mx-auto text-red-500 mb-6" size={60} />
                    <h2 className="text-2xl font-black text-slate-900 mb-2">Acesso Negado</h2>
                    <p className="text-slate-600 max-w-md mx-auto">
                        Você não tem permissão para acessar esta página.
                        Entre em contato com o administrador do sistema.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex min-h-screen bg-slate-50 font-sans overflow-hidden">
            {/* Sidebar */}
            <aside className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-slate-900 text-white transition-all duration-300 flex flex-col fixed h-full z-30 shadow-2xl`}>
                <div className="p-6 flex items-center justify-between border-b border-slate-800">
                    <div className="flex items-center gap-3">
                        <div className="bg-blue-600 p-2 rounded-lg text-white shadow-lg"><FileSpreadsheet size={20} /></div>
                        {isSidebarOpen && <span className="font-black tracking-tighter text-lg">ALFA</span>}
                    </div>
                </div>
                <nav className="flex-1 p-4 space-y-2">
                    <NavItem icon={<LayoutDashboard size={20} />} label="Painel de OS" active={currentPage === 'os'} onClick={() => setCurrentPage('os')} isSidebarOpen={isSidebarOpen} />
                    <NavItem icon={<PieChart size={20} />} label="Painel de Status" active={currentPage === 'status'} onClick={() => setCurrentPage('status')} isSidebarOpen={isSidebarOpen} />
                    <NavItem icon={<DollarSign size={20} />} label="Financeiro" active={currentPage === 'financial'} onClick={() => setCurrentPage('financial')} isSidebarOpen={isSidebarOpen} />
                    <NavItem icon={<FileSignature size={20} />} label="Contratos" active={currentPage === 'contracts'} onClick={() => setCurrentPage('contracts')} isSidebarOpen={isSidebarOpen} />
                    <NavItem icon={<Boxes size={20} />} label="Inventário" active={currentPage === 'inventory'} onClick={() => setCurrentPage('inventory')} isSidebarOpen={isSidebarOpen} />
                    <NavItem icon={<Users size={20} />} label="Clientes" active={currentPage === 'clients'} onClick={() => setCurrentPage('clients')} isSidebarOpen={isSidebarOpen} />
                    {hasPermission('canManageUsers') && (
                        <NavItem icon={<Shield size={20} />} label="Usuários" active={currentPage === 'users'} onClick={() => setCurrentPage('users')} isSidebarOpen={isSidebarOpen} />
                    )}
                    <div className="pt-4 border-t border-slate-800 mt-4">
                        <NavItem icon={<Info size={20} />} label="Sobre" active={currentPage === 'about'} onClick={() => setCurrentPage('about')} isSidebarOpen={isSidebarOpen} />
                    </div>
                </nav>

                {/* Área inferior da sidebar com botões lado a lado */}
                <div className="border-t border-slate-800 p-4">
                    <div className="flex items-center justify-between">


                        {/* Botão de recolher sidebar (ícone) */}
                        <button
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                            className="text-slate-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-slate-800"
                            title={isSidebarOpen ? "Recolher Sidebar" : "Expandir Sidebar"}
                        >
                            <ChevronRight className={`transition-transform duration-300 ${isSidebarOpen ? 'rotate-180' : ''}`} size={20} />
                        </button>

                        {/* Botão de logout (ícone) */}
                        <button
                            onClick={handleLogout}
                            className="text-red-400 hover:text-red-500 transition-colors p-2 rounded-lg hover:bg-slate-800"
                            title="Sair"
                        >
                            <LogOut size={20} />
                        </button>
                    </div>
                </div>
            </aside>

            <main className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-20'} p-4 md:p-8 overflow-y-auto h-screen`}>
                {currentPage === 'os' && canAccessPage() && (
                    <div className="space-y-8 animate-in fade-in duration-500 max-w-7xl mx-auto">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                            <div><h2 className="text-4xl font-black text-slate-900 tracking-tighter">Gestão de OS</h2><p className="text-slate-500 font-medium">Fluxo operacional hospitalar</p></div>
                            <div className="flex gap-2 w-full md:w-auto">
                                {selectedOrders.length > 0 ? (
                                    <>
                                        <button onClick={() => handlePrint('client')} className="flex-1 md:flex-none bg-indigo-600 text-white px-6 py-4 rounded-[1.5rem] font-black flex items-center justify-center gap-2 shadow-xl hover:bg-indigo-700 transition-colors">
                                            <Printer size={20} /> Imprimir Cliente ({selectedOrders.length})
                                        </button>
                                        <button onClick={() => handlePrint('internal')} className="flex-1 md:flex-none bg-slate-800 text-white px-6 py-4 rounded-[1.5rem] font-black flex items-center justify-center gap-2 shadow-xl hover:bg-slate-900 transition-colors">
                                            <ShieldAlert size={20} /> Imprimir Interno
                                        </button>
                                    </>
                                ) : (
                                    <div className="bg-indigo-50 text-indigo-400 px-6 py-4 rounded-[1.5rem] font-bold text-sm flex items-center gap-2 border border-indigo-100">
                                        <Printer size={20} className="opacity-50" /> Selecione OS para imprimir
                                    </div>
                                )}
                                {hasPermission('canEditOS') && (
                                    <button onClick={() => openModal()} className="flex-1 md:flex-none bg-blue-600 text-white px-8 py-4 rounded-[1.5rem] font-black flex items-center justify-center gap-3 shadow-2xl shadow-blue-200 hover:bg-blue-700 transition-colors ml-2"><Plus size={24} /> Abrir Nova OS</button>
                                )}
                            </div>
                        </div>

                        <div className="relative group z-20">
                            <Search className="absolute left-5 top-5 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={24} />
                            <input className="w-full pl-14 pr-6 py-5 rounded-[1.5rem] border-none shadow-xl shadow-slate-200/50 focus:ring-4 focus:ring-blue-500/10 text-lg font-medium outline-none bg-white relative z-10" placeholder="Pesquise por cliente, OS ou equipamento..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
                            {searchTerm && (
                                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden animate-in slide-in-from-top-2 z-50">
                                    {orders.filter(o => o.client?.toLowerCase().includes(searchTerm.toLowerCase()) || o.osNumber?.includes(searchTerm) || o.item?.toLowerCase().includes(searchTerm.toLowerCase())).slice(0, 5).map(o => (
                                        <div key={o.firestoreId} onClick={() => { openModal(o); setSearchTerm(''); }} className="p-4 border-b border-slate-50 hover:bg-blue-50 cursor-pointer flex justify-between items-center group/item transition-colors">
                                            <div><div className="font-bold text-slate-800 flex items-center gap-2">{o.client}<span className="text-[10px] bg-slate-100 text-slate-500 px-2 rounded-full uppercase">{o.status}</span></div><div className="text-xs text-slate-500 mt-1"><span className="font-mono text-blue-600 font-bold">{o.osNumber}</span> - {o.item}</div></div>
                                            <div className="text-xs font-bold text-blue-600 opacity-0 group-hover/item:opacity-100 flex items-center gap-1 transition-all">Abrir <ExternalLink size={14} /></div>
                                        </div>
                                    ))}
                                    {orders.filter(o => o.client?.toLowerCase().includes(searchTerm.toLowerCase()) || o.osNumber?.includes(searchTerm) || o.item?.toLowerCase().includes(searchTerm.toLowerCase())).length === 0 && (
                                        <div className="p-6 text-center text-slate-400 text-sm font-medium">Nenhum resultado encontrado.</div>
                                    )}
                                </div>
                            )}
                        </div>
                        <div className="bg-white rounded-[2rem] shadow-xl border border-slate-100 overflow-hidden overflow-x-auto relative z-0">
                            <table className="w-full text-left min-w-[800px]">
                                <thead className="bg-slate-50/50 border-b text-[10px] font-black uppercase text-slate-400 tracking-widest">
                                    <tr>
                                        <th className="px-6 py-6 text-center w-12"><input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-blue-600" onChange={(e) => setSelectedOrders(e.target.checked ? orders.filter(o => o.client?.toLowerCase().includes(searchTerm.toLowerCase()) || o.osNumber?.includes(searchTerm)).map(o => o.firestoreId) : [])} checked={selectedOrders.length > 0 && selectedOrders.length === orders.length} /></th>
                                        <th className="px-8 py-6">Identificação</th>
                                        <th className="px-8 py-6">Equipamento</th>
                                        <th className="px-8 py-6">Tipo</th>
                                        <th className="px-8 py-6">Status</th>
                                        <th className="px-8 py-6 text-right">Ações</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-50">
                                    {isLoading ? <tr><td colSpan="6" className="p-20 text-center"><Loader2 className="animate-spin mx-auto text-blue-600" size={32} /></td></tr> :
                                        orders.filter(o => o.client?.toLowerCase().includes(searchTerm.toLowerCase()) || o.osNumber?.includes(searchTerm)).map(o => (
                                            <tr key={o.firestoreId} className={`hover:bg-blue-50/30 transition-colors group ${selectedOrders.includes(o.firestoreId) ? 'bg-blue-50/50' : ''}`}>
                                                <td className="px-6 py-4 text-center"><input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-blue-600" checked={selectedOrders.includes(o.firestoreId)} onChange={() => setSelectedOrders(prev => prev.includes(o.firestoreId) ? prev.filter(id => id !== o.firestoreId) : [...prev, o.firestoreId])} /></td>
                                                <td className="px-8 py-6"><div className="font-black text-blue-700 text-lg">{o.osNumber}</div><div className="font-bold text-slate-900 text-sm">{o.client}</div></td>
                                                <td className="px-8 py-6"><div className="font-bold text-slate-900 text-sm">{o.item}</div><div className="text-[10px] text-slate-400 font-mono">NS: {o.serial || 'N/D'}</div></td>
                                                <td className="px-8 py-6"><div className="text-xs font-bold text-slate-500 uppercase tracking-tighter">{o.billingType}</div></td>
                                                <td className="px-8 py-6"><div className="px-4 py-2 rounded-xl text-[10px] font-black uppercase inline-block border bg-slate-100 text-slate-600">{o.status}</div></td>
                                                <td className="px-8 py-6 text-right">
                                                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                        <button onClick={() => openModal(o)} className="p-3 bg-white border shadow-sm hover:bg-blue-600 hover:text-white rounded-xl transition-all"><Edit2 size={18} /></button>
                                                        {hasPermission('canDeleteOS') && (
                                                            <button onClick={() => confirmDelete(o)} className="p-3 bg-white border shadow-sm hover:bg-red-600 hover:text-white rounded-xl transition-all"><Trash2 size={18} /></button>
                                                        )}
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {currentPage === 'status' && canAccessPage() && (
                    <div className="space-y-6 animate-in fade-in duration-500 max-w-7xl mx-auto h-full flex flex-col">
                        <div className="flex justify-between items-end shrink-0">
                            <div><h2 className="text-4xl font-black text-slate-900 tracking-tighter">Indicadores</h2><p className="text-slate-500 font-medium">{dashboardData.isFiltered ? `Visualizando métricas de ${dashboardData.count} ordens selecionadas` : `Visualizando métricas gerais de todas as ordens (${dashboardData.count})`}</p></div>
                            {dashboardData.isFiltered && (<button onClick={() => setSelectedOrders([])} className="text-sm font-bold text-blue-600 hover:underline">Limpar filtro e ver geral</button>)}
                        </div>
                        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-0">
                            <div className="lg:col-span-4 bg-white rounded-[2rem] shadow-xl border border-slate-100 flex flex-col overflow-hidden max-h-[calc(100vh-200px)]">
                                <div className="p-6 border-b border-slate-100 bg-slate-50/50">
                                    <div className="relative group mb-3 z-30"><Search className="absolute left-4 top-3.5 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={18} /><input className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 shadow-sm focus:ring-2 focus:ring-blue-500/20 text-sm font-bold outline-none bg-white relative z-20" placeholder="Buscar OS para filtrar..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />{searchTerm && (<div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden animate-in slide-in-from-top-2 z-50">{orders.filter(o => o.client?.toLowerCase().includes(searchTerm.toLowerCase()) || o.osNumber?.includes(searchTerm) || o.item?.toLowerCase().includes(searchTerm.toLowerCase())).slice(0, 5).map(o => (<div key={o.firestoreId} onClick={() => { openModal(o); setSearchTerm(''); }} className="p-3 border-b border-slate-50 hover:bg-blue-50 cursor-pointer flex justify-between items-center group/item transition-colors"><div><div className="font-bold text-slate-800 text-xs flex items-center gap-2">{o.client}</div><div className="text-[10px] text-slate-500 mt-0.5"><span className="font-mono text-blue-600 font-bold">{o.osNumber}</span> - {o.item}</div></div><div className="text-[10px] font-bold text-blue-600 opacity-0 group-hover/item:opacity-100 flex items-center gap-1 transition-all">Abrir <ExternalLink size={12} /></div></div>))}{orders.filter(o => o.client?.toLowerCase().includes(searchTerm.toLowerCase()) || o.osNumber?.includes(searchTerm) || o.item?.toLowerCase().includes(searchTerm.toLowerCase())).length === 0 && (<div className="p-4 text-center text-slate-400 text-[10px] font-medium">Nenhum resultado.</div>)}</div>)}</div>
                                    <div className="flex items-center gap-2 text-xs font-bold text-slate-500 px-1"><input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-0 cursor-pointer" onChange={(e) => { const filtered = orders.filter(o => o.client?.toLowerCase().includes(searchTerm.toLowerCase()) || o.osNumber?.includes(searchTerm)); setSelectedOrders(e.target.checked ? filtered.map(o => o.firestoreId) : []); }} checked={selectedOrders.length > 0 && orders.filter(o => o.client?.toLowerCase().includes(searchTerm.toLowerCase()) || o.osNumber?.includes(searchTerm)).every(o => selectedOrders.includes(o.firestoreId))} /><span>Selecionar Todos da Busca</span></div>
                                </div>
                                <div className="flex-1 overflow-y-auto p-3 space-y-2 relative z-0">{orders.filter(o => o.client?.toLowerCase().includes(searchTerm.toLowerCase()) || o.osNumber?.includes(searchTerm)).map(o => (<div key={o.firestoreId} onClick={() => setSelectedOrders(prev => prev.includes(o.firestoreId) ? prev.filter(id => id !== o.firestoreId) : [...prev, o.firestoreId])} className={`p-3 rounded-xl border cursor-pointer transition-all hover:shadow-md select-none ${selectedOrders.includes(o.firestoreId) ? 'bg-blue-50 border-blue-200 ring-1 ring-blue-200' : 'bg-white border-slate-100 hover:bg-slate-50'}`}><div className="flex items-start gap-3"><div className={`mt-1 w-4 h-4 rounded border flex items-center justify-center transition-colors ${selectedOrders.includes(o.firestoreId) ? 'bg-blue-600 border-blue-600' : 'border-slate-300 bg-white'}`}>{selectedOrders.includes(o.firestoreId) && <CheckCircle2 size={12} className="text-white" />}</div><div className="flex-1 min-w-0"><div className="flex items-center justify-between mb-1"><span className="font-black text-blue-700 text-xs">{o.osNumber}</span><span className={`text-[9px] px-1.5 py-0.5 rounded font-bold uppercase ${selectedOrders.includes(o.firestoreId) ? 'bg-blue-200 text-blue-800' : 'bg-slate-100 text-slate-500'}`}>{o.status}</span></div><div className="font-bold text-slate-800 text-sm leading-tight truncate">{o.client}</div><div className="text-[10px] text-slate-400 mt-0.5 truncate">{o.item}</div></div><button onClick={(e) => { e.stopPropagation(); openModal(o); }} className="p-2 -mr-1 mt-0.5 text-slate-400 hover:text-blue-600 hover:bg-blue-100 rounded-lg transition-colors" title="Abrir Detalhes da OS"><ExternalLink size={18} /></button></div></div>))}{orders.length === 0 && <div className="text-center py-10 text-slate-400 text-xs">Nenhuma OS encontrada.</div>}</div>
                            </div>
                            <div className="lg:col-span-8 space-y-6 overflow-y-auto pr-1 pb-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white p-6 rounded-[2rem] shadow-xl border border-slate-100 space-y-4 relative overflow-hidden">
                                        <div className="flex items-center gap-2 text-indigo-600 font-bold uppercase text-xs tracking-widest"><PieChart size={16} /> Status Geral</div>
                                        <SimpleDonutChart data={dashboardData.statusChartData} colors={["#3b82f6", "#6366f1", "#8b5cf6", "#ec4899", "#f43f5e", "#10b981", "#f59e0b"]} onClick={handleFilterByStatus} />
                                        <div className="space-y-2 mt-4">{dashboardData.statusChartData.slice(0, 4).map((d, i) => (<div key={i} className="flex justify-between text-xs text-slate-600 font-medium cursor-pointer hover:bg-slate-50 p-1 rounded transition-colors" onClick={() => handleFilterByStatus(d.label)}><span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full" style={{ backgroundColor: ["#3b82f6", "#6366f1", "#8b5cf6", "#ec4899", "#f43f5e", "#10b981", "#f59e0b"][i] }} /> {d.label}</span><span>{d.value}</span></div>))}</div>
                                        <div className="absolute top-4 right-4 text-slate-300"><MousePointerClick size={16} /></div>
                                    </div>
                                    <div className="bg-white p-6 rounded-[2rem] shadow-xl border border-slate-100 space-y-4 relative overflow-hidden">
                                        <div className="flex items-center gap-2 text-emerald-600 font-bold uppercase text-xs tracking-widest"><BarChart3 size={16} /> Tipo de Faturamento</div>
                                        <SimpleBarChart data={dashboardData.billingChartData} maxVal={Math.max(...dashboardData.billingChartData.map(d => d.value), 1)} colorClass="bg-emerald-500" onClick={handleFilterByBilling} showValues={showValues} />
                                        <div className="absolute top-4 right-4 text-slate-300"><MousePointerClick size={16} /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {currentPage === 'financial' && canAccessPage() && (
                    <div className="space-y-8 animate-in fade-in duration-500 max-w-7xl mx-auto h-full">
                        <div><h2 className="text-4xl font-black text-slate-900 tracking-tighter">Financeiro</h2><p className="text-slate-500 font-medium">Análise de custos e receitas acumuladas</p></div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="bg-white p-6 rounded-[2rem] shadow-xl border border-slate-100 space-y-2">
                                <div className="flex items-center gap-2 text-blue-600 font-bold uppercase text-xs tracking-widest"><TrendingUp size={16} /> Receita Bruta</div>
                                <div className="text-3xl font-black text-slate-900">R$ {formatMoney(globalFinancials.totalRevenue)}</div>
                                <div className="text-xs text-slate-400">Total cobrado em OS</div>
                            </div>
                            <div className="bg-white p-6 rounded-[2rem] shadow-xl border border-slate-100 space-y-2">
                                <div className="flex items-center gap-2 text-red-500 font-bold uppercase text-xs tracking-widest"><ArrowDownRight size={16} /> Custos Operacionais</div>
                                <div className="text-3xl font-black text-slate-900">R$ {formatMoney(globalFinancials.totalCosts)}</div>
                                <div className="text-xs text-slate-400">Peças + Fretes Terceiros</div>
                            </div>
                            <div className="bg-white p-6 rounded-[2rem] shadow-xl border border-slate-100 space-y-2">
                                <div className="flex items-center gap-2 text-green-600 font-bold uppercase text-xs tracking-widest"><ArrowUpRight size={16} /> Lucro Líquido</div>
                                <div className="text-3xl font-black text-green-600">R$ {formatMoney(globalFinancials.totalProfit)}</div>
                                <div className="text-xs text-slate-400">Receita - Custos</div>
                            </div>
                            <div className="bg-white p-6 rounded-[2rem] shadow-xl border border-slate-100 space-y-2">
                                <div className="flex items-center gap-2 text-purple-600 font-bold uppercase text-xs tracking-widest"><Percent size={16} /> Margem de Lucro</div>
                                <div className="text-3xl font-black text-purple-600">{globalFinancials.margin.toLocaleString('pt-BR', { maximumFractionDigits: 1 })}%</div>
                                <div className="text-xs text-slate-400">Rentabilidade média</div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100">
                                <div className="flex items-center gap-2 text-slate-800 font-bold uppercase text-xs tracking-widest mb-6"><Users size={16} /> Top Clientes (Receita)</div>
                                {globalFinancials.topClients.length > 0 ? (<SimpleBarChart data={globalFinancials.topClients} maxVal={globalFinancials.topClients[0].value} colorClass="bg-blue-600" showValues={showValues} />) : (<div className="text-center py-10 text-slate-400">Sem dados financeiros</div>)}
                            </div>
                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-[2rem] shadow-xl text-white flex flex-col justify-center">
                                <div className="space-y-6">
                                    <div><div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Status Financeiro</div><h3 className="text-2xl font-black">Resumo Geral</h3></div>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center border-b border-slate-700 pb-2"><span className="text-sm font-medium text-slate-300">Total de Ordens Analisadas</span><span className="font-bold text-xl">{orders.length}</span></div>
                                        <div className="flex justify-between items-center border-b border-slate-700 pb-2"><span className="text-sm font-medium text-slate-300">Ticket Médio (Receita/OS)</span><span className="font-bold text-xl">R$ {formatMoney(orders.length > 0 ? globalFinancials.totalRevenue / orders.length : 0)}</span></div>
                                        <div className="flex justify-between items-center pb-2"><span className="text-sm font-medium text-slate-300">Lucro Médio por OS</span><span className="font-bold text-xl text-green-400">R$ {formatMoney(orders.length > 0 ? globalFinancials.totalProfit / orders.length : 0)}</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {currentPage === 'contracts' && canAccessPage() && (
                    <div className="space-y-8 animate-in fade-in duration-500 max-w-7xl mx-auto">
                        <div className="flex flex-col md:flex-row justify-between items-end gap-4">
                            <div><h2 className="text-4xl font-black text-slate-900 tracking-tighter">Contratos de Manutenção</h2><p className="text-slate-500 font-medium">Gestão de vigências e escopo de atendimento</p></div>
                            <div className="flex gap-3">
                                <div className="hidden md:flex bg-blue-50 text-blue-600 px-6 py-3 rounded-2xl font-bold text-sm border border-blue-100 items-center gap-2"><Info size={18} />Contratos ativos e manuais</div>
                                <button onClick={handleNewContract} className="bg-blue-600 text-white px-8 py-3 rounded-2xl font-black flex items-center gap-2 shadow-xl shadow-blue-200 hover:bg-blue-700 transition-colors"><Plus size={20} /> Novo Contrato</button>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {combinedContracts.length === 0 ? (<div className="col-span-3 text-center py-20 text-slate-400">Nenhum contrato encontrado. Adicione um manualmente ou crie uma OS.</div>) : (
                                combinedContracts.map((contract, index) => (
                                    <div key={index} className="bg-white rounded-[2rem] border border-slate-100 shadow-xl overflow-hidden group hover:shadow-2xl transition-all">
                                        <div className="p-6 border-b border-slate-50 bg-slate-50/50 flex justify-between items-start">
                                            <div><div className="font-black text-lg text-slate-800 leading-tight mb-1">{contract.clientName}</div><div className="text-xs text-slate-500 font-medium truncate max-w-[200px]">{contract.cnpj || 'CNPJ não informado'}</div></div>
                                            <div className={`p-2 rounded-lg ${contract.isConfigured ? 'bg-green-100 text-green-600' : 'bg-amber-100 text-amber-600'}`}>{contract.isConfigured ? <CheckCircle2 size={20} /> : <AlertCircle size={20} />}</div>
                                        </div>
                                        <div className="p-6 space-y-4">
                                            <div className="grid grid-cols-2 gap-4">
                                                <div><div className="text-[10px] font-bold text-slate-400 uppercase">Vigência Início</div><div className="font-bold text-slate-700">{contract.startDate ? new Date(contract.startDate + 'T00:00:00').toLocaleDateString() : '---'}</div></div>
                                                <div><div className="text-[10px] font-bold text-slate-400 uppercase">Vigência Fim</div><div className="font-bold text-slate-700">{contract.endDate ? new Date(contract.endDate + 'T00:00:00').toLocaleDateString() : '---'}</div></div>
                                            </div>
                                            <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                                                <div className="flex justify-between items-center mb-1"><span className="text-[10px] font-bold text-slate-400 uppercase">Valor Mensal</span><span className="font-black text-slate-800">R$ {formatMoney(parseCurrency(contract.monthlyValue))}</span></div>
                                                <div className="flex justify-between items-center"><span className="text-[10px] font-bold text-slate-400 uppercase">Valor Anual</span><span className="font-black text-blue-600">R$ {formatMoney(parseCurrency(contract.annualValue))}</span></div>
                                            </div>
                                            <div className="space-y-1">
                                                <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">Escopo Contratado</div>
                                                <div className="flex flex-wrap gap-1">
                                                    {contract.coveredItems.videoSurgeryInstruments && <span className="text-[9px] bg-indigo-50 text-indigo-600 px-2 py-1 rounded border border-indigo-100 font-bold">Instr. Videocirurgia</span>}
                                                    {contract.coveredItems.openInstruments && <span className="text-[9px] bg-purple-50 text-purple-600 px-2 py-1 rounded border border-purple-100 font-bold">Instr. Abertos</span>}
                                                    {contract.coveredItems.videoSurgeryEquipment && <span className="text-[9px] bg-blue-50 text-blue-600 px-2 py-1 rounded border border-blue-100 font-bold">Equip. Vídeo</span>}
                                                    {contract.coveredItems.endoscopes && <span className="text-[9px] bg-emerald-50 text-emerald-600 px-2 py-1 rounded border border-emerald-100 font-bold">Endoscópios</span>}
                                                    {!Object.values(contract.coveredItems).some(Boolean) && <span className="text-[9px] text-slate-400 italic">Nenhum item selecionado</span>}
                                                </div>
                                            </div>
                                        </div>
                                        <button onClick={() => openContractModal(contract)} className="w-full py-4 bg-slate-50 hover:bg-slate-100 border-t border-slate-100 text-slate-600 font-bold text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-2"><FileSignature size={16} /> {contract.isConfigured ? 'Editar Contrato' : 'Configurar Contrato'}</button>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                )}

                {currentPage === 'inventory' && canAccessPage() && <div className="p-20 text-center"><Boxes size={80} className="mx-auto text-slate-200 mb-6" /><h3 className="text-2xl font-black">Inventário em breve</h3></div>}
                {currentPage === 'clients' && canAccessPage() && <div className="p-20 text-center"><Users size={80} className="mx-auto text-slate-200 mb-6" /><h3 className="text-2xl font-black">Módulo de Clientes em breve</h3></div>}
                {currentPage === 'users' && canAccessPage() && <UserManagement />}
                {currentPage === 'about' && <div className="p-20 text-center"><Info size={80} className="mx-auto text-slate-200 mb-6" /><h3 className="text-2xl font-black">Sobre o Sistema</h3></div>}
            </main>

            {/* MODAL PRINCIPAL OS */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-50 flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
                    <div className="bg-white rounded-[2.5rem] w-full max-w-5xl my-auto shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-200">
                        <form onSubmit={handleSubmit} className="p-6 md:p-10 space-y-10">
                            <div className="flex justify-between items-center border-b pb-6">
                                <div><h2 className="text-3xl font-black text-slate-900 tracking-tight">OS {formData.osNumber}</h2><p className="text-slate-500 text-sm font-medium">Relatório de Atendimento Técnico</p></div>
                                <button type="button" onClick={() => setIsModalOpen(false)} className="p-3 hover:bg-slate-100 rounded-full text-slate-400 transition-colors"><X /></button>
                            </div>
                            <div className="space-y-10">
                                <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 space-y-8">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-2 text-blue-600 font-bold uppercase text-xs tracking-widest"><User size={16} /> Cliente</div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <input
                                                    placeholder="Nome da Empresa"
                                                    className={`w-full p-4 bg-white border ${fieldErrors.client ? 'border-red-500' : 'border-slate-200'} rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/10 transition-all font-bold`}
                                                    value={formData.client}
                                                    onChange={e => {
                                                        setFormData({ ...formData, client: e.target.value });
                                                        if (fieldErrors.client) setFieldErrors(prev => ({ ...prev, client: false }));
                                                    }}
                                                    onBlur={() => handleBlur('client')}
                                                />
                                                {fieldErrors.client && <p className="text-red-500 text-xs mt-1 ml-4">Cliente é obrigatório</p>}
                                            </div>
                                            <input
                                                placeholder="CNPJ"
                                                className="w-full p-4 bg-white border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/10 transition-all font-bold"
                                                value={formData.cnpj}
                                                onChange={e => setFormData({ ...formData, cnpj: e.target.value })}
                                            />
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <input
                                                placeholder="Responsável"
                                                className="w-full p-4 bg-white border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/10 transition-all font-bold"
                                                value={formData.contactPerson}
                                                onChange={e => setFormData({ ...formData, contactPerson: e.target.value })}
                                            />
                                            <input
                                                placeholder="E-mail"
                                                className="w-full p-4 bg-white border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/10 transition-all font-bold"
                                                value={formData.email}
                                                onChange={e => setFormData({ ...formData, email: e.target.value })}
                                            />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-[10px] font-black text-slate-400 uppercase ml-2 flex justify-between">
                                                Endereço
                                                {formData.address && (<a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(formData.address)}`} target="_blank" className="text-blue-600 hover:underline flex items-center gap-1"><ExternalLink size={10} /> Ver no Maps</a>)}
                                            </label>
                                            <input
                                                placeholder="Endereço Completo"
                                                className="w-full p-4 bg-white border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/10 transition-all font-bold"
                                                value={formData.address}
                                                onChange={e => setFormData({ ...formData, address: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <hr className="border-slate-200/50" />
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-2 text-indigo-600 font-bold uppercase text-xs tracking-widest"><CalendarCheck size={16} /> Atendimento</div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <select className="w-full p-4 bg-white border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-indigo-500/10 transition-all font-bold" value={formData.billingType} onChange={e => setFormData({ ...formData, billingType: e.target.value, maintenanceVisit: '' })}>
                                                {billingOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                                            </select>
                                            {formData.billingType === "Contrato de manutenção" && (
                                                <select className="w-full p-4 bg-white border border-indigo-200 rounded-2xl outline-none font-bold animate-in slide-in-from-top-2" value={formData.maintenanceVisit} onChange={e => setFormData({ ...formData, maintenanceVisit: e.target.value })}>
                                                    <option value="">Selecione a visita...</option>
                                                    <option value={`1ª Visita de ${currentMonthName}`}>1ª Visita de {currentMonthName}</option>
                                                    <option value={`2ª Visita de ${currentMonthName}`}>2ª Visita de {currentMonthName}</option>
                                                    <option value={`3ª Visita de ${currentMonthName}`}>3ª Visita de {currentMonthName}</option>
                                                    <option value={`4ª Visita de ${currentMonthName}`}>4ª Visita de {currentMonthName}</option>
                                                </select>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-2 text-orange-600 font-bold uppercase text-xs tracking-widest"><Package size={16} /> Equipamento</div>
                                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                        <div>
                                            <input
                                                placeholder="Item / Nome"
                                                className={`w-full p-4 bg-slate-50 border ${fieldErrors.item ? 'border-red-500' : 'border-slate-200'} rounded-2xl outline-none font-bold`}
                                                value={formData.item}
                                                onChange={e => {
                                                    setFormData({ ...formData, item: e.target.value });
                                                    if (fieldErrors.item) setFieldErrors(prev => ({ ...prev, item: false }));
                                                }}
                                                onBlur={() => handleBlur('item')}
                                            />
                                            {fieldErrors.item && <p className="text-red-500 text-xs mt-1 ml-4">Item/Equipamento é obrigatório</p>}
                                        </div>
                                        <input
                                            placeholder="Marca"
                                            className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none font-bold"
                                            value={formData.manufacturer}
                                            onChange={e => setFormData({ ...formData, manufacturer: e.target.value })}
                                        />
                                        <input
                                            placeholder="Modelo"
                                            className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none font-bold"
                                            value={formData.model}
                                            onChange={e => setFormData({ ...formData, model: e.target.value })}
                                        />
                                        <input
                                            placeholder="Número de Série"
                                            className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none font-bold font-mono"
                                            value={formData.serial}
                                            onChange={e => setFormData({ ...formData, serial: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-2 text-emerald-600 font-bold uppercase text-xs tracking-widest"><Wrench size={16} /> Laudo Técnico</div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div>
                                            <textarea
                                                rows="8"
                                                placeholder="Descrição detalhada do defeito..."
                                                className={`w-full p-4 bg-slate-50 border ${fieldErrors.defect ? 'border-red-500' : 'border-slate-200'} rounded-2xl outline-none font-medium`}
                                                value={formData.defect}
                                                onChange={e => {
                                                    setFormData({ ...formData, defect: e.target.value });
                                                    if (fieldErrors.defect) setFieldErrors(prev => ({ ...prev, defect: false }));
                                                }}
                                                onBlur={() => handleBlur('defect')}
                                            />
                                            {fieldErrors.defect && <p className="text-red-500 text-xs mt-1 ml-4">Descrição do defeito é obrigatória</p>}
                                        </div>
                                        <div className="space-y-4">
                                            <select className="w-full p-4 bg-slate-900 text-white border-none rounded-2xl outline-none cursor-pointer font-bold" value={formData.solutionType} onChange={e => setFormData({ ...formData, solutionType: e.target.value })}>
                                                <option value="Manual">Preenchimento Manual</option>
                                                <option value="Preenchimento manual, com custo">Manual com Custos Detalhados (+)</option>
                                                <option value="Não passível de conserto">Não Passível de Conserto</option>
                                            </select>
                                            {formData.solutionType === "Manual" && (
                                                <div>
                                                    <textarea
                                                        rows="4"
                                                        placeholder="Descrição da solução aplicada..."
                                                        className={`w-full p-4 bg-slate-50 border ${fieldErrors.solution ? 'border-red-500' : 'border-slate-200'} rounded-2xl outline-none font-medium`}
                                                        value={formData.solution}
                                                        onChange={e => {
                                                            setFormData({ ...formData, solution: e.target.value });
                                                            if (fieldErrors.solution) setFieldErrors(prev => ({ ...prev, solution: false }));
                                                        }}
                                                        onBlur={() => handleBlur('solution')}
                                                    />
                                                    {fieldErrors.solution && <p className="text-red-500 text-xs mt-1 ml-4">Descrição da solução é obrigatória</p>}
                                                </div>
                                            )}
                                            {formData.solutionType === "Preenchimento manual, com custo" && (
                                                <div className="space-y-4 animate-in fade-in">
                                                    <div className="bg-green-50 p-4 rounded-2xl border border-green-100 space-y-3">
                                                        <input placeholder="Item, Peça ou Serviço" className="w-full p-2 bg-white border border-green-200 rounded-lg text-sm" value={tempSolution} onChange={e => setTempSolution(e.target.value)} />
                                                        <div className="flex gap-2">
                                                            <input placeholder="Valor R$ 0,00" className="flex-1 p-2 bg-white border border-green-200 rounded-lg text-sm" value={tempCost} onChange={e => setTempCost(e.target.value)} />
                                                            <button type="button" onClick={addSolutionItem} className="bg-green-600 text-white p-2.5 rounded-lg shadow-lg shadow-green-200"><Plus size={20} /></button>
                                                        </div>
                                                    </div>
                                                    <div className="space-y-2 max-h-40 overflow-y-auto pr-1">
                                                        {formData.solutionsList.map(s => (
                                                            <div key={s.id} className="flex justify-between items-center p-3 bg-white border rounded-xl shadow-sm animate-in slide-in-from-right-2">
                                                                <div><div className="text-xs font-bold text-slate-800">{s.text}</div><div className="text-[10px] text-green-600 font-black">R$ {s.cost}</div></div>
                                                                <button type="button" onClick={() => removeSolutionItem(s.id)}><X size={16} className="text-red-300 hover:text-red-500" /></button>
                                                            </div>
                                                        ))}
                                                    </div>
                                                    {fieldErrors.solutionsList && formData.solutionsList.length === 0 && (
                                                        <p className="text-red-500 text-xs mt-1 ml-4">Adicione pelo menos um item na lista de soluções</p>
                                                    )}
                                                </div>
                                            )}
                                            {formData.solutionType === "Não passível de conserto" && (
                                                <div>
                                                    <select
                                                        className={`w-full p-4 ${fieldErrors.notRepairableDetail ? 'bg-red-50 border-red-500' : 'bg-red-50 border-red-100'} text-red-900 border rounded-2xl outline-none font-bold`}
                                                        value={formData.notRepairableDetail}
                                                        onChange={e => {
                                                            setFormData({ ...formData, notRepairableDetail: e.target.value });
                                                            if (fieldErrors.notRepairableDetail) setFieldErrors(prev => ({ ...prev, notRepairableDetail: false }));
                                                        }}
                                                        onBlur={() => handleBlur('notRepairableDetail')}
                                                    >
                                                        <option value="">Selecione Recomendação...</option>
                                                        <option value="Conserto em bancada">Conserto em bancada</option>
                                                        <option value="Necessário substituir por novo">Substituir por equipamento novo</option>
                                                    </select>
                                                    {fieldErrors.notRepairableDetail && <p className="text-red-500 text-xs mt-1 ml-4">Selecione uma recomendação</p>}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 space-y-6 transition-all duration-300">
                                    <div className="flex items-center justify-between cursor-pointer hover:opacity-80 transition-opacity" onClick={() => setIsFinancialOpen(!isFinancialOpen)}>
                                        <div className="flex items-center gap-2 text-red-600 font-bold uppercase text-xs tracking-widest"><DollarSign size={16} /> Financeiro & Custos (Controle Interno)</div>
                                        {isFinancialOpen ? <ChevronUp size={20} className="text-slate-400" /> : <ChevronDown size={20} className="text-slate-400" />}
                                    </div>
                                    {isFinancialOpen && (
                                        <div className="space-y-6 animate-in slide-in-from-top-4 fade-in duration-300">
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-bold text-slate-500 uppercase">Nome do Terceiro / Transportadora</label>
                                                <input placeholder="Ex: JadLog / Lab Especializado" className="w-full p-4 bg-white border border-slate-200 rounded-2xl outline-none font-bold" value={formData.costThirdPartyName} onChange={e => setFormData({ ...formData, costThirdPartyName: e.target.value })} />
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                                <div className="space-y-2"><label className="text-[10px] font-bold text-slate-500 uppercase">Frete Terceiro (R$)</label><input placeholder="0,00" className="w-full p-4 bg-white border border-slate-200 rounded-2xl outline-none font-bold" value={formData.costThirdPartyShipping} onChange={e => setFormData({ ...formData, costThirdPartyShipping: e.target.value })} /></div>
                                                <div className="space-y-2"><label className="text-[10px] font-bold text-slate-500 uppercase">Peças/Serviços (R$)</label><input placeholder="0,00" className="w-full p-4 bg-white border border-slate-200 rounded-2xl outline-none font-bold" value={formData.costParts} onChange={e => setFormData({ ...formData, costParts: e.target.value })} /></div>
                                                <div className="space-y-2"><label className="text-[10px] font-bold text-slate-500 uppercase">Frete Cliente (R$)</label><input placeholder="0,00" className="w-full p-4 bg-white border border-slate-200 rounded-2xl outline-none font-bold" value={formData.costClientShipping} onChange={e => setFormData({ ...formData, costClientShipping: e.target.value })} /></div>
                                            </div>
                                            <hr className="border-slate-200/50" />
                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-start">
                                                <div className="space-y-2"><label className="text-[10px] font-bold text-blue-500 uppercase">Valor Sugerido (+60%)</label><div className="w-full p-4 bg-blue-50/50 border border-blue-100 rounded-2xl font-black text-blue-600 cursor-not-allowed text-sm">R$ {formatMoney(suggestedValue)}</div></div>
                                                <div className="space-y-2"><label className="text-[10px] font-bold text-purple-600 uppercase">Soma Itens Laudo</label><div className="w-full p-4 bg-purple-50/50 border border-purple-100 rounded-2xl font-black text-purple-700 cursor-not-allowed text-sm">R$ {formatMoney(solutionsTotal)}</div></div>
                                                <div className="space-y-2"><label className="text-[10px] font-bold text-green-600 uppercase">Valor Cobrado (R$)</label><input placeholder="0,00" className="w-full p-4 bg-green-50 border border-green-100 rounded-2xl outline-none font-black text-green-700 text-sm" value={formData.chargedAmount} onChange={e => setFormData({ ...formData, chargedAmount: e.target.value })} /></div>
                                                <div className="space-y-2"><label className="text-[10px] font-bold text-slate-500 uppercase">Condição Pagamento</label><select className="w-full p-4 bg-white border border-slate-200 rounded-2xl outline-none font-bold text-sm" value={formData.paymentCondition} onChange={e => setFormData({ ...formData, paymentCondition: e.target.value, installments: '' })}><option value="À vista">À vista</option><option value="Boleto">Boleto</option><option value="Cartão">Cartão</option></select></div>
                                                {(formData.paymentCondition === 'Boleto' || formData.paymentCondition === 'Cartão') && (<div className="space-y-2 animate-in fade-in"><label className="text-[10px] font-bold text-slate-500 uppercase">Parcelas</label><select className="w-full p-4 bg-white border border-slate-200 rounded-2xl outline-none font-bold text-sm" value={formData.installments} onChange={e => setFormData({ ...formData, installments: e.target.value })}><option value="">Selecione...</option><option value="1x">1x</option><option value="2x">2x</option><option value="3x">3x</option><option value="4x">4x</option></select></div>)}
                                            </div>
                                            <div className={`p-6 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-4 transition-colors ${profit >= 0 ? 'bg-green-100/50 border border-green-200' : 'bg-red-100/50 border border-red-200'}`}>
                                                <div className="flex items-center gap-3"><div className={`p-3 rounded-full ${profit >= 0 ? 'bg-green-200 text-green-700' : 'bg-red-200 text-red-700'}`}><Calculator size={24} /></div><div><div className="text-[10px] font-black uppercase text-slate-500">Resultado Operacional</div><div className={`text-2xl font-black ${profit >= 0 ? 'text-green-700' : 'text-red-700'}`}>{profit >= 0 ? 'LUCRO' : 'PREJUÍZO'}</div></div></div>
                                                <div className="flex gap-8 text-right"><div><div className="text-[10px] font-bold text-slate-400 uppercase">Custo Total</div><div className="font-bold text-slate-700">R$ {formatMoney(totalCost)}</div></div><div><div className="text-[10px] font-bold text-slate-400 uppercase">Resultado</div><div className={`text-xl font-black ${profit >= 0 ? 'text-green-600' : 'text-red-600'}`}>R$ {formatMoney(profit)}</div></div></div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="space-y-6 pt-6 border-t">
                                    <div className="flex items-center gap-2 text-slate-900 font-bold uppercase text-xs tracking-widest"><Truck size={16} /> Logística e Status Final</div>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        <div className="space-y-1"><label className="text-[10px] font-black text-slate-400 uppercase">Status Geral</label><select className="w-full p-4 bg-slate-100 border-none rounded-2xl outline-none font-bold" value={formData.status} onChange={e => setFormData({ ...formData, status: e.target.value })}>{statusOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}</select></div>
                                        {formData.status !== 'Recebido' && (<div className="space-y-1 animate-in fade-in"><label className="text-[10px] font-black text-slate-400 uppercase">Enviado para Terceiro?</label><select className="w-full p-4 bg-slate-100 border-none rounded-2xl outline-none font-bold" value={formData.sentToThirdParty} onChange={e => setFormData({ ...formData, sentToThirdParty: e.target.value })}><option value="Não">Não</option><option value="Sim">Sim</option></select></div>)}
                                        {formData.status === "Em rota de entrega" && (<div className="space-y-1 animate-in zoom-in-95"><label className="text-[10px] font-black text-blue-600 uppercase">Rastreamento</label><input placeholder="Código de Rastreio" className="w-full p-4 bg-blue-50 border border-blue-100 rounded-2xl outline-none font-bold" value={formData.trackingCode} onChange={e => setFormData({ ...formData, trackingCode: e.target.value })} /></div>)}
                                    </div>
                                    {formData.sentToThirdParty === "Sim" && formData.status !== 'Recebido' && (
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-slate-100 rounded-3xl border border-slate-200 animate-in slide-in-from-top-4">
                                            <input placeholder="Empresa Terceira" className="w-full p-3 bg-white border rounded-xl text-sm" value={formData.thirdPartyInfo} onChange={e => setFormData({ ...formData, thirdPartyInfo: e.target.value })} />
                                            <input placeholder="Rastreio Terceiro" className="w-full p-3 bg-white border rounded-xl text-sm" value={formData.thirdPartyTracking} onChange={e => setFormData({ ...formData, thirdPartyTracking: e.target.value })} />
                                            <input type="date" className="w-full p-3 bg-white border rounded-xl text-sm" value={formData.thirdPartyDate} onChange={e => setFormData({ ...formData, thirdPartyDate: e.target.value })} />
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row gap-4 pt-10 border-t">
                                <button type="button" onClick={() => setIsModalOpen(false)} className="px-8 py-5 bg-slate-100 text-slate-600 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-slate-200 transition-colors">Cancelar</button>
                                <div className="flex-1 flex flex-col md:flex-row gap-4">
                                    <button type="button" onClick={handleSaveAndNewWithSameClient} disabled={isSaving} className="flex-1 bg-indigo-50 text-indigo-700 border-2 border-indigo-100 p-5 rounded-2xl font-black text-xs hover:bg-indigo-100 transition-all flex items-center justify-center gap-3">{isSaving ? <Loader2 className="animate-spin" size={18} /> : <RefreshCw size={18} />} NOVA OS COM MESMO CLIENTE</button>
                                    <button type="submit" disabled={isSaving} className="flex-1 bg-blue-600 text-white p-5 rounded-2xl font-black text-lg hover:bg-blue-700 shadow-xl shadow-blue-200 transition-all flex items-center justify-center gap-3">{isSaving ? <Loader2 className="animate-spin" size={20} /> : <Save size={20} />} SALVAR OS</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* MODAL CONFIGURAÇÃO DE CONTRATO */}
            {isContractModalOpen && (
                <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-[60] flex items-center justify-center p-2 sm:p-4">
                    <div className="bg-white rounded-[2rem] w-full max-w-3xl my-auto shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
                        <form onSubmit={handleSaveContract} className="p-8 space-y-8">
                            <div className="flex justify-between items-center border-b pb-4">
                                <div>
                                    <h2 className="text-2xl font-black text-slate-900 tracking-tight">{isNewContractMode ? 'Novo Contrato' : 'Configurar Contrato'}</h2>
                                    <p className="text-slate-500 text-sm font-medium">{isNewContractMode ? 'Preencha os dados do cliente e contrato' : contractForm.clientName}</p>
                                </div>
                                <button type="button" onClick={() => setIsContractModalOpen(false)} className="p-2 hover:bg-slate-100 rounded-full text-slate-400"><X size={20} /></button>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4">
                                <div className="flex items-center gap-2 text-blue-600 font-bold uppercase text-xs tracking-widest mb-2"><User size={16} /> Dados do Cliente</div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase">Nome do Cliente *</label>
                                    <input className={`w-full p-3 border rounded-xl font-bold ${isNewContractMode ? 'bg-white border-slate-200' : 'bg-slate-100 border-slate-200 cursor-not-allowed'}`} value={contractForm.clientName} onChange={e => isNewContractMode && setContractForm({ ...contractForm, clientName: e.target.value })} placeholder="Nome da Empresa / Hospital" readOnly={!isNewContractMode} required />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2"><label className="text-[10px] font-bold text-slate-400 uppercase">CNPJ</label><input className="w-full p-3 bg-white border border-slate-200 rounded-xl font-medium text-sm" value={contractForm.cnpj} onChange={e => setContractForm({ ...contractForm, cnpj: e.target.value })} placeholder="00.000.000/0000-00" /></div>
                                    <div className="space-y-2"><label className="text-[10px] font-bold text-slate-400 uppercase">Contato</label><input className="w-full p-3 bg-white border border-slate-200 rounded-xl font-medium text-sm" value={contractForm.contactPerson} onChange={e => setContractForm({ ...contractForm, contactPerson: e.target.value })} placeholder="Nome do Responsável" /></div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2"><label className="text-[10px] font-bold text-slate-400 uppercase">E-mail</label><input className="w-full p-3 bg-white border border-slate-200 rounded-xl font-medium text-sm" value={contractForm.email} onChange={e => setContractForm({ ...contractForm, email: e.target.value })} placeholder="financeiro@hospital.com" /></div>
                                    <div className="space-y-2"><label className="text-[10px] font-bold text-slate-400 uppercase">Endereço</label><input className="w-full p-3 bg-white border border-slate-200 rounded-xl font-medium text-sm" value={contractForm.address} onChange={e => setContractForm({ ...contractForm, address: e.target.value })} placeholder="Rua, Número, Cidade - UF" /></div>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <div className="space-y-2"><label className="text-[10px] font-bold text-slate-400 uppercase">Vigência (Início - Fim)</label><div className="flex gap-2"><input type="date" className="w-full p-3 bg-white border border-slate-200 rounded-xl font-bold text-sm" value={contractForm.startDate} onChange={e => setContractForm({ ...contractForm, startDate: e.target.value })} required /><input type="date" className="w-full p-3 bg-white border border-slate-200 rounded-xl font-bold text-sm" value={contractForm.endDate} onChange={e => setContractForm({ ...contractForm, endDate: e.target.value })} required /></div></div>
                                    <div className="space-y-2"><label className="text-[10px] font-bold text-slate-400 uppercase">Valor Mensal (R$)</label><input className="w-full p-3 bg-white border border-slate-200 rounded-xl font-black text-slate-800" value={contractForm.monthlyValue} onChange={e => { const val = e.target.value; const numVal = parseCurrency(val); setContractForm({ ...contractForm, monthlyValue: val, annualValue: (numVal * 12).toLocaleString('pt-BR', { minimumFractionDigits: 2 }) }); }} placeholder="0,00" /></div>
                                    <div className="space-y-2"><label className="text-[10px] font-bold text-slate-400 uppercase">Valor Anual (Estimado)</label><input className="w-full p-3 bg-blue-50 border border-blue-100 rounded-xl font-black text-blue-600" value={contractForm.annualValue} onChange={e => setContractForm({ ...contractForm, annualValue: e.target.value })} placeholder="0,00" /></div>
                                    <div className="space-y-2"><label className="text-[10px] font-bold text-slate-400 uppercase">Observações</label><textarea rows="3" className="w-full p-3 bg-white border border-slate-200 rounded-xl text-sm" value={contractForm.observations} onChange={e => setContractForm({ ...contractForm, observations: e.target.value })} placeholder="Detalhes adicionais..."></textarea></div>
                                </div>
                                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4">
                                    <div className="flex items-center gap-2 text-indigo-600 font-bold uppercase text-xs tracking-widest mb-2"><CheckSquare size={16} /> Itens Cobertos</div>
                                    <div className="space-y-3">
                                        <label className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-100 cursor-pointer hover:border-indigo-300 transition-colors"><input type="checkbox" className="w-5 h-5 text-indigo-600 rounded border-slate-300" checked={contractForm.coveredItems.videoSurgeryInstruments} onChange={e => setContractForm({ ...contractForm, coveredItems: { ...contractForm.coveredItems, videoSurgeryInstruments: e.target.checked } })} /><span className="text-sm font-bold text-slate-700">Instrumentais de Vídeo Cirurgia</span></label>
                                        <label className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-100 cursor-pointer hover:border-indigo-300 transition-colors"><input type="checkbox" className="w-5 h-5 text-indigo-600 rounded border-slate-300" checked={contractForm.coveredItems.openInstruments} onChange={e => setContractForm({ ...contractForm, coveredItems: { ...contractForm.coveredItems, openInstruments: e.target.checked } })} /><span className="text-sm font-bold text-slate-700">Instrumentais Abertos</span></label>
                                        <label className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-100 cursor-pointer hover:border-indigo-300 transition-colors"><input type="checkbox" className="w-5 h-5 text-indigo-600 rounded border-slate-300" checked={contractForm.coveredItems.videoSurgeryEquipment} onChange={e => setContractForm({ ...contractForm, coveredItems: { ...contractForm.coveredItems, videoSurgeryEquipment: e.target.checked } })} /><span className="text-sm font-bold text-slate-700">Equipamentos de Vídeo</span></label>
                                        <label className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-100 cursor-pointer hover:border-indigo-300 transition-colors"><input type="checkbox" className="w-5 h-5 text-indigo-600 rounded border-slate-300" checked={contractForm.coveredItems.endoscopes} onChange={e => setContractForm({ ...contractForm, coveredItems: { ...contractForm.coveredItems, endoscopes: e.target.checked } })} /><span className="text-sm font-bold text-slate-700">Endoscópios</span></label>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-4 border-t flex justify-end gap-3">
                                <button type="button" onClick={() => setIsContractModalOpen(false)} className="px-6 py-3 rounded-xl font-bold text-slate-500 hover:bg-slate-100">Cancelar</button>
                                <button type="submit" disabled={isSaving} className="px-8 py-3 bg-blue-600 text-white rounded-xl font-bold shadow-lg hover:bg-blue-700 flex items-center gap-2">{isSaving ? <Loader2 className="animate-spin" size={20} /> : <Save size={20} />} Salvar Contrato</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {isDeleteModalOpen && (
                <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-[60] flex items-center justify-center p-4">
                    <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl border border-slate-200 text-center space-y-6 animate-in zoom-in-95">
                        <div className="bg-red-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto text-red-500 mb-2"><Trash2 size={40} /></div>
                        <div><h3 className="text-2xl font-black text-slate-900">Excluir OS?</h3><p className="text-slate-500 mt-2">Tem certeza que deseja remover permanentemente a OS <span className="font-bold text-slate-900">{orderToDelete?.osNumber}</span>?<br />Essa ação não pode ser desfeita.</p></div>
                        <div className="flex gap-3"><button onClick={() => setIsDeleteModalOpen(false)} className="flex-1 py-4 rounded-xl font-bold text-slate-500 hover:bg-slate-100 transition-colors">Cancelar</button><button onClick={handleDelete} className="flex-1 py-4 bg-red-600 text-white rounded-xl font-bold hover:bg-red-700 shadow-xl shadow-red-200 transition-colors">Sim, Excluir</button></div>
                    </div>
                </div>
            )}

            {/* Toast Notification */}
            {notification.show && (
                <ToastNotification
                    message={notification.message}
                    type={notification.type}
                    onClose={() => setNotification(prev => ({ ...prev, show: false }))}
                />
            )}
        </div>
    );
}