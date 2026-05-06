import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import {
    Plus, Search, Trash2, Save, X,
    AlertCircle, Clock, Truck, Package, User,
    Loader2, ExternalLink, CalendarCheck,
    Wrench, RefreshCw, Printer,
    DollarSign, ListPlus, ChevronRight, LayoutDashboard,
    Boxes, Users, Info, Menu, ShieldAlert, PieChart,
    BarChart3, TrendingUp, CheckCircle2, Calculator,
    ChevronDown, ChevronUp, Filter, MousePointerClick,
    ArrowUpRight, ArrowDownRight, Percent, FileSignature,
    CheckSquare, CalendarDays, Eye, EyeOff, Shield, LogOut,
    ArrowDownWideNarrow, ArrowUpNarrowWide, Check, ArrowRight,
    FileText, Upload, Image as ImageIcon, MoreVertical, Link2, History, Edit2,
    Bell, BellRing, Settings2, Timer, AlertTriangle, Hourglass, Tag
} from 'lucide-react';
import {
    collection, addDoc, updateDoc, deleteDoc,
    doc, onSnapshot, setDoc, getDoc, query, orderBy
} from 'firebase/firestore';
import { db, storage } from "./firebase/firebase";
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { useAuth } from "./auth/AuthContext";
import UserManagement from './components/UserManagement';
import Login from './components/Login';
import logo from './assets/logo.png';
import { saveAs } from 'file-saver';
import { pdf } from '@react-pdf/renderer';
import DocumentoPDF from './components/DocumentoPDF';

const finalAppId = 'alfa-tecnologia-hospitalar-prod';

const MESES = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

// Hook para detectar cliques fora do elemento
const useOutsideClick = (ref, callback) => {
    const stableCallback = useCallback(callback, [callback]);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                stableCallback();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('touchstart', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, [ref, stableCallback]);
};

const EMPTY_FORM_DATA = {
    client: '', cnpj: '', contactPerson: '', address: '', email: '',
    billingType: '', maintenanceVisit: '',
    item: '', manufacturer: '', model: '', serial: '',
    equipmentObservation: '',
    quantity: '1',
    defect: '', defectsList: [],
    solutionType: 'Preenchimento manual',
    solution: '', manualSolutionsList: [],
    benchRepairList: [],
    solutionsList: [],
    notRepairableDetail: '',
    costThirdPartyName: '', costThirdPartyShipping: '', costClientShipping: '', costParts: '',
    chargedAmount: '', paymentCondition: 'À vista', installments: '',
    status: 'Recebido',
    statusDate: new Date().toISOString().split('T')[0],
    statusHistory: [],
    trackingCode: '', sentToThirdParty: 'Não',
    thirdPartyInfo: '', thirdPartyTracking: '', thirdPartyDate: '',
    osNumber: '',
    deliveryDeadline: '',
    discount5Days: false,
    discountAmount: 0,
    finalChargedAmount: 0,
    photos: [],
    linkedOS: []
};

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

const useEscapeKey = (callback) => {
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === 'Escape') {
                callback();
            }
        };

        document.addEventListener('keydown', handleEsc);

        return () => {
            document.removeEventListener('keydown', handleEsc);
        };
    }, [callback]);
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
        },
        warning: {
            bg: 'bg-amber-500',
            icon: <AlertCircle size={20} />,
            title: 'Aviso!',
            border: 'border-l-4 border-amber-600'
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

// Função para limpar sugestões concatenadas
const cleanConcatenatedSuggestions = (items) => {
    if (!items || items.length === 0) return [];

    const cleanedSet = new Set();

    items.forEach(item => {
        if (typeof item === 'string') {
            let cleaned = item
                .replace(/([a-zà-ú])([A-ZÀ-Ú])/g, '$1\n$2')
                .replace(/([A-ZÀ-Ú][a-zà-ú]+)([A-ZÀ-Ú][a-zà-ú]+)/g, '$1\n$2')
                .replace(/(\d)([A-ZÀ-Úa-zà-ú])/g, '$1\n$2')
                .trim();

            const separators = /[\n\r,.;!?]+/;
            const parts = cleaned.split(separators);

            parts.forEach(part => {
                const trimmed = part.trim();
                if (trimmed.length > 2) {
                    cleanedSet.add(trimmed);
                }
            });
        }
    });

    return Array.from(cleanedSet).sort();
};

const NavItem = ({ icon, label, active, onClick, isSidebarOpen }) => (
    <button
        onClick={onClick}
        className={`
            w-full flex items-center transition-colors rounded-xl
            ${isSidebarOpen ? 'gap-4 p-3' : 'justify-center p-2'}
            ${active ? 'bg-blue-600 text-white' : 'text-slate-400 hover:bg-slate-800'}
        `}
        title={!isSidebarOpen ? label : ''}
    >
        <div className={`
            flex items-center justify-center
            ${isSidebarOpen ? 'w-6' : 'w-8'}
        `}>
            {icon}
        </div>
        {isSidebarOpen && <span className="text-sm font-bold tracking-tight whitespace-nowrap">{label}</span>}
    </button>
);

const AccessibleSelect = ({ value, onChange, options, className = "", disabled = false, id, label, variant = "default" }) => {
    const selectRef = useRef(null);

    const handleKeyDown = (e) => {
        if (disabled) return;

        const currentIndex = options.findIndex(opt => opt.value === value || opt === value);

        switch (e.key) {
            case 'ArrowUp':
            case 'ArrowLeft':
                e.preventDefault();
                if (currentIndex > 0) {
                    const newValue = options[currentIndex - 1].value || options[currentIndex - 1];
                    onChange({ target: { value: newValue } });
                }
                break;
            case 'ArrowDown':
            case 'ArrowRight':
                e.preventDefault();
                if (currentIndex < options.length - 1) {
                    const newValue = options[currentIndex + 1].value || options[currentIndex + 1];
                    onChange({ target: { value: newValue } });
                }
                break;
            case 'Home':
                e.preventDefault();
                if (options.length > 0) {
                    const newValue = options[0].value || options[0];
                    onChange({ target: { value: newValue } });
                }
                break;
            case 'End':
                e.preventDefault();
                if (options.length > 0) {
                    const newValue = options[options.length - 1].value || options[options.length - 1];
                    onChange({ target: { value: newValue } });
                }
                break;
            case ' ':
            case 'Enter':
                e.preventDefault();
                if (selectRef.current) {
                    selectRef.current.focus();
                }
                break;
        }
    };

    const variantClasses = {
        default: "bg-white border border-slate-200 text-slate-900",
        dark: "bg-slate-900 text-white border-none",
        light: "bg-slate-100 border-none text-slate-900",
        indigo: "bg-white border border-indigo-200 text-slate-900"
    };

    const baseClasses = "w-full p-4 rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/10 transition-all font-bold cursor-pointer";
    const variantClass = variantClasses[variant] || variantClasses.default;

    return (
        <select
            ref={selectRef}
            id={id}
            value={value}
            onChange={onChange}
            className={`${baseClasses} ${variantClass} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={disabled}
            onKeyDown={handleKeyDown}
            aria-label={label}
            tabIndex={0}
        >
            {options.map((option, index) => (
                typeof option === 'object' ? (
                    <option
                        key={option.value}
                        value={option.value}
                        tabIndex={0}
                        className="text-slate-900"
                    >
                        {option.label}
                    </option>
                ) : (
                    <option
                        key={option}
                        value={option}
                        tabIndex={0}
                        className="text-slate-900"
                    >
                        {option}
                    </option>
                )
            ))}
        </select>
    );
};

const MaintenanceVisitSelect = ({ value, onChange, billingType }) => {
    const options = [
        `1ª Visita de ${MESES[new Date().getMonth()]}`,
        `2ª Visita de ${MESES[new Date().getMonth()]}`,
        `3ª Visita de ${MESES[new Date().getMonth()]}`,
        `4ª Visita de ${MESES[new Date().getMonth()]}`
    ];

    if (billingType !== "Contrato de manutenção") {
        return null;
    }

    return (
        <AccessibleSelect
            value={value}
            onChange={onChange}
            options={options}
            variant="indigo"
            className="animate-in slide-in-from-top-2"
            label="Visita de manutenção"
        />
    );
};

const InstallmentSelect = ({
    value,
    onChange,
    paymentCondition,
    options = [],
    customOptions = [],
    onDeleteOption,
    userRole,
    showAddOption = false,
    onAddOption,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [showAddInput, setShowAddInput] = useState(false);
    const [newOption, setNewOption] = useState('');
    const dropdownRef = useRef(null);

    useOutsideClick(dropdownRef, () => setIsOpen(false));

    const handleSelect = (opt) => {
        onChange({ target: { value: opt } });
        setIsOpen(false);
    };

    const handleAddOption = () => {
        if (newOption.trim()) {
            onAddOption(paymentCondition, newOption.trim());
            setNewOption('');
            setShowAddInput(false);
        }
    };

    return (
        <div className="relative w-full" ref={dropdownRef}>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="w-full p-4 bg-white border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/10 transition-all font-bold text-left flex items-center justify-between"
            >
                <span>{value || 'Selecione...'}</span>
                <ChevronDown size={20} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-slate-200 z-50 max-h-80 overflow-y-auto animate-in slide-in-from-top-2">
                    {options.length === 0 ? (
                        <div className="p-4 text-center text-slate-400 text-sm">Nenhuma opção</div>
                    ) : (
                        options.map((opt, idx) => {
                            const isCustom = customOptions.includes(opt);
                            return (
                                <div
                                    key={idx}
                                    className="flex items-center justify-between px-4 py-3 hover:bg-blue-50 cursor-pointer border-b border-slate-50 last:border-0"
                                    onClick={() => handleSelect(opt)}
                                >
                                    <span className="font-medium text-slate-700">{opt}</span>
                                    {isCustom && userRole === 'admin' && (
                                        <button
                                            type="button"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                onDeleteOption(paymentCondition, opt);
                                            }}
                                            className="p-1 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-full"
                                            title="Remover opção"
                                        >
                                            <X size={16} />
                                        </button>
                                    )}
                                </div>
                            );
                        })
                    )}
                    {showAddOption && paymentCondition === 'Boleto' && (
                        <div className="p-4 border-t border-slate-100 bg-slate-50">
                            {!showAddInput ? (
                                <button
                                    type="button"
                                    onClick={() => setShowAddInput(true)}
                                    className="w-full p-3 bg-blue-50 text-blue-600 border-2 border-blue-200 border-dashed rounded-xl font-bold text-sm hover:bg-blue-100 transition-colors flex items-center gap-2 justify-center"
                                >
                                    <Plus size={16} />
                                    Adicionar nova opção de boleto
                                </button>
                            ) : (
                                <div className="space-y-2 animate-in fade-in w-full">
                                    <div className="flex gap-2 items-center">
                                        <input
                                            type="text"
                                            placeholder="Ex: 45 / 75 dias"
                                            className="flex-1 p-3 bg-white border border-blue-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-500/20"
                                            value={newOption}
                                            onChange={(e) => setNewOption(e.target.value)}
                                            onKeyDown={(e) => e.key === 'Enter' && handleAddOption()}
                                            autoFocus
                                        />
                                        <button
                                            type="button"
                                            onClick={handleAddOption}
                                            className="bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 transition-colors flex-shrink-0"
                                        >
                                            <Plus size={16} />
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setShowAddInput(false);
                                                setNewOption('');
                                            }}
                                            className="text-slate-400 hover:text-slate-600 p-2 flex-shrink-0"
                                            title="Cancelar"
                                        >
                                            <X size={16} />
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

// MODAL DE CONFIRMAÇÃO DE RECUSA
const RejectConfirmModal = ({
    isOpen,
    onClose,
    order,
    onConfirm
}) => {
    if (!isOpen || !order) return null;

    return (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-[100] flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl border border-slate-200 space-y-6 animate-in zoom-in-95">
                <div className="flex items-center gap-3">
                    <div className="bg-red-100 p-3 rounded-full text-red-600">
                        <AlertCircle size={24} />
                    </div>
                    <div>
                        <h3 className="text-xl font-black text-slate-900">Recusar Orçamento</h3>
                        <p className="text-slate-500 text-sm">Confirmação de recusa</p>
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="p-4 bg-red-50 rounded-2xl border border-red-100">
                        <div className="flex items-center gap-2 text-red-600 mb-2">
                            <AlertCircle size={16} />
                            <span className="text-sm font-bold">Atenção!</span>
                        </div>
                        <p className="text-sm text-red-700">
                            Tem certeza que deseja recusar o orçamento da <strong>OS {order.osNumber}</strong>?
                        </p>
                        <p className="text-xs text-red-600 mt-2">
                            Esta ação não poderá ser desfeita. A OS será movida para o status "Orçamento recusado".
                        </p>
                    </div>

                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <div className="text-xs font-bold text-slate-400 uppercase mb-2">Detalhes da OS</div>
                        <div className="text-sm text-slate-600">
                            <div><strong>Cliente:</strong> {order.client}</div>
                            <div><strong>Equipamento:</strong> {order.item}</div>
                            <div><strong>Valor:</strong> R$ {parseCurrency(order.chargedAmount).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</div>
                        </div>
                    </div>
                </div>

                <div className="flex gap-3">
                    <button
                        onClick={onClose}
                        className="flex-1 py-4 rounded-xl font-bold text-slate-600 hover:bg-slate-100 transition-colors border border-slate-200"
                    >
                        Cancelar
                    </button>
                    <button
                        onClick={() => {
                            onConfirm(order);
                            onClose();
                        }}
                        className="flex-1 py-4 bg-red-600 text-white rounded-xl font-bold hover:bg-red-700 shadow-xl shadow-red-200 transition-colors flex items-center justify-center gap-2"
                    >
                        <X size={20} /> Confirmar Recusa
                    </button>
                </div>
            </div>
        </div>
    );
};

const PaymentConditionsModal = ({
    isOpen,
    onClose,
    selectedOrdersCount,
    totalOriginalValue,
    initialData,
    onConfirm,
    orderNumber = null,
    customOptions,
    onAddOption,
    onDeleteOption,
    userRole,
    showNotification
}) => {
    const installmentOptions = {
        'Boleto': [
            "30 / 60 dias",
            "5 dias (5% de desconto)"
        ],
        'Cartão': [
            "1x (30 Dias)",
            "2x (30/60 Dias)",
            "3x (30/60/90 Dias)",
            "4x (30/60/90/120 Dias)"
        ]
    };

    // Estado inicial baseado no valor ORIGINAL (chargedAmount)
    const [paymentData, setPaymentData] = useState({
        paymentCondition: 'À vista',
        installments: '',
        discount5Days: false,
        finalChargedAmount: totalOriginalValue, // Começa com valor original
        originalValue: totalOriginalValue // Valor base para cálculos
    });

    const { userData } = useAuth();

    useEffect(() => {
        if (isOpen) {
            // Inicializar com os dados da primeira OS
            const initialPaymentCondition = initialData.paymentCondition || 'À vista';
            const initialInstallments = initialData.installments || '';
            const initialDiscount5Days = initialData.discount5Days || false;

            // Calcular o valor final baseado nos dados iniciais
            let finalAmount = totalOriginalValue;
            if (initialDiscount5Days && initialPaymentCondition === 'Boleto' && initialInstallments === "5 dias (5% de desconto)") {
                finalAmount = totalOriginalValue * 0.95; // Aplica desconto
            }

            setPaymentData({
                paymentCondition: initialPaymentCondition,
                installments: initialInstallments,
                discount5Days: initialDiscount5Days,
                finalChargedAmount: finalAmount,
                originalValue: totalOriginalValue
            });
        }
    }, [isOpen, initialData, totalOriginalValue]);

    // Função para calcular o valor final baseado nas condições
    const calculateFinalAmount = (condition, installments, originalValue) => {
        // Desconto automático de 5% APENAS quando for "5 dias (5% de desconto)"
        if (condition === 'Boleto' && installments === "5 dias (5% de desconto)") {
            return originalValue * 0.95;
        }
        return originalValue;
    };

    const handlePaymentConditionChange = (e) => {
        const newCondition = e.target.value;
        let newInstallments = '';

        // Resetar parcelas quando mudar a condição
        if (newCondition === 'Boleto') {
            newInstallments = "30 / 60 dias";
        } else if (newCondition === 'Cartão') {
            newInstallments = "1x (30 Dias)";
        } else if (newCondition === 'À vista') {
            newInstallments = '';
        }

        const finalAmount = calculateFinalAmount(
            newCondition,
            newInstallments,
            paymentData.originalValue
        );

        setPaymentData({
            ...paymentData,
            paymentCondition: newCondition,
            installments: newInstallments,
            finalChargedAmount: finalAmount
        });
    };

    const handleInstallmentsChange = (e) => {
        const newInstallments = e.target.value;

        const finalAmount = calculateFinalAmount(
            paymentData.paymentCondition,
            newInstallments,
            paymentData.originalValue
        );

        setPaymentData({
            ...paymentData,
            installments: newInstallments,
            finalChargedAmount: finalAmount
        });
    };

    const handleConfirm = () => {
        onConfirm(paymentData);
        onClose();
    };

    const combinedOptions = useMemo(() => {
        const paymentType = paymentData.paymentCondition;
        if (paymentType === 'À vista') return [];
        const defaultOpts = installmentOptions[paymentType] || [];
        const customOpts = (customOptions && customOptions[paymentType]) || [];
        return [...defaultOpts, ...customOpts];
    }, [paymentData.paymentCondition, customOptions]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-[100] flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl border border-slate-200 space-y-6 animate-in zoom-in-95">
                <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                        <DollarSign size={24} />
                    </div>
                    <div>
                        <h3 className="text-xl font-black text-slate-900">Condições de Pagamento</h3>
                        <p className="text-slate-500 text-sm">
                            {orderNumber
                                ? `Configurar pagamento para OS ${orderNumber}`
                                : `Ajuste as condições para ${selectedOrdersCount} OS(s) selecionadas`
                            }
                        </p>
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-400 uppercase">Valor Original</label>
                        <div className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl font-black text-2xl text-slate-800 text-center">
                            R$ {paymentData.originalValue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </div>

                        {paymentData.finalChargedAmount !== paymentData.originalValue && (
                            <div className="mt-4 space-y-2 animate-in fade-in">
                                <label className="text-xs font-bold text-green-600 uppercase">Valor com Desconto (5%)</label>
                                <div className="w-full p-4 bg-green-50 border-2 border-green-200 rounded-2xl font-black text-2xl text-green-800 text-center">
                                    R$ {paymentData.finalChargedAmount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                                    <div className="text-sm text-green-600 font-bold mt-2">
                                        ✓ Desconto de 5% aplicado
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-400 uppercase">Condição de Pagamento</label>
                        <AccessibleSelect
                            value={paymentData.paymentCondition}
                            onChange={handlePaymentConditionChange}
                            options={['À vista', 'Boleto', 'Cartão']}
                            label="Condição de pagamento"
                        />
                    </div>

                    {(paymentData.paymentCondition === 'Boleto' || paymentData.paymentCondition === 'Cartão') && (
                        <div className="space-y-2 animate-in fade-in">
                            <label className="text-xs font-bold text-slate-400 uppercase">Parcelas</label>

                            <InstallmentSelect
                                value={paymentData.installments}
                                onChange={handleInstallmentsChange}
                                paymentCondition={paymentData.paymentCondition}
                                options={combinedOptions}
                                customOptions={customOptions[paymentData.paymentCondition] || []}
                                onDeleteOption={onDeleteOption}
                                userRole={userRole}
                                showAddOption={paymentData.paymentCondition === 'Boleto' && userRole === 'admin'}
                                onAddOption={onAddOption}
                            />
                        </div>
                    )}

                    <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                        <div className="flex items-center gap-2 text-blue-600 mb-2">
                            <Info size={16} />
                            <span className="text-xs font-bold uppercase">Informação</span>
                        </div>
                        <p className="text-xs text-blue-700">
                            Estas condições de pagamento serão aplicadas a todas as {selectedOrdersCount} OS(s) selecionadas e salvas no sistema.
                        </p>
                    </div>
                </div>

                <div className="flex gap-3">
                    <button
                        onClick={onClose}
                        className="flex-1 py-4 rounded-xl font-bold text-slate-500 hover:bg-slate-100 transition-colors"
                    >
                        Cancelar
                    </button>
                    <button
                        onClick={handleConfirm}
                        className="flex-1 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 shadow-xl shadow-blue-200 transition-colors flex items-center justify-center gap-2"
                    >
                        <Check size={20} /> Confirmar e Imprimir
                    </button>
                </div>
            </div>
        </div>
    );
};

const OrderActionsDropdown = ({ order, openModal, openViewModal, openNewWithClient, handleNewAssociatedOS, confirmDelete, userData, hasPermission, openHistoryModal }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Fecha ao clicar fora
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const toggleDropdown = (e) => {
        e.stopPropagation(); // Impede propagação para a linha da tabela
        setIsOpen(prev => !prev);
    };

    const handleAction = (callback, ...args) => (e) => {
        e.stopPropagation();
        setIsOpen(false);
        if (callback) callback(...args);
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={toggleDropdown}
                className="p-2.5 bg-white border shadow-sm hover:bg-slate-50 rounded-xl transition-all"
                title="Ações"
            >
                <MoreVertical size={18} />
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-1 bg-white border border-slate-200 rounded-xl shadow-xl z-[200] min-w-[160px] animate-in fade-in slide-in-from-top-2">
                    <button
                        onClick={handleAction(openViewModal, order)}
                        className="w-full flex items-center gap-3 px-4 py-3 text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors text-sm font-medium"
                    >
                        <Eye size={18} /> Exibir
                    </button>

                    {userData?.role !== 'client' && (
                        <>
                            <button
                                onClick={handleAction(openHistoryModal, order)}
                                className="w-full flex items-center gap-3 px-4 py-3 text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors text-sm font-medium"
                            >
                                <Clock size={18} /> Histórico
                            </button>

                            <button
                                onClick={handleAction(openNewWithClient, order)}
                                className="w-full flex items-start gap-3 px-4 py-3 text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors text-sm font-medium"
                            >
                                <Plus size={18} className="flex-shrink-0 mt-0.5" />
                                <span className="flex-1 text-left leading-tight">OS com mesmo cliente</span>
                            </button>

                            <button
                                onClick={handleAction(handleNewAssociatedOS, order)}
                                className="w-full flex items-start gap-3 px-4 py-3 text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors text-sm font-medium"
                            >
                                <Link2 size={18} className="flex-shrink-0 mt-0.5" />
                                <span className="flex-1 text-left leading-tight">OS associada</span>
                            </button>

                            <button
                                onClick={handleAction(openModal, order, false)}
                                className="w-full flex items-center gap-3 px-4 py-3 text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors text-sm font-medium"
                            >
                                <Edit2 size={18} /> Editar
                            </button>

                            {hasPermission('canDeleteOS') && (
                                <button
                                    onClick={handleAction(confirmDelete, order)}
                                    className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 transition-colors text-sm font-medium"
                                >
                                    <Trash2 size={18} /> Excluir
                                </button>
                            )}
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

const SupplierActionsDropdown = ({ supplier, onEdit, onDelete, userData }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={(e) => { e.stopPropagation(); setIsOpen(!isOpen); }}
                className="p-2.5 bg-white border shadow-sm hover:bg-slate-50 rounded-xl transition-all"
                title="Ações"
            >
                <MoreVertical size={18} />
            </button>
            {isOpen && (
                <div className="absolute right-0 mt-1 bg-white border border-slate-200 rounded-xl shadow-xl z-[200] min-w-[140px] animate-in fade-in slide-in-from-top-2">
                    <button
                        onClick={(e) => { e.stopPropagation(); setIsOpen(false); onEdit(supplier); }}
                        className="w-full flex items-center gap-3 px-4 py-3 text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors text-sm font-medium"
                    >
                        <Edit2 size={18} /> Editar
                    </button>
                    {userData?.role === 'admin' && supplier.isRegistered && (
                        <button
                            onClick={(e) => { e.stopPropagation(); setIsOpen(false); onDelete(supplier); }}
                            className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 transition-colors text-sm font-medium"
                        >
                            <Trash2 size={18} /> Excluir
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

const SuggestionInput = ({
    value,
    onChange,
    suggestions,
    placeholder,
    className = "",
    disabled = false,
    onBlur,
    onRemoveSuggestion,
    userRole
}) => {
    const [showSuggestions, setShowSuggestions] = useState(false);
    const dropdownRef = useRef(null);
    const inputRef = useRef(null);

    useOutsideClick(dropdownRef, () => setShowSuggestions(false));

    const filteredSuggestions = suggestions
        .filter(s => s.toLowerCase().includes(value.toLowerCase()))
        .slice(0, 5);

    return (
        <div className="relative w-full">
            <input
                ref={inputRef}
                type="text"
                className={`w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none font-bold ${className} ${disabled ? 'cursor-not-allowed opacity-70' : ''}`}
                value={value}
                onChange={onChange}
                onFocus={() => setShowSuggestions(true)}
                onBlur={(e) => {
                    setTimeout(() => setShowSuggestions(false), 200);
                    if (onBlur) onBlur(e);
                }}
                placeholder={placeholder}
                disabled={disabled}
                autoComplete="off"
            />
            {showSuggestions && filteredSuggestions.length > 0 && (
                <div
                    ref={dropdownRef}
                    className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden z-50 max-h-48 overflow-y-auto animate-in slide-in-from-top-2"
                >
                    <div className="p-2 bg-slate-50 text-[10px] uppercase font-bold text-slate-400 flex justify-between items-center">
                        <span>Sugestões</span>
                    </div>
                    {filteredSuggestions.map((s, idx) => (
                        <div
                            key={idx}
                            className="flex items-center justify-between p-3 hover:bg-blue-50 cursor-pointer border-b border-slate-50 text-sm text-slate-700 group"
                        >
                            <span
                                className="flex-1"
                                onMouseDown={(e) => {
                                    e.preventDefault();
                                    onChange({ target: { value: s } });
                                    setShowSuggestions(false);
                                }}
                            >
                                {s}
                            </span>
                            {userRole === 'admin' && onRemoveSuggestion && (
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        e.preventDefault();
                                        onRemoveSuggestion(s);
                                    }}
                                    className="p-1 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                    title="Remover sugestão"
                                >
                                    <X size={14} />
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default function MainApp() {

    const FIELD_LABELS = {
        client: 'Cliente',
        cnpj: 'CNPJ',
        contactPerson: 'Contato do Cliente',
        address: 'Endereço',
        email: 'E-mail',
        billingType: 'Tipo de Atendimento',
        maintenanceVisit: 'Visita de Manutenção',
        item: 'Equipamento',
        manufacturer: 'Fabricante',
        model: 'Modelo',
        serial: 'Número de Série',
        equipmentObservation: 'Observações do Equipamento',
        quantity: 'Quantidade',
        defect: 'Defeitos',
        defectsList: 'Lista de Defeitos',
        solutionType: 'Tipo de Solução',
        solution: 'Soluções',
        manualSolutionsList: 'Lista de Soluções Manuais',
        benchRepairList: 'Etapas de Conserto em Bancada',
        solutionsList: 'Lista de Soluções com Custos',
        notRepairableDetail: 'Detalhe de Substituição',
        costThirdPartyName: 'Nome do Terceiro',
        costThirdPartyShipping: 'Frete Terceiro',
        costParts: 'Custo de Peças',
        costClientShipping: 'Frete Cliente',
        chargedAmount: 'Valor Cobrado',
        paymentCondition: 'Condição de Pagamento',
        installments: 'Parcelas',
        discount5Days: 'Desconto 5 dias',
        discountAmount: 'Valor do Desconto',
        finalChargedAmount: 'Valor Final',
        status: 'Status',
        statusDate: 'Data do Status',
        trackingCode: 'Código de Rastreio',
        sentToThirdParty: 'Enviado para Terceiro',
        thirdPartyInfo: 'Informações do Terceiro',
        thirdPartyTracking: 'Rastreio do Terceiro',
        thirdPartyDate: 'Data do Terceiro',
        osNumber: 'Número da OS',
        deliveryDeadline: 'Prazo de Entrega',
        photos: 'Fotos',
        linkedOS: 'OS Vinculadas'
    };

    // === AUTENTICAÇÃO ===
    const { user, userData, loading: authLoading, hasPermission, logout } = useAuth();

    // Estados para busca no Histórico do produto (três campos)
    const [historySearchSerial, setHistorySearchSerial] = useState('');
    const [historySearchItem, setHistorySearchItem] = useState('');
    const [historySearchManufacturer, setHistorySearchManufacturer] = useState('');

    // Estados de controle das sugestões
    const [showHistorySerialSuggestions, setShowHistorySerialSuggestions] = useState(false);
    const [showHistoryItemSuggestions, setShowHistoryItemSuggestions] = useState(false);
    const [showHistoryManufSuggestions, setShowHistoryManufSuggestions] = useState(false);

    const historyItemInputRef = useRef(null);
    const historyManufInputRef = useRef(null);

    const [showAddBoletoInput, setShowAddBoletoInput] = useState(false);
    const [newBoletoOption, setNewBoletoOption] = useState('');

    const [isContractViewMode, setIsContractViewMode] = useState(false);

    const [historyFilteredOrders, setHistoryFilteredOrders] = useState([]);
    const [historyDropdownOpen, setHistoryDropdownOpen] = useState(null);
    const historySerialInputRef = useRef(null);


    const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false);
    const [selectedOrderForHistory, setSelectedOrderForHistory] = useState(null);

    const [isClientPaymentModalOpen, setIsClientPaymentModalOpen] = useState(false);
    const [orderForPayment, setOrderForPayment] = useState(null);
    const [isRejectModalOpen, setIsRejectModalOpen] = useState(false);
    const [orderToReject, setOrderToReject] = useState(null);

    const modalRef = useRef(null);
    const contractModalRef = useRef(null);
    const deleteModalRef = useRef(null);
    const moveModalRef = useRef(null);
    const searchDropdownRef = useRef(null);
    const statusSearchDropdownRef = useRef(null);
    const [dropdownOpen, setDropdownOpen] = useState(null);
    const [isViewMode, setIsViewMode] = useState(false);

    const [selectedMonth, setSelectedMonth] = useState('');
    const [selectedYear, setSelectedYear] = useState('');
    const [selectedDay, setSelectedDay] = useState('');

    const [showSearchDropdown, setShowSearchDropdown] = useState(false);
    const [showStatusSearchDropdown, setShowStatusSearchDropdown] = useState(false);

    // Adicione estes hooks junto com os outros hooks
    useOutsideClick(historySerialInputRef, () => setShowHistorySerialSuggestions(false));

    useOutsideClick(searchDropdownRef, () => {
        if (showSearchDropdown) {
            setShowSearchDropdown(false);
        }
    });

    useOutsideClick(statusSearchDropdownRef, () => {
        if (showStatusSearchDropdown) {
            setShowStatusSearchDropdown(false);
        }
    });

    const [showBenchRepairSuggestions, setShowBenchRepairSuggestions] = useState(false);


    // Estados

    const [customOptions, setCustomOptions] = useState({ Boleto: [], Cartão: [] });

    // === AVISOS ===
    const DEFAULT_ALERT_THRESHOLDS = {
        'Recebido': 1,
        'Em inspeção': 2,
        'Em orçamento': 1,
        'Em manutenção': 5,
        'Aguardando aprovação': 5,
    };

    const [alertThresholds, setAlertThresholds] = useState(DEFAULT_ALERT_THRESHOLDS);
    const [alertsTab, setAlertsTab] = useState('list'); // 'list' | 'settings'
    const [savingThresholds, setSavingThresholds] = useState(false);
    const [editingThresholds, setEditingThresholds] = useState({ ...DEFAULT_ALERT_THRESHOLDS });
    const [alertSortDir, setAlertSortDir] = useState('desc'); // 'desc' = mais dias primeiro
    const [alertStatusFilter, setAlertStatusFilter] = useState(null);

    useEffect(() => {
        const unsub = onSnapshot(
            collection(db, 'artifacts', finalAppId, 'public', 'data', 'customOptions'),
            (snap) => {
                const options = { Boleto: [], Cartão: [] };
                snap.docs.forEach(doc => {
                    const data = doc.data();
                    if (data.paymentType && Array.isArray(data.options)) {
                        options[data.paymentType] = data.options;
                    }
                });
                setCustomOptions(options);
            },
            (error) => console.error('Erro ao buscar opções personalizadas:', error)
        );
        return unsub;
    }, []);

    // Listener para limites de avisos
    useEffect(() => {
        const unsub = onSnapshot(
            doc(db, 'artifacts', finalAppId, 'public', 'data', 'alertConfig', 'thresholds'),
            (snap) => {
                if (snap.exists()) {
                    const data = snap.data();
                    setAlertThresholds(prev => ({ ...prev, ...data }));
                    setEditingThresholds(prev => ({ ...prev, ...data }));
                }
            },
            (error) => console.error('Erro ao buscar configurações de avisos:', error)
        );
        return unsub;
    }, []);

    // Estado para sugestões ocultas
    const [hiddenSuggestions, setHiddenSuggestions] = useState({ defects: [], solutions: [] });

    // Listener para sugestões ocultas
    useEffect(() => {
        const unsub = onSnapshot(
            collection(db, 'artifacts', finalAppId, 'public', 'data', 'hiddenSuggestions'),
            (snap) => {
                const hidden = { defects: [], solutions: [], billing: [], visit: [] };
                snap.docs.forEach(doc => {
                    const data = doc.data();
                    if (data.type === 'defect') hidden.defects.push(data.value);
                    if (data.type === 'solution') hidden.solutions.push(data.value);
                    if (data.type === 'billing') hidden.billing.push(data.value);
                    if (data.type === 'visit') hidden.visit.push(data.value);
                });
                setHiddenSuggestions(hidden);
            },
            (error) => console.error('Erro ao buscar sugestões ocultas:', error)
        );
        return unsub;
    }, []);

    const [currentPage, setCurrentPage] = useState('os');
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [showValues, setShowValues] = useState(true);
    const [orders, setOrders] = useState([]);

    // Autocomplete: ao preencher o NS, busca o equipamento correspondente e preenche Item e Marca
    useEffect(() => {
        const serial = historySearchSerial.trim();
        if (serial && serial !== '-') {
            const foundOrder = orders.find(o => o.serial && o.serial.trim() === serial);
            if (foundOrder) {
                setHistorySearchItem(foundOrder.item || '');
                setHistorySearchManufacturer(foundOrder.manufacturer || '');
            } else {
                // Se o NS não for encontrado, limpa os campos? (opcional, mantemos como está)
                // setHistorySearchItem('');
                // setHistorySearchManufacturer('');
            }
        }
    }, [historySearchSerial, orders]);

    // FILTRAR ORDENS POR USUÁRIO CLIENTE
    const ordersForUser = useMemo(() => {
        let filteredOrders = orders;

        if (userData?.role === 'client' && userData.displayName) {
            filteredOrders = filteredOrders.filter(order =>
                order.client === userData.displayName
            );
        }

        return filteredOrders;
    }, [orders, userData]);

    const [contracts, setContracts] = useState([]);
    const [clients, setClients] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortField, setSortField] = useState('osNumber');
    const [sortDirection, setSortDirection] = useState('desc');

    const [rangeInput, setRangeInput] = useState('');
    const [showRangeInput, setShowRangeInput] = useState(false);

    // === FILTROS AVANÇADOS ===
    const [filtersOpen, setFiltersOpen] = useState(false);
    const [filterClient, setFilterClient] = useState('');
    const [filterCNPJ, setFilterCNPJ] = useState('');
    const [filterSerial, setFilterSerial] = useState('');
    const [filterItem, setFilterItem] = useState('');
    const [filterManufacturer, setFilterManufacturer] = useState('');
    const [filterModel, setFilterModel] = useState('');
    const [filterStatus, setFilterStatus] = useState('');
    const [showFilterClientSug, setShowFilterClientSug] = useState(false);
    const [showFilterItemSug, setShowFilterItemSug] = useState(false);
    const [showFilterManufSug, setShowFilterManufSug] = useState(false);
    const [showFilterModelSug, setShowFilterModelSug] = useState(false);
    const [showFilterSerialSug, setShowFilterSerialSug] = useState(false);
    const filterPanelRef = useRef(null);

    // Estados de sugestões/autocomplete
    const [showClientSuggestions, setShowClientSuggestions] = useState(false);
    const [showDefectSuggestions, setShowDefectSuggestions] = useState(false);
    const [showSolutionSuggestions, setShowSolutionSuggestions] = useState(false);
    const [showItemSuggestions, setShowItemSuggestions] = useState(false);
    const [showManufacturerSuggestions, setShowManufacturerSuggestions] = useState(false);
    const [showModelSuggestions, setShowModelSuggestions] = useState(false);
    const [showSerialSuggestions, setShowSerialSuggestions] = useState(false);

    // Estados dos Modais
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isFinancialOpen, setIsFinancialOpen] = useState(false);
    const [isContractModalOpen, setIsContractModalOpen] = useState(false);
    const [isNewContractMode, setIsNewContractMode] = useState(false);
    const [isMoveModalOpen, setIsMoveModalOpen] = useState(false);
    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

    const [creatingLinkedToOrder, setCreatingLinkedToOrder] = useState(null);

    const [editingOrder, setEditingOrder] = useState(null);
    const [orderToDelete, setOrderToDelete] = useState(null);
    const [isSaving, setIsSaving] = useState(false);
    const [selectedOrders, setSelectedOrders] = useState([]);

    // Estados temporários para adicionar itens às listas
    const [tempSolution, setTempSolution] = useState('');
    const [tempCost, setTempCost] = useState('');
    const [tempDefect, setTempDefect] = useState('');
    const [tempManualSolution, setTempManualSolution] = useState('');
    const [tempBenchRepair, setTempBenchRepair] = useState('');

    // --- ESTADO DO FORMULÁRIO OS (ATUALIZADO) ---
    const [formData, setFormData] = useState({
        client: '', cnpj: '', contactPerson: '', address: '', email: '',
        billingType: '', maintenanceVisit: '',
        item: '', manufacturer: '', model: '', serial: '',
        equipmentObservation: '',
        quantity: '1',
        defect: '',
        defectsList: [],
        solutionType: 'Preenchimento manual',
        solution: '',
        manualSolutionsList: [],
        benchRepairList: [],
        solutionsList: [],
        notRepairableDetail: '',
        costThirdPartyName: '', costThirdPartyShipping: '', costClientShipping: '', costParts: '',
        chargedAmount: '', paymentCondition: 'À vista', installments: '',
        status: 'Recebido',
        statusDate: new Date().toISOString().split('T')[0],
        statusHistory: [],
        trackingCode: '', sentToThirdParty: 'Não',
        thirdPartyInfo: '', thirdPartyTracking: '', thirdPartyDate: '',
        osNumber: '',
        deliveryDeadline: '',
        discount5Days: false,
        discountAmount: 0,
        finalChargedAmount: 0,
        photos: [] // NOVO: Campo para fotos
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
        observations: '',
        isActive: true,
        attachments: []
    });

    // === ESTADOS CONTRATOS (VIEW / FILTRO) ===
    const [contractActivityFilter, setContractActivityFilter] = useState('all');
    const [isContractViewModalOpen, setIsContractViewModalOpen] = useState(false);
    const [contractToView, setContractToView] = useState(null);
    const [uploadingContractAttachments, setUploadingContractAttachments] = useState(false);

    // === ESTADOS INVENTÁRIO / FORNECEDORES (leitura das OS) ===
    const [inventorySearch, setInventorySearch] = useState('');
    const [supplierSearch, setSupplierSearch] = useState('');

    // === ESTADOS FORNECEDORES (Firestore) ===
    const [supplierRecords, setSupplierRecords] = useState([]);
    const [isSupplierModalOpen, setIsSupplierModalOpen] = useState(false);
    const [editingSupplier, setEditingSupplier] = useState(null);
    const [supplierFormData, setSupplierFormData] = useState({
        name: '', cpf: '', email: '', contactPerson: '', address: '', observations: ''
    });

    // === ESTADOS DE VALIDAÇÃO ===
    const [fieldErrors, setFieldErrors] = useState({
        client: false,
        item: false,
        defect: false,
        solution: false,
        notRepairableDetail: false,
        solutionsList: false,
        benchRepairList: false
    });

    // === ESTADO DE NOTIFICAÇÃO ===
    const [notification, setNotification] = useState({
        show: false,
        message: '',
        type: 'error',
    });

    // === ESTADO PARA MOVIMENTAR OS ===
    const [moveStatus, setMoveStatus] = useState('Recebido');
    const [moveDate, setMoveDate] = useState(new Date().toISOString().split('T')[0]);

    // === ESTADO PARA MODAL DE PAGAMENTO ===
    const [paymentModalData, setPaymentModalData] = useState({
        totalOriginalValue: 0,
        paymentCondition: 'À vista',
        installments: '',
        discount5Days: false,
        finalChargedAmount: 0,
        customOptions: []
    });
    // === ESTADOS PARA FILTROS NO PAINEL DE STATUS ===
    const [statusFilter, setStatusFilter] = useState(null);
    const [billingFilter, setBillingFilter] = useState(null);

    // === ESTADO PARA UPLOAD DE FOTOS ===
    const [uploadingPhotos, setUploadingPhotos] = useState(false);

    const TIMELINE_STEPS = [
        { value: "Recebido", label: "Recebido", color: "#4ea5d3" },       // azul claro
        { value: "Em inspeção", label: "Inspeção", color: "#8b5cf6" },    // roxo
        { value: "Em orçamento", label: "Orçamento", color: "#f8ca55" },  // amarelo
        { value: "Aguardando aprovação", label: "Aprovação", color: "#1e40af" }, // azul escuro
        { value: "Em manutenção", label: "Manutenção", color: "#6b8e23" }, // verde musgo
        { value: "Em rota de entrega", label: "Entrega", color: "#a855f7" }, // violeta
        { value: "Finalizado", label: "Finalizado", color: "#10b981" }     // verde esmeralda
    ];

    const statusColors = {
        'Recebido': '#4ea5d3',
        'Em inspeção': '#8b5cf6',
        'Em orçamento': '#f8ca55',
        'Aguardando aprovação': '#1e40af',
        'Em manutenção': '#6b8e23',
        'Em rota de entrega': '#a855f7',
        'Finalizado': '#10b981',
        'Orçamento recusado': '#ef4444',
    };


    const statusOptions = [...TIMELINE_STEPS.map(s => s.value), "Orçamento recusado"];
    const billingOptions = ["Avulso", "Cortesia (visita sem custo)", "Contrato de manutenção"];

    const solutionOptions = [
        "Preenchimento manual",
        "Manual com custos detalhados",
        "Conserto em bancada",
        "Não passível de conserto, substituir por novo equipamento / material"
    ];

    const installmentOptions = {
        'Boleto': [
            "30 / 60 dias",
            "5 dias (5% de desconto)"
        ],
        'Cartão': [
            "1x (30 Dias)",
            "2x (30/60 Dias)",
            "3x (30/60/90 Dias)",
            "4x (30/60/90/120 Dias)"
        ]
    };

    // === FUNÇÕES UTILITÁRIAS ===

    // Encontra todas as OS no mesmo grupo de vínculos (grafo não-direcionado via BFS)
    const findLinkedGroup = useCallback((orderId) => {
        const visited = new Set();
        const queue = [orderId];

        while (queue.length > 0) {
            const currentId = queue.shift();
            if (visited.has(currentId)) continue;
            visited.add(currentId);

            // Links diretos da OS atual
            const currentOrder = orders.find(o => o.firestoreId === currentId);
            const directLinks = currentOrder?.linkedOS || [];

            // Links inversos: OSs que têm o currentId em seu linkedOS
            const inverseLinks = orders
                .filter(o => o.linkedOS && o.linkedOS.includes(currentId))
                .map(o => o.firestoreId);

            // Une todos os vizinhos (sem duplicatas)
            const allNeighbors = [...new Set([...directLinks, ...inverseLinks])];

            for (const neighborId of allNeighbors) {
                if (!visited.has(neighborId)) {
                    queue.push(neighborId);
                }
            }
        }
        return Array.from(visited);
    }, [orders]);

    // Alterna seleção de uma OS e todo seu grupo de vínculos
    const toggleOrderSelectionWithLinked = useCallback((orderId) => {
        setSelectedOrders(prev => {
            const isSelected = prev.includes(orderId);

            if (!isSelected) {
                // Marcar: adiciona todo o grupo de vínculos
                const group = findLinkedGroup(orderId);
                return [...new Set([...prev, ...group])];
            } else {
                // Desmarcar: remove apenas a OS clicada, mantendo as demais do grupo
                return prev.filter(id => id !== orderId);
            }
        });
    }, [findLinkedGroup]);

    const MaintenanceVisitSelect = ({ value, onChange, uniqueMaintenanceVisits }) => {
        const defaultOptions = [
            `1ª Visita de ${MESES[new Date().getMonth()]}`,
            `2ª Visita de ${MESES[new Date().getMonth()]}`,
            `3ª Visita de ${MESES[new Date().getMonth()]}`,
            `4ª Visita de ${MESES[new Date().getMonth()]}`
        ];

        const suggestions = useMemo(() => {
            const combined = [...new Set([...defaultOptions, ...(uniqueMaintenanceVisits || [])])];
            return combined.sort();
        }, [uniqueMaintenanceVisits, defaultOptions]);

        return (
            <SuggestionInput
                value={value}
                onChange={onChange}
                suggestions={suggestions}
                placeholder="Selecione ou digite a visita"
            />
        );
    };

    const SelectLinkedOS = ({ currentOSId, selectedIds, onChange }) => {
        const [search, setSearch] = useState('');
        const [isOpen, setIsOpen] = useState(false);
        const dropdownRef = useRef(null);

        useOutsideClick(dropdownRef, () => setIsOpen(false));

        // Filtrar OS que não são a atual e que correspondem à busca
        const availableOS = ordersForUser
            .filter(o => o.firestoreId !== currentOSId)
            .filter(o =>
                o.osNumber?.toLowerCase().includes(search.toLowerCase()) ||
                o.client?.toLowerCase().includes(search.toLowerCase()) ||
                o.item?.toLowerCase().includes(search.toLowerCase())
            );

        const toggleOS = (id) => {
            if (selectedIds.includes(id)) {
                onChange(selectedIds.filter(i => i !== id));
            } else {
                onChange([...selectedIds, id]);
            }
        };

        return (
            <div className="relative" ref={dropdownRef}>
                <div
                    className="w-full p-3 bg-white border border-slate-200 rounded-xl cursor-pointer flex items-center justify-between"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="text-sm font-medium">
                        {selectedIds.length === 0
                            ? 'Nenhuma OS vinculada'
                            : `${selectedIds.length} OS(s) vinculada(s)`}
                    </span>
                    <ChevronDown size={18} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </div>

                {isOpen && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-slate-200 z-50 max-h-80 overflow-y-auto p-2">
                        <div className="sticky top-0 bg-white p-2 border-b">
                            <input
                                type="text"
                                placeholder="Buscar por OS, cliente, equipamento..."
                                className="w-full p-2 border border-slate-200 rounded-lg text-sm"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                autoFocus
                            />
                        </div>
                        <div className="space-y-1 mt-2">
                            {availableOS.map(os => (
                                <div
                                    key={os.firestoreId}
                                    className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer hover:bg-blue-50 ${selectedIds.includes(os.firestoreId) ? 'bg-blue-100' : ''
                                        }`}
                                    onClick={() => toggleOS(os.firestoreId)}
                                >
                                    <input
                                        type="checkbox"
                                        checked={selectedIds.includes(os.firestoreId)}
                                        onChange={() => { }}
                                        className="w-4 h-4 text-blue-600 rounded border-slate-300"
                                    />
                                    <div className="flex-1 min-w-0">
                                        <div className="font-bold text-xs">{os.osNumber}</div>
                                        <div className="text-xs truncate">{os.client}</div>
                                        <div className="text-[10px] text-slate-500 truncate">{os.item}</div>
                                    </div>
                                </div>
                            ))}
                            {availableOS.length === 0 && (
                                <div className="text-center py-4 text-slate-400 text-sm">Nenhuma OS disponível</div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        );
    };

    // Função para aprovar orçamento

    const formatDateBR = (dateString) => {
        if (!dateString) return 'Sem data';
        const [year, month, day] = dateString.split('-');
        if (!year || !month || !day) return dateString; // fallback
        return `${day}/${month}/${year}`;
    };

    const handleHistorySearch = (e) => {
        e.preventDefault();

        if (!historySearchSerial.trim() || !historySearchItem.trim() || !historySearchManufacturer.trim()) {
            showNotification('Preencha os três campos: Número de Série, Item e Marca', 'warning');
            return;
        }

        const serialTerm = historySearchSerial.trim().toLowerCase();
        const itemTerm = historySearchItem.trim().toLowerCase();
        const manufTerm = historySearchManufacturer.trim().toLowerCase();

        const filtered = orders.filter(o => {
            const matchesSerial = o.serial && o.serial.toLowerCase().includes(serialTerm);
            const matchesItem = o.item && o.item.toLowerCase().includes(itemTerm);
            const matchesManuf = o.manufacturer && o.manufacturer.toLowerCase().includes(manufTerm);
            return matchesSerial && matchesItem && matchesManuf;
        });

        setHistoryFilteredOrders(filtered);
        if (filtered.length === 0) {
            showNotification('Nenhuma OS encontrada com a combinação de NS, Item e Marca informados.', 'info');
        }
    };

    const handleNewAssociatedOS = (order) => {
        setFormData({
            ...EMPTY_FORM_DATA,
            client: order.client,
            cnpj: order.cnpj || '',
            contactPerson: order.contactPerson || '',
            email: order.email || '',
            address: order.address || '',
            osNumber: generateNextOsNumber(ordersForUser),
            linkedOS: [order.firestoreId],
            statusDate: new Date().toISOString().split('T')[0],
            statusHistory: [{
                status: 'Recebido',
                date: new Date().toISOString().split('T')[0],
                timestamp: Date.now(),
                user: userData?.displayName || user?.email || 'Sistema'
            }]
        });
        setEditingOrder(null);
        setCreatingLinkedToOrder(order.firestoreId);
        setIsModalOpen(true);
        setDropdownOpen(null);
    };

    const handleApproveBudget = async (order) => {
        if (!order) return;

        try {
            // Atualizar status para "Aguardando aprovação"
            await updateDoc(doc(db, 'artifacts', finalAppId, 'public', 'data', 'serviceOrders', order.firestoreId), {
                status: 'Aguardando aprovação',
                statusDate: new Date().toISOString().split('T')[0],
                statusHistory: [...(order.statusHistory || []), {
                    status: 'Aguardando aprovação',
                    date: new Date().toISOString().split('T')[0],
                    timestamp: Date.now(),
                    user: userData?.displayName || user?.email || 'Sistema'
                }]
            });

            showNotification('Orçamento aprovado! Agora selecione o método de pagamento.', 'success');

            // Abrir modal ESPECÍFICO para cliente (não o modal de impressão)
            setTimeout(() => {
                openClientPaymentModal(order);
            }, 500);

        } catch (error) {
            console.error('Erro ao aprovar orçamento:', error);
            showNotification('Erro ao aprovar orçamento. Tente novamente.', 'error');
        }
    };

    const handleRejectBudget = (order) => {
        if (!order) return;

        setOrderToReject(order);
        setIsRejectModalOpen(true);
    };

    // Crie uma função separada para confirmar a recusa
    const confirmRejectBudget = async (order) => {
        if (!order) return;

        try {
            await updateDoc(doc(db, 'artifacts', finalAppId, 'public', 'data', 'serviceOrders', order.firestoreId), {
                status: 'Orçamento recusado',
                statusDate: new Date().toISOString().split('T')[0],
                statusHistory: [...(order.statusHistory || []), {
                    status: 'Orçamento recusado',
                    date: new Date().toISOString().split('T')[0],
                    timestamp: Date.now(),
                    user: userData?.displayName || user?.email || 'Sistema'
                }]
            });

            showNotification('Orçamento recusado com sucesso!', 'success');

        } catch (error) {
            console.error('Erro ao recusar orçamento:', error);
            showNotification('Erro ao recusar orçamento. Tente novamente.', 'error');
        }
    };

    const openClientPaymentModal = (order) => {
        setOrderForPayment(order);
        setIsClientPaymentModalOpen(true);
    };

    const handleConfirmClientPayment = async (paymentData) => {
        if (!orderForPayment) return;

        try {
            // Atualizar a OS com as condições de pagamento
            await updateDoc(doc(db, 'artifacts', finalAppId, 'public', 'data', 'serviceOrders', orderForPayment.firestoreId), {
                paymentCondition: paymentData.paymentCondition,
                installments: paymentData.installments,
                discount5Days: paymentData.paymentCondition === 'Boleto' &&
                    paymentData.installments === "5 dias (5% de desconto)",
                finalChargedAmount: paymentData.finalChargedAmount,
                status: 'Em manutenção',
                statusDate: new Date().toISOString().split('T')[0],
                statusHistory: [...(orderForPayment.statusHistory || []), {
                    status: 'Em manutenção',
                    date: new Date().toISOString().split('T')[0],
                    timestamp: Date.now(),
                    user: userData?.displayName || user?.email || 'Cliente'
                }],
                clientUid: user?.uid || null,
                clientEmail: user?.email || null,
                approvedBy: userData?.displayName || user?.email || 'Cliente'
            });

            showNotification('Pagamento confirmado! OS agora está em manutenção.', 'success');
            setIsClientPaymentModalOpen(false);
            setOrderForPayment(null);

        } catch (error) {
            console.error('Erro ao confirmar pagamento:', error);
            showNotification('Erro ao confirmar pagamento. Tente novamente.', 'error');
        }
    };

    const handleSelectByRange = () => {
        if (!rangeInput.trim()) {
            showNotification('Digite um intervalo válido (ex: 10-20 ou 10,20,30)', 'error');
            return;
        }

        const visibleOrders = sortedOrders.filter(o =>
            o.client?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            o.osNumber?.includes(searchTerm)
        );

        let orderIdsToSelect = [];

        try {
            // Verifica se é um intervalo (ex: 10-20 ou 20-10)
            if (rangeInput.includes('-')) {
                let [firstStr, secondStr] = rangeInput.split('-').map(s => s.trim());
                let start = parseInt(firstStr);
                let end = parseInt(secondStr);

                if (isNaN(start) || isNaN(end)) {
                    showNotification('Formato inválido. Use: 10-20 ou 10,20,30', 'error');
                    return;
                }

                // Se o primeiro número for maior que o segundo, inverte a ordem
                if (start > end) {
                    [start, end] = [end, start]; // Troca os valores
                }

                orderIdsToSelect = visibleOrders
                    .filter(order => {
                        const osNumMatch = order.osNumber?.match(/^(\d+)\//);
                        if (!osNumMatch) return false;

                        const osNum = parseInt(osNumMatch[1]);
                        return !isNaN(osNum) && osNum >= start && osNum <= end;
                    })
                    .map(order => order.firestoreId);
            }
            // Verifica se é uma lista (ex: 10,20,30)
            else if (rangeInput.includes(',')) {
                const numbers = rangeInput.split(',')
                    .map(s => parseInt(s.trim()))
                    .filter(num => !isNaN(num));

                if (numbers.length === 0) {
                    showNotification('Formato inválido. Use números separados por vírgula', 'error');
                    return;
                }

                orderIdsToSelect = visibleOrders
                    .filter(order => {
                        const osNumMatch = order.osNumber?.match(/^(\d+)\//);
                        if (!osNumMatch) return false;

                        const osNum = parseInt(osNumMatch[1]);
                        return numbers.includes(osNum);
                    })
                    .map(order => order.firestoreId);
            }
            // Apenas um número específico
            else {
                const num = parseInt(rangeInput.trim());
                if (isNaN(num)) {
                    showNotification('Digite um número válido', 'error');
                    return;
                }

                orderIdsToSelect = visibleOrders
                    .filter(order => {
                        const osNumMatch = order.osNumber?.match(/^(\d+)\//);
                        if (!osNumMatch) return false;

                        const osNum = parseInt(osNumMatch[1]);
                        return osNum === num;
                    })
                    .map(order => order.firestoreId);
            }

            if (orderIdsToSelect.length === 0) {
                showNotification('Nenhuma OS encontrada no intervalo especificado', 'warning');
                return;
            }

            setSelectedOrders(orderIdsToSelect);
            setRangeInput('');
            setShowRangeInput(false);

            showNotification(`${orderIdsToSelect.length} OS(s) selecionada(s) com sucesso!`, 'success');
        } catch (error) {
            console.error('Erro ao processar intervalo:', error);
            showNotification('Erro ao processar intervalo. Verifique o formato.', 'error');
        }
    };

    const toggleOrderSelection = (orderId, e) => {
        if (e) e.stopPropagation(); // útil se chamado a partir de eventos, mas aqui não será necessário
        setSelectedOrders(prev => {
            if (prev.includes(orderId)) {
                return prev.filter(id => id !== orderId);
            } else {
                return [...prev, orderId];
            }
        });
    };

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
        const finalCharged = formData.discount5Days ? (formData.finalChargedAmount || charged) : charged;
        const profit = finalCharged - totalCost;

        return { totalCost, profit, suggestedValue, solutionsTotal, finalCharged };
    };

    const { totalCost, profit, suggestedValue, solutionsTotal, finalCharged } = calculateFinancials();

    const validateForm = () => {
        const errors = [];
        const newFieldErrors = { ...fieldErrors };

        Object.keys(newFieldErrors).forEach(key => newFieldErrors[key] = false);

        if (!formData.client.trim()) {
            errors.push("• Cliente é obrigatório");
            newFieldErrors.client = true;
        }

        if (!formData.item.trim()) {
            errors.push("• Item/Equipamento é obrigatório");
            newFieldErrors.item = true;
        }

        if ((!formData.defectsList || formData.defectsList.length === 0) && !formData.defect.trim()) {
            errors.push("• Descrição do defeito é obrigatória");
            newFieldErrors.defect = true;
        }

        if (formData.solutionType === "Preenchimento manual" &&
            (!formData.manualSolutionsList || formData.manualSolutionsList.length === 0) &&
            !formData.solution.trim()) {
            errors.push("• Descrição da solução é obrigatória no modo manual");
            newFieldErrors.solution = true;
        }

        if (formData.solutionType === "Conserto em bancada" &&
            (!formData.benchRepairList || formData.benchRepairList.length === 0)) {
            errors.push("• Descreva as etapas do conserto em bancada");
            newFieldErrors.benchRepairList = true;
        }

        if (formData.solutionType === "Não passível de conserto, substituir por novo equipamento / material" &&
            !formData.notRepairableDetail) {
            errors.push("• Detalhe a substituição por novo equipamento/material");
            newFieldErrors.notRepairableDetail = true;
        }

        if (formData.solutionType === "Manual com custos detalhados" && formData.solutionsList.length === 0) {
            errors.push("• Adicione pelo menos um item na lista de soluções com custo");
            newFieldErrors.solutionsList = true;
        }

        setFieldErrors(newFieldErrors);

        if (errors.length > 0) {
            showNotification("Preencha os campos obrigatórios:\n" + errors.join("\n"), 'error');
            return true;
        }

        return false;
    };

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
                hasError = (!formData.defectsList || formData.defectsList.length === 0) && !formData.defect.trim();
                break;
            case 'solution':
                hasError = formData.solutionType === "Preenchimento manual" &&
                    (!formData.manualSolutionsList || formData.manualSolutionsList.length === 0) &&
                    !formData.solution.trim();
                break;
            case 'benchRepairList':
                hasError = formData.solutionType === "Conserto em bancada" &&
                    (!formData.benchRepairList || formData.benchRepairList.length === 0);
                break;
            case 'notRepairableDetail':
                hasError = formData.solutionType === "Não passível de conserto, substituir por novo equipamento / material" &&
                    !formData.notRepairableDetail;
                break;
            case 'solutionsList':
                hasError = formData.solutionType === "Manual com custos detalhados" && formData.solutionsList.length === 0;
                break;
        }

        setFieldErrors(prev => ({ ...prev, [field]: hasError }));
    };

    const uniqueBillingTypes = useMemo(() => {
        return billingOptions.filter(option => !hiddenSuggestions.billing?.includes(option));
    }, [hiddenSuggestions.billing]);

    const currentMonthVisits = useMemo(() => {
        const monthName = MESES[new Date().getMonth()];
        return [
            `1ª Visita de ${monthName}`,
            `2ª Visita de ${monthName}`,
            `3ª Visita de ${monthName}`,
            `4ª Visita de ${monthName}`
        ].filter(visit => !hiddenSuggestions.visit?.includes(visit));
    }, [hiddenSuggestions.visit]);

    // --- AUTOCOMPLETE: DADOS ÚNICOS (COM PADRONIZAÇÃO) ---

    const uniqueMaintenanceVisits = useMemo(() => {
        return [...new Set(orders
            .filter(o => o.maintenanceVisit) // apenas OS que têm visita preenchida
            .map(o => o.maintenanceVisit)
        )].sort();
    }, [orders]);

    const uniqueClients = useMemo(() => {
        const map = new Map();
        contracts.forEach(c => {
            if (c.clientName) {
                const key = c.clientName.trim().toLowerCase();
                map.set(key, {
                    client: c.clientName,
                    cnpj: c.cnpj,
                    contactPerson: c.contactPerson,
                    email: c.email,
                    address: c.address
                });
            }
        });
        [...orders].reverse().forEach(o => {
            if (o.client) {
                const key = o.client.trim().toLowerCase();
                if (!map.has(key)) {
                    map.set(key, {
                        client: o.client,
                        cnpj: o.cnpj || '',
                        contactPerson: o.contactPerson || '',
                        email: o.email || '',
                        address: o.address || ''
                    });
                } else if (o.client && map.has(key)) {
                    const existing = map.get(key);
                    if (!existing.cnpj && o.cnpj) existing.cnpj = o.cnpj;
                    if (!existing.address && o.address) existing.address = o.address;
                    if (!existing.contactPerson && o.contactPerson) existing.contactPerson = o.contactPerson;
                    if (!existing.email && o.email) existing.email = o.email;
                }
            }
        });
        return Array.from(map.values()).sort((a, b) => a.client.localeCompare(b.client));
    }, [orders, contracts]);

    const uniqueDefects = useMemo(() => {
        if (!orders || orders.length === 0) return [];

        const allDefects = [];

        orders.forEach(o => {
            if (o.defectsList && Array.isArray(o.defectsList)) {
                o.defectsList.forEach(d => {
                    if (d && typeof d === 'string' && d.trim()) {
                        allDefects.push(d.trim());
                    }
                });
            }
            if (o.defect && typeof o.defect === 'string' && o.defect.trim()) {
                allDefects.push(o.defect.trim());
            }
        });

        // Limpeza e remoção das ocultas
        return cleanConcatenatedSuggestions(allDefects)
            .filter(item => !hiddenSuggestions.defects.includes(item));
    }, [orders, hiddenSuggestions.defects]);

    // Autocomplete para Conserto em bancada
    const uniqueBenchRepair = useMemo(() => {
        if (!orders || orders.length === 0) return [];

        const allItems = [];
        orders.forEach(o => {
            if (o.benchRepairList && Array.isArray(o.benchRepairList)) {
                o.benchRepairList.forEach(item => {
                    if (item && typeof item === 'string' && item.trim()) {
                        allItems.push(item.trim());
                    }
                });
            }
        });

        return cleanConcatenatedSuggestions(allItems)
            .filter(item => !hiddenSuggestions.solutions.includes(item)); // reutiliza o tipo 'solution'
    }, [orders, hiddenSuggestions.solutions]);

    const uniqueSolutions = useMemo(() => {
        if (!orders || orders.length === 0) return [];

        const allSolutions = [];

        orders.forEach(o => {
            if (o.manualSolutionsList && Array.isArray(o.manualSolutionsList)) {
                o.manualSolutionsList.forEach(s => {
                    if (s && typeof s === 'string' && s.trim()) {
                        allSolutions.push(s.trim());
                    }
                });
            }
            if (o.benchRepairList && Array.isArray(o.benchRepairList)) {
                o.benchRepairList.forEach(s => {
                    if (s && typeof s === 'string' && s.trim()) {
                        allSolutions.push(s.trim());
                    }
                });
            }
            if (o.solutionsList && Array.isArray(o.solutionsList)) {
                o.solutionsList.forEach(s => {
                    if (s && s.text && typeof s.text === 'string' && s.text.trim()) {
                        allSolutions.push(s.text.trim());
                    }
                });
            }
            if (o.solution && typeof o.solution === 'string' && o.solution.trim()) {
                allSolutions.push(o.solution.trim());
            }
        });

        return cleanConcatenatedSuggestions(allSolutions)
            .filter(item => !hiddenSuggestions.solutions.includes(item));
    }, [orders, hiddenSuggestions.solutions]);

    // Autocomplete de Equipamentos (com padronização case-insensitive)
    const uniqueItems = useMemo(() => {
        const map = new Map();
        orders.forEach(o => {
            if (o.item && o.item.length > 1) {
                const normalized = o.item.trim().toLowerCase();
                if (!map.has(normalized)) {
                    map.set(normalized, o.item);
                }
            }
        });
        return Array.from(map.values()).sort();
    }, [orders]);

    const uniqueManufacturers = useMemo(() => {
        const map = new Map();
        orders.forEach(o => {
            if (o.manufacturer && o.manufacturer.length > 1) {
                const normalized = o.manufacturer.trim().toLowerCase();
                if (!map.has(normalized)) {
                    map.set(normalized, o.manufacturer);
                }
            }
        });
        return Array.from(map.values()).sort();
    }, [orders]);

    const uniqueModels = useMemo(() => {
        const map = new Map();
        orders.forEach(o => {
            if (o.model && o.model.length > 1) {
                const normalized = o.model.trim().toLowerCase();
                if (!map.has(normalized)) {
                    map.set(normalized, o.model);
                }
            }
        });
        return Array.from(map.values()).sort();
    }, [orders]);

    const uniqueSerials = useMemo(() => {
        return [...new Set(orders.map(o => o.serial).filter(i => i && i.length > 1))].sort();
    }, [orders]);

    // === HISTÓRICO DO EQUIPAMENTO (para o modal de OS) ===
    // === DIAS ÚTEIS ===
    const calcBusinessDays = useCallback((startDateStr) => {
        if (!startDateStr) return 0;
        const start = new Date(startDateStr + 'T12:00:00');
        const today = new Date();
        today.setHours(12, 0, 0, 0);
        if (start >= today) return 0;
        let count = 0;
        const cur = new Date(start);
        cur.setDate(cur.getDate() + 1);
        while (cur <= today) {
            const day = cur.getDay();
            if (day !== 0 && day !== 6) count++;
            cur.setDate(cur.getDate() + 1);
        }
        return count;
    }, []);

    // === ORDENS COM ALERTA ===
    const alertOrders = useMemo(() => {
        const alerts = [];
        ordersForUser.forEach(order => {
            const threshold = alertThresholds[order.status];
            if (threshold === undefined || threshold === null) return;
            if (order.status === 'Finalizado' || order.status === 'Orçamento recusado') return;
            const businessDays = calcBusinessDays(order.statusDate);
            if (businessDays > threshold) {
                alerts.push({
                    ...order,
                    businessDaysInStatus: businessDays,
                    threshold,
                    daysOver: businessDays - threshold
                });
            }
        });
        return alerts.sort((a, b) => b.daysOver - a.daysOver);
    }, [ordersForUser, alertThresholds, calcBusinessDays]);

    const handleSaveThresholds = async () => {
        setSavingThresholds(true);
        try {
            await setDoc(
                doc(db, 'artifacts', finalAppId, 'public', 'data', 'alertConfig', 'thresholds'),
                editingThresholds,
                { merge: true }
            );
            showNotification('Configurações de avisos salvas!', 'success');
        } catch (err) {
            showNotification('Erro ao salvar configurações: ' + err.message, 'error');
        } finally {
            setSavingThresholds(false);
        }
    };

    const equipmentHistory = useMemo(() => {
        const serial = formData.serial?.trim();

        // NS ausente ou "-" → não exibe histórico
        const hasValidSerial = serial && serial !== '-' && serial.length > 0;
        if (!hasValidSerial) return null;

        // Filtra apenas OS com exatamente o mesmo NS (ignora a própria OS em edição)
        const related = orders.filter(o => {
            if (editingOrder && o.firestoreId === editingOrder.firestoreId) return false;
            const oSerial = o.serial?.trim();
            return oSerial && oSerial !== '-' && oSerial === serial;
        });

        if (related.length === 0) return null;

        const sorted = [...related].sort((a, b) =>
            new Date(b.statusDate || 0) - new Date(a.statusDate || 0)
        );
        const latest = sorted[0];
        const latestDate = latest.statusDate ? new Date(latest.statusDate) : null;

        if (!latestDate) return { latest, underWarranty: false, diffMonths: null, allOccurrences: sorted };

        const now = new Date();
        const diffMonths = (now - latestDate) / (1000 * 60 * 60 * 24 * 30.44);

        return {
            latest,
            underWarranty: diffMonths < 3,
            diffMonths,
            allOccurrences: sorted,
        };
    }, [formData.serial, orders, editingOrder]);

    // --- ORDENAÇÃO DE OS ---
    const sortedOrders = useMemo(() => {
        return [...ordersForUser].sort((a, b) => {
            let aVal = a[sortField];
            let bVal = b[sortField];

            // Tratar valores nulos ou indefinidos
            if (aVal == null) aVal = '';
            if (bVal == null) bVal = '';

            // Para campos de texto, comparar sem diferenciar maiúsculas
            if (typeof aVal === 'string' && typeof bVal === 'string') {
                aVal = aVal.toLowerCase();
                bVal = bVal.toLowerCase();
            }

            if (aVal < bVal) return sortDirection === 'asc' ? -1 : 1;
            if (aVal > bVal) return sortDirection === 'asc' ? 1 : -1;
            return 0;
        });
    }, [ordersForUser, sortField, sortDirection]);


    // --- CÁLCULO FINANCEIRO GLOBAL ---
    const globalFinancials = useMemo(() => {
        let totalRevenue = 0;
        let totalCosts = 0;
        let totalProfit = 0;
        let revenueByClient = {};

        ordersForUser.forEach(o => {
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
    }, [ordersForUser]);

    // Calcula dias restantes até o fim do contrato (considera apenas a data, sem horas)
    const getDaysUntilExpiry = (endDateStr) => {
        if (!endDateStr) return Infinity;
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const endDate = new Date(endDateStr);
        endDate.setHours(0, 0, 0, 0);
        const diffTime = endDate - today;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    };

    const combinedContracts = useMemo(() => {
        const osClients = new Set(ordersForUser.filter(o => o.billingType === "Contrato de manutenção").map(o => o.client));
        const savedClients = new Set(contracts.map(c => c.clientName));
        const allClients = [...new Set([...osClients, ...savedClients])];

        return allClients.map(clientName => {
            const savedData = contracts.find(c => c.clientName === clientName);
            const latestOS = ordersForUser.find(o => o.client === clientName);

            // Calcular dias restantes e nível de alerta
            const endDate = savedData?.endDate || '';
            const daysToExpiry = getDaysUntilExpiry(endDate);
            let alertStatus = 'none';
            if (endDate && daysToExpiry <= 60) {
                alertStatus = daysToExpiry <= 30 ? 'red' : 'yellow';
            }

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
                isConfigured: !!savedData,
                daysToExpiry,      // novo campo
                alertStatus        // novo campo: 'none', 'yellow', 'red'
            };
        }).sort((a, b) => a.clientName.localeCompare(b.clientName));
    }, [ordersForUser, contracts]);

    const alertContractsCount = useMemo(() => {
        return combinedContracts.filter(c => c.alertStatus !== 'none').length;
    }, [combinedContracts]);

    // === FORNECEDORES COMBINADOS (Firestore + OS) ===
    const combinedSuppliers = useMemo(() => {
        const supplierMap = new Map();

        // Primeiro: fornecedores registrados no Firestore
        supplierRecords.forEach(s => {
            if (!s.name?.trim()) return;
            const key = s.name.trim().toLowerCase();
            supplierMap.set(key, { ...s, isRegistered: true });
        });

        // Depois: merge com dados derivados das OS
        ordersForUser.filter(o => o.sentToThirdParty === 'Sim' && o.thirdPartyInfo?.trim()).forEach(o => {
            const key = o.thirdPartyInfo.trim().toLowerCase();
            if (!supplierMap.has(key)) {
                supplierMap.set(key, {
                    name: o.thirdPartyInfo,
                    cpf: '',
                    email: '',
                    contactPerson: o.costThirdPartyName || '',
                    address: '',
                    observations: '',
                    isRegistered: false
                });
            }
        });

        // Calcular contagens de OS por fornecedor
        return Array.from(supplierMap.values()).map(supplier => {
            const supplierOrders = ordersForUser.filter(o =>
                o.thirdPartyInfo?.trim().toLowerCase() === supplier.name.trim().toLowerCase()
            );
            const osAbertas = supplierOrders.filter(o =>
                o.status !== 'Finalizado' && o.status !== 'Orçamento recusado'
            ).length;
            const osFechadas = supplierOrders.filter(o =>
                o.status === 'Finalizado' || o.status === 'Orçamento recusado'
            ).length;
            return { ...supplier, osAbertas, osFechadas };
        }).sort((a, b) => a.name.localeCompare(b.name));
    }, [supplierRecords, ordersForUser]);

    // === Verificar permissões de página ===
    const canAccessPage = () => {
        if (!userData) return false;

        if (userData.role === 'admin') {
            return true;
        }

        if (userData.role === 'client') {
            const clientPages = ['os', 'status', 'about'];
            return clientPages.includes(currentPage);
        }

        const pagePermissions = {
            'os': 'canViewOS',
            'status': 'canViewOS',
            'alerts': 'canViewFinancial',
            'financial': 'canViewFinancial',
            'contracts': 'canViewContracts',
            'inventory': 'canViewOS',
            'suppliers': 'canViewOS',
            'clients': 'canViewAllClients',
            'users': 'canManageUsers',
            'about': true
        };

        const permission = pagePermissions[currentPage];
        return permission === true || hasPermission(permission);
    };

    // === EFFECTS ===

    useEffect(() => {
        if (!isModalOpen) {
            setIsViewMode(false);
            setCreatingLinkedToOrder(null);
        }
    }, [isModalOpen]);

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

        const unsubSuppliers = onSnapshot(
            collection(db, 'artifacts', finalAppId, 'public', 'data', 'suppliers'),
            (snap) => {
                setSupplierRecords(snap.docs.map(d => ({ firestoreId: d.id, ...d.data() })));
            },
            (error) => { console.error("Erro ao buscar fornecedores:", error); }
        );

        return () => {
            unsubOrders();
            unsubContracts();
            unsubSuppliers();
        };
    }, [user, authLoading]);

    useEffect(() => {
        if (formData.discount5Days && formData.chargedAmount) {
            const charged = parseCurrency(formData.chargedAmount);
            const discount = charged * 0.05;
            const final = charged - discount;

            setFormData(prev => ({
                ...prev,
                discountAmount: discount,
                finalChargedAmount: final
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                discountAmount: 0,
                finalChargedAmount: parseCurrency(prev.chargedAmount)
            }));
        }
    }, [formData.discount5Days, formData.chargedAmount]);

    // Efeito para preservar prazo de entrega
    useEffect(() => {
        if ((formData.status === "Em orçamento" || formData.status === "Aguardando aprovação") &&
            !formData.deliveryDeadline) {
            const savedOrder = orders.find(o => o.firestoreId === editingOrder?.firestoreId);
            if (savedOrder?.deliveryDeadline) {
                const match = savedOrder.deliveryDeadline.match(/^(\d+)/);
                if (match) {
                    setFormData(prev => ({
                        ...prev,
                        deliveryDeadline: match[1]
                    }));
                }
            }
        }
    }, [formData.status, editingOrder, orders]);

    useEscapeKey(() => {
        if (isModalOpen) {
            setIsModalOpen(false);
        }
        if (isContractModalOpen) {
            setIsContractModalOpen(false);
        }
        if (isDeleteModalOpen) {
            setIsDeleteModalOpen(false);
        }
        if (isMoveModalOpen) {
            setIsMoveModalOpen(false);
        }
        if (isPaymentModalOpen) {
            setIsPaymentModalOpen(false);
        }
    });

    useEffect(() => {
        if (isModalOpen && modalRef.current) {
            modalRef.current.focus();
        }
        if (isContractModalOpen && contractModalRef.current) {
            contractModalRef.current.focus();
        }
        if (isDeleteModalOpen && deleteModalRef.current) {
            deleteModalRef.current.focus();
        }
        if (isMoveModalOpen && moveModalRef.current) {
            moveModalRef.current.focus();
        }
    }, [isModalOpen, isContractModalOpen, isDeleteModalOpen, isMoveModalOpen]);

    const dashboardData = useMemo(() => {
        // Aplicar filtros de status e billing
        let dataSource = ordersForUser;

        if (statusFilter) {
            dataSource = dataSource.filter(o => o.status === statusFilter);
        }

        if (billingFilter) {
            dataSource = dataSource.filter(o => o.billingType === billingFilter);
        }

        // Aplicar seleção manual se houver
        if (selectedOrders.length > 0) {
            dataSource = dataSource.filter(o => selectedOrders.includes(o.firestoreId));
        }

        const statusCount = {};
        dataSource.forEach(o => {
            statusCount[o.status] = (statusCount[o.status] || 0) + 1;
            if (!statusCount[`${o.status}_date`]) {
                statusCount[`${o.status}_date`] = o.statusDate || new Date().toISOString().split('T')[0];
            }
        });
        const statusChartData = Object.keys(statusCount)
            .filter(k => !k.includes('_date'))
            .map(k => ({
                label: k,
                value: statusCount[k],
                date: statusCount[`${k}_date`]
            }));
        const billingCount = {};
        dataSource.forEach(o => { billingCount[o.billingType] = (billingCount[o.billingType] || 0) + 1 });
        const billingChartData = Object.keys(billingCount).map(k => ({ label: k, value: billingCount[k] })).sort((a, b) => b.value - a.value);
        let totalInternalCosts = 0;
        let totalClientFreight = 0;
        dataSource.forEach(o => {
            totalInternalCosts += (parseCurrency(o.costThirdPartyShipping) + parseCurrency(o.costParts));
            totalClientFreight += parseCurrency(o.costClientShipping);
        });
        return {
            count: dataSource.length,
            statusChartData,
            billingChartData,
            totalInternalCosts,
            totalClientFreight,
            isFiltered: selectedOrders.length > 0 || statusFilter || billingFilter
        };
    }, [ordersForUser, selectedOrders, statusFilter, billingFilter]);

    // === FUNÇÕES PRINCIPAIS ===
    const generateNextOsNumber = (currentOrders) => {
        const currentYear = new Date().getFullYear();
        const thisYearOrders = currentOrders.filter(order => {
            if (!order.osNumber) return false;
            const [number, year] = order.osNumber.split('/');
            return year && parseInt(year) === currentYear;
        });

        let highestNumber = 0;
        thisYearOrders.forEach(order => {
            if (order.osNumber) {
                const [numberStr] = order.osNumber.split('/');
                const number = parseInt(numberStr);
                if (number > highestNumber) {
                    highestNumber = number;
                }
            }
        });

        let nextNumber;
        if (currentYear === 2026) {
            nextNumber = Math.max(highestNumber + 1, 32);
        } else {
            nextNumber = highestNumber + 1;
        }

        return `${String(nextNumber).padStart(4, '0')}/${currentYear}`;
    };

    // Função para fazer upload de fotos
    const handlePhotoUpload = async (e) => {
        const files = Array.from(e.target.files);
        if (files.length === 0) return;

        setUploadingPhotos(true);
        try {
            const uploadPromises = files.map(async (file) => {
                const timestamp = Date.now();
                const fileName = `${timestamp}_${file.name}`;
                const storageRef = ref(storage, `os_photos/${formData.osNumber || 'temp'}/${fileName}`);

                await uploadBytes(storageRef, file);
                const downloadURL = await getDownloadURL(storageRef);
                return downloadURL;
            });

            const uploadedURLs = await Promise.all(uploadPromises);
            setFormData(prev => ({
                ...prev,
                photos: [...prev.photos, ...uploadedURLs]
            }));

            showNotification(`${files.length} foto(s) enviada(s) com sucesso!`, 'success');
        } catch (error) {
            console.error('Erro ao enviar fotos:', error);
            showNotification('Erro ao enviar fotos. Tente novamente.', 'error');
        } finally {
            setUploadingPhotos(false);
        }
    };

    // Função para remover foto
    const removePhoto = async (index) => {
        const photoUrl = formData.photos[index];
        try {
            // Extrair o caminho da foto da URL
            const photoPath = photoUrl.split('/o/')[1]?.split('?')[0];
            if (photoPath) {
                const decodedPath = decodeURIComponent(photoPath);
                const storageRef = ref(storage, decodedPath);
                await deleteObject(storageRef);
            }

            setFormData(prev => ({
                ...prev,
                photos: prev.photos.filter((_, i) => i !== index)
            }));

            showNotification('Foto removida com sucesso!', 'success');
        } catch (error) {
            console.error('Erro ao remover foto:', error);
            showNotification('Erro ao remover foto. Tente novamente.', 'error');
        }
    };

    const openModal = (order = null, viewMode = false) => {
        setTempSolution('');
        setTempCost('');
        setTempDefect('');
        setTempManualSolution('');
        setTempBenchRepair('');
        setIsFinancialOpen(false);
        setIsViewMode(viewMode);
        setFieldErrors({
            client: false, item: false, defect: false, solution: false,
            notRepairableDetail: false, solutionsList: false, benchRepairList: false
        });

        if (order) {
            setEditingOrder(order);
            let deliveryDeadlineValue = '';
            if (order.deliveryDeadline) {
                const match = order.deliveryDeadline.match(/^(\d+)/);
                if (match) deliveryDeadlineValue = match[1];
            }
            setFormData({
                ...order,
                equipmentObservation: order.equipmentObservation || '',
                quantity: order.quantity || '1',
                solutionsList: order.solutionsList || [],
                defectsList: order.defectsList || (order.defect ? [order.defect] : []),
                manualSolutionsList: order.manualSolutionsList || [],
                benchRepairList: order.benchRepairList || [],
                statusDate: order.statusDate || new Date().toISOString().split('T')[0],
                statusHistory: order.statusHistory || [],
                deliveryDeadline: deliveryDeadlineValue,
                discount5Days: order.discount5Days || false,
                discountAmount: order.discountAmount || 0,
                finalChargedAmount: order.finalChargedAmount || parseCurrency(order.chargedAmount),
                photos: order.photos || [],
                linkedOS: order.linkedOS || []
            });
        } else {
            setEditingOrder(null);
            setFormData({
                ...EMPTY_FORM_DATA,
                osNumber: generateNextOsNumber(ordersForUser),
                statusDate: new Date().toISOString().split('T')[0],
                statusHistory: [{
                    status: 'Recebido',
                    date: new Date().toISOString().split('T')[0],
                    timestamp: Date.now(),
                    user: userData?.displayName || user?.email || 'Sistema'
                }]
            });
        }

        setIsModalOpen(true);
    };

    const handleNewOSWithClient = (order) => {
        setFormData({
            ...EMPTY_FORM_DATA,
            client: order.client,
            cnpj: order.cnpj || '',
            contactPerson: order.contactPerson || '',
            email: order.email || '',
            address: order.address || '',
            osNumber: generateNextOsNumber(ordersForUser),
            statusDate: new Date().toISOString().split('T')[0],
            statusHistory: [{
                status: 'Recebido',
                date: new Date().toISOString().split('T')[0],
                timestamp: Date.now(),
                user: userData?.displayName || user?.email || 'Sistema'
            }]
        });
        setEditingOrder(null);
        setIsModalOpen(true);
        setDropdownOpen(null);
    };

    // Função para calcular diferenças entre dois objetos
    const computeChanges = (oldData, newData) => {
        const changes = {};
        const allKeys = new Set([...Object.keys(oldData || {}), ...Object.keys(newData || {})]);
        const ignoreFields = ['firestoreId', 'statusHistory', 'history', 'id'];

        allKeys.forEach(key => {
            if (ignoreFields.includes(key)) return;

            const oldVal = oldData?.[key];
            const newVal = newData?.[key];

            // Se ambos são undefined, ignorar
            if (oldVal === undefined && newVal === undefined) return;

            // Evitar redundância: se defectsList mudou, ignorar defect
            if (key === 'defect' && changes['defectsList']) return;
            if (key === 'solution' && (changes['manualSolutionsList'] || changes['benchRepairList'] || changes['solutionsList'])) return;

            // Comparação
            if (JSON.stringify(oldVal) !== JSON.stringify(newVal)) {
                if (Array.isArray(oldVal) && Array.isArray(newVal)) {
                    const added = newVal.filter(item => !oldVal.includes(item));
                    const removed = oldVal.filter(item => !newVal.includes(item));
                    if (added.length > 0 || removed.length > 0) {
                        changes[key] = { type: 'array', added, removed };
                    }
                } else {
                    changes[key] = { type: 'value', old: oldVal, new: newVal };
                }
            }
        });

        return changes;
    };
    // Função para salvar uma entrada no histórico
    const saveHistoryEntry = async (orderId, action, oldData, newData) => {
        if (!orderId || !user) return;

        const changes = action === 'create'
            ? { initialData: newData }  // para criação, guardamos snapshot completo
            : computeChanges(oldData, newData);

        // Se não houver mudanças (apenas no update), não salvar
        if (action === 'update' && Object.keys(changes).length === 0) return;

        const historyRef = collection(db, 'artifacts', finalAppId, 'public', 'data', 'serviceOrders', orderId, 'history');

        const today = new Date();
        const day = `${today.getDate().toString().padStart(2, '0')}/${(today.getMonth() + 1).toString().padStart(2, '0')}/${today.getFullYear()}`;

        await addDoc(historyRef, {
            timestamp: Date.now(),
            date: day,
            user: {
                uid: user.uid,
                name: userData?.displayName || user.email || 'Sistema',
                email: user.email
            },
            action,
            changes
        });
    };

    const HistoryModal = ({ isOpen, onClose, order }) => {
        const [historyEntries, setHistoryEntries] = useState([]);
        const [loading, setLoading] = useState(false);

        useEffect(() => {
            if (!isOpen || !order?.firestoreId) return;

            setLoading(true);
            const historyRef = collection(db, 'artifacts', finalAppId, 'public', 'data', 'serviceOrders', order.firestoreId, 'history');
            const q = query(historyRef, orderBy('timestamp', 'desc'));

            const unsubscribe = onSnapshot(q, (snapshot) => {
                const entries = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setHistoryEntries(entries);
                setLoading(false);
            }, (error) => {
                console.error('Erro ao buscar histórico:', error);
                setLoading(false);
            });

            return () => unsubscribe();
        }, [isOpen, order]);

        // Agrupar por data
        const grouped = useMemo(() => {
            const groups = {};
            historyEntries.forEach(entry => {
                const date = entry.date; // já está no formato dd/mm/yyyy
                if (!groups[date]) groups[date] = [];
                groups[date].push(entry);
            });
            // Ordenar datas decrescente
            const sortedDates = Object.keys(groups).sort((a, b) => {
                const [da, ma, ya] = a.split('/');
                const [db, mb, yb] = b.split('/');
                return new Date(yb, mb - 1, db) - new Date(ya, ma - 1, da);
            });
            return sortedDates.map(date => ({ date, entries: groups[date] }));
        }, [historyEntries]);

        const renderChanges = (changes, action) => {
            if (action === 'create') {
                return <p className="text-sm text-green-600">OS criada</p>;
            }

            // Lista de campos que não queremos exibir
            const hiddenFields = ['defectsList', 'solutionsList', 'manualSolutionsList', 'benchRepairList', 'statusHistory', 'history'];

            return Object.entries(changes)
                .filter(([field]) => !hiddenFields.includes(field))
                .map(([field, data]) => {
                    const label = FIELD_LABELS[field] || field;

                    if (data.type === 'array') {
                        const { added, removed } = data;
                        return (
                            <div key={field} className="mb-3">
                                <span className="font-bold text-slate-700">{label}:</span>
                                <div className="ml-4 space-y-1">
                                    {added.length > 0 && (
                                        <div className="text-green-600">
                                            <span className="text-xs font-bold">ADICIONADOS:</span>
                                            <ul className="list-disc list-inside text-sm">
                                                {added.map((item, idx) => <li key={idx}>{item}</li>)}
                                            </ul>
                                        </div>
                                    )}
                                    {removed.length > 0 && (
                                        <div className="text-red-600">
                                            <span className="text-xs font-bold">REMOVIDOS:</span>
                                            <ul className="list-disc list-inside text-sm line-through">
                                                {removed.map((item, idx) => <li key={idx}>{item}</li>)}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    } else {
                        let oldDisplay = data.old;
                        let newDisplay = data.new;

                        // Formatação para exibição
                        if (typeof oldDisplay === 'string') {
                            oldDisplay = oldDisplay.split('\n').map((line, i) => (
                                <span key={i}>{line}<br /></span>
                            ));
                        } else if (oldDisplay !== undefined) {
                            oldDisplay = JSON.stringify(oldDisplay);
                        } else {
                            oldDisplay = <span className="text-slate-400">(vazio)</span>;
                        }

                        if (typeof newDisplay === 'string') {
                            newDisplay = newDisplay.split('\n').map((line, i) => (
                                <span key={i}>{line}<br /></span>
                            ));
                        } else if (newDisplay !== undefined) {
                            newDisplay = JSON.stringify(newDisplay);
                        } else {
                            newDisplay = <span className="text-slate-400">(vazio)</span>;
                        }

                        return (
                            <div key={field} className="mb-3">
                                <span className="font-bold text-slate-700">{label}:</span>
                                <div className="ml-4 text-sm">
                                    <div className="text-red-500 line-through">{oldDisplay}</div>
                                    <div className="text-green-600">{newDisplay}</div>
                                </div>
                            </div>
                        );
                    }
                });
        };

        if (!isOpen || !order) return null;

        return (
            <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-[100] flex items-center justify-center p-4">
                <div className="bg-white rounded-3xl p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 animate-in zoom-in-95">
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <h2 className="text-2xl font-black text-slate-900">Histórico de Alterações</h2>
                            <p className="text-slate-500 text-sm">{order.osNumber} - {order.client}</p>
                        </div>
                        <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full text-slate-400 transition-colors">
                            <X size={20} />
                        </button>
                    </div>

                    {loading ? (
                        <div className="text-center py-10"><Loader2 className="animate-spin mx-auto text-blue-600" size={32} /></div>
                    ) : grouped.length === 0 ? (
                        <p className="text-center py-10 text-slate-400">Nenhum histórico encontrado.</p>
                    ) : (
                        <div className="space-y-4">
                            {grouped.map(({ date, entries }) => (
                                <details key={date} className="bg-slate-50 rounded-xl border border-slate-200 group open:bg-white transition-all">
                                    <summary className="p-4 font-bold text-slate-800 cursor-pointer list-none flex items-center justify-between">
                                        <span>{date}</span>
                                        <ChevronDown size={18} className="transition-transform group-open:rotate-180" />
                                    </summary>
                                    <div className="p-4 border-t border-slate-100 space-y-4">
                                        {entries.map(entry => (
                                            <div key={entry.id} className="border-l-4 border-blue-400 pl-4 py-2 bg-white rounded shadow-sm">
                                                <div className="flex justify-between text-xs text-slate-500 mb-2">
                                                    <span>{new Date(entry.timestamp).toLocaleString('pt-BR')}</span>
                                                    <span className="font-bold text-slate-700">por {entry.user.name}</span>
                                                </div>
                                                {renderChanges(entry.changes, entry.action)}
                                            </div>
                                        ))}
                                    </div>
                                </details>
                            ))}
                        </div>
                    )}

                    <div className="flex justify-end mt-6">
                        <button onClick={onClose} className="px-6 py-3 bg-slate-100 text-slate-600 rounded-xl font-bold hover:bg-slate-200 transition">
                            Fechar
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    // MODAL DE PAGAMENTO PARA CLIENTE (SEM IMPRESSÃO)
    const ClientPaymentModal = ({
        isOpen,
        onClose,
        order,
        onConfirm,
        customOptions,
        onAddOption,
        onDeleteOption,
        userRole
    }) => {
        // Opções padrão de parcelas
        const installmentOptions = {
            'Boleto': [
                "30 / 60 dias",
                "5 dias (5% de desconto)"
            ],
            'Cartão': [
                "1x (30 Dias)",
                "2x (30/60 Dias)",
                "3x (30/60/90 Dias)",
                "4x (30/60/90/120 Dias)"
            ]
        };

        // Estado inicial baseado na OS
        const [paymentData, setPaymentData] = useState({
            paymentCondition: order?.paymentCondition || 'À vista',
            installments: order?.installments || '',
            discount5Days: order?.discount5Days || false,
            finalChargedAmount: order?.finalChargedAmount || parseCurrency(order?.chargedAmount),
            originalValue: parseCurrency(order?.chargedAmount)
        });

        // Combina opções padrão + customizadas para a condição atual
        const combinedOptions = useMemo(() => {
            const paymentType = paymentData.paymentCondition;
            if (paymentType === 'À vista') return [];
            const defaultOpts = installmentOptions[paymentType] || [];
            const customOpts = (customOptions && customOptions[paymentType]) || [];
            return [...defaultOpts, ...customOpts];
        }, [paymentData.paymentCondition, customOptions]);

        // Função para calcular valor final com desconto automático
        const calculateFinalAmount = (condition, installments, originalValue) => {
            if (condition === 'Boleto' && installments === "5 dias (5% de desconto)") {
                return originalValue * 0.95;
            }
            return originalValue;
        };

        const handlePaymentConditionChange = (e) => {
            const newCondition = e.target.value;
            let newInstallments = '';

            if (newCondition === 'Boleto') {
                newInstallments = "30 / 60 dias";
            } else if (newCondition === 'Cartão') {
                newInstallments = "1x (30 Dias)";
            } else if (newCondition === 'À vista') {
                newInstallments = '';
            }

            const finalAmount = calculateFinalAmount(
                newCondition,
                newInstallments,
                paymentData.originalValue
            );

            setPaymentData({
                ...paymentData,
                paymentCondition: newCondition,
                installments: newInstallments,
                finalChargedAmount: finalAmount
            });
        };

        const handleInstallmentsChange = (e) => {
            const newInstallments = e.target.value;
            const finalAmount = calculateFinalAmount(
                paymentData.paymentCondition,
                newInstallments,
                paymentData.originalValue
            );

            setPaymentData({
                ...paymentData,
                installments: newInstallments,
                finalChargedAmount: finalAmount
            });
        };

        const handleConfirm = () => {
            onConfirm(paymentData);
            onClose();
        };

        if (!isOpen || !order) return null;

        return (
            <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-[100] flex items-center justify-center p-4">
                <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl border border-slate-200 space-y-6 animate-in zoom-in-95">
                    <div className="flex items-center gap-3">
                        <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                            <CheckCircle2 size={24} />
                        </div>
                        <div>
                            <h3 className="text-xl font-black text-slate-900">Confirmar Pagamento</h3>
                            <p className="text-slate-500 text-sm">Configure o pagamento para a OS {order.osNumber}</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-400 uppercase">Valor do Orçamento</label>
                            <div className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl font-black text-2xl text-slate-800 text-center">
                                R$ {paymentData.originalValue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                            </div>

                            {paymentData.finalChargedAmount !== paymentData.originalValue && (
                                <div className="mt-4 space-y-2 animate-in fade-in">
                                    <label className="text-xs font-bold text-green-600 uppercase">Valor com Desconto (5%)</label>
                                    <div className="w-full p-4 bg-green-50 border-2 border-green-200 rounded-2xl font-black text-2xl text-green-800 text-center">
                                        R$ {paymentData.finalChargedAmount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                                        <div className="text-sm text-green-600 font-bold mt-2">
                                            ✓ Desconto de 5% aplicado
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-400 uppercase">Condição de Pagamento</label>
                            <select
                                value={paymentData.paymentCondition}
                                onChange={handlePaymentConditionChange}
                                className="w-full p-4 bg-white border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/10 transition-all font-bold"
                            >
                                <option value="À vista">À vista</option>
                                <option value="Boleto">Boleto</option>
                                <option value="Cartão">Cartão</option>
                            </select>
                        </div>

                        {(paymentData.paymentCondition === 'Boleto' || paymentData.paymentCondition === 'Cartão') && (
                            <div className="space-y-2 animate-in fade-in">
                                <label className="text-xs font-bold text-slate-400 uppercase">Parcelas</label>

                                <InstallmentSelect
                                    value={paymentData.installments}
                                    onChange={handleInstallmentsChange}
                                    paymentCondition={paymentData.paymentCondition}
                                    options={combinedOptions}
                                    customOptions={customOptions[paymentData.paymentCondition] || []}
                                    onDeleteOption={onDeleteOption}
                                    userRole={userRole}
                                    showAddOption={paymentData.paymentCondition === 'Boleto' && userRole === 'admin'}
                                    onAddOption={onAddOption}
                                />
                            </div>
                        )}

                        <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                            <div className="flex items-center gap-2 text-blue-600 mb-2">
                                <Info size={16} />
                                <span className="text-xs font-bold uppercase">Informação</span>
                            </div>
                            <p className="text-xs text-blue-700">
                                Ao confirmar, a OS será movida para <strong>"Em manutenção"</strong> e você será notificado sobre os próximos passos.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <button
                            onClick={onClose}
                            className="flex-1 py-4 rounded-xl font-bold text-slate-500 hover:bg-slate-100 transition-colors"
                        >
                            Cancelar
                        </button>
                        <button
                            onClick={handleConfirm}
                            className="flex-1 py-4 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 shadow-xl shadow-green-200 transition-colors flex items-center justify-center gap-2"
                        >
                            <Check size={20} /> Confirmar Pagamento
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    // Autocomplete de SolutionsList para modo com custos - ATUALIZADO com filtro de ocultas
    const uniqueSolutionsList = useMemo(() => {
        if (!orders || orders.length === 0) return [];

        const allItems = [];

        orders.forEach(o => {
            if (o.solutionsList && Array.isArray(o.solutionsList)) {
                o.solutionsList.forEach(item => {
                    if (item && item.text && typeof item.text === 'string' && item.text.trim()) {
                        allItems.push(item.text.trim());
                    }
                });
            }
        });

        // Aplicar limpeza de sugestões concatenadas e filtrar as ocultas
        return cleanConcatenatedSuggestions(allItems)
            .filter(item => !hiddenSuggestions.solutions.includes(item));
    }, [orders, hiddenSuggestions.solutions]);


    const openViewModal = (order) => {
        openModal(order, true);
    };

    const handleClientSelect = (clientData) => {
        setFormData(prev => ({
            ...prev,
            client: clientData.client,
            cnpj: clientData.cnpj,
            contactPerson: clientData.contactPerson,
            email: clientData.email,
            address: clientData.address
        }));
        setShowClientSuggestions(false);
    };

    const processMultiLineText = (text) => {
        if (!text) return [];
        return text.split('\n')
            .map(line => line.trim())
            .filter(line => line.length > 0);
    };

    const addDefectItem = () => {
        if (!tempDefect.trim()) {
            showNotification("Descrição do defeito é obrigatória", 'error');
            return;
        }

        // FECHAR sugestões imediatamente
        setShowDefectSuggestions(false);

        // Processar e limpar o texto
        const cleanedText = tempDefect
            .split('\n')
            .map(line => {
                // Aplicar correções básicas para evitar concatenação
                return line.trim()
                    .replace(/([a-zà-ú])([A-ZÀ-Ú])/g, '$1 $2')  // Adiciona espaço entre minúscula e maiúscula
                    .replace(/(\s)([A-ZÀ-Ú])/g, '$1$2')  // Mantém espaço existente
                    .trim();
            })
            .filter(line => line.length > 0);

        if (cleanedText.length === 0) {
            showNotification("Descrição do defeito é obrigatória", 'error');
            return;
        }

        // Adicionar cada linha como um item separado
        setFormData(prev => ({
            ...prev,
            defectsList: [...prev.defectsList, ...cleanedText]
        }));

        setTempDefect('');
    };

    const removeDefectItem = (index) => {
        setFormData(prev => ({
            ...prev,
            defectsList: prev.defectsList.filter((_, i) => i !== index)
        }));
    };

    const addManualSolutionItem = () => {
        if (!tempManualSolution.trim()) {
            showNotification("Descrição da solução é obrigatória", 'error');
            return;
        }

        // FECHAR sugestões imediatamente
        setShowSolutionSuggestions(false);

        // Processar e limpar o texto
        const cleanedText = tempManualSolution
            .split('\n')
            .map(line => {
                return line.trim()
                    .replace(/([a-zà-ú])([A-ZÀ-Ú])/g, '$1 $2')
                    .replace(/(\s)([A-ZÀ-Ú])/g, '$1$2')
                    .trim();
            })
            .filter(line => line.length > 0);

        if (cleanedText.length === 0) {
            showNotification("Descrição da solução é obrigatória", 'error');
            return;
        }

        setFormData(prev => ({
            ...prev,
            manualSolutionsList: [...prev.manualSolutionsList, ...cleanedText]
        }));

        setTempManualSolution('');
    };

    const removeManualSolutionItem = (index) => {
        setFormData(prev => ({
            ...prev,
            manualSolutionsList: prev.manualSolutionsList.filter((_, i) => i !== index)
        }));
    };

    const addBenchRepairItem = () => {
        if (!tempBenchRepair.trim()) {
            showNotification("Descrição da etapa do conserto é obrigatória", 'error');
            return;
        }

        // Processar múltiplas linhas se o usuário colar várias
        const steps = tempBenchRepair.split('\n')
            .map(line => line.trim())
            .filter(line => line.length > 0);

        if (steps.length === 0) {
            showNotification("Descrição da etapa do conserto é obrigatória", 'error');
            return;
        }

        setFormData(prev => ({
            ...prev,
            benchRepairList: [...prev.benchRepairList, ...steps]
        }));
        setTempBenchRepair('');
    };

    const removeBenchRepairItem = (index) => {
        setFormData(prev => ({
            ...prev,
            benchRepairList: prev.benchRepairList.filter((_, i) => i !== index)
        }));
    };

    const addSolutionItem = () => {
        if (!tempSolution.trim()) {
            showNotification("Descrição do item/serviço é obrigatória", 'error');
            return;
        }

        // Limpar sugestões antes de processar
        setShowSolutionSuggestions(false);

        const lines = tempSolution.split('\n')
            .map(line => line.trim())
            .filter(line => line.length > 0);

        if (lines.length === 0) {
            showNotification("Descrição do item/serviço é obrigatória", 'error');
            return;
        }

        const newItems = lines.map(line => ({
            id: Date.now() + Math.random(),
            text: line,
            cost: tempCost || "0,00"
        }));

        setFormData(prev => ({
            ...prev,
            solutionsList: [...prev.solutionsList, ...newItems]
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

    // Função prepareDataForSave atualizada
    const prepareDataForSave = () => {
        const { firestoreId, ...cleanData } = formData;

        if (user && userData && userData.role === 'client') {
            cleanData.clientUid = user.uid;
            cleanData.clientEmail = user.email;
        }

        if (!cleanData.quantity || isNaN(parseInt(cleanData.quantity))) {
            cleanData.quantity = '1';
        }

        if (cleanData.discount5Days && cleanData.chargedAmount) {
            const charged = parseCurrency(cleanData.chargedAmount);
            cleanData.discountAmount = charged * 0.05;
            cleanData.finalChargedAmount = charged - cleanData.discountAmount;
        } else {
            cleanData.discountAmount = 0;
            cleanData.finalChargedAmount = parseCurrency(cleanData.chargedAmount);
        }

        // Limpar e processar defectsList
        if (cleanData.defectsList && Array.isArray(cleanData.defectsList)) {
            const cleanedDefects = cleanConcatenatedSuggestions(cleanData.defectsList)
                .filter(item => item && item.trim().length > 2);
            cleanData.defectsList = cleanedDefects;
            cleanData.defect = cleanedDefects.length > 0 ? cleanedDefects.join('\n') : '';
        } else {
            cleanData.defect = cleanData.defect || '';
            if (cleanData.defect) {
                const cleanedDefects = cleanConcatenatedSuggestions([cleanData.defect])
                    .filter(item => item && item.trim().length > 2);
                cleanData.defectsList = cleanedDefects;
            } else {
                cleanData.defectsList = [];
            }
        }

        // Limpar e processar manualSolutionsList (para Preenchimento manual)
        if (cleanData.solutionType === "Preenchimento manual") {
            if (cleanData.manualSolutionsList && Array.isArray(cleanData.manualSolutionsList)) {
                const cleanedManualSolutions = cleanConcatenatedSuggestions(cleanData.manualSolutionsList)
                    .filter(item => item && item.trim().length > 2);
                cleanData.manualSolutionsList = cleanedManualSolutions;
                cleanData.solution = cleanedManualSolutions.length > 0 ? cleanedManualSolutions.join('\n') : '';
            } else {
                cleanData.manualSolutionsList = [];
                cleanData.solution = cleanData.solution || '';
            }
        }

        // Limpar e processar benchRepairList (para Conserto em bancada)
        if (cleanData.solutionType === "Conserto em bancada") {
            if (cleanData.benchRepairList && Array.isArray(cleanData.benchRepairList)) {
                const cleanedBenchRepair = cleanConcatenatedSuggestions(cleanData.benchRepairList)
                    .filter(item => item && item.trim().length > 2);
                cleanData.benchRepairList = cleanedBenchRepair;
                cleanData.solution = cleanedBenchRepair.length > 0 ? cleanedBenchRepair.join('\n') : '';
            } else {
                cleanData.benchRepairList = [];
                cleanData.solution = cleanData.solution || '';
            }
        }

        // Limpar e processar solutionsList (para Manual com custos detalhados)
        if (cleanData.solutionType === "Manual com custos detalhados") {
            if (cleanData.solutionsList && Array.isArray(cleanData.solutionsList)) {
                const cleanedSolutionsList = cleanData.solutionsList
                    .map(item => ({
                        ...item,
                        text: cleanConcatenatedSuggestions([item.text])[0] || item.text
                    }))
                    .filter(item => item.text && item.text.trim().length > 2);
                cleanData.solutionsList = cleanedSolutionsList;
                const solutionTexts = cleanedSolutionsList.map(item => item.text);
                cleanData.solution = solutionTexts.length > 0 ? solutionTexts.join('\n') : '';
            } else {
                cleanData.solutionsList = [];
                cleanData.solution = cleanData.solution || '';
            }
        }

        // Para outros tipos de solução, garantir que as listas estejam vazias
        if (cleanData.solutionType !== "Preenchimento manual") {
            cleanData.manualSolutionsList = [];
        }
        if (cleanData.solutionType !== "Conserto em bancada") {
            cleanData.benchRepairList = [];
        }
        if (cleanData.solutionType !== "Manual com custos detalhados") {
            cleanData.solutionsList = [];
        }

        // Para "Não passível de conserto..."
        if (cleanData.solutionType === "Não passível de conserto, substituir por novo equipamento / material") {
            cleanData.manualSolutionsList = [];
            cleanData.benchRepairList = [];
            cleanData.solutionsList = [];
            cleanData.solution = cleanData.notRepairableDetail || '';
        }

        // Processar prazo de entrega
        if (cleanData.deliveryDeadline && cleanData.deliveryDeadline.trim() !== '') {
            const cleanNumber = cleanData.deliveryDeadline.replace('dias úteis', '').trim();
            if (cleanNumber && !isNaN(cleanNumber)) {
                cleanData.deliveryDeadline = `${cleanNumber} dias úteis`;
            }
        } else {
            cleanData.deliveryDeadline = '';
        }

        // Histórico de status
        let history = cleanData.statusHistory ? [...cleanData.statusHistory] : [];
        const currentStatusDate = cleanData.statusDate || new Date().toISOString().split('T')[0];

        const lastEntry = history.length > 0 ? history[history.length - 1] : null;

        if (!lastEntry || lastEntry.status !== cleanData.status) {
            history.push({
                status: cleanData.status,
                date: currentStatusDate,
                timestamp: Date.now(),
                user: userData?.displayName || user?.email || 'Sistema'
            });
        } else {
            history[history.length - 1].date = currentStatusDate;
        }

        cleanData.statusHistory = history;
        cleanData.statusDate = currentStatusDate;

        return cleanData;
    };

    const handleSubmit = async (e) => {
        if (e) e.preventDefault();

        const hasErrors = validateForm();
        if (hasErrors) return;

        setIsSaving(true);
        try {
            const cleanData = prepareDataForSave();

            let oldData = null;
            let orderId = editingOrder?.firestoreId;

            if (editingOrder) {
                // Buscar dados antigos antes de atualizar
                const docRef = doc(db, 'artifacts', finalAppId, 'public', 'data', 'serviceOrders', editingOrder.firestoreId);
                const docSnap = await getDoc(docRef);
                oldData = docSnap.data();

                await updateDoc(docRef, cleanData);
                showNotification("OS atualizada com sucesso!", 'success');
            } else {
                const docRef = await addDoc(collection(db, 'artifacts', finalAppId, 'public', 'data', 'serviceOrders'), cleanData);
                orderId = docRef.id;
                showNotification("OS criada com sucesso!", 'success');
            }

            // Salvar histórico
            await saveHistoryEntry(
                orderId,
                editingOrder ? 'update' : 'create',
                oldData,
                cleanData
            );

            // Se estamos criando uma OS associada a outra, atualizar a OS de origem
            if (creatingLinkedToOrder && !editingOrder) {
                const originOrder = ordersForUser.find(o => o.firestoreId === creatingLinkedToOrder);
                if (originOrder) {
                    const updatedLinked = [...(originOrder.linkedOS || []), orderId];
                    await updateDoc(doc(db, 'artifacts', finalAppId, 'public', 'data', 'serviceOrders', creatingLinkedToOrder), {
                        linkedOS: updatedLinked
                    });
                    showNotification(`OS associada à OS ${originOrder.osNumber}`, 'success');
                }
            }

            // Após salvar, verificar se textos foram usados e desocultá-los
            const checkAndUnhide = async (type, texts) => {
                for (const text of texts) {
                    if (!text || typeof text !== 'string') continue;
                    const docId = `${type}_${text.replace(/[^a-zA-Z0-9]/g, '_')}`;
                    const docRef = doc(db, 'artifacts', finalAppId, 'public', 'data', 'hiddenSuggestions', docId);
                    const docSnap = await getDoc(docRef);
                    if (docSnap.exists()) {
                        await deleteDoc(docRef);
                        console.log(`Sugestão "${text}" removida da blacklist por nova ocorrência.`);
                    }
                }
            };

            const defectTexts = [
                ...(cleanData.defectsList || []),
                ...(cleanData.defect ? [cleanData.defect] : [])
            ].filter(Boolean);

            const solutionTexts = [
                ...(cleanData.manualSolutionsList || []),
                ...(cleanData.benchRepairList || []),
                ...(cleanData.solutionsList?.map(s => s.text) || []),
                ...(cleanData.solution ? [cleanData.solution] : []),
                ...(cleanData.notRepairableDetail ? [cleanData.notRepairableDetail] : [])
            ].filter(Boolean);

            await checkAndUnhide('defect', defectTexts);
            await checkAndUnhide('solution', solutionTexts);

            setIsModalOpen(false);
        } catch (err) {
            console.error(err);
            showNotification(`Erro ao salvar: ${err.message}`, 'error');
        } finally {
            setIsSaving(false);
            setCreatingLinkedToOrder(null); // Limpar estado
        }
    };

    const handleSaveAndNewWithSameClient = async () => {
        const hasErrors = validateForm();
        if (hasErrors) return;

        setIsSaving(true);
        try {
            const cleanData = prepareDataForSave();
            if (editingOrder) {
                await updateDoc(doc(db, 'artifacts', finalAppId, 'public', 'data', 'serviceOrders', editingOrder.firestoreId), cleanData);
            } else {
                await addDoc(collection(db, 'artifacts', finalAppId, 'public', 'data', 'serviceOrders'), cleanData);
            }
            showNotification("OS salva e nova em branco criada!", 'success');
            setFormData(prev => ({
                ...EMPTY_FORM_DATA,
                client: prev.client,
                cnpj: prev.cnpj,
                contactPerson: prev.contactPerson,
                email: prev.email,
                address: prev.address,
                billingType: prev.billingType,
                maintenanceVisit: prev.maintenanceVisit,
                osNumber: generateNextOsNumber([...ordersForUser, prev]),
                statusDate: new Date().toISOString().split('T')[0],
                statusHistory: [{
                    status: 'Recebido',
                    date: new Date().toISOString().split('T')[0],
                    timestamp: Date.now(),
                    user: userData?.displayName || user?.email || 'Sistema'
                }]
            }));
            setEditingOrder(null);
        } catch (err) {
            console.error(err);
            showNotification(`Erro ao salvar: ${err.message}`, 'error');
        } finally {
            setIsSaving(false);
        }
    };

    const getStatusTimelineDate = (statusStep) => {
        if (formData.status === statusStep) {
            if (formData.statusDate) {
                const parts = formData.statusDate.split('-');
                return `${parts[2]}/${parts[1]}`;
            }
            return 'Hoje';
        }

        if (formData.statusHistory && formData.statusHistory.length > 0) {
            const entry = [...formData.statusHistory].reverse().find(h => h.status === statusStep);
            if (entry && entry.date) {
                const parts = entry.date.split('-');
                return `${parts[2]}/${parts[1]}`;
            }
        }
        return null;
    };

    const currentStatusIndex = TIMELINE_STEPS.findIndex(s => s.value === formData.status);
    const activeWidthPercent = currentStatusIndex === -1 ? 0 : (currentStatusIndex / (TIMELINE_STEPS.length - 1)) * 100;

    const handleMoveOrders = async () => {
        if (selectedOrders.length === 0) {
            showNotification('Selecione pelo menos uma OS para movimentar', 'error');
            return;
        }

        setIsSaving(true);
        try {
            const updates = selectedOrders.map(orderId => {
                const order = ordersForUser.find(o => o.firestoreId === orderId);
                if (!order) return null;

                let history = order.statusHistory ? [...order.statusHistory] : [];

                history.push({
                    status: moveStatus,
                    date: moveDate,
                    timestamp: Date.now(),
                    user: userData?.displayName || user?.email || 'Sistema'
                });

                return updateDoc(doc(db, 'artifacts', finalAppId, 'public', 'data', 'serviceOrders', orderId), {
                    status: moveStatus,
                    statusDate: moveDate,
                    statusHistory: history
                });
            }).filter(Boolean);

            await Promise.all(updates);
            showNotification(`${selectedOrders.length} OS(s) movida(s) para ${moveStatus}`, 'success');
            setIsMoveModalOpen(false);
            setSelectedOrders([]);
        } catch (err) {
            console.error(err);
            showNotification(`Erro ao movimentar OSs: ${err.message}`, 'error');
        } finally {
            setIsSaving(false);
        }
    };

    const handleOpenNewOS = () => {
        openModal(null, false); // Abre nova OS em modo de edição
    };

    const handleOpenPaymentModal = (printType) => {
        const selectedData = ordersForUser.filter(o => selectedOrders.includes(o.firestoreId));

        if (selectedData.length === 0) {
            showNotification('Selecione pelo menos uma OS para imprimir', 'error');
            return;
        }

        const hasBudgetStage = selectedData.some(os =>
            os.status === 'Em orçamento' || os.status === 'Aguardando aprovação'
        );

        if (!hasBudgetStage && printType === 'client') {
            handlePrint(printType);
            return;
        }

        // Calcular o valor total SOMANDO os chargedAmount (valores originais)
        const totalOriginalValue = selectedData.reduce((acc, os) => {
            // Usar chargedAmount como valor base (original)
            return acc + parseCurrency(os.chargedAmount);
        }, 0);

        const firstOS = selectedData[0];

        setPaymentModalData({
            totalOriginalValue, // Valor ORIGINAL (sem desconto)
            paymentCondition: firstOS?.paymentCondition || 'À vista',
            installments: firstOS?.installments || '',
            discount5Days: firstOS?.discount5Days || false,
            finalChargedAmount: firstOS?.finalChargedAmount || totalOriginalValue
        });

        setIsPaymentModalOpen(true);
    };

    const addCustomInstallmentOption = async (paymentType, option) => {
        if (!option.trim()) return;
        const trimmedOption = option.trim();

        // Verifica duplicidade com opções padrão e já existentes
        const defaultOpts = installmentOptions[paymentType] || [];
        const currentCustom = customOptions[paymentType] || [];
        if (defaultOpts.includes(trimmedOption) || currentCustom.includes(trimmedOption)) {
            showNotification('Esta opção já existe!', 'warning');
            return;
        }

        try {
            const docRef = doc(db, 'artifacts', finalAppId, 'public', 'data', 'customOptions', paymentType);
            await setDoc(docRef, {
                paymentType,
                options: [...currentCustom, trimmedOption]
            }, { merge: true });
            showNotification(`Opção "${trimmedOption}" adicionada!`, 'success');
        } catch (error) {
            console.error('Erro ao adicionar opção:', error);
            showNotification('Erro ao adicionar opção.', 'error');
        }
    };

    const deleteCustomInstallmentOption = async (paymentType, option) => {
        if (userData?.role !== 'admin') return;
        if (!window.confirm(`Tem certeza que deseja remover a opção "${option}"?`)) return;

        try {
            const currentCustom = customOptions[paymentType] || [];
            const updated = currentCustom.filter(opt => opt !== option);
            const docRef = doc(db, 'artifacts', finalAppId, 'public', 'data', 'customOptions', paymentType);

            if (updated.length === 0) {
                await deleteDoc(docRef);
            } else {
                await setDoc(docRef, { paymentType, options: updated }, { merge: true });
            }
            showNotification('Opção removida!', 'success');
        } catch (error) {
            console.error('Erro ao remover opção:', error);
            showNotification('Erro ao remover opção.', 'error');
        }
    };

    const handleDeleteCustomOption = (paymentType, option) => {
        deleteCustomInstallmentOption(paymentType, option);
    };

    const handleHideSuggestion = async (type, value) => {
        if (!userData || userData.role !== 'admin') return;
        try {
            const docId = `${type}_${value.replace(/[^a-zA-Z0-9]/g, '_')}`;
            await setDoc(
                doc(db, 'artifacts', finalAppId, 'public', 'data', 'hiddenSuggestions', docId),
                {
                    type,
                    value,
                    hiddenAt: Date.now(),
                    hiddenBy: user.uid
                }
            );
            showNotification(`Sugestão "${value}" removida.`, 'success');
        } catch (error) {
            console.error('Erro ao ocultar sugestão:', error);
            showNotification('Erro ao remover sugestão.', 'error');
        }
    };

    // === CRUD FORNECEDORES ===
    const handleOpenNewSupplier = () => {
        setEditingSupplier(null);
        setSupplierFormData({ name: '', cpf: '', email: '', contactPerson: '', address: '', observations: '' });
        setIsSupplierModalOpen(true);
    };

    const handleOpenEditSupplier = (supplier) => {
        setEditingSupplier(supplier);
        setSupplierFormData({
            name: supplier.name || '',
            cpf: supplier.cpf || '',
            email: supplier.email || '',
            contactPerson: supplier.contactPerson || '',
            address: supplier.address || '',
            observations: supplier.observations || ''
        });
        setIsSupplierModalOpen(true);
    };

    const handleSaveSupplier = async () => {
        if (!supplierFormData.name.trim()) {
            showNotification('Nome do fornecedor é obrigatório', 'error');
            return;
        }
        setIsSaving(true);
        try {
            const docId = (editingSupplier?.firestoreId) ||
                supplierFormData.name.trim().toLowerCase().replace(/[^a-z0-9]/g, '_') + '_' + Date.now();
            await setDoc(
                doc(db, 'artifacts', finalAppId, 'public', 'data', 'suppliers', docId),
                { ...supplierFormData, updatedAt: Date.now() },
                { merge: true }
            );
            showNotification(editingSupplier ? 'Fornecedor atualizado!' : 'Fornecedor cadastrado!', 'success');
            setIsSupplierModalOpen(false);
        } catch (err) {
            showNotification('Erro ao salvar fornecedor: ' + err.message, 'error');
        } finally {
            setIsSaving(false);
        }
    };

    const handleDeleteSupplier = async (supplier) => {
        if (!supplier.firestoreId) {
            showNotification('Este fornecedor não pode ser excluído (derivado de OS)', 'warning');
            return;
        }
        if (!window.confirm(`Excluir o fornecedor "${supplier.name}"? Esta ação não pode ser desfeita.`)) return;
        try {
            await deleteDoc(doc(db, 'artifacts', finalAppId, 'public', 'data', 'suppliers', supplier.firestoreId));
            showNotification('Fornecedor excluído!', 'success');
        } catch (err) {
            showNotification('Erro ao excluir: ' + err.message, 'error');
        }
    };

    const handleConfirmPrintWithPayment = async (paymentData) => {
        const { selectedOrderId } = paymentData;

        if (selectedOrderId) {
            const orderToUpdate = ordersForUser.find(o => o.firestoreId === selectedOrderId);
            if (!orderToUpdate) return;

            try {
                await updateDoc(doc(db, 'artifacts', finalAppId, 'public', 'data', 'serviceOrders', selectedOrderId), {
                    paymentCondition: paymentData.paymentCondition,
                    installments: paymentData.installments,
                    discount5Days: paymentData.paymentCondition === 'Boleto' &&
                        paymentData.installments === "5 dias (5% de desconto)",
                    finalChargedAmount: paymentData.finalChargedAmount,
                    status: 'Em manutenção',
                    statusDate: new Date().toISOString().split('T')[0],
                    statusHistory: [...(orderToUpdate.statusHistory || []), {
                        status: 'Em manutenção',
                        date: new Date().toISOString().split('T')[0],
                        timestamp: Date.now(),
                        user: userData?.displayName || user?.email || 'Sistema'
                    }]
                });

                setIsPaymentModalOpen(false);
                showNotification('Orçamento aprovado e pagamento configurado! OS agora está em manutenção.', 'success');

                const groups = {
                    [orderToUpdate.client]: {
                        header: {
                            client: orderToUpdate.client,
                            cnpj: orderToUpdate.cnpj,
                            contactPerson: orderToUpdate.contactPerson,
                            email: orderToUpdate.email,
                            address: orderToUpdate.address,
                            billingType: orderToUpdate.billingType,
                            maintenanceVisit: orderToUpdate.maintenanceVisit
                        },
                        items: [{
                            ...orderToUpdate,
                            paymentCondition: paymentData.paymentCondition,
                            installments: paymentData.installments,
                            discount5Days: paymentData.paymentCondition === 'Boleto' &&
                                paymentData.installments === "5 dias (5% de desconto)",
                            finalChargedAmount: paymentData.finalChargedAmount
                        }]
                    }
                };

                handlePrintForSingleOrder(groups, paymentData);
            } catch (error) {
                console.error('Erro ao atualizar condições de pagamento:', error);
                showNotification('Erro ao processar aprovação. Tente novamente.', 'error');
            }
        } else {
            const selectedData = ordersForUser.filter(o => selectedOrders.includes(o.firestoreId));

            try {
                const is5Days = paymentData.paymentCondition === 'Boleto' &&
                    paymentData.installments === "5 dias (5% de desconto)";

                // Salvar no Firestore: condições compartilhadas + valor individual de cada OS.
                // NUNCA gravar o total do lote como finalChargedAmount de cada OS individual.
                await Promise.all(selectedData.map(os => {
                    const individualCharged = parseCurrency(os.chargedAmount);
                    const individualFinal   = is5Days
                        ? parseFloat((individualCharged * 0.95).toFixed(2))
                        : individualCharged;
                    return updateDoc(
                        doc(db, 'artifacts', finalAppId, 'public', 'data', 'serviceOrders', os.firestoreId),
                        {
                            paymentCondition:   paymentData.paymentCondition,
                            installments:       paymentData.installments,
                            discount5Days:      is5Days,
                            finalChargedAmount: individualFinal,
                        }
                    );
                }));

                // Montar customPaymentConditions com o total correto do lote
                // para que o PDF use esses valores e não recalcule via calculateTotals.
                const batchTotalOriginal = selectedData.reduce(
                    (acc, os) => acc + parseCurrency(os.chargedAmount), 0
                );
                const batchTotalFinal = is5Days
                    ? parseFloat((batchTotalOriginal * 0.95).toFixed(2))
                    : batchTotalOriginal;

                const batchPaymentConditions = {
                    paymentCondition:   paymentData.paymentCondition,
                    installments:       paymentData.installments,
                    originalValue:      batchTotalOriginal,
                    finalChargedAmount: batchTotalFinal,
                };

                setIsPaymentModalOpen(false);
                handlePrint('client', batchPaymentConditions);
            } catch (error) {
                console.error('Erro ao atualizar condições de pagamento:', error);
                showNotification('Erro ao atualizar condições de pagamento.', 'error');
            }
        }
    };

    const handlePrintForSingleOrder = async (groups, paymentConditions = null) => {
        const title = 'Proposta de orçamento';
        try {
            const itemsForFilename = Object.values(groups).flatMap(g => g.items);
            const customFilename = getReportFilename(itemsForFilename, 'pdf');

            let pdfPaymentConditions = null;
            if (paymentConditions) {
                const is5Days = paymentConditions.paymentCondition === 'Boleto' &&
                    paymentConditions.installments === '5 dias (5% de desconto)';
                const originalVal = parseCurrency(itemsForFilename[0]?.chargedAmount ?? 0);
                const finalVal    = paymentConditions.finalChargedAmount ??
                    (is5Days ? parseFloat((originalVal * 0.95).toFixed(2)) : originalVal);
                pdfPaymentConditions = {
                    paymentCondition:   paymentConditions.paymentCondition,
                    installments:       paymentConditions.installments,
                    originalValue:      originalVal,
                    finalChargedAmount: finalVal,
                };
            }

            await openPdfBlob(
                <DocumentoPDF
                    groups={groups}
                    printType="client"
                    title={title}
                    customPaymentConditions={pdfPaymentConditions}
                />,
                title,
                customFilename
            );
        } catch (error) {
            console.error('Erro ao gerar PDF:', error);
            showNotification('Erro ao gerar PDF: ' + error.message, 'error');
        }
    };

    const handlePrintSupplier = () => handlePrint('supplier');

    const handlePrintLabel = () => {
        const selectedData = ordersForUser.filter(o => selectedOrders.includes(o.firestoreId));
        if (selectedData.length === 0) {
            showNotification('Selecione pelo menos uma OS para imprimir etiqueta', 'error');
            return;
        }

        // URL fixa do QR code
        const qrData = "https://angeloborin.github.io/alfa-app/";
        const qrSrc = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&ecc=M&data=${encodeURIComponent(qrData)}`;

        // Data atual para exibição
        const today = new Date().toLocaleDateString('pt-BR');

        // Gera cada etiqueta individualmente
        const labelsHtml = selectedData.map(os => {
            const osNum = os.osNumber || '---';
            // Data da OS (statusDate) ou data atual
            const osDate = os.statusDate ? formatDateBR(os.statusDate) : today;

            return `
      <div class="label">
        <div class="logo-wrapper">
          <img class="logo" src="${logo}" alt="Alfa Tecnologia Hospitalar" />
        </div>
        <div class="qr-wrapper">
          <img class="qr" src="${qrSrc}" alt="QR Code" />
        </div>
        <div class="info">
          <div class="os">OS: ${osNum}</div>
          <div class="date">${osDate}</div>
        </div>
      </div>
    `;
        }).join('\n');

        const html = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<title>Etiquetas OS - Alfa</title>
<style>
  /* Configuração para impressora térmica ZD230 / etiqueta 57x40mm */
  * { margin: 0; padding: 0; box-sizing: border-box; }
  @page {
    size: 57mm 40mm;
    margin: 0;
  }
  body {
    background: white;
    width: 57mm;
    margin: 0 auto;
  }
  .label {
    width: 57mm;
    height: 40mm;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 2mm 2mm 2mm 2mm;
    page-break-after: always;
    background: white;
    font-family: 'Arial', sans-serif;
  }
  .logo-wrapper {
    flex-shrink: 0;
    height: 12mm;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .logo {
    max-height: 10mm;
    max-width: 50mm;
    object-fit: contain;
  }
  .qr-wrapper {
    flex-shrink: 0;
    margin: 1mm 0;
  }
  .qr {
    width: 24mm;
    height: 24mm;
    display: block;
  }
  .info {
    text-align: center;
    font-weight: bold;
    width: 100%;
    flex-shrink: 0;
  }
  .os {
    font-size: 9pt;
    letter-spacing: -0.5px;
    color: #1e3a8a;
    margin-bottom: 1mm;
  }
  .date {
    font-size: 7pt;
    color: #475569;
    font-weight: normal;
  }
</style>
</head>
<body>
${labelsHtml}
<script>
  // Auto-print assim que todas as imagens (logo e QR) carregarem
  const images = Array.from(document.querySelectorAll('img'));
  let loaded = 0;
  const tryPrint = () => { if (++loaded >= images.length) window.print(); };
  images.forEach(img => {
    if (img.complete) tryPrint();
    else { img.onload = tryPrint; img.onerror = tryPrint; }
  });
  if (images.length === 0) window.print();
</script>
</body>
</html>`;

        const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        window.open(url, '_blank');
        setTimeout(() => URL.revokeObjectURL(url), 60000);
        showNotification(`${selectedData.length} etiqueta(s) gerada(s). Confirme a impressão na janela aberta.`, 'success');
    };

    const handlePrint = async (printType, customPaymentConditions = null) => {
        const selectedData = ordersForUser.filter(o => selectedOrders.includes(o.firestoreId));
        if (selectedData.length === 0) {
            showNotification('Selecione pelo menos uma OS para imprimir', 'error');
            return;
        }

        const groups = {};
        selectedData.forEach(os => {
            const key = `${os.client}-${os.cnpj || 'no-cnpj'}-${os.billingType}-${os.maintenanceVisit || 'no-visit'}`;
            if (!groups[key]) {
                groups[key] = {
                    header: {
                        client: os.client,
                        cnpj: os.cnpj,
                        contactPerson: os.contactPerson,
                        email: os.email,
                        address: os.address,
                        billingType: os.billingType,
                        maintenanceVisit: os.maintenanceVisit
                    },
                    items: []
                };
            }
            groups[key].items.push(os);
        });

        const hasBudgetStage = selectedData.some(os =>
            os.status === 'Em orçamento' || os.status === 'Aguardando aprovação'
        );

        const title = printType === 'internal' ?
            'Relatório INTERNO' :
            printType === 'supplier' ?
                'Relatório' :
                (hasBudgetStage ? 'Proposta de orçamento' : 'Relatório de atendimento');

        try {
            const customFilename = getReportFilename(selectedData, 'pdf');
            await openPdfBlob(
                <DocumentoPDF
                    groups={groups}
                    printType={printType}
                    title={title}
                    customPaymentConditions={customPaymentConditions || null}
                />,
                title,
                customFilename
            );
        } catch (error) {
            console.error('Erro ao gerar PDF:', error);
            showNotification('Erro ao gerar PDF: ' + error.message, 'error');
        }
    };

    // Funções para lidar com filtros no painel de status
    const handleFilterByStatus = (status) => {
        setStatusFilter(prev => prev === status ? null : status);
        setBillingFilter(null);
    };

    const handleFilterByBilling = (type) => {
        setBillingFilter(prev => prev === type ? null : type);
        setStatusFilter(null);
    };

    const clearAllFilters = () => {
        setStatusFilter(null);
        setBillingFilter(null);
        setSelectedOrders([]);
        setSelectedDay('');
        setSelectedMonth('');
        setSelectedYear('');
        setSearchTerm('');
        setFilterClient('');
        setFilterCNPJ('');
        setFilterSerial('');
        setFilterItem('');
        setFilterManufacturer('');
        setFilterModel('');
        setFilterStatus('');
    };

    // Função para verificar se há filtros ativos
    const hasActiveFilters = () => {
        return statusFilter || billingFilter || selectedOrders.length > 0 ||
            selectedDay || selectedMonth || selectedYear || searchTerm ||
            filterClient || filterCNPJ || filterSerial || filterItem ||
            filterManufacturer || filterModel || filterStatus;
    };

    const hasAdvancedFilters = !!(filterClient || filterCNPJ || filterSerial || filterItem || filterManufacturer || filterModel || filterStatus);

    const handleNewContract = () => {
        setContractForm({
            clientName: '', cnpj: '', address: '', contactPerson: '', email: '',
            startDate: '', endDate: '', monthlyValue: '', annualValue: '',
            coveredItems: { videoSurgeryInstruments: false, openInstruments: false, videoSurgeryEquipment: false, endoscopes: false },
            observations: '', isActive: true, attachments: []
        });
        setIsNewContractMode(true);
        setIsContractModalOpen(true);
    };

    const openContractModal = (contract, viewMode = false) => {
        setContractForm({
            ...contract,
            attachments: contract.attachments || [],
            isActive: contract.isActive !== false
        });
        setIsNewContractMode(false);
        setIsContractViewMode(viewMode);
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

    // === HANDLERS: ANEXOS DE CONTRATOS ===
    const handleContractAttachmentUpload = async (e) => {
        const files = Array.from(e.target.files);
        if (!files.length) return;
        setUploadingContractAttachments(true);
        try {
            const urls = await Promise.all(files.map(async (file) => {
                const storageRef = ref(storage, `contract_attachments/${contractForm.clientName.replace(/\s+/g, '_')}/${Date.now()}_${file.name}`);
                await uploadBytes(storageRef, file);
                return getDownloadURL(storageRef);
            }));
            setContractForm(prev => ({ ...prev, attachments: [...(prev.attachments || []), ...urls] }));
            showNotification(`${files.length} anexo(s) enviado(s)!`, 'success');
        } catch (err) {
            showNotification('Erro ao enviar anexo: ' + err.message, 'error');
        } finally {
            setUploadingContractAttachments(false);
        }
    };

    const handleContractAttachmentRemove = async (index) => {
        const url = contractForm.attachments[index];
        try {
            const path = url.split('/o/')[1]?.split('?')[0];
            if (path) await deleteObject(ref(storage, decodeURIComponent(path)));
        } catch (err) { console.warn('Não foi possível remover arquivo do storage:', err); }
        setContractForm(prev => ({ ...prev, attachments: prev.attachments.filter((_, i) => i !== index) }));
        showNotification('Anexo removido!', 'success');
    };

    const confirmDelete = (order) => {
        setOrderToDelete(order);
        setIsDeleteModalOpen(true);
    };

    const handleDelete = async () => {
        if (!orderToDelete) return;
        try {
            // Remover fotos associadas à OS
            if (orderToDelete.photos && orderToDelete.photos.length > 0) {
                const deletePromises = orderToDelete.photos.map(async (photoUrl) => {
                    try {
                        const photoPath = photoUrl.split('/o/')[1]?.split('?')[0];
                        if (photoPath) {
                            const decodedPath = decodeURIComponent(photoPath);
                            const storageRef = ref(storage, decodedPath);
                            await deleteObject(storageRef);
                        }
                    } catch (error) {
                        console.error('Erro ao remover foto:', error);
                    }
                });
                await Promise.all(deletePromises);
            }

            await deleteDoc(doc(db, 'artifacts', finalAppId, 'public', 'data', 'serviceOrders', orderToDelete.firestoreId));
            showNotification("OS excluída com sucesso!", 'success');
            setIsDeleteModalOpen(false);
            setOrderToDelete(null);
        } catch (err) {
            showNotification("Erro ao excluir: " + err.message, 'error');
        }
    };

    const handleLogout = async () => {
        try {
            await logout();
        } catch (error) {
            console.error("Erro ao fazer logout:", error);
        }
    };

    const getInputClasses = (fieldName) => {
        const baseClass = "w-full p-4 bg-white border rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/10 transition-all font-bold";
        const errorClass = fieldErrors[fieldName] ? 'border-red-500' : 'border-slate-200';
        const viewModeClass = isViewMode ? 'bg-slate-50 cursor-not-allowed' : '';
        return `${baseClass} ${errorClass} ${viewModeClass}`;
    };

    const getReportFilename = (orders, extension) => {
        if (!orders || orders.length === 0) {
            return `relatorio_${new Date().toISOString().split('T')[0]}.${extension}`;
        }
        const firstOrder = orders[0];
        const osNumberRaw = firstOrder.osNumber || '';
        const match = osNumberRaw.match(/^(\d+)\/(\d{4})/);
        let number = '0000';
        let year = new Date().getFullYear().toString();
        if (match) {
            number = match[1].padStart(4, '0');
            year = match[2];
        }
        let base = `OS_${number}_${year}`;
        return `${base}.${extension}`;
    };

    // Helper compartilhado para abrir/baixar um blob de PDF
    const openPdfBlob = async (pdfDoc, title, customFilename = null) => {
        showNotification('Gerando PDF...', 'info');
        const pdfBlob = await pdf(pdfDoc).toBlob();
        const pdfUrl = URL.createObjectURL(pdfBlob);

        // Define o nome do arquivo
        let filename = customFilename;
        if (!filename) {
            const safeTitle = title.toLowerCase().replace(/\s+/g, '_');
            filename = `${safeTitle}_${new Date().toISOString().split('T')[0]}.pdf`;
        }

        // Força o download imediato
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Revoga a URL após um tempo para liberar memória
        setTimeout(() => URL.revokeObjectURL(pdfUrl), 30000);
        showNotification('PDF gerado com sucesso!', 'success');
    };

    const handleModalPrint = async (printType) => {
        const printData = prepareDataForSave();
        const isBudgetStage = printData.status === 'Em orçamento' ||
            printData.status === 'Aguardando aprovação';
        const title = printType === 'internal' ?
            'Relatório INTERNO' :
            (isBudgetStage ? 'Proposta de orçamento' : 'Relatório de atendimento');

        const groups = {
            [printData.client]: {
                header: {
                    client: printData.client,
                    cnpj: printData.cnpj,
                    contactPerson: printData.contactPerson,
                    email: printData.email,
                    address: printData.address,
                    billingType: printData.billingType,
                    maintenanceVisit: printData.maintenanceVisit
                },
                items: [printData]
            }
        };

        try {
            const customFilename = getReportFilename([printData], 'pdf');

            let modalPaymentConditions = null;
            if (isBudgetStage) {
                const originalVal = parseCurrency(printData.chargedAmount);
                const is5Days = printData.paymentCondition === 'Boleto' &&
                    printData.installments === '5 dias (5% de desconto)';
                const finalVal = (printData.finalChargedAmount !== undefined &&
                    printData.finalChargedAmount !== null &&
                    printData.finalChargedAmount !== '')
                    ? parseCurrency(printData.finalChargedAmount)
                    : (is5Days ? parseFloat((originalVal * 0.95).toFixed(2)) : originalVal);
                modalPaymentConditions = {
                    paymentCondition:   printData.paymentCondition || 'À vista',
                    installments:       printData.installments || '',
                    originalValue:      originalVal,
                    finalChargedAmount: finalVal,
                };
            }

            await openPdfBlob(
                <DocumentoPDF
                    groups={groups}
                    printType={printType}
                    title={title}
                    customPaymentConditions={modalPaymentConditions}
                />,
                title,
                customFilename
            );
        } catch (error) {
            console.error('Erro ao gerar PDF:', error);
            showNotification('Erro ao gerar PDF: ' + error.message, 'error');
        }
    };

    const exportToWord = async () => {
        if (selectedOrders.length === 0) {
            showNotification('Selecione pelo menos uma OS para exportar', 'error');
            return;
        }

        if (userData?.role === 'client') {
            showNotification('Clientes não têm permissão para exportar documentos Word', 'error');
            return;
        }

        const selectedData = ordersForUser.filter(o => selectedOrders.includes(o.firestoreId));

        try {
            setIsSaving(true);
            showNotification('Preparando documento com imagens...', 'info');

            // Agrupar OS por cliente
            const groups = {};
            selectedData.forEach(os => {
                const key = `${os.client}-${os.cnpj || 'no-cnpj'}-${os.billingType}-${os.maintenanceVisit || 'no-visit'}`;
                if (!groups[key]) {
                    groups[key] = {
                        header: {
                            client: os.client,
                            cnpj: os.cnpj,
                            contactPerson: os.contactPerson,
                            email: os.email,
                            address: os.address,
                            billingType: os.billingType,
                            maintenanceVisit: os.maintenanceVisit
                        },
                        items: []
                    };
                }
                groups[key].items.push(os);
            });

            // Função para buscar imagem e converter para base64 com redimensionamento
            const toBase64 = async (url, maxWidth = 300, maxHeight = 200) => {
                try {
                    // Para URLs do Firebase, pode ser necessário adicionar headers para evitar CORS? Geralmente funciona.
                    const response = await fetch(url);
                    const blob = await response.blob();

                    // Criar um elemento Image para redimensionar via canvas
                    return new Promise((resolve, reject) => {
                        const img = new Image();
                        img.crossOrigin = 'anonymous'; // Importante para CORS
                        img.onload = () => {
                            // Calcular novas dimensões mantendo proporção
                            let width = img.width;
                            let height = img.height;
                            if (width > maxWidth) {
                                height = (maxWidth / width) * height;
                                width = maxWidth;
                            }
                            if (height > maxHeight) {
                                width = (maxHeight / height) * width;
                                height = maxHeight;
                            }

                            // Desenhar no canvas e obter base64 redimensionado
                            const canvas = document.createElement('canvas');
                            canvas.width = width;
                            canvas.height = height;
                            const ctx = canvas.getContext('2d');
                            ctx.drawImage(img, 0, 0, width, height);
                            // Qualidade 0.8 para JPEG (menor tamanho)
                            resolve(canvas.toDataURL('image/jpeg', 0.8));
                        };
                        img.onerror = reject;
                        img.src = URL.createObjectURL(blob);
                    });
                } catch (error) {
                    console.error('Erro ao carregar imagem:', error);
                    return null;
                }
            };

            // Processar todas as imagens de todas as OS em paralelo
            const photoPromises = [];
            selectedData.forEach(os => {
                if (os.photos && os.photos.length > 0) {
                    os.photos.forEach((photoUrl, index) => {
                        photoPromises.push({ osId: os.firestoreId, index, promise: toBase64(photoUrl) });
                    });
                }
            });

            // Aguardar todas as conversões
            const photoResults = await Promise.all(photoPromises.map(p => p.promise));
            const photoMap = new Map();
            photoPromises.forEach((p, idx) => {
                const key = `${p.osId}_${p.index}`;
                photoMap.set(key, photoResults[idx]);
            });

            // Converter o logo para base64 também (se for um caminho relativo)
            let logoBase64 = '';
            try {
                const logoResponse = await fetch(logo);
                const logoBlob = await logoResponse.blob();
                logoBase64 = await new Promise((resolve) => {
                    const reader = new FileReader();
                    reader.onloadend = () => resolve(reader.result);
                    reader.readAsDataURL(logoBlob);
                });
            } catch (e) {
                console.warn('Não foi possível carregar o logo:', e);
                logoBase64 = '';
            }

            // Montar HTML com as imagens embutidas e estilos ajustados
            let htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Relatório de OS - Alfa Tecnologia Hospitalar</title>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 20px; }
    h1 { text-align: center; font-size: 28px; margin-bottom: 10px; color: #1a56db; }
    .logo { text-align: center; margin-bottom: 10px; }
    .logo img {
  width: 250px;
  height: auto;
  display: block;
  margin: 0 auto;
}
    h2 { text-align: center; font-size: 20px; margin-top: 0; margin-bottom: 30px; color: #1a56db; }
    h3 { color: #1a56db; font-size: 16px; border-bottom: 2px solid #1a56db; padding-bottom: 5px; margin-top: 30px; }
    table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
    th { background-color: #f2f2f2; color: #1a56db; text-align: left; padding: 10px; border: 1px solid #ddd; }
    td { padding: 10px; border: 1px solid #ddd; vertical-align: top; }
    .client-info { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 20px; }
    .info-item { margin-bottom: 10px; }
    .info-label { font-weight: bold; font-size: 12px; color: #666; margin-bottom: 3px; }
    .info-value { font-size: 14px; color: #333; }
    .os-number { font-weight: bold; color: #1a56db; }
    .status { font-size: 11px; background-color: #f1f5f9; color: #475569; padding: 2px 6px; border-radius: 4px; display: inline-block; margin-top: 3px; }
    .equipment-name { font-weight: bold; }
    .equipment-details { font-size: 12px; color: #666; margin-top: 3px; }
    .serial { font-family: monospace; font-size: 11px; color: #999; }
    .footer { margin-top: 50px; text-align: center; font-size: 12px; color: #666; border-top: 1px solid #ddd; padding-top: 15px; }
    .page-break { page-break-after: always; }
    .photo-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 5px; margin-top: 10px; }
    .photo-item { border: 1px solid #ddd; border-radius: 3px; overflow: hidden; }
    .photo-item img { width: 100%; height: auto; max-height: 100px; object-fit: cover; }
  </style>
</head>
<body>`;

            // Logo no topo
            if (logoBase64) {
                htmlContent += `<div class="logo"><img src="${logoBase64}" alt="Logo Alfa Tecnologia Hospitalar" width="250" height="auto" /></div>`;
            } else {
                htmlContent += `<div class="logo"><span style="font-weight:bold;">Alfa Tecnologia Hospitalar</span></div>`;
            }

            Object.values(groups).forEach((group, groupIndex) => {
                htmlContent += `
  <h1>Relatório de Atendimento Técnico</h1>
  
  <h3>DADOS DO CLIENTE</h3>
  <div class="client-info">
    <div class="info-item"><div class="info-label">Cliente</div><div class="info-value">${group.header.client || '---'}</div></div>
    <div class="info-item"><div class="info-label">CNPJ</div><div class="info-value">${group.header.cnpj || '---'}</div></div>
    <div class="info-item"><div class="info-label">Contato</div><div class="info-value">${group.header.contactPerson || '---'}</div></div>
    <div class="info-item"><div class="info-label">E-mail</div><div class="info-value">${group.header.email || '---'}</div></div>
    <div class="info-item"><div class="info-label">Endereço</div><div class="info-value">${group.header.address || '---'}</div></div>
    <div class="info-item"><div class="info-label">Tipo de Atendimento</div><div class="info-value">${group.header.billingType} ${group.header.maintenanceVisit ? '- ' + group.header.maintenanceVisit : ''}</div></div>
  </div>
  
  <h3>LISTA DE EQUIPAMENTOS</h3>
  <table>
    <thead>
      <tr>
        <th width="15%">OS</th>
        <th width="25%">Equipamento</th>
        <th width="30%">Defeito / Solução</th>
        <th width="30%">Observações</th>
      </tr>
    </thead>
    <tbody>`;

                group.items.forEach(item => {
                    const defects = item.defect ? item.defect.split('\n').filter(d => d.trim()) : [];
                    const solutions = item.solution ? item.solution.split('\n').filter(s => s.trim()) : [];
                    const photos = item.photos || [];

                    htmlContent += `
      <tr>
        <td>
          <div class="os-number">${item.osNumber || '---'}</div>
          <div class="status">${item.status || '---'}</div>
        </td>
        <td>
          <div class="equipment-name">${item.item || '---'}</div>
          <div class="equipment-details">${item.manufacturer || ''} ${item.model || ''}</div>
          <div class="serial">NS: ${item.serial || 'N/D'}</div>
          ${item.quantity && parseInt(item.quantity) > 1 ? `<div class="quantity" style="font-size:9px;color:#666;margin-top:2px;"><strong>Quantidade:</strong> ${item.quantity}</div>` : ''}
        </td>
        <td>
          <div><strong>Defeito:</strong></div>
          ${defects.length > 0 ? `<ul style="margin:5px 0; padding-left:20px;">${defects.map(d => `<li>${d}</li>`).join('')}</ul>` : '<div style="color:#999; font-style:italic;">Sem defeitos registrados</div>'}
          <div style="margin-top:10px;"><strong>Solução:</strong></div>
          ${solutions.length > 0 ? `<ul style="margin:5px 0; padding-left:20px;">${solutions.map(s => `<li>${s}</li>`).join('')}</ul>` : '<div style="color:#999; font-style:italic;">Solução em análise</div>'}
        </td>
        <td>
          ${item.equipmentObservation ? `<div><strong>Observações:</strong> ${item.equipmentObservation}</div>` : ''}
          
          ${photos.length > 0 ? `
          <div style="margin-top: 10px;"><strong>Fotos:</strong></div>
          <div class="photo-grid">` : ''}`;

                    // Incluir imagens (até 6 por OS)
                    if (photos.length > 0) {
                        photos.slice(0, 6).forEach((_, idx) => {
                            const key = `${item.firestoreId}_${idx}`;
                            const base64 = photoMap.get(key);
                            if (base64) {
                                htmlContent += `
            <div class="photo-item">
              <img src="${base64}" alt="Foto" />
            </div>`;
                            } else {
                                htmlContent += `
            <div class="photo-item" style="background:#f0f0f0; display:flex; align-items:center; justify-content:center; height:80px;">
              <span style="font-size:10px; color:#999;">Falha</span>
            </div>`;
                            }
                        });
                        htmlContent += `
          </div>
          ${photos.length > 6 ? `<div style="font-size: 9px; color: #666; margin-top: 5px;">+ ${photos.length - 6} foto(s) adicional(is)</div>` : ''}`;
                    }

                    htmlContent += `
        </td>
      </tr>`;
                });

                htmlContent += `
    </tbody>
  </table>
  
  <div class="footer">
    <p><strong>Alfa Tecnologia Hospitalar</strong> - CNPJ: 50.993.453/0001-34</p>
    <p>(55) 9 9137-9413 - alfa.manutencaosm@gmail.com</p>
    <p>Endereço: Travessa Moreira, 125 - CEP: 97070-540 - Bairro: Duque de Caxias, Santa Maria/ RS</p>
  </div>`;

                if (groupIndex < Object.values(groups).length - 1) {
                    htmlContent += `<div class="page-break"></div>`;
                }
            });

            htmlContent += `
</body>
</html>`;

            // Criar blob e salvar
            const blob = new Blob([htmlContent], { type: 'application/msword;charset=utf-8' });
            const wordFilename = getReportFilename(selectedData, 'doc');
            saveAs(blob, wordFilename);

            showNotification('Documento Word gerado com sucesso!', 'success');
        } catch (error) {
            console.error('Erro ao gerar documento Word:', error);
            showNotification('Erro ao gerar documento Word: ' + error.message, 'error');
        } finally {
            setIsSaving(false);
        }
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
            {/* Botão de menu para mobile */}
            <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="lg:hidden fixed top-4 left-4 z-50 bg-blue-600 text-white p-2 rounded-xl shadow-lg"
            >
                <Menu size={24} />
            </button>

            {/* Sidebar */}
            <aside className={`
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} 
        fixed lg:relative z-40 lg:z-auto
        ${isSidebarOpen ? 'w-64' : 'lg:w-20 w-64'} 
        bg-slate-900 text-white transition-all duration-300 flex flex-col h-screen shadow-2xl lg:shadow-none
    `}>
                <div className={`flex items-center border-b border-slate-800 ${isSidebarOpen ? 'h-32 p-4' : 'h-20 justify-center p-4'}`}>
                    {!isSidebarOpen ? (
                        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full shadow-lg flex items-center justify-center w-12 h-12">
                            <img
                                src={logo}
                                alt="Logo Alfa"
                                className="w-10 h-10 object-contain"
                            />
                        </div>
                    ) : (
                        <div className="w-full h-full flex items-center justify-center">
                            <div className="w-full h-full bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center">
                                <img
                                    src={logo}
                                    alt="Logo Alfa Tecnologia Hospitalar"
                                    className="h-12 object-contain"
                                />
                            </div>
                        </div>
                    )}
                </div>

                <nav className="flex-1 p-3 space-y-1">
                    {userData?.role === 'client' ? (
                        <>
                            <NavItem icon={<LayoutDashboard size={isSidebarOpen ? 20 : 22} />} label="Painel de OS" active={currentPage === 'os'} onClick={() => setCurrentPage('os')} isSidebarOpen={isSidebarOpen} />
                            <NavItem icon={<PieChart size={isSidebarOpen ? 20 : 22} />} label="Painel de Status" active={currentPage === 'status'} onClick={() => setCurrentPage('status')} isSidebarOpen={isSidebarOpen} />

                        </>
                    ) : (
                        <>
                            <NavItem icon={<LayoutDashboard size={isSidebarOpen ? 20 : 22} />} label="Painel de OS" active={currentPage === 'os'} onClick={() => setCurrentPage('os')} isSidebarOpen={isSidebarOpen} />
                            <NavItem icon={<PieChart size={isSidebarOpen ? 20 : 22} />} label="Painel de Status" active={currentPage === 'status'} onClick={() => setCurrentPage('status')} isSidebarOpen={isSidebarOpen} />
                            <NavItem icon={<History size={isSidebarOpen ? 20 : 22} />} label="Histórico do produto" active={currentPage === 'product-history'} onClick={() => setCurrentPage('product-history')} isSidebarOpen={isSidebarOpen} />
                            <div className="relative">
                                <NavItem icon={<Bell size={isSidebarOpen ? 20 : 22} />} label="Avisos" active={currentPage === 'alerts'} onClick={() => setCurrentPage('alerts')} isSidebarOpen={isSidebarOpen} />
                                {alertOrders.length > 0 && (
                                    <span className={`absolute top-1 ${isSidebarOpen ? 'right-3' : 'right-1'} bg-red-500 text-white text-[9px] font-black px-1.5 py-0.5 rounded-full min-w-[18px] text-center pointer-events-none`}>
                                        {alertOrders.length > 99 ? '99+' : alertOrders.length}
                                    </span>
                                )}
                            </div>
                            <NavItem icon={<DollarSign size={isSidebarOpen ? 20 : 22} />} label="Financeiro" active={currentPage === 'financial'} onClick={() => setCurrentPage('financial')} isSidebarOpen={isSidebarOpen} />
                            <div className="relative">
                                <NavItem icon={<FileSignature size={isSidebarOpen ? 20 : 22} />} label="Contratos" active={currentPage === 'contracts'} onClick={() => setCurrentPage('contracts')} isSidebarOpen={isSidebarOpen} />
                                {alertContractsCount > 0 && (
                                    <span className={`absolute top-1 ${isSidebarOpen ? 'right-3' : 'right-1'} bg-red-500 text-white text-[9px] font-black px-1.5 py-0.5 rounded-full min-w-[18px] text-center pointer-events-none`}>
                                        {alertContractsCount > 99 ? '99+' : alertContractsCount}
                                    </span>
                                )}
                            </div>
                            <NavItem icon={<Boxes size={isSidebarOpen ? 20 : 22} />} label="Inventário" active={currentPage === 'inventory'} onClick={() => setCurrentPage('inventory')} isSidebarOpen={isSidebarOpen} />
                            <NavItem icon={<Truck size={isSidebarOpen ? 20 : 22} />} label="Fornecedores" active={currentPage === 'suppliers'} onClick={() => setCurrentPage('suppliers')} isSidebarOpen={isSidebarOpen} />
                            <NavItem icon={<Users size={isSidebarOpen ? 20 : 22} />} label="Clientes" active={currentPage === 'clients'} onClick={() => setCurrentPage('clients')} isSidebarOpen={isSidebarOpen} />
                            {hasPermission('canManageUsers') && (
                                <NavItem icon={<Shield size={isSidebarOpen ? 20 : 22} />} label="Usuários" active={currentPage === 'users'} onClick={() => setCurrentPage('users')} isSidebarOpen={isSidebarOpen} />
                            )}
                            <div className="pt-2 border-t border-slate-800 mt-2">
                                <NavItem icon={<Info size={isSidebarOpen ? 20 : 22} />} label="Sobre" active={currentPage === 'about'} onClick={() => setCurrentPage('about')} isSidebarOpen={isSidebarOpen} />
                            </div>
                        </>
                    )}
                </nav>

                <div className="flex flex-col border-t border-slate-800 mt-auto">
                    {/* Container dos botões - muda o layout baseado no estado da sidebar */}
                    <div className={`${isSidebarOpen ? 'flex justify-between items-center p-4' : 'flex flex-col items-center p-2 space-y-2'}`}>
                        <button
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                            className="text-slate-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-slate-800 lg:flex hidden"
                            title={isSidebarOpen ? "Recolher Sidebar" : "Expandir Sidebar"}
                        >
                            <ChevronRight className={`transition-transform duration-300 ${isSidebarOpen ? 'rotate-180' : ''}`} size={20} />
                        </button>

                        {/* Botão para ocultar/mostrar valores - VISÍVEL APENAS PARA ADMIN */}
                        {userData?.role !== 'client' && (
                            <button
                                onClick={() => setShowValues(!showValues)}
                                className="text-slate-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-slate-800"
                                title={!isSidebarOpen ? (showValues ? "Ocultar Valores" : "Mostrar Valores") : ""}
                            >
                                {showValues ? <Eye size={20} /> : <EyeOff size={20} />}
                            </button>
                        )}

                        <button
                            onClick={handleLogout}
                            className="text-red-400 hover:text-red-500 transition-colors p-1 rounded-lg hover:bg-slate-800"
                            title="Sair"
                        >
                            <LogOut size={20} />
                        </button>
                    </div>
                </div>
            </aside>

            {/* Overlay para mobile quando sidebar aberta */}
            {isSidebarOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            <main className="flex-1 p-4 md:p-8 overflow-y-auto h-screen">
                {currentPage === 'os' && canAccessPage() && (
                    <div className="space-y-8 animate-in fade-in duration-500 max-w-7xl mx-auto">
                        {/* Cabeçalho fixo da página (não rola) */}
                        <div className="flex flex-col">
                            <h2 className="text-3xl font-black text-slate-900 tracking-tighter">Gestão de OS</h2>
                            <p className="text-slate-500 text-sm font-medium">Fluxo operacional hospitalar</p>
                        </div>

                        {selectedOrders.length > 0 && (
                            <div className="hidden sm:block bg-white rounded-2xl shadow-xl border border-slate-100 p-6">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-lg font-black text-slate-800">
                                        Ações para {selectedOrders.length} OS(s) selecionada(s):
                                    </h3>
                                    <button
                                        onClick={() => setSelectedOrders([])}
                                        className="text-sm text-red-600 hover:text-red-700 font-bold flex items-center gap-2"
                                    >
                                        <X size={16} /> Limpar seleção
                                    </button>
                                </div>

                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                                    {userData?.role !== 'client' && (
                                        <button
                                            onClick={() => setIsMoveModalOpen(true)}
                                            className="bg-green-600 text-white p-4 rounded-xl font-bold flex flex-col items-center justify-center gap-2 shadow hover:bg-green-700 transition-colors h-24"
                                        >
                                            <ArrowRight size={20} />
                                            <span className="text-sm">Movimentar OS</span>
                                        </button>
                                    )}

                                    <button
                                        onClick={() => handleOpenPaymentModal('client')}
                                        className="bg-indigo-600 text-white p-4 rounded-xl font-bold flex flex-col items-center justify-center gap-2 shadow hover:bg-indigo-700 transition-colors h-24"
                                    >
                                        <Printer size={20} />
                                        <span className="text-sm">Imprimir Cliente</span>
                                    </button>

                                    <button
                                        onClick={handlePrintLabel}
                                        className="bg-violet-600 text-white p-4 rounded-xl font-bold flex flex-col items-center justify-center gap-2 shadow hover:bg-violet-700 transition-colors h-24"
                                    >
                                        <Tag size={20} />
                                        <span className="text-sm">Imprimir Etiqueta</span>
                                    </button>

                                    {userData?.role !== 'client' && (
                                        <>
                                            <button
                                                onClick={() => handlePrint('internal')}
                                                className="bg-slate-800 text-white p-4 rounded-xl font-bold flex flex-col items-center justify-center gap-2 shadow hover:bg-slate-900 transition-colors h-24"
                                            >
                                                <ShieldAlert size={20} />
                                                <span className="text-sm">Imprimir Interno</span>
                                            </button>
                                            <button
                                                onClick={handlePrintSupplier}
                                                className="bg-teal-600 text-white p-4 rounded-xl font-bold flex flex-col items-center justify-center gap-2 shadow hover:bg-teal-700 transition-colors h-24"
                                            >
                                                <Truck size={20} />
                                                <span className="text-sm">Imprimir Fornecedor</span>
                                            </button>
                                            <button
                                                onClick={exportToWord}
                                                className="bg-emerald-600 text-white p-4 rounded-xl font-bold flex flex-col items-center justify-center gap-2 shadow hover:bg-emerald-700 transition-colors h-24"
                                            >
                                                <FileText size={20} />
                                                <span className="text-sm">Exportar para Word</span>
                                            </button>
                                        </>
                                    )}
                                </div>
                            </div>
                        )}

                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="relative group z-20 flex-1" ref={searchDropdownRef}>
                                <Search className="absolute left-5 top-5 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={24} />
                                <input
                                    className="w-full pl-14 pr-6 py-5 rounded-2xl border-none shadow-xl shadow-slate-200/50 focus:ring-4 focus:ring-blue-500/10 text-lg font-medium outline-none bg-white relative z-10"
                                    placeholder="Pesquise por cliente, OS, equipamento, marca, modelo ou NS..."
                                    value={searchTerm}
                                    onChange={e => {
                                        const normalizedSearchTerm = e.target.value.toLowerCase().trim();
                                        setSearchTerm(e.target.value);

                                        if (e.target.value.trim()) {
                                            setShowSearchDropdown(true);
                                        } else {
                                            setShowSearchDropdown(false);
                                        }
                                    }}
                                    onFocus={() => {
                                        if (searchTerm.trim()) {
                                            setShowSearchDropdown(true);
                                        }
                                    }}
                                />
                                {showSearchDropdown && searchTerm && (
                                    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden animate-in slide-in-from-top-2 z-50 max-h-96 overflow-y-auto">
                                        {(() => {
                                            const normalizedSearchTerm = searchTerm.toLowerCase().trim();
                                            const allFilteredOrders = ordersForUser.filter(o => {
                                                return (
                                                    (o.client && o.client.toLowerCase().trim().includes(normalizedSearchTerm)) ||
                                                    (o.osNumber && o.osNumber.includes(searchTerm)) ||
                                                    (o.item && o.item.toLowerCase().trim().includes(normalizedSearchTerm)) ||
                                                    (o.manufacturer && o.manufacturer.toLowerCase().trim().includes(normalizedSearchTerm)) ||
                                                    (o.model && o.model.toLowerCase().trim().includes(normalizedSearchTerm)) ||
                                                    (o.serial && o.serial.toLowerCase().trim().includes(normalizedSearchTerm))
                                                );
                                            });
                                            const displayedOrders = allFilteredOrders.slice(0, 20);

                                            return (
                                                <>
                                                    {displayedOrders.map(o => (
                                                        <div
                                                            key={o.firestoreId}
                                                            onClick={() => {
                                                                openModal(o);
                                                                setSearchTerm('');
                                                                setShowSearchDropdown(false);
                                                            }}
                                                            className="p-4 border-b border-slate-50 hover:bg-blue-50 cursor-pointer flex justify-between items-center group/item transition-colors"
                                                        >
                                                            <div>
                                                                <div className="font-bold text-slate-800 flex items-center gap-2">
                                                                    {o.client}
                                                                    <span className="text-[10px] bg-slate-100 text-slate-500 px-2 rounded-full uppercase">{o.status}</span>
                                                                </div>
                                                                <div className="text-xs text-slate-500 mt-1">
                                                                    <span className="font-mono text-blue-600 font-bold">{o.osNumber}</span> - {o.item}
                                                                    {(o.manufacturer || o.model || o.serial) && (
                                                                        <div className="text-[10px] text-slate-400 mt-1">
                                                                            {o.manufacturer && `Marca: ${o.manufacturer} `}
                                                                            {o.model && `| Modelo: ${o.model} `}
                                                                            {o.serial && `| NS: ${o.serial}`}
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            </div>
                                                            <div className="text-xs font-bold text-blue-600 opacity-0 group-hover/item:opacity-100 flex items-center gap-1 transition-all">Abrir <ExternalLink size={14} /></div>
                                                        </div>
                                                    ))}
                                                    {allFilteredOrders.length === 0 && (
                                                        <div className="p-6 text-center text-slate-400 text-sm font-medium">Nenhum resultado encontrado.</div>
                                                    )}
                                                    {allFilteredOrders.length > 20 && (
                                                        <div className="p-4 text-center text-xs text-slate-500 bg-slate-50 border-t border-slate-100">
                                                            Mostrando 20 de {allFilteredOrders.length} resultados. Digite mais para refinar a busca.
                                                        </div>
                                                    )}
                                                </>
                                            );
                                        })()}
                                    </div>
                                )}
                            </div>
                            <div className="flex gap-2">
                                {/* Botão para seleção por intervalo */}
                                <div className="relative">
                                    <button
                                        onClick={() => setShowRangeInput(!showRangeInput)}
                                        className={`p-5 rounded-2xl font-bold flex items-center justify-center gap-2 transition-colors ${showRangeInput
                                            ? 'bg-blue-600 text-white shadow-xl shadow-blue-200'
                                            : 'bg-white text-slate-600 shadow-xl shadow-slate-200/50 hover:bg-slate-50'
                                            }`}
                                        title="Seleção por intervalo"
                                    >
                                        <ListPlus size={24} />
                                        <span className="hidden sm:inline">Intervalo</span>
                                    </button>

                                    {showRangeInput && (
                                        <div className="fixed inset-x-4 top-20 sm:absolute sm:inset-x-auto sm:top-full sm:right-0 sm:mt-2 bg-white rounded-2xl shadow-2xl border border-slate-100 p-4 w-auto sm:w-80 animate-in slide-in-from-top-2 z-50 max-h-[80vh] overflow-y-auto">
                                            <div className="space-y-3">
                                                <div className="flex items-center justify-between">
                                                    <h4 className="text-sm font-bold text-slate-700">Seleção por Intervalo</h4>
                                                    <button
                                                        onClick={() => setShowRangeInput(false)}
                                                        className="text-slate-400 hover:text-slate-600"
                                                    >
                                                        <X size={16} />
                                                    </button>
                                                </div>

                                                <div className="space-y-2">
                                                    <div className="text-xs text-slate-500 font-medium">
                                                        Digite o intervalo de números de OS:
                                                    </div>

                                                    <input
                                                        type="text"
                                                        placeholder="Ex: 10-20 ou 10,20,30 ou apenas 10"
                                                        className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium outline-none focus:ring-2 focus:ring-blue-500/20"
                                                        value={rangeInput}
                                                        onChange={e => setRangeInput(e.target.value)}
                                                        onKeyDown={(e) => {
                                                            if (e.key === 'Enter') handleSelectByRange();
                                                        }}
                                                        autoFocus
                                                    />

                                                    <div className="text-[10px] text-slate-400 space-y-1">
                                                        <div className="flex items-center gap-1">
                                                            <Check size={10} /> Formato: 10-20 (intervalo)
                                                        </div>
                                                        <div className="flex items-center gap-1">
                                                            <Check size={10} /> Formato: 10,20,30 (lista)
                                                        </div>
                                                        <div className="flex items-center gap-1">
                                                            <Check size={10} /> Formato: 10 (única)
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex gap-2 pt-2">
                                                    <button
                                                        onClick={handleSelectByRange}
                                                        className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-bold text-sm hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                                                    >
                                                        <Check size={16} /> Aplicar
                                                    </button>
                                                    <button
                                                        onClick={() => {
                                                            setRangeInput('');
                                                            setShowRangeInput(false);
                                                        }}
                                                        className="px-4 py-3 bg-slate-100 text-slate-600 rounded-xl font-bold text-sm hover:bg-slate-200 transition-colors"
                                                    >
                                                        Cancelar
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <button
                                    onClick={() => {
                                        setSortField('osNumber');
                                        setSortDirection(prev => (prev === 'desc' ? 'asc' : 'desc'));
                                    }}
                                    className="bg-white p-5 rounded-2xl shadow-xl shadow-slate-200/50 border-none hover:bg-slate-50 transition-colors text-slate-600"
                                    title={sortDirection === 'desc' ? 'Mais Recentes Primeiro' : 'Mais Antigos Primeiro'}
                                >
                                    {sortDirection === 'desc' ? <ArrowDownWideNarrow size={24} /> : <ArrowUpNarrowWide size={24} />}
                                </button>

                                {selectedOrders.length === 0 && hasPermission('canEditOS') && (
                                    <button
                                        onClick={handleOpenNewOS}
                                        className="hidden sm:flex bg-blue-600 text-white px-8 py-5 rounded-2xl font-bold items-center justify-center gap-3 shadow-2xl shadow-blue-200 hover:bg-blue-700 transition-colors min-w-[200px]"
                                    >
                                        <Plus size={24} /> Abrir Nova OS
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* ── PAINEL DE FILTROS AVANÇADOS ── */}
                        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-visible" ref={filterPanelRef}>
                            <button
                                onClick={() => setFiltersOpen(!filtersOpen)}
                                className="w-full flex items-center justify-between p-4 hover:bg-slate-50 transition-colors rounded-2xl"
                            >
                                <div className="flex items-center gap-3 font-bold text-slate-700 text-sm">
                                    <Filter size={18} className="text-blue-500" />
                                    <span>Filtros Avançados</span>
                                    {hasAdvancedFilters && (
                                        <span className="bg-blue-600 text-white text-[10px] px-2 py-0.5 rounded-full font-black uppercase">Ativo</span>
                                    )}
                                </div>
                                <div className="flex items-center gap-2">
                                    {hasAdvancedFilters && (
                                        <button
                                            type="button"
                                            onClick={(e) => { e.stopPropagation(); setFilterClient(''); setFilterCNPJ(''); setFilterSerial(''); setFilterItem(''); setFilterManufacturer(''); setFilterModel(''); setFilterStatus(''); }}
                                            className="text-xs text-red-500 font-bold hover:text-red-700 flex items-center gap-1 px-2 py-1 rounded-lg hover:bg-red-50"
                                        >
                                            <X size={12} /> Limpar
                                        </button>
                                    )}
                                    <ChevronDown size={18} className={`text-slate-400 transition-transform duration-200 ${filtersOpen ? 'rotate-180' : ''}`} />
                                </div>
                            </button>

                            {filtersOpen && (
                                <div className="px-4 pb-5 border-t border-slate-100 pt-4 space-y-4 animate-in slide-in-from-top-2 duration-200">
                                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                                        {/* Cliente */}
                                        <div className="relative col-span-2 sm:col-span-1">
                                            <label className="text-[10px] font-black text-slate-400 uppercase block mb-1">Cliente</label>
                                            <input
                                                type="text"
                                                placeholder="Nome do cliente..."
                                                className="w-full p-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl outline-none font-medium focus:ring-2 focus:ring-blue-500/20"
                                                value={filterClient}
                                                onChange={e => { setFilterClient(e.target.value); setShowFilterClientSug(true); }}
                                                onFocus={() => setShowFilterClientSug(true)}
                                                onBlur={() => setTimeout(() => setShowFilterClientSug(false), 200)}
                                            />
                                            {showFilterClientSug && filterClient && (
                                                <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-xl shadow-2xl border border-slate-100 z-50 max-h-40 overflow-y-auto">
                                                    {uniqueClients.filter(c => c.client.toLowerCase().includes(filterClient.toLowerCase())).slice(0, 6).map((c, i) => (
                                                        <div key={i} className="px-3 py-2 hover:bg-blue-50 cursor-pointer text-sm font-medium" onMouseDown={() => { setFilterClient(c.client); setShowFilterClientSug(false); }}>{c.client}</div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                        {/* Número de Série */}
                                        <div className="relative">
                                            <label className="text-[10px] font-black text-slate-400 uppercase block mb-1">Nº de Série</label>
                                            <input
                                                type="text"
                                                placeholder="NS..."
                                                className="w-full p-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl outline-none font-mono font-medium focus:ring-2 focus:ring-blue-500/20"
                                                value={filterSerial}
                                                onChange={e => { setFilterSerial(e.target.value); setShowFilterSerialSug(true); }}
                                                onFocus={() => setShowFilterSerialSug(true)}
                                                onBlur={() => setTimeout(() => setShowFilterSerialSug(false), 200)}
                                            />
                                            {showFilterSerialSug && filterSerial && (
                                                <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-xl shadow-2xl border border-slate-100 z-50 max-h-40 overflow-y-auto">
                                                    {uniqueSerials.filter(s => s.toLowerCase().includes(filterSerial.toLowerCase())).slice(0, 6).map((s, i) => (
                                                        <div key={i} className="px-3 py-2 hover:bg-blue-50 cursor-pointer text-xs font-mono font-medium" onMouseDown={() => { setFilterSerial(s); setShowFilterSerialSug(false); }}>{s}</div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                        {/* Item */}
                                        <div className="relative">
                                            <label className="text-[10px] font-black text-slate-400 uppercase block mb-1">Equipamento</label>
                                            <input
                                                type="text"
                                                placeholder="Item..."
                                                className="w-full p-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl outline-none font-medium focus:ring-2 focus:ring-blue-500/20"
                                                value={filterItem}
                                                onChange={e => { setFilterItem(e.target.value); setShowFilterItemSug(true); }}
                                                onFocus={() => setShowFilterItemSug(true)}
                                                onBlur={() => setTimeout(() => setShowFilterItemSug(false), 200)}
                                            />
                                            {showFilterItemSug && filterItem && (
                                                <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-xl shadow-2xl border border-slate-100 z-50 max-h-40 overflow-y-auto">
                                                    {uniqueItems.filter(i => i.toLowerCase().includes(filterItem.toLowerCase())).slice(0, 6).map((it, i) => (
                                                        <div key={i} className="px-3 py-2 hover:bg-blue-50 cursor-pointer text-sm font-medium" onMouseDown={() => { setFilterItem(it); setShowFilterItemSug(false); }}>{it}</div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                        {/* Marca */}
                                        <div className="relative">
                                            <label className="text-[10px] font-black text-slate-400 uppercase block mb-1">Marca</label>
                                            <input
                                                type="text"
                                                placeholder="Marca..."
                                                className="w-full p-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl outline-none font-medium focus:ring-2 focus:ring-blue-500/20"
                                                value={filterManufacturer}
                                                onChange={e => { setFilterManufacturer(e.target.value); setShowFilterManufSug(true); }}
                                                onFocus={() => setShowFilterManufSug(true)}
                                                onBlur={() => setTimeout(() => setShowFilterManufSug(false), 200)}
                                            />
                                            {showFilterManufSug && filterManufacturer && (
                                                <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-xl shadow-2xl border border-slate-100 z-50 max-h-40 overflow-y-auto">
                                                    {uniqueManufacturers.filter(m => m.toLowerCase().includes(filterManufacturer.toLowerCase())).slice(0, 6).map((m, i) => (
                                                        <div key={i} className="px-3 py-2 hover:bg-blue-50 cursor-pointer text-sm font-medium" onMouseDown={() => { setFilterManufacturer(m); setShowFilterManufSug(false); }}>{m}</div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                        {/* Modelo */}
                                        <div className="relative">
                                            <label className="text-[10px] font-black text-slate-400 uppercase block mb-1">Modelo</label>
                                            <input
                                                type="text"
                                                placeholder="Modelo..."
                                                className="w-full p-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl outline-none font-medium focus:ring-2 focus:ring-blue-500/20"
                                                value={filterModel}
                                                onChange={e => { setFilterModel(e.target.value); setShowFilterModelSug(true); }}
                                                onFocus={() => setShowFilterModelSug(true)}
                                                onBlur={() => setTimeout(() => setShowFilterModelSug(false), 200)}
                                            />
                                            {showFilterModelSug && filterModel && (
                                                <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-xl shadow-2xl border border-slate-100 z-50 max-h-40 overflow-y-auto">
                                                    {uniqueModels.filter(m => m.toLowerCase().includes(filterModel.toLowerCase())).slice(0, 6).map((m, i) => (
                                                        <div key={i} className="px-3 py-2 hover:bg-blue-50 cursor-pointer text-sm font-medium" onMouseDown={() => { setFilterModel(m); setShowFilterModelSug(false); }}>{m}</div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Status - círculos coloridos */}
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase">Status</label>
                                        <div className="flex flex-wrap gap-2">
                                            {statusOptions.map(status => {
                                                const color = statusColors[status] ?? '#94a3b8';
                                                const isActive = filterStatus === status;
                                                return (
                                                    <button
                                                        key={status}
                                                        type="button"
                                                        onClick={() => setFilterStatus(prev => prev === status ? '' : status)}
                                                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border transition-all ${isActive ? 'text-white shadow-md scale-105' : 'bg-white text-slate-600 hover:scale-105'}`}
                                                        style={isActive ? { backgroundColor: color, borderColor: color } : { borderColor: color + '60', color: color }}
                                                    >
                                                        <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />
                                                        {status}
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* ── LISTA DE OS ── */}
                        {isLoading ? (
                            <div className="flex items-center justify-center py-20">
                                <Loader2 className="animate-spin text-blue-600" size={36} />
                            </div>
                        ) : (() => {
                            const filteredOrders = sortedOrders.filter(o => {
                                const q = searchTerm.toLowerCase().trim();
                                if (q) {
                                    const [year, month, day] = (o.statusDate ?? '').split('-');
                                    const dateBR = `${day}/${month}/${year}`;
                                    const matchSearch = (
                                        o.client?.toLowerCase().includes(q) ||
                                        o.osNumber?.includes(searchTerm) ||
                                        o.item?.toLowerCase().includes(q) ||
                                        o.manufacturer?.toLowerCase().includes(q) ||
                                        o.model?.toLowerCase().includes(q) ||
                                        o.serial?.toLowerCase().includes(q) ||
                                        dateBR.includes(q) ||
                                        (o.statusDate ?? '').includes(q)
                                    );
                                    if (!matchSearch) return false;
                                }
                                if (filterClient && !o.client?.toLowerCase().includes(filterClient.toLowerCase())) return false;
                                if (filterCNPJ && !o.cnpj?.toLowerCase().includes(filterCNPJ.toLowerCase())) return false;
                                if (filterSerial && !o.serial?.toLowerCase().includes(filterSerial.toLowerCase())) return false;
                                if (filterItem && !o.item?.toLowerCase().includes(filterItem.toLowerCase())) return false;
                                if (filterManufacturer && !o.manufacturer?.toLowerCase().includes(filterManufacturer.toLowerCase())) return false;
                                if (filterModel && !o.model?.toLowerCase().includes(filterModel.toLowerCase())) return false;
                                if (filterStatus && o.status !== filterStatus) return false;
                                return true;
                            });

                            return (
                                <>
                                    {/* ── CARDS (mobile) ── */}
                                    <div className="lg:hidden space-y-3">
                                        {filteredOrders.length === 0 && (
                                            <div className="text-center py-16 text-slate-400 font-medium">
                                                Nenhuma OS encontrada.
                                            </div>
                                        )}
                                        {filteredOrders.map(o => {
                                            const isSelected = selectedOrders.includes(o.firestoreId);
                                            const isBudget = o.status === 'Em orçamento' || o.status === 'Aguardando aprovação';
                                            return (
                                                <div
                                                    key={o.firestoreId}
                                                    onClick={() => toggleOrderSelectionWithLinked(o.firestoreId)}
                                                    className={`relative bg-white rounded-2xl border shadow-sm transition-all cursor-pointer select-none
                                                    ${isSelected
                                                            ? 'border-blue-400 ring-2 ring-blue-200 shadow-blue-100'
                                                            : 'border-slate-100 hover:border-slate-200 hover:shadow-md'
                                                        }`}
                                                >
                                                    {/* Barra colorida de status à esquerda */}
                                                    <div
                                                        className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
                                                        style={{ backgroundColor: statusColors[o.status] ?? '#94a3b8' }}
                                                    />

                                                    <div className="pl-4 pr-4 pt-4 pb-3">
                                                        {/* Linha 1: OS + badge status + checkbox */}
                                                        <div className="flex items-start justify-between gap-2 mb-2">
                                                            <div className="flex items-center gap-2 min-w-0">
                                                                <input
                                                                    type="checkbox"
                                                                    checked={isSelected}
                                                                    onChange={() => toggleOrderSelectionWithLinked(o.firestoreId)}
                                                                    onClick={e => e.stopPropagation()}
                                                                    className="w-4 h-4 rounded border-slate-300 text-blue-600 flex-shrink-0"
                                                                />
                                                                <span className="font-black text-blue-700 text-base leading-tight">
                                                                    {o.osNumber}
                                                                </span>
                                                            </div>
                                                            <div className="flex items-center gap-2 flex-shrink-0">
                                                                <span
                                                                    className="px-2.5 py-1 rounded-lg text-[10px] font-black uppercase border"
                                                                    style={{
                                                                        backgroundColor: (statusColors[o.status] ?? '#94a3b8') + '20',
                                                                        borderColor: (statusColors[o.status] ?? '#94a3b8') + '40',
                                                                        color: statusColors[o.status] ?? '#94a3b8'
                                                                    }}
                                                                >
                                                                    {o.status}
                                                                </span>
                                                                <div
                                                                    onClick={e => e.stopPropagation()}
                                                                    onPointerDown={e => e.stopPropagation()}
                                                                >
                                                                    <OrderActionsDropdown
                                                                        order={o}
                                                                        openModal={openModal}
                                                                        openViewModal={openViewModal}
                                                                        openNewWithClient={handleNewOSWithClient}
                                                                        confirmDelete={confirmDelete}
                                                                        userData={userData}
                                                                        handleNewAssociatedOS={handleNewAssociatedOS}
                                                                        hasPermission={hasPermission}
                                                                        openHistoryModal={order => {
                                                                            setSelectedOrderForHistory(order);
                                                                            setIsHistoryModalOpen(true);
                                                                        }}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* Linha 2: Cliente */}
                                                        <div className="font-bold text-slate-900 text-sm leading-tight mb-1 truncate">
                                                            {o.client}
                                                        </div>

                                                        {/* Linha 3: Equipamento */}
                                                        <div className="flex items-baseline gap-1.5 mb-2">
                                                            <span className="text-sm text-slate-700 font-medium truncate">{o.item}</span>
                                                            {(o.manufacturer || o.model) && (
                                                                <span className="text-xs text-slate-400 truncate flex-shrink-0">
                                                                    {[o.manufacturer, o.model].filter(Boolean).join(' ')}
                                                                </span>
                                                            )}
                                                        </div>

                                                        {/* Linha 4: Meta-info */}
                                                        <div className="flex items-center justify-between text-[11px] text-slate-400 font-medium">
                                                            <div className="flex items-center gap-3">
                                                                {o.serial && (
                                                                    <span className="font-mono">NS: {o.serial}</span>
                                                                )}
                                                                {o.quantity && parseInt(o.quantity) > 1 && (
                                                                    <span className="text-blue-500 font-bold">x{o.quantity}</span>
                                                                )}
                                                                {o.billingType && (
                                                                    <span className="uppercase tracking-tight">{o.billingType}</span>
                                                                )}
                                                            </div>
                                                            <span>{formatDateBR(o.statusDate)}</span>
                                                        </div>

                                                        {/* Botões de aprovação/recusa para cliente */}
                                                        {userData?.role === 'client' && isBudget && (
                                                            <div className="flex gap-2 mt-3 pt-3 border-t border-slate-100">
                                                                <button
                                                                    onClick={e => { e.stopPropagation(); handleApproveBudget(o); }}
                                                                    className="flex-1 py-2 bg-green-600 text-white rounded-xl font-bold text-xs hover:bg-green-700 transition-colors flex items-center justify-center gap-1"
                                                                >
                                                                    <Check size={14} /> Aprovar
                                                                </button>
                                                                <button
                                                                    onClick={e => { e.stopPropagation(); handleRejectBudget(o); }}
                                                                    className="flex-1 py-2 bg-red-600 text-white rounded-xl font-bold text-xs hover:bg-red-700 transition-colors flex items-center justify-center gap-1"
                                                                >
                                                                    <X size={14} /> Recusar
                                                                </button>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>

                                    {/* ── TABELA (desktop) ── */}
                                    <div className="hidden lg:block bg-white rounded-[2rem] shadow-xl border border-slate-100">
                                        <div className="h-[calc(100vh-320px)] overflow-y-auto overflow-x-auto rounded-[2rem]">
                                            <table className="w-full text-left min-w-[900px]">
                                                <thead className="bg-white sticky top-0 z-10 shadow-sm">
                                                    <tr className="border-b text-[10px] font-black uppercase text-slate-400 tracking-widest">
                                                        <th className="px-6 py-6 text-center w-12 bg-white">
                                                            <input
                                                                type="checkbox"
                                                                className="w-4 h-4 rounded border-slate-300 text-blue-600"
                                                                onChange={(e) => {
                                                                    if (e.target.checked) {
                                                                        const ids = new Set();
                                                                        filteredOrders.forEach(o => {
                                                                            ids.add(o.firestoreId);
                                                                            (o.linkedOS ?? []).forEach(id => ids.add(id));
                                                                        });
                                                                        setSelectedOrders(Array.from(ids));
                                                                    } else {
                                                                        const visibleIds = filteredOrders.map(o => o.firestoreId);
                                                                        setSelectedOrders(prev => prev.filter(id => !visibleIds.includes(id)));
                                                                    }
                                                                }}
                                                                checked={
                                                                    filteredOrders.length > 0 &&
                                                                    filteredOrders.every(o => selectedOrders.includes(o.firestoreId))
                                                                }
                                                            />
                                                        </th>
                                                        {[
                                                            { label: 'OS', field: 'osNumber' },
                                                            { label: 'Cliente', field: 'client' },
                                                            { label: 'Equipamento', field: 'item' },
                                                            { label: 'Tipo', field: 'billingType' },
                                                            { label: 'Status', field: 'status' },
                                                        ].map(col => (
                                                            <th key={col.field} className="px-8 py-6 bg-white">
                                                                <button
                                                                    onClick={() => {
                                                                        setSortField(col.field);
                                                                        setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
                                                                    }}
                                                                    className="flex items-center gap-1 hover:text-blue-600"
                                                                >
                                                                    {col.label}
                                                                    {sortField === col.field && (
                                                                        sortDirection === 'asc' ? <ChevronUp size={14} /> : <ChevronDown size={14} />
                                                                    )}
                                                                </button>
                                                            </th>
                                                        ))}
                                                        <th className="px-8 py-6 text-right bg-white">Ações</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-slate-50">
                                                    {filteredOrders.length === 0 && (
                                                        <tr>
                                                            <td colSpan="7" className="p-20 text-center text-slate-400">
                                                                Nenhuma OS encontrada.
                                                            </td>
                                                        </tr>
                                                    )}
                                                    {filteredOrders.map(o => (
                                                        <tr
                                                            key={o.firestoreId}
                                                            className={`hover:bg-blue-50/30 transition-colors group cursor-pointer ${selectedOrders.includes(o.firestoreId) ? 'bg-blue-50/50' : ''}`}
                                                            onClick={() => toggleOrderSelectionWithLinked(o.firestoreId)}
                                                        >
                                                            <td className="px-6 py-4 text-center">
                                                                <input
                                                                    type="checkbox"
                                                                    className="w-4 h-4 rounded border-slate-300 text-blue-600"
                                                                    checked={selectedOrders.includes(o.firestoreId)}
                                                                    onChange={() => toggleOrderSelectionWithLinked(o.firestoreId)}
                                                                    onClick={e => e.stopPropagation()}
                                                                />
                                                            </td>
                                                            <td className="px-8 py-6">
                                                                <div className="font-black text-blue-700 text-lg">{o.osNumber}</div>
                                                            </td>
                                                            <td className="px-8 py-6">
                                                                <div className="font-bold text-slate-900 text-sm">{o.client}</div>
                                                            </td>
                                                            <td className="px-8 py-6">
                                                                <div className="font-bold text-slate-900 text-sm">{o.item}</div>
                                                                {(o.manufacturer || o.model) && (
                                                                    <div className="text-xs text-slate-500 font-medium mb-0.5">
                                                                        {o.manufacturer} {o.model}
                                                                    </div>
                                                                )}
                                                                <div className="text-[10px] text-slate-400 font-mono">NS: {o.serial || 'N/D'}</div>
                                                                {o.quantity && parseInt(o.quantity) > 1 && (
                                                                    <div className="text-[10px] text-blue-600 font-bold mt-0.5">
                                                                        Quantidade: {o.quantity}
                                                                    </div>
                                                                )}
                                                            </td>
                                                            <td className="px-8 py-6">
                                                                <div className="text-xs font-bold text-slate-500 uppercase tracking-tighter">{o.billingType}</div>
                                                            </td>
                                                            <td className="px-8 py-6">
                                                                <div
                                                                    className="px-4 py-2 rounded-xl text-[10px] font-black uppercase inline-block border"
                                                                    style={{
                                                                        backgroundColor: (statusColors[o.status] ?? '#94a3b8') + '20',
                                                                        borderColor: (statusColors[o.status] ?? '#94a3b8') + '40',
                                                                        color: statusColors[o.status] ?? '#94a3b8'
                                                                    }}
                                                                >
                                                                    {o.status}
                                                                </div>
                                                                <div className="text-[9px] text-slate-400 mt-1 font-medium">
                                                                    {formatDateBR(o.statusDate)}
                                                                </div>
                                                            </td>
                                                            <td className="px-8 py-6 text-right">
                                                                <div className="flex justify-end items-center gap-2">
                                                                    {userData?.role === 'client' &&
                                                                        (o.status === 'Em orçamento' || o.status === 'Aguardando aprovação') && (
                                                                            <>
                                                                                <button
                                                                                    onClick={e => { e.stopPropagation(); handleApproveBudget(o); }}
                                                                                    className="px-4 py-2 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 transition-colors text-sm shadow-md"
                                                                                >
                                                                                    <Check size={16} className="inline mr-1" /> Aprovar
                                                                                </button>
                                                                                <button
                                                                                    onClick={e => { e.stopPropagation(); handleRejectBudget(o); }}
                                                                                    className="px-4 py-2 bg-red-600 text-white rounded-xl font-bold hover:bg-red-700 transition-colors text-sm shadow-md"
                                                                                >
                                                                                    <X size={16} className="inline mr-1" /> Recusar
                                                                                </button>
                                                                            </>
                                                                        )}
                                                                    <OrderActionsDropdown
                                                                        order={o}
                                                                        openModal={openModal}
                                                                        openViewModal={openViewModal}
                                                                        openNewWithClient={handleNewOSWithClient}
                                                                        confirmDelete={confirmDelete}
                                                                        userData={userData}
                                                                        handleNewAssociatedOS={handleNewAssociatedOS}
                                                                        hasPermission={hasPermission}
                                                                        openHistoryModal={order => {
                                                                            setSelectedOrderForHistory(order);
                                                                            setIsHistoryModalOpen(true);
                                                                        }}
                                                                    />
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </>
                            );
                        })()}

                        {/* ── FAB Nova OS (mobile only) ── */}
                        {selectedOrders.length === 0 && hasPermission('canEditOS') && (
                            <button
                                onClick={handleOpenNewOS}
                                className="sm:hidden fixed bottom-6 right-6 z-40 w-14 h-14 bg-blue-600 text-white rounded-full shadow-2xl shadow-blue-300 flex items-center justify-center hover:bg-blue-700 transition-colors"
                                title="Abrir Nova OS"
                            >
                                <Plus size={26} />
                            </button>
                        )}

                        {/* ── Barra de ações flutuante mobile (quando há seleção) ── */}
                        {selectedOrders.length > 0 && (
                            <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 shadow-2xl px-4 pt-3 pb-5 animate-in slide-in-from-bottom-4">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-sm font-black text-slate-800">
                                        {selectedOrders.length} OS(s) selecionada(s)
                                    </span>
                                    <button
                                        onClick={() => setSelectedOrders([])}
                                        className="text-xs text-red-500 font-bold flex items-center gap-1"
                                    >
                                        <X size={14} /> Limpar
                                    </button>
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                    <button
                                        onClick={() => handleOpenPaymentModal('client')}
                                        className="bg-indigo-600 text-white py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5"
                                    >
                                        <Printer size={16} /> Imprimir Cliente
                                    </button>
                                    <button
                                        onClick={handlePrintLabel}
                                        className="bg-violet-600 text-white py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5"
                                    >
                                        <Tag size={16} /> Etiqueta
                                    </button>
                                    {userData?.role !== 'client' && (
                                        <>
                                            <button
                                                onClick={() => setIsMoveModalOpen(true)}
                                                className="bg-green-600 text-white py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5"
                                            >
                                                <ArrowRight size={16} /> Movimentar
                                            </button>
                                            <button
                                                onClick={() => handlePrint('internal')}
                                                className="bg-slate-800 text-white py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5"
                                            >
                                                <ShieldAlert size={16} /> Imprimir Interno
                                            </button>
                                            <button
                                                onClick={handlePrintSupplier}
                                                className="bg-teal-600 text-white py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5"
                                            >
                                                <Truck size={16} /> Fornecedor
                                            </button>
                                        </>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {currentPage === 'status' && canAccessPage() && (
                    <div className="space-y-6 animate-in fade-in duration-500 max-w-7xl mx-auto h-full flex flex-col">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 shrink-0">
                            <div>
                                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tighter">Indicadores</h2>
                                <p className="text-slate-500 font-medium">
                                    {hasActiveFilters() ? `Visualizando métricas filtradas (${dashboardData.count} ordens)` : `Visualizando métricas gerais de todas as ordens (${dashboardData.count})`}
                                </p>
                            </div>
                            {hasActiveFilters() && (
                                <button
                                    onClick={clearAllFilters}
                                    className="text-sm font-bold text-blue-600 hover:text-blue-700 hover:underline flex items-center gap-2"
                                >
                                    <X size={16} /> Limpar todos os filtros
                                </button>
                            )}
                        </div>

                        {/* === ADICIONE ESTA SEÇÃO (Botões de ação quando há OSs selecionadas) === */}
                        {selectedOrders.length > 0 && (
                            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 animate-in slide-in-from-top-4">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-lg font-black text-slate-800">
                                        Ações para {selectedOrders.length} OS(s) selecionada(s):
                                    </h3>
                                    <button
                                        onClick={() => setSelectedOrders([])}
                                        className="text-sm text-red-600 hover:text-red-700 font-bold flex items-center gap-2"
                                    >
                                        <X size={16} /> Limpar seleção
                                    </button>
                                </div>

                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                                    {userData?.role !== 'client' && (
                                        <button
                                            onClick={() => setIsMoveModalOpen(true)}
                                            className="bg-green-600 text-white p-4 rounded-xl font-bold flex flex-col items-center justify-center gap-2 shadow hover:bg-green-700 transition-colors h-24"
                                        >
                                            <ArrowRight size={20} />
                                            <span className="text-sm">Movimentar OS</span>
                                        </button>
                                    )}

                                    <button
                                        onClick={() => handleOpenPaymentModal('client')}
                                        className="bg-indigo-600 text-white p-4 rounded-xl font-bold flex flex-col items-center justify-center gap-2 shadow hover:bg-indigo-700 transition-colors h-24"
                                    >
                                        <Printer size={20} />
                                        <span className="text-sm">Imprimir Cliente</span>
                                    </button>

                                    <button
                                        onClick={handlePrintLabel}
                                        className="bg-violet-600 text-white p-4 rounded-xl font-bold flex flex-col items-center justify-center gap-2 shadow hover:bg-violet-700 transition-colors h-24"
                                    >
                                        <Tag size={20} />
                                        <span className="text-sm">Imprimir Etiqueta</span>
                                    </button>

                                    {userData?.role !== 'client' && (
                                        <>
                                            <button
                                                onClick={() => handlePrint('internal')}
                                                className="bg-slate-800 text-white p-4 rounded-xl font-bold flex flex-col items-center justify-center gap-2 shadow hover:bg-slate-900 transition-colors h-24"
                                            >
                                                <ShieldAlert size={20} />
                                                <span className="text-sm">Imprimir Interno</span>
                                            </button>
                                            <button
                                                onClick={handlePrintSupplier}
                                                className="bg-teal-600 text-white p-4 rounded-xl font-bold flex flex-col items-center justify-center gap-2 shadow hover:bg-teal-700 transition-colors h-24"
                                            >
                                                <Truck size={20} />
                                                <span className="text-sm">Imprimir Fornecedor</span>
                                            </button>
                                            <button
                                                onClick={exportToWord}
                                                className="bg-emerald-600 text-white p-4 rounded-xl font-bold flex flex-col items-center justify-center gap-2 shadow hover:bg-emerald-700 transition-colors h-24"
                                            >
                                                <FileText size={20} />
                                                <span className="text-sm">Exportar para Word</span>
                                            </button>
                                        </>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* ── PAINEL DE FILTROS (STATUS) ── */}
                        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-visible">
                            <button
                                onClick={() => setFiltersOpen(!filtersOpen)}
                                className="w-full flex items-center justify-between p-4 hover:bg-slate-50 transition-colors rounded-2xl"
                            >
                                <div className="flex items-center gap-3 font-bold text-slate-700 text-sm">
                                    <Filter size={18} className="text-blue-500" />
                                    <span>Filtros & Data</span>
                                    {hasAdvancedFilters && (
                                        <span className="bg-blue-600 text-white text-[10px] px-2 py-0.5 rounded-full font-black uppercase">Ativo</span>
                                    )}
                                </div>
                                <div className="flex items-center gap-2">
                                    {hasAdvancedFilters && (
                                        <button type="button" onClick={(e) => { e.stopPropagation(); setFilterClient(''); setFilterCNPJ(''); setFilterSerial(''); setFilterItem(''); setFilterManufacturer(''); setFilterModel(''); setFilterStatus(''); setSelectedDay(''); setSelectedMonth(''); setSelectedYear(''); }} className="text-xs text-red-500 font-bold hover:text-red-700 flex items-center gap-1 px-2 py-1 rounded-lg hover:bg-red-50">
                                            <X size={12} /> Limpar
                                        </button>
                                    )}
                                    <ChevronDown size={18} className={`text-slate-400 transition-transform duration-200 ${filtersOpen ? 'rotate-180' : ''}`} />
                                </div>
                            </button>

                            {filtersOpen && (
                                <div className="px-4 pb-5 border-t border-slate-100 pt-4 space-y-4 animate-in slide-in-from-top-2 duration-200">
                                    {/* Filtros de texto */}
                                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                                        <div className="relative col-span-2 sm:col-span-1">
                                            <label className="text-[10px] font-black text-slate-400 uppercase block mb-1">Cliente</label>
                                            <input type="text" placeholder="Nome..." className="w-full p-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl outline-none font-medium focus:ring-2 focus:ring-blue-500/20" value={filterClient} onChange={e => { setFilterClient(e.target.value); setShowFilterClientSug(true); }} onFocus={() => setShowFilterClientSug(true)} onBlur={() => setTimeout(() => setShowFilterClientSug(false), 200)} />
                                            {showFilterClientSug && filterClient && (
                                                <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-xl shadow-2xl border border-slate-100 z-50 max-h-40 overflow-y-auto">
                                                    {uniqueClients.filter(c => c.client.toLowerCase().includes(filterClient.toLowerCase())).slice(0, 6).map((c, i) => (
                                                        <div key={i} className="px-3 py-2 hover:bg-blue-50 cursor-pointer text-sm font-medium" onMouseDown={() => { setFilterClient(c.client); setShowFilterClientSug(false); }}>{c.client}</div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                        <div className="relative">
                                            <label className="text-[10px] font-black text-slate-400 uppercase block mb-1">Nº de Série</label>
                                            <input type="text" placeholder="NS..." className="w-full p-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl outline-none font-mono font-medium focus:ring-2 focus:ring-blue-500/20" value={filterSerial} onChange={e => { setFilterSerial(e.target.value); setShowFilterSerialSug(true); }} onFocus={() => setShowFilterSerialSug(true)} onBlur={() => setTimeout(() => setShowFilterSerialSug(false), 200)} />
                                            {showFilterSerialSug && filterSerial && (
                                                <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-xl shadow-2xl border border-slate-100 z-50 max-h-40 overflow-y-auto">
                                                    {uniqueSerials.filter(s => s.toLowerCase().includes(filterSerial.toLowerCase())).slice(0, 6).map((s, i) => (
                                                        <div key={i} className="px-3 py-2 hover:bg-blue-50 cursor-pointer text-xs font-mono font-medium" onMouseDown={() => { setFilterSerial(s); setShowFilterSerialSug(false); }}>{s}</div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                        <div className="relative">
                                            <label className="text-[10px] font-black text-slate-400 uppercase block mb-1">Equipamento</label>
                                            <input type="text" placeholder="Item..." className="w-full p-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl outline-none font-medium focus:ring-2 focus:ring-blue-500/20" value={filterItem} onChange={e => { setFilterItem(e.target.value); setShowFilterItemSug(true); }} onFocus={() => setShowFilterItemSug(true)} onBlur={() => setTimeout(() => setShowFilterItemSug(false), 200)} />
                                            {showFilterItemSug && filterItem && (
                                                <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-xl shadow-2xl border border-slate-100 z-50 max-h-40 overflow-y-auto">
                                                    {uniqueItems.filter(i => i.toLowerCase().includes(filterItem.toLowerCase())).slice(0, 6).map((it, i) => (
                                                        <div key={i} className="px-3 py-2 hover:bg-blue-50 cursor-pointer text-sm font-medium" onMouseDown={() => { setFilterItem(it); setShowFilterItemSug(false); }}>{it}</div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                        <div className="relative">
                                            <label className="text-[10px] font-black text-slate-400 uppercase block mb-1">Marca</label>
                                            <input type="text" placeholder="Marca..." className="w-full p-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl outline-none font-medium focus:ring-2 focus:ring-blue-500/20" value={filterManufacturer} onChange={e => { setFilterManufacturer(e.target.value); setShowFilterManufSug(true); }} onFocus={() => setShowFilterManufSug(true)} onBlur={() => setTimeout(() => setShowFilterManufSug(false), 200)} />
                                            {showFilterManufSug && filterManufacturer && (
                                                <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-xl shadow-2xl border border-slate-100 z-50 max-h-40 overflow-y-auto">
                                                    {uniqueManufacturers.filter(m => m.toLowerCase().includes(filterManufacturer.toLowerCase())).slice(0, 6).map((m, i) => (
                                                        <div key={i} className="px-3 py-2 hover:bg-blue-50 cursor-pointer text-sm font-medium" onMouseDown={() => { setFilterManufacturer(m); setShowFilterManufSug(false); }}>{m}</div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                        <div className="relative">
                                            <label className="text-[10px] font-black text-slate-400 uppercase block mb-1">Modelo</label>
                                            <input type="text" placeholder="Modelo..." className="w-full p-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl outline-none font-medium focus:ring-2 focus:ring-blue-500/20" value={filterModel} onChange={e => { setFilterModel(e.target.value); setShowFilterModelSug(true); }} onFocus={() => setShowFilterModelSug(true)} onBlur={() => setTimeout(() => setShowFilterModelSug(false), 200)} />
                                            {showFilterModelSug && filterModel && (
                                                <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-xl shadow-2xl border border-slate-100 z-50 max-h-40 overflow-y-auto">
                                                    {uniqueModels.filter(m => m.toLowerCase().includes(filterModel.toLowerCase())).slice(0, 6).map((m, i) => (
                                                        <div key={i} className="px-3 py-2 hover:bg-blue-50 cursor-pointer text-sm font-medium" onMouseDown={() => { setFilterModel(m); setShowFilterModelSug(false); }}>{m}</div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Status - círculos */}
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase">Status</label>
                                        <div className="flex flex-wrap gap-2">
                                            {statusOptions.map(status => {
                                                const color = statusColors[status] ?? '#94a3b8';
                                                const isActive = filterStatus === status;
                                                return (
                                                    <button key={status} type="button" onClick={() => setFilterStatus(prev => prev === status ? '' : status)} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border transition-all ${isActive ? 'text-white shadow-md scale-105' : 'bg-white text-slate-600 hover:scale-105'}`} style={isActive ? { backgroundColor: color, borderColor: color } : { borderColor: color + '60', color: color }}>
                                                        <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />
                                                        {status}
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>

                                    {/* Filtro de data */}
                                    <div className="border-t border-slate-100 pt-3 space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase flex items-center gap-1"><CalendarDays size={12} /> Filtrar por Data do Status</label>
                                        <div className="flex flex-wrap gap-3">
                                            <div className="flex items-center gap-2">
                                                <label className="text-xs font-bold text-slate-500">Dia:</label>
                                                <select className="bg-white border border-slate-200 rounded-xl px-3 py-2 text-sm font-medium focus:ring-2 focus:ring-blue-500/20 outline-none" value={selectedDay} onChange={(e) => setSelectedDay(e.target.value)}>
                                                    <option value="">Todos</option>
                                                    {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (<option key={day} value={day}>{day}</option>))}
                                                </select>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <label className="text-xs font-bold text-slate-500">Mês:</label>
                                                <select className="bg-white border border-slate-200 rounded-xl px-3 py-2 text-sm font-medium focus:ring-2 focus:ring-blue-500/20 outline-none" value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}>
                                                    <option value="">Todos</option>
                                                    {MESES.map((mes, index) => (<option key={index} value={index + 1}>{mes}</option>))}
                                                </select>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <label className="text-xs font-bold text-slate-500">Ano:</label>
                                                <select className="bg-white border border-slate-200 rounded-xl px-3 py-2 text-sm font-medium focus:ring-2 focus:ring-blue-500/20 outline-none" value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
                                                    <option value="">Todos</option>
                                                    {Array.from(new Set(ordersForUser.map(o => { const date = o.statusDate ? new Date(o.statusDate) : new Date(); return date.getFullYear(); }))).sort((a, b) => b - a).map(year => (<option key={year} value={year}>{year}</option>))}
                                                </select>
                                            </div>
                                            {(selectedDay || selectedMonth || selectedYear) && (
                                                <button onClick={() => { setSelectedDay(''); setSelectedMonth(''); setSelectedYear(''); }} className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center gap-1">
                                                    <X size={12} /> Limpar data
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-0">
                            <div className="lg:col-span-4 bg-white rounded-[2rem] shadow-xl border border-slate-100 flex flex-col overflow-hidden max-h-[calc(100vh-250px)]">
                                <div className="p-6 border-b border-slate-100 bg-slate-50/50">
                                    <div className={`relative group mb-3 ${isSidebarOpen ? 'lg:z-10' : 'z-30'}`} ref={statusSearchDropdownRef}>
                                        <Search className="absolute left-4 top-3.5 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={18} />
                                        <input
                                            className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 shadow-sm focus:ring-2 focus:ring-blue-500/20 text-sm font-bold outline-none bg-white relative"
                                            placeholder="Buscar OS por cliente, equipamento, marca, modelo ou NS..."
                                            value={searchTerm}
                                            onChange={e => {
                                                const normalizedSearchTerm = e.target.value.toLowerCase().trim();
                                                setSearchTerm(e.target.value);

                                                if (e.target.value.trim()) {
                                                    setShowStatusSearchDropdown(true);
                                                } else {
                                                    setShowStatusSearchDropdown(false);
                                                }
                                            }}
                                            onFocus={() => {
                                                if (searchTerm.trim()) {
                                                    setShowStatusSearchDropdown(true);
                                                }
                                            }}
                                        />
                                        {showStatusSearchDropdown && searchTerm && (
                                            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden animate-in slide-in-from-top-2 max-h-96 overflow-y-auto">
                                                {(() => {
                                                    const normalizedSearchTerm = searchTerm.toLowerCase().trim();
                                                    const allFilteredOrders = ordersForUser.filter(o => {
                                                        return (
                                                            (o.client && o.client.toLowerCase().trim().includes(normalizedSearchTerm)) ||
                                                            (o.osNumber && o.osNumber.includes(searchTerm)) ||
                                                            (o.item && o.item.toLowerCase().trim().includes(normalizedSearchTerm)) ||
                                                            (o.manufacturer && o.manufacturer.toLowerCase().trim().includes(normalizedSearchTerm)) ||
                                                            (o.model && o.model.toLowerCase().trim().includes(normalizedSearchTerm)) ||
                                                            (o.serial && o.serial.toLowerCase().trim().includes(normalizedSearchTerm))
                                                        );
                                                    });
                                                    const displayedOrders = allFilteredOrders.slice(0, 20);

                                                    return (
                                                        <>
                                                            {displayedOrders.map(o => (
                                                                <div
                                                                    key={o.firestoreId}
                                                                    onClick={() => {
                                                                        openModal(o);
                                                                        setSearchTerm('');
                                                                        setShowStatusSearchDropdown(false);
                                                                    }}
                                                                    className="p-3 border-b border-slate-50 hover:bg-blue-50 cursor-pointer flex justify-between items-center group/item transition-colors"
                                                                >
                                                                    <div>
                                                                        <div className="font-bold text-slate-800 text-xs flex items-center gap-2">{o.client}</div>
                                                                        <div className="text-[10px] text-slate-500 mt-0.5">
                                                                            <span className="font-mono text-blue-600 font-bold">{o.osNumber}</span> - {o.item}
                                                                            {(o.manufacturer || o.model || o.serial) && (
                                                                                <div className="text-[9px] text-slate-400 mt-0.5">
                                                                                    {o.manufacturer && `Marca: ${o.manufacturer} `}
                                                                                    {o.model && `| Modelo: ${o.model} `}
                                                                                    {o.serial && `| NS: ${o.serial}`}
                                                                                </div>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                    <div className="text-[10px] font-bold text-blue-600 opacity-0 group-hover/item:opacity-100 flex items-center gap-1 transition-all">
                                                                        Abrir <ExternalLink size={12} />
                                                                    </div>
                                                                </div>
                                                            ))}
                                                            {allFilteredOrders.length === 0 && (
                                                                <div className="p-4 text-center text-slate-400 text-[10px] font-medium">Nenhum resultado.</div>
                                                            )}
                                                            {allFilteredOrders.length > 20 && (
                                                                <div className="p-3 text-center text-[10px] text-slate-500 bg-slate-50 border-t border-slate-100">
                                                                    Mostrando 20 de {allFilteredOrders.length} resultados
                                                                </div>
                                                            )}
                                                        </>
                                                    );
                                                })()}
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex items-center gap-2 text-xs font-bold text-slate-500 px-1">
                                        <input
                                            type="checkbox"
                                            className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-0 cursor-pointer"
                                            onChange={(e) => {
                                                let filtered = ordersForUser;

                                                // Aplicar filtros de data
                                                if (selectedDay || selectedMonth || selectedYear) {
                                                    filtered = filtered.filter(o => {
                                                        const statusDate = o.statusDate ? new Date(o.statusDate) : new Date();
                                                        const day = statusDate.getDate();
                                                        const month = statusDate.getMonth() + 1;
                                                        const year = statusDate.getFullYear();

                                                        if (selectedDay && day !== parseInt(selectedDay)) return false;
                                                        if (selectedMonth && month !== parseInt(selectedMonth)) return false;
                                                        if (selectedYear && year !== parseInt(selectedYear)) return false;
                                                        return true;
                                                    });
                                                }

                                                // Aplicar filtros de status e billing
                                                if (statusFilter) {
                                                    filtered = filtered.filter(o => o.status === statusFilter);
                                                }
                                                if (billingFilter) {
                                                    filtered = filtered.filter(o => o.billingType === billingFilter);
                                                }

                                                // Aplicar busca
                                                filtered = filtered.filter(o =>
                                                    o.client?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                                    o.osNumber?.includes(searchTerm)
                                                );

                                                setSelectedOrders(e.target.checked ? filtered.map(o => o.firestoreId) : []);
                                            }}
                                            checked={selectedOrders.length > 0 &&
                                                ordersForUser
                                                    .filter(o => {
                                                        let filtered = true;

                                                        // Aplicar filtros de data
                                                        if (selectedDay || selectedMonth || selectedYear) {
                                                            const statusDate = o.statusDate ? new Date(o.statusDate) : new Date();
                                                            const day = statusDate.getDate();
                                                            const month = statusDate.getMonth() + 1;
                                                            const year = statusDate.getFullYear();

                                                            if (selectedDay && day !== parseInt(selectedDay)) filtered = false;
                                                            if (selectedMonth && month !== parseInt(selectedMonth)) filtered = false;
                                                            if (selectedYear && year !== parseInt(selectedYear)) filtered = false;
                                                        }

                                                        // Aplicar filtros de status e billing
                                                        if (statusFilter && o.status !== statusFilter) filtered = false;
                                                        if (billingFilter && o.billingType !== billingFilter) filtered = false;

                                                        // Aplicar busca
                                                        if (searchTerm) {
                                                            const normalizedSearchTerm = searchTerm.toLowerCase().trim();
                                                            if (
                                                                !(o.client && o.client.toLowerCase().trim().includes(normalizedSearchTerm)) &&
                                                                !(o.osNumber && o.osNumber.includes(searchTerm)) &&
                                                                !(o.item && o.item.toLowerCase().trim().includes(normalizedSearchTerm)) &&
                                                                !(o.manufacturer && o.manufacturer.toLowerCase().trim().includes(normalizedSearchTerm)) &&
                                                                !(o.model && o.model.toLowerCase().trim().includes(normalizedSearchTerm)) &&
                                                                !(o.serial && o.serial.toLowerCase().trim().includes(normalizedSearchTerm))
                                                            ) {
                                                                filtered = false;
                                                            }
                                                        }

                                                        return filtered;
                                                    })
                                                    .every(o => selectedOrders.includes(o.firestoreId))
                                            }
                                        />
                                        <span>Selecionar Todos da Busca</span>
                                    </div>
                                </div>
                                <div className="flex-1 overflow-y-auto p-3 space-y-2 relative z-0">
                                    {ordersForUser
                                        .filter(o => {
                                            // Aplicar filtros de data
                                            if (selectedDay || selectedMonth || selectedYear) {
                                                const statusDate = o.statusDate ? new Date(o.statusDate) : new Date();
                                                const day = statusDate.getDate();
                                                const month = statusDate.getMonth() + 1;
                                                const year = statusDate.getFullYear();

                                                if (selectedDay && day !== parseInt(selectedDay)) return false;
                                                if (selectedMonth && month !== parseInt(selectedMonth)) return false;
                                                if (selectedYear && year !== parseInt(selectedYear)) return false;
                                            }

                                            // Aplicar filtros de status e billing
                                            if (statusFilter && o.status !== statusFilter) return false;
                                            if (billingFilter && o.billingType !== billingFilter) return false;

                                            // Filtros avançados
                                            if (filterClient && !o.client?.toLowerCase().includes(filterClient.toLowerCase())) return false;
                                            if (filterSerial && !o.serial?.toLowerCase().includes(filterSerial.toLowerCase())) return false;
                                            if (filterItem && !o.item?.toLowerCase().includes(filterItem.toLowerCase())) return false;
                                            if (filterManufacturer && !o.manufacturer?.toLowerCase().includes(filterManufacturer.toLowerCase())) return false;
                                            if (filterModel && !o.model?.toLowerCase().includes(filterModel.toLowerCase())) return false;
                                            if (filterStatus && o.status !== filterStatus) return false;

                                            // Aplicar busca
                                            if (searchTerm) {
                                                const normalizedSearchTerm = searchTerm.toLowerCase().trim();

                                                const clientMatch = o.client?.toLowerCase().includes(normalizedSearchTerm);
                                                const osNumberMatch = o.osNumber?.includes(searchTerm);
                                                const itemMatch = o.item?.toLowerCase().includes(normalizedSearchTerm);
                                                const manufacturerMatch = o.manufacturer?.toLowerCase().includes(normalizedSearchTerm);
                                                const modelMatch = o.model?.toLowerCase().includes(normalizedSearchTerm);
                                                const serialMatch = o.serial?.toLowerCase().includes(normalizedSearchTerm);

                                                // 🔹 NOVO: Data do status atual
                                                let statusDateMatch = false;
                                                if (o.statusDate) {
                                                    const [year, month, day] = o.statusDate.split('-');
                                                    const formattedDate = `${day}/${month}/${year}`;
                                                    statusDateMatch = formattedDate.includes(normalizedSearchTerm) ||
                                                        o.statusDate.includes(normalizedSearchTerm);
                                                }

                                                // Se nenhum campo corresponder, filtra a OS
                                                if (!(clientMatch || osNumberMatch || itemMatch ||
                                                    manufacturerMatch || modelMatch || serialMatch || statusDateMatch)) {
                                                    return false;
                                                }
                                            }

                                            return true;
                                        })
                                        .map(o => {
                                            const statusDate = o.statusDate ? new Date(o.statusDate) : new Date();
                                            const formattedDate = statusDate.toLocaleDateString('pt-BR');

                                            return (
                                                <div
                                                    key={o.firestoreId}
                                                    onClick={() => setSelectedOrders(prev =>
                                                        prev.includes(o.firestoreId) ?
                                                            prev.filter(id => id !== o.firestoreId) :
                                                            [...prev, o.firestoreId]
                                                    )}
                                                    className={`p-3 rounded-xl border cursor-pointer transition-all hover:shadow-md select-none ${selectedOrders.includes(o.firestoreId) ?
                                                        'bg-blue-50 border-blue-200 ring-1 ring-blue-200' :
                                                        'bg-white border-slate-100 hover:bg-slate-50'
                                                        }`}
                                                >
                                                    <div className="flex items-start gap-3">
                                                        <div className={`mt-1 w-4 h-4 rounded border flex items-center justify-center transition-colors ${selectedOrders.includes(o.firestoreId) ?
                                                            'bg-blue-600 border-blue-600' :
                                                            'border-slate-300 bg-white'
                                                            }`}>
                                                            {selectedOrders.includes(o.firestoreId) && <CheckCircle2 size={12} className="text-white" />}
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <div className="flex items-center justify-between mb-1">
                                                                <span className="font-black text-blue-700 text-xs">{o.osNumber}</span>
                                                                <span className={`text-[9px] px-1.5 py-0.5 rounded font-bold uppercase ${selectedOrders.includes(o.firestoreId) ?
                                                                    'bg-blue-200 text-blue-800' :
                                                                    'bg-slate-100 text-slate-500'
                                                                    }`}>
                                                                    {o.status}
                                                                </span>
                                                            </div>
                                                            <div className="font-bold text-slate-800 text-sm leading-tight truncate">{o.client}</div>
                                                            <div className="text-[10px] text-slate-400 mt-0.5 truncate">{o.item}</div>
                                                            <div className="text-[9px] text-slate-500 mt-1 font-medium flex items-center gap-1">
                                                                <CalendarDays size={10} />
                                                                {formatDateBR(o.statusDate)}
                                                            </div>
                                                        </div>
                                                        {userData?.role !== 'client' && (
                                                            <button
                                                                onClick={(e) => { e.stopPropagation(); openModal(o); }}
                                                                className="p-2 -mr-1 mt-0.5 text-slate-400 hover:text-blue-600 hover:bg-blue-100 rounded-lg transition-colors"
                                                                title="Abrir Detalhes da OS"
                                                            >
                                                                <ExternalLink size={18} />
                                                            </button>
                                                        )}
                                                    </div>

                                                    {userData?.role === 'client' &&
                                                        (o.status === 'Em orçamento' || o.status === 'Aguardando aprovação') && (
                                                            <div className="flex gap-1 mt-2">
                                                                <button
                                                                    onClick={(e) => {
                                                                        e.stopPropagation();
                                                                        handleApproveBudget(o);
                                                                    }}
                                                                    className="flex-1 px-3 py-1.5 bg-green-600 text-white rounded-lg font-bold text-xs hover:bg-green-700 transition-colors"
                                                                    title="Aprovar orçamento"
                                                                >
                                                                    ✓ Aprovar
                                                                </button>
                                                                <button
                                                                    onClick={(e) => {
                                                                        e.stopPropagation();
                                                                        handleRejectBudget(o);
                                                                    }}
                                                                    className="flex-1 px-3 py-1.5 bg-red-600 text-white rounded-lg font-bold text-xs hover:bg-red-700 transition-colors"
                                                                    title="Recusar orçamento"
                                                                >
                                                                    ✗ Recusar
                                                                </button>
                                                            </div>
                                                        )}
                                                </div>
                                            );
                                        })
                                    }
                                    {ordersForUser.length === 0 && <div className="text-center py-10 text-slate-400 text-xs">Nenhuma OS encontrada.</div>}
                                </div>
                            </div>
                            <div className="lg:col-span-8 space-y-6 overflow-y-auto pr-1 pb-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white p-6 rounded-[2rem] shadow-xl border border-slate-100 space-y-4 relative overflow-hidden">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2 text-indigo-600 font-bold uppercase text-xs tracking-widest">
                                                <PieChart size={16} /> Status Geral
                                            </div>
                                            {statusFilter && (
                                                <button
                                                    onClick={() => setStatusFilter(null)}
                                                    className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center gap-1"
                                                >
                                                    <X size={12} /> Remover filtro
                                                </button>
                                            )}
                                        </div>
                                        <SimpleDonutChart
                                            data={dashboardData.statusChartData}
                                            colors={["#3b82f6", "#6366f1", "#8b5cf6", "#ec4899", "#f43f5e", "#10b981", "#f59e0b"]}
                                            onClick={handleFilterByStatus}
                                        />
                                        <div className="space-y-2 mt-4">
                                            {dashboardData.statusChartData.map((d, i) => {
                                                const statusDate = d.date ? new Date(d.date).toLocaleDateString('pt-BR') : '';
                                                const isActive = statusFilter === d.label;

                                                return (
                                                    <div
                                                        key={i}
                                                        className={`flex justify-between text-xs text-slate-600 font-medium cursor-pointer p-2 rounded transition-colors ${isActive ? 'bg-blue-50 border border-blue-200' : 'hover:bg-slate-50'}`}
                                                        onClick={() => handleFilterByStatus(d.label)}
                                                    >
                                                        <span className="flex items-center gap-2">
                                                            <div className={`w-2 h-2 rounded-full ${isActive ? 'ring-2 ring-blue-300' : ''}`} style={{ backgroundColor: ["#3b82f6", "#6366f1", "#8b5cf6", "#ec4899", "#f43f5e", "#10b981", "#f59e0b"][i] }} />
                                                            {d.label}
                                                            {statusDate && (
                                                                <span className="text-[9px] text-slate-400 font-normal">
                                                                    {statusDate}
                                                                </span>
                                                            )}
                                                            {isActive && (
                                                                <span className="text-[9px] bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">
                                                                    Ativo
                                                                </span>
                                                            )}
                                                        </span>
                                                        <span>{d.value}</span>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                        <div className="absolute top-4 right-4 text-slate-300"><MousePointerClick size={16} /></div>
                                    </div>
                                    <div className="bg-white p-6 rounded-[2rem] shadow-xl border border-slate-100 space-y-4 relative overflow-hidden">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2 text-emerald-600 font-bold uppercase text-xs tracking-widest">
                                                <BarChart3 size={16} /> Tipo de Faturamento
                                            </div>
                                            {billingFilter && (
                                                <button
                                                    onClick={() => setBillingFilter(null)}
                                                    className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center gap-1"
                                                >
                                                    <X size={12} /> Remover filtro
                                                </button>
                                            )}
                                        </div>
                                        <SimpleBarChart
                                            data={dashboardData.billingChartData}
                                            maxVal={Math.max(...dashboardData.billingChartData.map(d => d.value), 1)}
                                            colorClass="bg-emerald-500"
                                            onClick={handleFilterByBilling}
                                            showValues={showValues}
                                        />
                                        <div className="absolute top-4 right-4 text-slate-300"><MousePointerClick size={16} /></div>
                                    </div>
                                </div>

                                {hasActiveFilters() && (
                                    <div className="bg-blue-50 p-4 rounded-2xl border border-blue-100">
                                        <div className="flex items-center gap-2 text-blue-600 mb-2">
                                            <Info size={16} />
                                            <span className="text-xs font-bold uppercase">Filtros Ativos</span>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {statusFilter && (
                                                <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-bold flex items-center gap-1">
                                                    Status: {statusFilter}
                                                    <button onClick={() => setStatusFilter(null)} className="ml-1 hover:text-blue-900">
                                                        <X size={12} />
                                                    </button>
                                                </span>
                                            )}
                                            {billingFilter && (
                                                <span className="text-xs bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full font-bold flex items-center gap-1">
                                                    Faturamento: {billingFilter}
                                                    <button onClick={() => setBillingFilter(null)} className="ml-1 hover:text-emerald-900">
                                                        <X size={12} />
                                                    </button>
                                                </span>
                                            )}
                                            {selectedOrders.length > 0 && (
                                                <span className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-bold flex items-center gap-1">
                                                    {selectedOrders.length} OS(s) selecionada(s)
                                                    <button onClick={() => setSelectedOrders([])} className="ml-1 hover:text-purple-900">
                                                        <X size={12} />
                                                    </button>
                                                </span>
                                            )}
                                            {(selectedDay || selectedMonth || selectedYear) && (
                                                <span className="text-xs bg-amber-100 text-amber-700 px-3 py-1 rounded-full font-bold flex items-center gap-1">
                                                    Data: {selectedDay && `Dia ${selectedDay}`} {selectedMonth && `Mês ${selectedMonth}`} {selectedYear && `Ano ${selectedYear}`}
                                                    <button onClick={() => { setSelectedDay(''); setSelectedMonth(''); setSelectedYear(''); }} className="ml-1 hover:text-amber-900">
                                                        <X size={12} />
                                                    </button>
                                                </span>
                                            )}
                                            {searchTerm && (
                                                <span className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full font-bold flex items-center gap-1">
                                                    Busca: "{searchTerm}"
                                                    <button onClick={() => setSearchTerm('')} className="ml-1 hover:text-slate-900">
                                                        <X size={12} />
                                                    </button>
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-xs text-blue-700 mt-2">
                                            Mostrando {dashboardData.count} de {ordersForUser.length} ordens de serviço
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {currentPage === 'product-history' && userData?.role === 'admin' && (
                    <div className="space-y-8 animate-in fade-in duration-500 max-w-7xl mx-auto">
                        <div className="flex flex-col">
                            <h2 className="text-3xl font-black text-slate-900 tracking-tighter">Histórico do produto</h2>
                            <p className="text-slate-500 text-sm font-medium">Preencha os três campos obrigatórios. O NS preenche automaticamente Item e Marca.</p>
                        </div>

                        {/* Formulário de busca com três campos obrigatórios */}
                        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6">
                            <form onSubmit={handleHistorySearch} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                                    {/* Campo NS com autocomplete completo (SuggestionInput) */}
                                    <div>
                                        <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Número de Série (NS)</label>
                                         <SuggestionInput
    value={historySearchSerial}
    onChange={(e) => setHistorySearchSerial(e.target.value)}
    suggestions={uniqueSerials}
    placeholder="Digite o NS..."
    className="bg-white"
    style={{ backgroundColor: 'white' }}   // força fundo branco
    userRole={userData?.role}
    onRemoveSuggestion={userData?.role === 'admin' ? (value) => handleHideSuggestion('defect', value) : undefined}
  />
                                    </div>

                                    {/* Campo Item com sugestões manuais */}
                                    <div className="relative">
                                        <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Item (Equipamento)</label>
                                        <input
                                            type="text"
                                            placeholder="Digite o nome do equipamento..."
                                            className="w-full p-4 bg-white border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/10 transition-all font-bold"
                                            value={historySearchItem}
                                            onChange={(e) => setHistorySearchItem(e.target.value)}
                                            onFocus={() => setShowHistoryItemSuggestions(true)}
                                            onBlur={() => setTimeout(() => setShowHistoryItemSuggestions(false), 200)}
                                        />
                                        {showHistoryItemSuggestions && historySearchItem && uniqueItems.filter(i => i.toLowerCase().includes(historySearchItem.toLowerCase())).length > 0 && (
                                            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-slate-100 z-50 max-h-48 overflow-y-auto">
                                                {uniqueItems.filter(i => i.toLowerCase().includes(historySearchItem.toLowerCase())).slice(0, 6).map(i => (
                                                    <div key={i} className="p-3 hover:bg-blue-50 cursor-pointer border-b border-slate-50 text-sm font-medium" onMouseDown={() => setHistorySearchItem(i)}>{i}</div>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    {/* Campo Marca com sugestões manuais */}
                                    <div className="relative">
                                        <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Marca (Fabricante)</label>
                                        <input
                                            type="text"
                                            placeholder="Digite a marca..."
                                            className="w-full p-4 bg-white border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/10 transition-all font-bold"
                                            value={historySearchManufacturer}
                                            onChange={(e) => setHistorySearchManufacturer(e.target.value)}
                                            onFocus={() => setShowHistoryManufSuggestions(true)}
                                            onBlur={() => setTimeout(() => setShowHistoryManufSuggestions(false), 200)}
                                        />
                                        {showHistoryManufSuggestions && historySearchManufacturer && uniqueManufacturers.filter(m => m.toLowerCase().includes(historySearchManufacturer.toLowerCase())).length > 0 && (
                                            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-slate-100 z-50 max-h-48 overflow-y-auto">
                                                {uniqueManufacturers.filter(m => m.toLowerCase().includes(historySearchManufacturer.toLowerCase())).slice(0, 6).map(m => (
                                                    <div key={m} className="p-3 hover:bg-blue-50 cursor-pointer border-b border-slate-50 text-sm font-medium" onMouseDown={() => setHistorySearchManufacturer(m)}>{m}</div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="flex justify-end">
                                    <button
                                        type="submit"
                                        onClick={handleHistorySearch}
                                        className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-colors shadow-md flex items-center gap-2"
                                    >
                                        <Search size={20} /> Buscar Histórico
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Tabela de resultados (mantém o código existente) */}
                        <div className="bg-white rounded-[2rem] shadow-xl border border-slate-100 overflow-hidden">
                            <div className="h-[calc(100vh-320px)] overflow-y-auto">
                                <table className="w-full text-left min-w-[900px]">
                                    <thead className="bg-white sticky top-0 z-10 shadow-sm">
                                        <tr className="border-b text-[10px] font-black uppercase text-slate-400 tracking-widest">
                                            <th className="px-8 py-6 bg-white">OS</th>
                                            <th className="px-8 py-6 bg-white">Data</th>
                                            <th className="px-8 py-6 bg-white">Tipo</th>
                                            <th className="px-8 py-6 bg-white">Status</th>
                                            <th className="px-8 py-6 text-right bg-white">Ações</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-50">
                                        {historyFilteredOrders.length === 0 ? (
                                            <tr>
                                                <td colSpan="5" className="p-20 text-center text-slate-400">
                                                    Nenhum resultado encontrado. Preencha os três campos e clique em Buscar.
                                                </td>
                                            </tr>
                                        ) : (
                                            historyFilteredOrders.map((o) => (
                                                <tr key={o.firestoreId} className="hover:bg-blue-50/30 transition-colors group">
                                                    <td className="px-8 py-6">
                                                        <div className="font-black text-blue-700 text-lg">{o.osNumber}</div>
                                                    </td>
                                                    <td className="px-8 py-6">
                                                        <div className="text-sm font-medium text-slate-700">{formatDateBR(o.statusDate)}</div>
                                                    </td>
                                                    <td className="px-8 py-6">
                                                        <div className="text-xs font-bold text-slate-500 uppercase tracking-tighter">{o.billingType}</div>
                                                    </td>
                                                    <td className="px-8 py-6">
                                                        <div
                                                            className="px-4 py-2 rounded-xl text-[10px] font-black uppercase inline-block border"
                                                            style={{
                                                                backgroundColor: (statusColors[o.status] ?? '#94a3b8') + '20',
                                                                borderColor: (statusColors[o.status] ?? '#94a3b8') + '40',
                                                                color: statusColors[o.status] ?? '#94a3b8'
                                                            }}
                                                        >
                                                            {o.status}
                                                        </div>
                                                    </td>
                                                    <td className="px-8 py-6 text-right">
                                                        <OrderActionsDropdown
                                                            order={o}
                                                            openModal={openModal}
                                                            openViewModal={openViewModal}
                                                            openNewWithClient={handleNewOSWithClient}
                                                            confirmDelete={confirmDelete}
                                                            userData={userData}
                                                            handleNewAssociatedOS={handleNewAssociatedOS}
                                                            hasPermission={hasPermission}
                                                            openHistoryModal={(order) => {
                                                                setSelectedOrderForHistory(order);
                                                                setIsHistoryModalOpen(true);
                                                            }}
                                                        />
                                                    </td>
                                                </tr>
                                            ))
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}

                {currentPage === 'alerts' && userData?.role === 'admin' && (
                    <div className="space-y-6 animate-in fade-in duration-500 max-w-5xl mx-auto">
                        {/* Header */}
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
                            <div>
                                <h2 className="text-3xl font-black text-slate-900 tracking-tighter flex items-center gap-3">
                                    <BellRing className={alertOrders.length > 0 ? 'text-red-500 animate-bounce' : 'text-slate-400'} size={32} />
                                    Avisos
                                </h2>
                                <p className="text-slate-500 font-medium text-sm">Ordens de serviço com prazo excedido por etapa</p>
                            </div>
                            <div className="flex items-center gap-3">
                                {alertOrders.length > 0 && (
                                    <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 px-4 py-2 rounded-2xl font-black text-sm">
                                        <AlertTriangle size={16} />
                                        {alertOrders.length} OS em alerta
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Tabs */}
                        <div className="flex gap-1 bg-slate-100 p-1 rounded-2xl w-fit">
                            <button
                                onClick={() => setAlertsTab('list')}
                                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${alertsTab === 'list' ? 'bg-white text-slate-900 shadow-md' : 'text-slate-500 hover:text-slate-700'}`}
                            >
                                <Bell size={16} />
                                Avisos Ativos
                                {alertOrders.length > 0 && (
                                    <span className="bg-red-500 text-white text-[10px] font-black px-1.5 py-0.5 rounded-full">{alertOrders.length}</span>
                                )}
                            </button>
                            <button
                                onClick={() => setAlertsTab('settings')}
                                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${alertsTab === 'settings' ? 'bg-white text-slate-900 shadow-md' : 'text-slate-500 hover:text-slate-700'}`}
                            >
                                <Settings2 size={16} />
                                Configurações
                            </button>
                        </div>

                        {/* ABA: AVISOS ATIVOS */}
                        {alertsTab === 'list' && (
                            <div className="space-y-4 animate-in fade-in duration-300">
                                {alertOrders.length === 0 ? (
                                    <div className="bg-white rounded-[2rem] shadow-xl border border-slate-100 p-20 text-center">
                                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <CheckCircle2 size={40} className="text-green-500" />
                                        </div>
                                        <h3 className="text-xl font-black text-slate-700 mb-2">Tudo em dia!</h3>
                                        <p className="text-slate-400 text-sm">Nenhuma OS está com prazo excedido no momento.</p>
                                    </div>
                                ) : (
                                    <>
                                        {/* Sumário por status — clicável para filtrar */}
                                        {(() => {
                                            const byStatus = {};
                                            alertOrders.forEach(o => { byStatus[o.status] = (byStatus[o.status] || 0) + 1; });
                                            return (
                                                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                                                    {Object.entries(byStatus).map(([status, count]) => {
                                                        const color = statusColors[status] ?? '#94a3b8';
                                                        const isActive = alertStatusFilter === status;
                                                        return (
                                                            <button
                                                                key={status}
                                                                type="button"
                                                                onClick={() => setAlertStatusFilter(prev => prev === status ? null : status)}
                                                                className={`rounded-2xl border-2 p-4 text-center transition-all hover:scale-105 active:scale-100 ${isActive ? 'shadow-lg scale-105' : 'bg-white border-slate-100 shadow-sm hover:border-slate-200'}`}
                                                                style={isActive ? { backgroundColor: color + '15', borderColor: color } : {}}
                                                            >
                                                                <div className="w-3 h-3 rounded-full mx-auto mb-2 transition-transform" style={{ backgroundColor: color }} />
                                                                <div className="text-2xl font-black" style={{ color }}>{count}</div>
                                                                <div className="text-[10px] font-bold text-slate-400 uppercase mt-1 leading-tight">{status}</div>
                                                                {isActive && <div className="text-[9px] font-black mt-1.5" style={{ color }}>● filtrando</div>}
                                                            </button>
                                                        );
                                                    })}
                                                </div>
                                            );
                                        })()}

                                        {/* Barra de controles: filtro ativo + ordenação mobile */}
                                        <div className="flex items-center justify-between gap-3 flex-wrap">
                                            <div className="flex items-center gap-2">
                                                {alertStatusFilter && (
                                                    <button
                                                        onClick={() => setAlertStatusFilter(null)}
                                                        className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-xl border border-red-200 bg-red-50 text-red-600 hover:bg-red-100 transition-colors"
                                                    >
                                                        <X size={12} /> Limpar filtro: {alertStatusFilter}
                                                    </button>
                                                )}
                                            </div>
                                            {/* Ordenação — aparece só no mobile (no desktop é pelo header da tabela) */}
                                            <button
                                                type="button"
                                                onClick={() => setAlertSortDir(d => d === 'desc' ? 'asc' : 'desc')}
                                                className="lg:hidden flex items-center gap-2 text-xs font-bold px-3 py-2 bg-white border border-slate-200 rounded-xl shadow-sm hover:bg-slate-50 transition-colors text-slate-600"
                                            >
                                                {alertSortDir === 'desc' ? <ArrowDownWideNarrow size={15} /> : <ArrowUpNarrowWide size={15} />}
                                                Dias úteis: {alertSortDir === 'desc' ? 'Maior primeiro' : 'Menor primeiro'}
                                            </button>
                                        </div>

                                        {/* ── DESKTOP: tabela ── */}
                                        {(() => {
                                            const displayed = alertOrders
                                                .filter(o => !alertStatusFilter || o.status === alertStatusFilter)
                                                .sort((a, b) => alertSortDir === 'desc'
                                                    ? b.businessDaysInStatus - a.businessDaysInStatus
                                                    : a.businessDaysInStatus - b.businessDaysInStatus
                                                );
                                            return (
                                                <>
                                                    {/* DESKTOP TABLE */}
                                                    <div className="hidden lg:block bg-white rounded-[2rem] shadow-xl border border-slate-100 overflow-hidden">
                                                        <div className="bg-slate-50 px-6 py-4 border-b border-slate-100">
                                                            <div className="grid grid-cols-12 text-[10px] font-black uppercase text-slate-400 tracking-widest gap-4 items-center">
                                                                <div className="col-span-1">OS</div>
                                                                <div className="col-span-3">Cliente</div>
                                                                <div className="col-span-3">Equipamento</div>
                                                                <div className="col-span-2">Status</div>
                                                                <div className="col-span-2 text-center">
                                                                    <button
                                                                        onClick={() => setAlertSortDir(d => d === 'desc' ? 'asc' : 'desc')}
                                                                        className="inline-flex items-center gap-1 hover:text-blue-600 transition-colors cursor-pointer group"
                                                                        title="Ordenar por dias úteis"
                                                                    >
                                                                        Dias úteis
                                                                        <span className="opacity-60 group-hover:opacity-100">
                                                                            {alertSortDir === 'desc' ? <ChevronDown size={12} /> : <ChevronUp size={12} />}
                                                                        </span>
                                                                    </button>
                                                                </div>
                                                                <div className="col-span-1 text-right">Ação</div>
                                                            </div>
                                                        </div>
                                                        <div className="divide-y divide-slate-50 max-h-[calc(100vh-460px)] overflow-y-auto">
                                                            {displayed.length === 0 ? (
                                                                <div className="p-10 text-center text-slate-400 text-sm">Nenhuma OS para o status selecionado.</div>
                                                            ) : displayed.map(order => {
                                                                const color = statusColors[order.status] ?? '#94a3b8';
                                                                const urgency = order.daysOver >= 5 ? 'high' : order.daysOver >= 3 ? 'med' : 'low';
                                                                const rowBg = urgency === 'high' ? 'bg-red-50/60' : urgency === 'med' ? 'bg-amber-50/40' : '';
                                                                return (
                                                                    <div key={order.firestoreId} className={`grid grid-cols-12 gap-4 px-6 py-4 items-center hover:bg-blue-50/30 transition-colors ${rowBg}`}>
                                                                        <div className="col-span-1">
                                                                            <span className="font-black text-blue-700 text-sm">{order.osNumber}</span>
                                                                        </div>
                                                                        <div className="col-span-3">
                                                                            <div className="font-bold text-slate-800 text-sm truncate">{order.client}</div>
                                                                            <div className="text-[10px] text-slate-400">{formatDateBR(order.statusDate)}</div>
                                                                        </div>
                                                                        <div className="col-span-3">
                                                                            <div className="font-medium text-slate-700 text-sm truncate">{order.item}</div>
                                                                            <div className="text-[10px] text-slate-400 truncate">{order.manufacturer} {order.model}</div>
                                                                        </div>
                                                                        <div className="col-span-2">
                                                                            <span className="text-[10px] font-black px-2 py-1 rounded-lg border" style={{ backgroundColor: color + '18', borderColor: color + '40', color }}>
                                                                                {order.status}
                                                                            </span>
                                                                        </div>
                                                                        <div className="col-span-2 text-center">
                                                                            <span className={`text-2xl font-black ${urgency === 'high' ? 'text-red-600' : urgency === 'med' ? 'text-amber-600' : 'text-yellow-600'}`}>
                                                                                {order.businessDaysInStatus}
                                                                            </span>
                                                                            <div className="text-[9px] text-slate-400 font-bold">+{order.daysOver}d além do limite</div>
                                                                        </div>
                                                                        <div className="col-span-1 flex justify-end">
                                                                            <button onClick={() => openModal(order, false)} className="p-2 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 transition-colors" title="Abrir OS">
                                                                                <ExternalLink size={16} />
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                );
                                                            })}
                                                        </div>
                                                    </div>

                                                    {/* MOBILE CARDS */}
                                                    <div className="lg:hidden space-y-3">
                                                        {displayed.length === 0 ? (
                                                            <div className="bg-white rounded-2xl p-8 text-center text-slate-400 text-sm border border-slate-100">
                                                                Nenhuma OS para o status selecionado.
                                                            </div>
                                                        ) : displayed.map(order => {
                                                            const color = statusColors[order.status] ?? '#94a3b8';
                                                            const urgency = order.daysOver >= 5 ? 'high' : order.daysOver >= 3 ? 'med' : 'low';
                                                            const urgencyColor = urgency === 'high' ? '#ef4444' : urgency === 'med' ? '#f59e0b' : '#eab308';
                                                            const urgencyBg = urgency === 'high' ? 'bg-red-50 border-red-200' : urgency === 'med' ? 'bg-amber-50 border-amber-200' : 'bg-yellow-50 border-yellow-200';
                                                            return (
                                                                <div
                                                                    key={order.firestoreId}
                                                                    className={`relative bg-white rounded-2xl border-2 shadow-sm overflow-hidden ${urgencyBg}`}
                                                                >
                                                                    {/* Barra lateral de urgência */}
                                                                    <div className="absolute left-0 top-0 bottom-0 w-1.5" style={{ backgroundColor: urgencyColor }} />

                                                                    <div className="pl-5 pr-4 pt-4 pb-3 space-y-3">
                                                                        {/* Linha 1: OS + dias em destaque */}
                                                                        <div className="flex items-start justify-between gap-2">
                                                                            <div>
                                                                                <span className="font-black text-blue-700 text-base">{order.osNumber}</span>
                                                                                <div className="text-xs text-slate-400 mt-0.5">{formatDateBR(order.statusDate)}</div>
                                                                            </div>
                                                                            <div className="flex flex-col items-end flex-shrink-0">
                                                                                <span className="text-3xl font-black leading-none" style={{ color: urgencyColor }}>
                                                                                    {order.businessDaysInStatus}
                                                                                </span>
                                                                                <span className="text-[9px] font-bold text-slate-400 leading-tight text-right">
                                                                                    dias úteis<br />+{order.daysOver}d além
                                                                                </span>
                                                                            </div>
                                                                        </div>

                                                                        {/* Linha 2: Cliente */}
                                                                        <div className="font-bold text-slate-900 text-sm leading-tight truncate">{order.client}</div>

                                                                        {/* Linha 3: Equipamento */}
                                                                        <div className="text-sm text-slate-600 truncate">
                                                                            {order.item}
                                                                            {(order.manufacturer || order.model) && (
                                                                                <span className="text-slate-400"> · {[order.manufacturer, order.model].filter(Boolean).join(' ')}</span>
                                                                            )}
                                                                        </div>

                                                                        {/* Linha 4: status + botão */}
                                                                        <div className="flex items-center justify-between pt-1 border-t border-white/60">
                                                                            <span className="text-[10px] font-black px-2.5 py-1 rounded-lg border" style={{ backgroundColor: color + '20', borderColor: color + '50', color }}>
                                                                                {order.status}
                                                                            </span>
                                                                            <button
                                                                                onClick={() => openModal(order, false)}
                                                                                className="flex items-center gap-1.5 text-xs font-bold text-blue-600 bg-white px-3 py-1.5 rounded-xl border border-blue-100 hover:bg-blue-50 transition-colors shadow-sm"
                                                                            >
                                                                                <ExternalLink size={13} /> Abrir OS
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                </>
                                            );
                                        })()}
                                    </>
                                )}
                            </div>
                        )}

                        {/* ABA: CONFIGURAÇÕES */}
                        {alertsTab === 'settings' && (
                            <div className="space-y-6 animate-in fade-in duration-300">
                                <div className="bg-white rounded-[2rem] shadow-xl border border-slate-100 overflow-hidden">
                                    <div className="p-8 space-y-6">
                                        <div className="flex items-center gap-3">
                                            <div className="bg-amber-100 p-3 rounded-2xl">
                                                <Timer size={24} className="text-amber-600" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-black text-slate-900">Limites por Etapa</h3>
                                                <p className="text-slate-500 text-sm">Defina quantos dias úteis em cada etapa disparam um alerta.</p>
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            {Object.entries(editingThresholds).map(([status, days]) => {
                                                const color = statusColors[status] ?? '#94a3b8';
                                                return (
                                                    <div key={status} className="flex items-center justify-between gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-slate-200 transition-colors">
                                                        <div className="flex items-center gap-3 flex-1 min-w-0">
                                                            <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />
                                                            <span className="font-bold text-slate-800 text-sm">{status}</span>
                                                        </div>
                                                        <div className="flex items-center gap-3 flex-shrink-0">
                                                            <span className="text-xs text-slate-400 font-medium">Alertar após</span>
                                                            <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-xl px-3 py-2 shadow-sm">
                                                                <button
                                                                    type="button"
                                                                    onClick={() => setEditingThresholds(prev => ({ ...prev, [status]: Math.max(1, (prev[status] || 1) - 1) }))}
                                                                    className="w-6 h-6 flex items-center justify-center rounded-lg hover:bg-slate-100 text-slate-500 font-black transition-colors text-lg leading-none"
                                                                >−</button>
                                                                <input
                                                                    type="number"
                                                                    min="1"
                                                                    max="90"
                                                                    value={editingThresholds[status] ?? 1}
                                                                    onChange={e => setEditingThresholds(prev => ({ ...prev, [status]: Math.max(1, parseInt(e.target.value) || 1) }))}
                                                                    className="w-10 text-center font-black text-slate-900 text-lg outline-none bg-transparent"
                                                                />
                                                                <button
                                                                    type="button"
                                                                    onClick={() => setEditingThresholds(prev => ({ ...prev, [status]: Math.min(90, (prev[status] || 1) + 1) }))}
                                                                    className="w-6 h-6 flex items-center justify-center rounded-lg hover:bg-slate-100 text-slate-500 font-black transition-colors text-lg leading-none"
                                                                >+</button>
                                                            </div>
                                                            <span className="text-xs text-slate-400 font-medium w-16">dias úteis</span>
                                                        </div>
                                                        {/* Preview: quantas OS afetadas com esse threshold */}
                                                        {(() => {
                                                            const affected = ordersForUser.filter(o => {
                                                                if (o.status !== status) return false;
                                                                return calcBusinessDays(o.statusDate) > (editingThresholds[status] ?? 1);
                                                            }).length;
                                                            return affected > 0 ? (
                                                                <span className="text-[10px] font-black text-red-500 bg-red-50 px-2 py-1 rounded-lg border border-red-100 flex-shrink-0">
                                                                    {affected} OS afetada{affected > 1 ? 's' : ''}
                                                                </span>
                                                            ) : (
                                                                <span className="text-[10px] text-slate-300 flex-shrink-0 w-20 text-right">Nenhuma</span>
                                                            );
                                                        })()}
                                                    </div>
                                                );
                                            })}
                                        </div>

                                        <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                                            <button
                                                type="button"
                                                onClick={() => setEditingThresholds({ ...DEFAULT_ALERT_THRESHOLDS })}
                                                className="text-sm font-bold text-slate-400 hover:text-slate-600 transition-colors flex items-center gap-1.5"
                                            >
                                                <RefreshCw size={14} /> Restaurar padrões
                                            </button>
                                            <button
                                                onClick={handleSaveThresholds}
                                                disabled={savingThresholds}
                                                className="flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-2xl font-black hover:bg-blue-700 shadow-xl shadow-blue-200 transition-all disabled:opacity-70"
                                            >
                                                {savingThresholds ? <Loader2 size={18} className="animate-spin" /> : <Save size={18} />}
                                                Salvar Configurações
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 flex gap-3">
                                    <Info size={18} className="text-blue-500 flex-shrink-0 mt-0.5" />
                                    <div className="text-sm text-blue-700 space-y-1">
                                        <p className="font-bold">Como funciona o cálculo de dias úteis?</p>
                                        <p className="font-medium opacity-80">São contados apenas dias úteis (segunda a sexta-feira) a partir do dia seguinte à data do status atual da OS. Feriados não são considerados no cálculo automático.</p>
                                    </div>
                                </div>
                            </div>
                        )}
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
                                        <div className="flex justify-between items-center border-b border-slate-700 pb-2"><span className="text-sm font-medium text-slate-300">Total de Ordens Analisadas</span><span className="font-bold text-xl">{ordersForUser.length}</span></div>
                                        <div className="flex justify-between items-center border-b border-slate-700 pb-2"><span className="text-sm font-medium text-slate-300">Ticket Médio (Receita/OS)</span><span className="font-bold text-xl">R$ {formatMoney(ordersForUser.length > 0 ? globalFinancials.totalRevenue / ordersForUser.length : 0)}</span></div>
                                        <div className="flex justify-between items-center pb-2"><span className="text-sm font-medium text-slate-300">Lucro Médio por OS</span><span className="font-bold text-xl text-green-400">R$ {formatMoney(ordersForUser.length > 0 ? globalFinancials.totalProfit / ordersForUser.length : 0)}</span></div>
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

                        {/* Filtro ativo/inativo */}
                        <div className="flex gap-2 flex-wrap">
                            {['all', 'active', 'inactive'].map(f => (
                                <button key={f} onClick={() => setContractActivityFilter(f)}
                                    className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest border transition-all ${contractActivityFilter === f ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-slate-500 border-slate-200 hover:border-blue-300'}`}>
                                    {f === 'all' ? 'Todos' : f === 'active' ? '✓ Ativos' : '✗ Inativos'}
                                </button>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {combinedContracts.length === 0 ? (<div className="col-span-3 text-center py-20 text-slate-400">Nenhum contrato encontrado. Adicione um manualmente ou crie uma OS.</div>) : (
                                combinedContracts
                                    .filter(c => contractActivityFilter === 'all' ? true : contractActivityFilter === 'active' ? c.isActive !== false : c.isActive === false)
                                    .map((contract, index) => (
                                        <div
                                            key={index}
                                            className={`
    bg-white rounded-[2rem] border shadow-xl overflow-hidden group hover:shadow-2xl transition-all
    ${contract.alertStatus === 'red' ? 'border-red-400 bg-red-50/30 ring-1 ring-red-200' : ''}
    ${contract.alertStatus === 'yellow' ? 'border-yellow-400 bg-yellow-50/30 ring-1 ring-yellow-200' : 'border-slate-100'}
  `}
                                        >
                                            <div className="p-6 border-b border-slate-50 bg-slate-50/50 flex justify-between items-start">
                                                <div>
                                                    <div className="font-black text-lg text-slate-800 leading-tight mb-1">{contract.clientName}</div>
                                                    <div className="text-xs text-slate-500 font-medium truncate max-w-[200px]">
                                                        {contract.cnpj || 'CNPJ não informado'}
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2 flex-wrap justify-end">
                                                    {/* Badge ativo/inativo */}
                                                    <span className={`text-[9px] font-black px-2 py-0.5 rounded-full uppercase ${contract.isActive !== false ? 'bg-green-100 text-green-700' : 'bg-slate-200 text-slate-500'}`}>
                                                        {contract.isActive !== false ? 'Ativo' : 'Inativo'}
                                                    </span>
                                                    {/* BOLINHA VERMELHA (aparece apenas se houver alerta) */}
                                                    {contract.alertStatus !== 'none' && (
                                                        <div className="relative">
                                                            <div
                                                                className="w-3 h-3 bg-red-500 rounded-full animate-pulse"
                                                                title={`Vence em ${contract.daysToExpiry} dias`}
                                                            />
                                                        </div>
                                                    )}
                                                    {/* Ícone de configurado/não configurado (já existente) */}
                                                    <div className={`p-2 rounded-lg ${contract.isConfigured ? 'bg-green-100 text-green-600' : 'bg-amber-100 text-amber-600'}`}>
                                                        {contract.isConfigured ? <CheckCircle2 size={20} /> : <AlertCircle size={20} />}
                                                    </div>
                                                </div>
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
                                            <div className="flex border-t border-slate-100">
                                                <button
                                                    onClick={() => openContractModal(contract, true)}
                                                    className="flex-1 py-3 bg-slate-50 hover:bg-blue-50 text-slate-600 hover:text-blue-600 font-bold text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-2"
                                                >
                                                    <Eye size={14} /> Exibir
                                                </button>
                                                <div className="w-px bg-slate-200" />
                                                <button
                                                    onClick={() => openContractModal(contract, false)}
                                                    className="flex-1 py-3 bg-slate-50 hover:bg-slate-100 text-slate-600 font-bold text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-2"
                                                >
                                                    <FileSignature size={14} /> {contract.isConfigured ? 'Editar' : 'Configurar'}
                                                </button>
                                            </div>
                                        </div>
                                    ))
                            )}
                        </div>
                    </div>
                )}

                {currentPage === 'inventory' && canAccessPage() && (() => {
                    // Deduplica equipamentos por nome do item (case-insensitive)
                    const seenItems = new Map();
                    ordersForUser.forEach(o => {
                        if (!o.item) return;
                        const key = o.item.trim().toLowerCase();
                        if (!seenItems.has(key)) {
                            seenItems.set(key, {
                                item: o.item,
                                brand: o.manufacturer || '',
                                specification: o.model || '',
                                supplier: o.costThirdPartyName || o.thirdPartyInfo || ''
                            });
                        }
                    });
                    const equipmentList = Array.from(seenItems.values()).sort((a, b) => a.item.localeCompare(b.item));
                    const filteredEquipment = equipmentList.filter(e =>
                        !inventorySearch ||
                        e.item.toLowerCase().includes(inventorySearch.toLowerCase()) ||
                        e.brand.toLowerCase().includes(inventorySearch.toLowerCase()) ||
                        e.specification.toLowerCase().includes(inventorySearch.toLowerCase()) ||
                        e.supplier.toLowerCase().includes(inventorySearch.toLowerCase())
                    );
                    return (
                        <div className="space-y-8 animate-in fade-in duration-500 max-w-7xl mx-auto">
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
                                <div>
                                    <h2 className="text-3xl font-black text-slate-900 tracking-tighter">Inventário de Equipamentos</h2>
                                    <p className="text-slate-500 text-sm font-medium">{equipmentList.length} equipamento(s) únicos registrados nas OS</p>
                                </div>
                            </div>
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                <input className="w-full pl-12 pr-4 py-3 bg-white rounded-2xl border border-slate-200 shadow-sm outline-none font-medium focus:ring-2 focus:ring-blue-500/20"
                                    placeholder="Buscar item, marca, modelo..." value={inventorySearch} onChange={e => setInventorySearch(e.target.value)} />
                            </div>
                            {/* Desktop Table */}
                            <div className="hidden md:block bg-white rounded-[2rem] shadow-xl border border-slate-100 overflow-hidden">
                                <table className="w-full text-left">
                                    <thead className="bg-slate-50 border-b border-slate-100">
                                        <tr className="text-[10px] font-black uppercase text-slate-400 tracking-widest">
                                            <th className="px-6 py-4">Item</th>
                                            <th className="px-6 py-4">Marca</th>
                                            <th className="px-6 py-4">Especificação / Modelo</th>
                                            <th className="px-6 py-4">Fornecedor</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-50">
                                        {filteredEquipment.length === 0 ? (
                                            <tr><td colSpan="4" className="p-16 text-center text-slate-400">Nenhum equipamento encontrado.</td></tr>
                                        ) : filteredEquipment.map((eq, idx) => (
                                            <tr key={idx} className="hover:bg-blue-50/20 transition-colors">
                                                <td className="px-6 py-4 font-bold text-slate-900">{eq.item}</td>
                                                <td className="px-6 py-4 text-slate-600 text-sm">{eq.brand || <span className="text-slate-300">---</span>}</td>
                                                <td className="px-6 py-4 text-slate-600 text-sm">{eq.specification || <span className="text-slate-300">---</span>}</td>
                                                <td className="px-6 py-4 text-slate-600 text-sm">{eq.supplier || <span className="text-slate-300">---</span>}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            {/* Mobile Cards */}
                            <div className="md:hidden space-y-3">
                                {filteredEquipment.length === 0 ? (
                                    <div className="text-center py-12 text-slate-400 bg-white rounded-2xl border">Nenhum equipamento encontrado.</div>
                                ) : filteredEquipment.map((eq, idx) => (
                                    <div key={idx} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4 space-y-1.5">
                                        <div className="font-bold text-slate-900">{eq.item}</div>
                                        {eq.brand && <div className="text-sm text-slate-500"><span className="font-bold text-slate-400 text-xs uppercase">Marca: </span>{eq.brand}</div>}
                                        {eq.specification && <div className="text-sm text-slate-500"><span className="font-bold text-slate-400 text-xs uppercase">Modelo: </span>{eq.specification}</div>}
                                        {eq.supplier && <div className="text-sm text-slate-500"><span className="font-bold text-slate-400 text-xs uppercase">Fornecedor: </span>{eq.supplier}</div>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })()}
                {currentPage === 'clients' && canAccessPage() && <div className="p-20 text-center"><Users size={80} className="mx-auto text-slate-200 mb-6" /><h3 className="text-2xl font-black">Módulo de Clientes em breve</h3></div>}
                {currentPage === 'suppliers' && canAccessPage() && (() => {
                    const filteredCombinedSuppliers = combinedSuppliers.filter(s =>
                        !supplierSearch ||
                        s.name.toLowerCase().includes(supplierSearch.toLowerCase()) ||
                        (s.address || '').toLowerCase().includes(supplierSearch.toLowerCase()) ||
                        (s.contactPerson || '').toLowerCase().includes(supplierSearch.toLowerCase())
                    );
                    return (
                        <div className="space-y-8 animate-in fade-in duration-500 max-w-7xl mx-auto">
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
                                <div>
                                    <h2 className="text-3xl font-black text-slate-900 tracking-tighter">Fornecedores / Terceiros</h2>
                                    <p className="text-slate-500 text-sm font-medium">{combinedSuppliers.length} fornecedor(es) registrado(s)</p>
                                </div>
                                {userData?.role !== 'client' && (
                                    <button
                                        onClick={handleOpenNewSupplier}
                                        className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-black flex items-center gap-2 shadow-xl shadow-blue-200 hover:bg-blue-700 transition-colors"
                                    >
                                        <Plus size={20} /> Novo Fornecedor
                                    </button>
                                )}
                            </div>
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                <input className="w-full pl-12 pr-4 py-3 bg-white rounded-2xl border border-slate-200 shadow-sm outline-none font-medium focus:ring-2 focus:ring-blue-500/20"
                                    placeholder="Buscar por nome, endereço, responsável..." value={supplierSearch} onChange={e => setSupplierSearch(e.target.value)} />
                            </div>
                            {/* Desktop Table */}
                            <div className="hidden md:block bg-white rounded-[2rem] shadow-xl border border-slate-100 overflow-hidden">
                                <table className="w-full text-left">
                                    <thead className="bg-slate-50 border-b border-slate-100">
                                        <tr className="text-[10px] font-black uppercase text-slate-400 tracking-widest">
                                            <th className="px-6 py-4">Nome / Empresa</th>
                                            <th className="px-6 py-4">Endereço</th>
                                            <th className="px-6 py-4 text-center">OS Abertas</th>
                                            <th className="px-6 py-4 text-center">OS Fechadas</th>
                                            <th className="px-6 py-4 text-right">Ações</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-50">
                                        {filteredCombinedSuppliers.length === 0 ? (
                                            <tr><td colSpan="5" className="p-16 text-center text-slate-400">Nenhum fornecedor encontrado.</td></tr>
                                        ) : filteredCombinedSuppliers.map((s, idx) => (
                                            <tr key={idx} className="hover:bg-blue-50/20 transition-colors">
                                                <td className="px-6 py-4">
                                                    <div className="font-bold text-slate-900">{s.name}</div>
                                                    {s.contactPerson && <div className="text-xs text-slate-500 mt-0.5">{s.contactPerson}</div>}
                                                    {s.email && <div className="text-xs text-blue-500 mt-0.5">{s.email}</div>}
                                                    {!s.isRegistered && (
                                                        <span className="text-[9px] bg-amber-50 text-amber-600 px-1.5 py-0.5 rounded border border-amber-100 font-bold mt-1 inline-block">Derivado de OS</span>
                                                    )}
                                                </td>
                                                <td className="px-6 py-4 text-slate-600 text-sm">{s.address || <span className="text-slate-300">---</span>}</td>
                                                <td className="px-6 py-4 text-center">
                                                    <span className="text-xl font-black text-blue-600">{s.osAbertas}</span>
                                                </td>
                                                <td className="px-6 py-4 text-center">
                                                    <span className="text-xl font-black text-green-600">{s.osFechadas}</span>
                                                </td>
                                                <td className="px-6 py-4 text-right">
                                                    {userData?.role !== 'client' && (
                                                        <SupplierActionsDropdown
                                                            supplier={s}
                                                            onEdit={handleOpenEditSupplier}
                                                            onDelete={handleDeleteSupplier}
                                                            userData={userData}
                                                        />
                                                    )}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            {/* Mobile Cards */}
                            <div className="md:hidden space-y-3">
                                {filteredCombinedSuppliers.length === 0 ? (
                                    <div className="text-center py-12 text-slate-400 bg-white rounded-2xl border">Nenhum fornecedor encontrado.</div>
                                ) : filteredCombinedSuppliers.map((s, idx) => (
                                    <div key={idx} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4 space-y-2">
                                        <div className="flex items-start justify-between gap-2">
                                            <div className="min-w-0">
                                                <div className="font-bold text-slate-900">{s.name}</div>
                                                {s.contactPerson && <div className="text-sm text-slate-500">{s.contactPerson}</div>}
                                                {s.email && <div className="text-xs text-blue-500">{s.email}</div>}
                                                {!s.isRegistered && (
                                                    <span className="text-[9px] bg-amber-50 text-amber-600 px-1.5 py-0.5 rounded border border-amber-100 font-bold mt-1 inline-block">Derivado de OS</span>
                                                )}
                                            </div>
                                            {userData?.role !== 'client' && (
                                                <SupplierActionsDropdown
                                                    supplier={s}
                                                    onEdit={handleOpenEditSupplier}
                                                    onDelete={handleDeleteSupplier}
                                                    userData={userData}
                                                />
                                            )}
                                        </div>
                                        {s.address && <div className="text-sm text-slate-500"><span className="font-bold text-slate-400 text-xs uppercase">Endereço: </span>{s.address}</div>}
                                        {s.observations && <div className="text-sm text-slate-500"><span className="font-bold text-slate-400 text-xs uppercase">Obs: </span>{s.observations}</div>}
                                        <div className="flex gap-6 pt-2 border-t border-slate-100">
                                            <div className="text-center">
                                                <div className="text-2xl font-black text-blue-600">{s.osAbertas}</div>
                                                <div className="text-[10px] text-slate-400 font-bold uppercase">OS Abertas</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-2xl font-black text-green-600">{s.osFechadas}</div>
                                                <div className="text-[10px] text-slate-400 font-bold uppercase">OS Fechadas</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })()}
                {currentPage === 'users' && canAccessPage() && <UserManagement />}
                {currentPage === 'about' && <div className="p-20 text-center"><Info size={80} className="mx-auto text-slate-200 mb-6" /><h3 className="text-2xl font-black">Sobre o Sistema</h3></div>}
            </main>

            {/* MODAL PARA MOVIMENTAR MÚLTIPLAS OS */}
            {isMoveModalOpen && (
                <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-50 flex items-center justify-center p-4">
                    <div
                        className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl border border-slate-200 space-y-6 animate-in zoom-in-95"
                        ref={moveModalRef}
                    >
                        <div className="flex items-center gap-3">
                            <div className="bg-green-100 p-3 rounded-full text-green-600">
                                <Truck size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-black text-slate-900">Movimentar OSs Selecionadas</h3>
                                <p className="text-slate-500 text-sm">Alterar status de {selectedOrders.length} OS(s)</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-400 uppercase">Novo Status</label>
                                <AccessibleSelect
                                    value={moveStatus}
                                    onChange={(e) => setMoveStatus(e.target.value)}
                                    options={statusOptions}
                                    label="Novo status"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-400 uppercase">Data do Status</label>
                                <input
                                    type="date"
                                    className="w-full p-4 bg-white border border-slate-200 rounded-2xl outline-none font-bold"
                                    value={moveDate}
                                    onChange={(e) => setMoveDate(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <button
                                onClick={() => setIsMoveModalOpen(false)}
                                className="flex-1 py-4 rounded-xl font-bold text-slate-500 hover:bg-slate-100 transition-colors"
                            >
                                Cancelar
                            </button>
                            <button
                                onClick={handleMoveOrders}
                                className="flex-1 py-4 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 shadow-xl shadow-green-200 transition-colors flex items-center justify-center gap-2"
                            >
                                <ArrowRight size={20} /> Atualizar
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* MODAL PRINCIPAL OS (COM NOVO CAMPO DE FOTOS) */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-50 flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
                    <div className="bg-white rounded-[2.5rem] w-full max-w-5xl my-auto shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-200">
                        <form onSubmit={isViewMode ? (e) => { e.preventDefault(); } : handleSubmit} className="p-6 md:p-10 space-y-10">
                            <div className="flex justify-between items-center border-b pb-6">
                                <div>
                                    <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                                        {isViewMode ? 'Visualizar OS' : editingOrder ? 'Editar OS' : 'Nova OS'} {formData.osNumber}
                                    </h2>
                                    <p className="text-slate-500 text-sm font-medium">
                                        {isViewMode ? 'Apenas visualização - Dados não editáveis' : 'Relatório de Atendimento Técnico'}
                                    </p>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="p-3 hover:bg-slate-100 rounded-full text-slate-400 transition-colors"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            <div className="space-y-10">
                                {/* SEÇÃO CLIENTE */}
                                <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 space-y-8">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-2 text-blue-600 font-bold uppercase text-xs tracking-widest">
                                            <User size={16} /> Cliente
                                        </div>
                                        <div className="relative">
                                            <input
                                                placeholder="Nome da Empresa"
                                                className={`w-full p-4 ${isViewMode ? 'bg-slate-50 cursor-not-allowed' : 'bg-white'} border ${fieldErrors.client ? 'border-red-500' : 'border-slate-200'} rounded-2xl outline-none ${isViewMode ? '' : 'focus:ring-4 focus:ring-blue-500/10'} transition-all font-bold`}
                                                value={formData.client}
                                                onChange={isViewMode ? undefined : (e => {
                                                    setFormData({ ...formData, client: e.target.value });
                                                    setShowClientSuggestions(true);
                                                    if (fieldErrors.client) setFieldErrors(prev => ({ ...prev, client: false }));
                                                })}
                                                onFocus={isViewMode ? undefined : () => setShowClientSuggestions(true)}
                                                onBlur={isViewMode ? undefined : () => setTimeout(() => setShowClientSuggestions(false), 200)}
                                                readOnly={isViewMode}
                                            />
                                            {!isViewMode && showClientSuggestions && formData.client && (
                                                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden z-50 max-h-60 overflow-y-auto animate-in slide-in-from-top-2">
                                                    {uniqueClients.filter(c => c.client.toLowerCase().includes(formData.client.toLowerCase())).slice(0, 5).map((c, idx) => (
                                                        <div key={idx} className="p-3 hover:bg-blue-50 cursor-pointer border-b border-slate-50 flex flex-col" onMouseDown={(e) => { e.preventDefault(); handleClientSelect(c); }}>
                                                            <span className="font-bold text-slate-800 text-sm">{c.client}</span>
                                                            <span className="text-[10px] text-slate-400">{c.cnpj || 'Sem CNPJ'}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                            {fieldErrors.client && !isViewMode && <p className="text-red-500 text-xs mt-1 ml-4">Cliente é obrigatório</p>}
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <input
                                                placeholder="CNPJ"
                                                className={`w-full p-4 ${isViewMode ? 'bg-slate-50 cursor-not-allowed' : 'bg-white'} border border-slate-200 rounded-2xl outline-none ${isViewMode ? '' : 'focus:ring-4 focus:ring-blue-500/10'} transition-all font-bold`}
                                                value={formData.cnpj}
                                                onChange={isViewMode ? undefined : (e => setFormData({ ...formData, cnpj: e.target.value }))}
                                                readOnly={isViewMode}
                                            />
                                            <input
                                                placeholder="Responsável"
                                                className={`w-full p-4 ${isViewMode ? 'bg-slate-50 cursor-not-allowed' : 'bg-white'} border border-slate-200 rounded-2xl outline-none ${isViewMode ? '' : 'focus:ring-4 focus:ring-blue-500/10'} transition-all font-bold`}
                                                value={formData.contactPerson}
                                                onChange={isViewMode ? undefined : (e => setFormData({ ...formData, contactPerson: e.target.value }))}
                                                readOnly={isViewMode}
                                            />
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <input
                                                placeholder="E-mail"
                                                className={`w-full p-4 ${isViewMode ? 'bg-slate-50 cursor-not-allowed' : 'bg-white'} border border-slate-200 rounded-2xl outline-none ${isViewMode ? '' : 'focus:ring-4 focus:ring-blue-500/10'} transition-all font-bold`}
                                                value={formData.email}
                                                onChange={isViewMode ? undefined : (e => setFormData({ ...formData, email: e.target.value }))}
                                                readOnly={isViewMode}
                                            />
                                            <div className="space-y-1">
                                                <label className="text-[10px] font-black text-slate-400 uppercase ml-2 flex justify-between">
                                                    Endereço
                                                    {formData.address && !isViewMode && (
                                                        <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(formData.address)}`} target="_blank" className="text-blue-600 hover:underline flex items-center gap-1">
                                                            <ExternalLink size={10} /> Ver no Maps
                                                        </a>
                                                    )}
                                                </label>
                                                <input
                                                    placeholder="Endereço Completo"
                                                    className={`w-full p-4 ${isViewMode ? 'bg-slate-50 cursor-not-allowed' : 'bg-white'} border border-slate-200 rounded-2xl outline-none ${isViewMode ? '' : 'focus:ring-4 focus:ring-blue-500/10'} transition-all font-bold`}
                                                    value={formData.address}
                                                    onChange={isViewMode ? undefined : (e => setFormData({ ...formData, address: e.target.value }))}
                                                    readOnly={isViewMode}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="border-slate-200/50" />
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-2 text-indigo-600 font-bold uppercase text-xs tracking-widest">
                                            <CalendarCheck size={16} /> Atendimento
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {isViewMode ? (
                                                <div className="w-full p-4 bg-slate-50 cursor-not-allowed border border-slate-200 rounded-2xl font-bold">
                                                    {formData.billingType}
                                                </div>
                                            ) : (
                                                <SuggestionInput
                                                    value={formData.billingType}
                                                    onChange={(e) => setFormData({ ...formData, billingType: e.target.value })}
                                                    suggestions={uniqueBillingTypes}
                                                    placeholder="Selecione ou digite o tipo de atendimento"
                                                    userRole={userData?.role}
                                                    onRemoveSuggestion={(value) => handleHideSuggestion('billing', value)}
                                                />
                                            )}

                                            {isViewMode ? (
                                                formData.maintenanceVisit && (
                                                    <div className="w-full p-4 bg-slate-50 cursor-not-allowed border border-slate-200 rounded-2xl font-bold">
                                                        {formData.maintenanceVisit}
                                                    </div>
                                                )
                                            ) : (
                                                <SuggestionInput
                                                    value={formData.maintenanceVisit}
                                                    onChange={(e) => setFormData({ ...formData, maintenanceVisit: e.target.value })}
                                                    suggestions={currentMonthVisits}
                                                    placeholder="Selecione ou digite a visita"
                                                    userRole={userData?.role}
                                                    onRemoveSuggestion={(value) => handleHideSuggestion('visit', value)}
                                                />
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* SEÇÃO EQUIPAMENTO */}
                                <div className="space-y-6">
                                    <div className="flex items-center gap-2 text-orange-600 font-bold uppercase text-xs tracking-widest">
                                        <Package size={16} /> Equipamento
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                        {/* NÚMERO DE SÉRIE - COM PREENCHIMENTO AUTOMÁTICO */}
                                        <div className="relative">
                                            <input
                                                placeholder="Número de Série"
                                                className={`w-full p-4 ${isViewMode ? 'bg-slate-50 cursor-not-allowed' : 'bg-slate-50'} border border-slate-200 rounded-2xl outline-none font-bold font-mono`}
                                                value={formData.serial}
                                                onChange={isViewMode ? undefined : (e => {
                                                    const serial = e.target.value;
                                                    setFormData({ ...formData, serial });

                                                    // Buscar equipamento pelo número de série EM TODAS AS ORDENS
                                                    if (serial && serial.trim() !== '') {
                                                        const foundOrder = orders.find(o =>
                                                            o.serial && o.serial.toLowerCase() === serial.toLowerCase().trim()
                                                        );
                                                        if (foundOrder) {
                                                            setFormData(prev => ({
                                                                ...prev,
                                                                item: foundOrder.item || prev.item,
                                                                manufacturer: foundOrder.manufacturer || prev.manufacturer,
                                                                model: foundOrder.model || prev.model,
                                                                equipmentObservation: foundOrder.equipmentObservation || prev.equipmentObservation,
                                                                quantity: foundOrder.quantity || prev.quantity
                                                            }));
                                                            showNotification(`Equipamento preenchido: ${foundOrder.item}`, 'success');
                                                        }
                                                    }
                                                    setShowSerialSuggestions(true);
                                                })}
                                                onFocus={isViewMode ? undefined : () => setShowSerialSuggestions(true)}
                                                onBlur={isViewMode ? undefined : () => setTimeout(() => setShowSerialSuggestions(false), 200)}
                                                readOnly={isViewMode}
                                            />

                                            {/* Botão para forçar preenchimento - APENAS NÃO VIEW MODE */}
                                            {!isViewMode && formData.serial && (
                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        const foundOrder = orders.find(o =>
                                                            o.serial && o.serial.toLowerCase() === formData.serial.toLowerCase().trim()
                                                        );

                                                        if (foundOrder) {
                                                            setFormData(prev => ({
                                                                ...prev,
                                                                item: foundOrder.item || prev.item,
                                                                manufacturer: foundOrder.manufacturer || prev.manufacturer,
                                                                model: foundOrder.model || prev.model,
                                                                equipmentObservation: foundOrder.equipmentObservation || prev.equipmentObservation,
                                                                quantity: foundOrder.quantity || prev.quantity
                                                            }));
                                                            showNotification(`Equipamento preenchido: ${foundOrder.item}`, 'success');
                                                        } else {
                                                            showNotification('Nenhum equipamento encontrado com este número de série', 'warning');
                                                        }
                                                    }}
                                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded hover:bg-blue-200 transition-colors"
                                                    title="Preencher equipamento pelo NS"
                                                >
                                                    <RefreshCw size={12} />
                                                </button>
                                            )}

                                            {/* Sugestões de NS - APENAS NÃO VIEW MODE */}
                                            {!isViewMode && showSerialSuggestions && uniqueSerials.length > 0 && (
                                                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden z-50 max-h-48 overflow-y-auto animate-in slide-in-from-top-2">
                                                    <div className="p-2 bg-slate-50 text-[10px] uppercase font-bold text-slate-400">Sugestões de NS</div>
                                                    {uniqueSerials.filter(s => s.toLowerCase().includes(formData.serial.toLowerCase())).slice(0, 5).map((s, idx) => {
                                                        // Encontrar o equipamento completo pelo serial
                                                        const orderWithSerial = orders.find(o => o.serial === s);
                                                        return (
                                                            <div
                                                                key={idx}
                                                                className="p-3 hover:bg-orange-50 cursor-pointer border-b border-slate-50 text-sm text-slate-700 font-mono font-bold"
                                                                onMouseDown={(e) => {
                                                                    e.preventDefault();
                                                                    if (orderWithSerial) {
                                                                        setFormData({
                                                                            ...formData,
                                                                            serial: s,
                                                                            item: orderWithSerial.item || formData.item,
                                                                            manufacturer: orderWithSerial.manufacturer || formData.manufacturer,
                                                                            model: orderWithSerial.model || formData.model,
                                                                            equipmentObservation: orderWithSerial.equipmentObservation || formData.equipmentObservation,
                                                                            quantity: orderWithSerial.quantity || formData.quantity
                                                                        });
                                                                    } else {
                                                                        setFormData({ ...formData, serial: s });
                                                                    }
                                                                    setShowSerialSuggestions(false);
                                                                }}
                                                            >
                                                                {s}
                                                                {orderWithSerial && (
                                                                    <div className="text-xs text-slate-400 font-normal mt-1">
                                                                        {orderWithSerial.item} - {orderWithSerial.manufacturer} {orderWithSerial.model}
                                                                    </div>
                                                                )}
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            )}
                                        </div>

                                        {/* ITEM / NOME */}
                                        <div className="relative">
                                            <input
                                                placeholder="Item / Nome"
                                                className={`w-full p-4 ${isViewMode ? 'bg-slate-50 cursor-not-allowed' : 'bg-slate-50'} border ${fieldErrors.item ? 'border-red-500' : 'border-slate-200'} rounded-2xl outline-none font-bold`}
                                                value={formData.item}
                                                onChange={isViewMode ? undefined : (e => {
                                                    setFormData({ ...formData, item: e.target.value });
                                                    setShowItemSuggestions(true);
                                                    if (fieldErrors.item) setFieldErrors(prev => ({ ...prev, item: false }));
                                                })}
                                                onFocus={isViewMode ? undefined : () => setShowItemSuggestions(true)}
                                                onBlur={isViewMode ? undefined : () => setTimeout(() => setShowItemSuggestions(false), 200)}
                                                readOnly={isViewMode}
                                            />
                                            {!isViewMode && showItemSuggestions && uniqueItems.length > 0 && (
                                                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden z-50 max-h-48 overflow-y-auto animate-in slide-in-from-top-2">
                                                    <div className="p-2 bg-slate-50 text-[10px] uppercase font-bold text-slate-400">Sugestões de Itens</div>
                                                    {uniqueItems.filter(i => i.toLowerCase().includes(formData.item.toLowerCase())).slice(0, 5).map((i, idx) => (
                                                        <div key={idx} className="p-3 hover:bg-orange-50 cursor-pointer border-b border-slate-50 text-sm text-slate-700 font-bold" onMouseDown={(e) => { e.preventDefault(); setFormData({ ...formData, item: i }); setShowItemSuggestions(false); }}>{i}</div>
                                                    ))}
                                                </div>
                                            )}
                                            {fieldErrors.item && !isViewMode && <p className="text-red-500 text-xs mt-1 ml-4">Item/Equipamento é obrigatório</p>}
                                        </div>

                                        {/* MARCA */}
                                        <div className="relative">
                                            <input
                                                placeholder="Marca"
                                                className={`w-full p-4 ${isViewMode ? 'bg-slate-50 cursor-not-allowed' : 'bg-slate-50'} border border-slate-200 rounded-2xl outline-none font-bold`}
                                                value={formData.manufacturer}
                                                onChange={isViewMode ? undefined : (e => {
                                                    setFormData({ ...formData, manufacturer: e.target.value });
                                                    setShowManufacturerSuggestions(true);
                                                })}
                                                onFocus={isViewMode ? undefined : () => setShowManufacturerSuggestions(true)}
                                                onBlur={isViewMode ? undefined : () => setTimeout(() => setShowManufacturerSuggestions(false), 200)}
                                                readOnly={isViewMode}
                                            />
                                            {!isViewMode && showManufacturerSuggestions && uniqueManufacturers.length > 0 && (
                                                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden z-50 max-h-48 overflow-y-auto animate-in slide-in-from-top-2">
                                                    <div className="p-2 bg-slate-50 text-[10px] uppercase font-bold text-slate-400">Sugestões de Marcas</div>
                                                    {uniqueManufacturers.filter(m => m.toLowerCase().includes(formData.manufacturer.toLowerCase())).slice(0, 5).map((m, idx) => (
                                                        <div key={idx} className="p-3 hover:bg-orange-50 cursor-pointer border-b border-slate-50 text-sm text-slate-700 font-bold" onMouseDown={(e) => { e.preventDefault(); setFormData({ ...formData, manufacturer: m }); setShowManufacturerSuggestions(false); }}>{m}</div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>

                                        {/* MODELO */}
                                        <div className="relative">
                                            <input
                                                placeholder="Modelo"
                                                className={`w-full p-4 ${isViewMode ? 'bg-slate-50 cursor-not-allowed' : 'bg-slate-50'} border border-slate-200 rounded-2xl outline-none font-bold`}
                                                value={formData.model}
                                                onChange={isViewMode ? undefined : (e => {
                                                    setFormData({ ...formData, model: e.target.value });
                                                    setShowModelSuggestions(true);
                                                })}
                                                onFocus={isViewMode ? undefined : () => setShowModelSuggestions(true)}
                                                onBlur={isViewMode ? undefined : () => setTimeout(() => setShowModelSuggestions(false), 200)}
                                                readOnly={isViewMode}
                                            />
                                            {!isViewMode && showModelSuggestions && uniqueModels.length > 0 && (
                                                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden z-50 max-h-48 overflow-y-auto animate-in slide-in-from-top-2">
                                                    <div className="p-2 bg-slate-50 text-[10px] uppercase font-bold text-slate-400">Sugestões de Modelos</div>
                                                    {uniqueModels.filter(m => m.toLowerCase().includes(formData.model.toLowerCase())).slice(0, 5).map((m, idx) => (
                                                        <div key={idx} className="p-3 hover:bg-orange-50 cursor-pointer border-b border-slate-50 text-sm text-slate-700 font-bold" onMouseDown={(e) => { e.preventDefault(); setFormData({ ...formData, model: m }); setShowModelSuggestions(false); }}>{m}</div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* OBSERVAÇÕES E QUANTIDADE */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-slate-500 uppercase">Observações (opcional)</label>
                                            <textarea
                                                placeholder="Observações adicionais sobre o equipamento, como estado de conservação, acessórios, etc..."
                                                className={`w-full p-4 ${isViewMode ? 'bg-slate-50 cursor-not-allowed' : 'bg-slate-50'} border border-slate-200 rounded-2xl outline-none font-bold resize-none`}
                                                value={formData.equipmentObservation || ''}
                                                onChange={isViewMode ? undefined : (e => setFormData({ ...formData, equipmentObservation: e.target.value }))}
                                                rows={3}
                                                readOnly={isViewMode}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-slate-500 uppercase">Quantidade</label>
                                            <div className="flex items-center">
                                                <input
                                                    type="number"
                                                    min="1"
                                                    placeholder="1"
                                                    className={`w-full p-4 ${isViewMode ? 'bg-slate-50 cursor-not-allowed' : 'bg-slate-50'} border border-slate-200 rounded-2xl outline-none font-bold text-center`}
                                                    value={formData.quantity || '1'}
                                                    onChange={isViewMode ? undefined : (e => setFormData({ ...formData, quantity: e.target.value }))}
                                                    readOnly={isViewMode}
                                                />
                                            </div>
                                            <p className="text-[10px] text-slate-400 mt-1 ml-2">Quantidade do item/equipamento</p>
                                        </div>
                                    </div>
                                </div>

                                {/* SEÇÃO HISTÓRICO DO EQUIPAMENTO */}
                                {equipmentHistory && (
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-2 text-violet-600 font-bold uppercase text-xs tracking-widest">
                                            <History size={16} /> Histórico do Equipamento
                                        </div>
                                        <div className={`rounded-2xl border-2 p-5 space-y-3 ${equipmentHistory.underWarranty ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
                                            {/* Badge de garantia */}
                                            <div className="flex items-center justify-between flex-wrap gap-3">
                                                <div className={`flex items-center gap-2 px-4 py-2 rounded-full font-black text-sm ${equipmentHistory.underWarranty ? 'bg-green-600 text-white' : 'bg-red-600 text-white'}`}>
                                                    {equipmentHistory.underWarranty ? (
                                                        <><CheckCircle2 size={16} /> Passível de garantia</>
                                                    ) : (
                                                        <><AlertCircle size={16} /> Não passível de garantia</>
                                                    )}
                                                </div>
                                                <span className={`text-xs font-bold px-3 py-1.5 rounded-xl ${equipmentHistory.underWarranty ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                                    {equipmentHistory.diffMonths !== null
                                                        ? `${Math.floor(equipmentHistory.diffMonths)} meses atrás`
                                                        : 'Data desconhecida'
                                                    }
                                                </span>
                                            </div>

                                            {/* Última OS com este NS */}
                                            <div className={`rounded-xl p-4 space-y-1.5 ${equipmentHistory.underWarranty ? 'bg-green-100/60' : 'bg-red-100/60'}`}>
                                                <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Último registro deste NS</div>
                                                <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm">
                                                    <div>
                                                        <span className="text-[10px] font-bold text-slate-400 uppercase block">OS</span>
                                                        <span className="font-black text-blue-700">{equipmentHistory.latest.osNumber}</span>
                                                    </div>
                                                    <div>
                                                        <span className="text-[10px] font-bold text-slate-400 uppercase block">Data</span>
                                                        <span className="font-bold text-slate-700">{formatDateBR(equipmentHistory.latest.statusDate)}</span>
                                                    </div>
                                                    <div>
                                                        <span className="text-[10px] font-bold text-slate-400 uppercase block">Cliente</span>
                                                        <span className="font-bold text-slate-700">{equipmentHistory.latest.client}</span>
                                                    </div>
                                                    <div>
                                                        <span className="text-[10px] font-bold text-slate-400 uppercase block">Status</span>
                                                        <span className="font-bold" style={{ color: statusColors[equipmentHistory.latest.status] ?? '#94a3b8' }}>{equipmentHistory.latest.status}</span>
                                                    </div>
                                                </div>
                                                {equipmentHistory.latest.defect && (
                                                    <div className="mt-2">
                                                        <span className="text-[10px] font-bold text-slate-400 uppercase block">Defeito registrado</span>
                                                        <span className="text-xs text-slate-600">{equipmentHistory.latest.defect.split('\n')[0]}</span>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Todas as ocorrências */}
                                            {equipmentHistory.allOccurrences.length > 1 && (
                                                <details className="group">
                                                    <summary className={`text-xs font-bold cursor-pointer list-none flex items-center gap-1.5 ${equipmentHistory.underWarranty ? 'text-green-700' : 'text-red-700'}`}>
                                                        <ChevronDown size={14} className="transition-transform group-open:rotate-180" />
                                                        Ver todas as {equipmentHistory.allOccurrences.length} ocorrências deste NS
                                                    </summary>
                                                    <div className="mt-2 space-y-1.5 max-h-40 overflow-y-auto pr-1">
                                                        {equipmentHistory.allOccurrences.map((oc, idx) => (
                                                            <div key={idx} className="flex items-center gap-4 p-2 bg-white/70 rounded-lg text-xs">
                                                                <span className="font-black text-blue-600 w-20 flex-shrink-0">{oc.osNumber}</span>
                                                                <span className="text-slate-500 w-20 flex-shrink-0">{formatDateBR(oc.statusDate)}</span>
                                                                <span className="text-slate-600 truncate">{oc.client}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </details>
                                            )}
                                        </div>
                                    </div>
                                )}

                                {/* SEÇÃO LAUDO TÉCNICO */}
                                <div className="space-y-6">
                                    <div className="flex items-center gap-2 text-emerald-600 font-bold uppercase text-xs tracking-widest">
                                        <Wrench size={16} /> Laudo Técnico
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        {/* LISTA DE DEFEITOS */}
                                        <div className="space-y-4">
                                            <label className="text-xs font-bold text-slate-500 uppercase">Defeitos Encontrados</label>
                                            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-3">
                                                {!isViewMode ? (
                                                    <div className="relative flex gap-2">
                                                        <input
                                                            placeholder="Descreva um defeito..."
                                                            className="flex-1 p-3 bg-white border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-emerald-500/20"
                                                            value={tempDefect}
                                                            onChange={e => { setTempDefect(e.target.value); setShowDefectSuggestions(true); }}
                                                            onFocus={() => setShowDefectSuggestions(true)}
                                                            onBlur={() => setTimeout(() => setShowDefectSuggestions(false), 200)}
                                                            onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); addDefectItem(); } }}
                                                        />
                                                        <button type="button" onClick={addDefectItem} className="bg-emerald-600 text-white p-3 rounded-xl shadow-lg shadow-emerald-200 hover:bg-emerald-700 transition-colors">
                                                            <Plus size={20} />
                                                        </button>

                                                        {!isViewMode && showDefectSuggestions && uniqueDefects.length > 0 && (
                                                            <div className="absolute top-full left-0 right-14 mt-2 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden z-50 max-h-48 overflow-y-auto animate-in slide-in-from-top-2">
                                                                <div className="p-2 bg-slate-50 text-[10px] uppercase font-bold text-slate-400 flex justify-between items-center">
                                                                    <span>Sugestões de Defeitos</span>
                                                                </div>
                                                                {uniqueDefects
                                                                    .filter(d => d.toLowerCase().includes(tempDefect.toLowerCase()))
                                                                    .slice(0, 5)
                                                                    .map((d, idx) => (
                                                                        <div
                                                                            key={idx}
                                                                            className="flex items-center justify-between p-3 hover:bg-emerald-50 cursor-pointer border-b border-slate-50 text-sm text-slate-700 group"
                                                                        >
                                                                            <span
                                                                                className="flex-1"
                                                                                onMouseDown={(e) => {
                                                                                    e.preventDefault();
                                                                                    setTempDefect(d);
                                                                                    setShowDefectSuggestions(false);
                                                                                }}
                                                                            >
                                                                                {d.length > 50 ? d.substring(0, 50) + '...' : d}
                                                                            </span>
                                                                            {userData?.role === 'admin' && (
                                                                                <button
                                                                                    type="button"
                                                                                    onClick={(e) => {
                                                                                        e.stopPropagation();
                                                                                        e.preventDefault();
                                                                                        handleHideSuggestion('defect', d);
                                                                                    }}
                                                                                    className="p-1 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                                                                    title="Remover sugestão"
                                                                                >
                                                                                    <X size={14} />
                                                                                </button>
                                                                            )}
                                                                        </div>
                                                                    ))
                                                                }
                                                            </div>
                                                        )}
                                                    </div>
                                                ) : (
                                                    <div className="text-sm text-slate-500 italic">
                                                        {formData.defectsList?.length || 0} defeito(s) listado(s)
                                                    </div>
                                                )}

                                                <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                                                    {formData.defectsList && formData.defectsList.map((d, i) => (
                                                        <div key={i} className="flex justify-between items-start p-3 bg-white border rounded-xl shadow-sm animate-in slide-in-from-left-2">
                                                            <div className="text-sm font-medium text-slate-700 leading-snug">{d}</div>
                                                            {!isViewMode && (
                                                                <button type="button" onClick={() => removeDefectItem(i)} className="text-slate-300 hover:text-red-500 transition-colors p-1">
                                                                    <X size={16} />
                                                                </button>
                                                            )}
                                                        </div>
                                                    ))}
                                                    {(!formData.defectsList || formData.defectsList.length === 0) && (
                                                        <div className="text-center text-xs text-slate-400 italic py-2">Nenhum defeito listado.</div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        {/* TIPO DE SOLUÇÃO E CONTEÚDO */}
                                        <div className="space-y-4">
                                            {isViewMode ? (
                                                <div className={`w-full p-4 ${isViewMode ? 'bg-slate-50 cursor-not-allowed' : 'bg-white'} border border-slate-200 rounded-2xl font-bold`}>
                                                    {formData.solutionType}
                                                </div>
                                            ) : (
                                                <AccessibleSelect
                                                    value={formData.solutionType}
                                                    onChange={(e) => setFormData({ ...formData, solutionType: e.target.value })}
                                                    options={solutionOptions}
                                                    variant="light"
                                                    label="Tipo de solução"
                                                />
                                            )}

                                            {/* SOLUÇÃO: Preenchimento manual */}
                                            {formData.solutionType === "Preenchimento manual" && (
                                                <div className="space-y-4">
                                                    {!isViewMode && (
                                                        <div className="bg-indigo-50 p-4 rounded-2xl border border-indigo-100 space-y-3">
                                                            <div className="relative flex gap-2">
                                                                <input
                                                                    placeholder="Descreva uma etapa da solução..."
                                                                    className="flex-1 p-3 bg-white border border-indigo-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-indigo-500/20"
                                                                    value={tempManualSolution}
                                                                    onChange={e => {
                                                                        setTempManualSolution(e.target.value);
                                                                        setShowSolutionSuggestions(true);
                                                                    }}
                                                                    onFocus={() => setShowSolutionSuggestions(true)}
                                                                    onBlur={() => setTimeout(() => setShowSolutionSuggestions(false), 200)}
                                                                    onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); addManualSolutionItem(); } }}
                                                                />
                                                                <button type="button" onClick={addManualSolutionItem} className="bg-indigo-600 text-white p-3 rounded-xl shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-colors">
                                                                    <Plus size={20} />
                                                                </button>

                                                                {showSolutionSuggestions && uniqueSolutions.length > 0 && (
                                                                    <div className="absolute top-full left-0 right-14 mt-2 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden z-50 max-h-48 overflow-y-auto animate-in slide-in-from-top-2">
                                                                        <div className="p-2 bg-slate-50 text-[10px] uppercase font-bold text-slate-400 flex justify-between items-center">
                                                                            <span>Sugestões de Soluções</span>
                                                                        </div>
                                                                        {uniqueSolutions
                                                                            .filter(s => s.toLowerCase().includes(tempManualSolution.toLowerCase()))
                                                                            .slice(0, 5)
                                                                            .map((s, idx) => (
                                                                                <div
                                                                                    key={idx}
                                                                                    className="flex items-center justify-between p-3 hover:bg-indigo-50 cursor-pointer border-b border-slate-50 text-sm text-slate-700 group"
                                                                                >
                                                                                    <span
                                                                                        className="flex-1"
                                                                                        onMouseDown={(e) => {
                                                                                            e.preventDefault();
                                                                                            setTempManualSolution(s);
                                                                                            setShowSolutionSuggestions(false);
                                                                                        }}
                                                                                    >
                                                                                        {s.length > 50 ? s.substring(0, 50) + '...' : s}
                                                                                    </span>
                                                                                    {userData?.role === 'admin' && (
                                                                                        <button
                                                                                            type="button"
                                                                                            onClick={(e) => {
                                                                                                e.stopPropagation();
                                                                                                e.preventDefault();
                                                                                                handleHideSuggestion('solution', s);
                                                                                            }}
                                                                                            className="p-1 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                                                                            title="Remover sugestão"
                                                                                        >
                                                                                            <X size={14} />
                                                                                        </button>
                                                                                    )}
                                                                                </div>
                                                                            ))
                                                                        }
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    )}

                                                    {/* LISTA DE SOLUÇÕES MANUAIS ADICIONADAS */}
                                                    <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                                                        {formData.manualSolutionsList && formData.manualSolutionsList.map((s, i) => (
                                                            <div key={i} className="flex justify-between items-start p-3 bg-white border rounded-xl shadow-sm animate-in slide-in-from-left-2">
                                                                <div className="text-sm font-medium text-slate-700 leading-snug">{s}</div>
                                                                {!isViewMode && (
                                                                    <button type="button" onClick={() => removeManualSolutionItem(i)} className="text-slate-300 hover:text-red-500 transition-colors p-1">
                                                                        <X size={16} />
                                                                    </button>
                                                                )}
                                                            </div>
                                                        ))}
                                                        {(!formData.manualSolutionsList || formData.manualSolutionsList.length === 0) && (
                                                            <div className="text-center text-xs text-slate-400 italic py-2">Nenhuma solução listada.</div>
                                                        )}
                                                    </div>
                                                </div>
                                            )}

                                            {/* SOLUÇÃO: Manual com custos detalhados */}
                                            {formData.solutionType === "Manual com custos detalhados" && (
                                                <div className="space-y-4 animate-in fade-in">
                                                    {!isViewMode && (
                                                        <div className="bg-green-50 p-4 rounded-2xl border border-green-100 space-y-3">
                                                            <div className="relative">
                                                                <input
                                                                    placeholder="Item, Peça ou Serviço"
                                                                    className="w-full p-2 bg-white border border-green-200 rounded-lg text-sm"
                                                                    value={tempSolution}
                                                                    onChange={e => {
                                                                        setTempSolution(e.target.value);
                                                                        setShowSolutionSuggestions(true);
                                                                    }}
                                                                    onFocus={() => setShowSolutionSuggestions(true)}
                                                                    onBlur={() => setTimeout(() => setShowSolutionSuggestions(false), 200)}
                                                                />
                                                                {showSolutionSuggestions && uniqueSolutionsList.length > 0 && (
                                                                    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden z-50 max-h-48 overflow-y-auto animate-in slide-in-from-top-2">
                                                                        <div className="p-2 bg-slate-50 text-[10px] uppercase font-bold text-slate-400 flex justify-between items-center">
                                                                            <span>Sugestões de Itens</span>
                                                                        </div>
                                                                        {uniqueSolutionsList
                                                                            .filter(s => s.toLowerCase().includes(tempSolution.toLowerCase()))
                                                                            .slice(0, 5)
                                                                            .map((s, idx) => (
                                                                                <div
                                                                                    key={idx}
                                                                                    className="flex items-center justify-between p-3 hover:bg-green-50 cursor-pointer border-b border-slate-50 text-sm text-slate-700 group"
                                                                                >
                                                                                    <span
                                                                                        className="flex-1"
                                                                                        onMouseDown={(e) => {
                                                                                            e.preventDefault();
                                                                                            setTempSolution(s);
                                                                                            setShowSolutionSuggestions(false);
                                                                                        }}
                                                                                    >
                                                                                        {s.length > 50 ? s.substring(0, 50) + '...' : s}
                                                                                    </span>
                                                                                    {userData?.role === 'admin' && (
                                                                                        <button
                                                                                            type="button"
                                                                                            onClick={(e) => {
                                                                                                e.stopPropagation();
                                                                                                e.preventDefault();
                                                                                                handleHideSuggestion('solution', s);
                                                                                            }}
                                                                                            className="p-1 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                                                                            title="Remover sugestão"
                                                                                        >
                                                                                            <X size={14} />
                                                                                        </button>
                                                                                    )}
                                                                                </div>
                                                                            ))
                                                                        }
                                                                    </div>
                                                                )}
                                                            </div>
                                                            {/* Resto do conteúdo (input de custo e botão adicionar) permanece igual */}
                                                            <div className="flex gap-2">
                                                                <input
                                                                    placeholder="Valor R$ 0,00"
                                                                    className="flex-1 p-2 bg-white border border-green-200 rounded-lg text-sm"
                                                                    value={tempCost}
                                                                    onChange={e => setTempCost(e.target.value)}
                                                                />
                                                                <button
                                                                    type="button"
                                                                    onClick={addSolutionItem}
                                                                    className="bg-green-600 text-white p-2.5 rounded-lg shadow-lg shadow-green-200"
                                                                >
                                                                    <Plus size={20} />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    )}

                                                    <div className="space-y-2 max-h-40 overflow-y-auto pr-1">
                                                        {formData.solutionsList.map(s => (
                                                            <div key={s.id} className="flex justify-between items-center p-3 bg-white border rounded-xl shadow-sm animate-in slide-in-from-right-2">
                                                                <div>
                                                                    <div className="text-xs font-bold text-slate-800">{s.text}</div>
                                                                    <div className="text-[10px] text-green-600 font-black">R$ {s.cost}</div>
                                                                </div>
                                                                {!isViewMode && (
                                                                    <button type="button" onClick={() => removeSolutionItem(s.id)}>
                                                                        <X size={16} className="text-red-300 hover:text-red-500" />
                                                                    </button>
                                                                )}
                                                            </div>
                                                        ))}
                                                    </div>
                                                    {fieldErrors.solutionsList && formData.solutionsList.length === 0 && !isViewMode && (
                                                        <p className="text-red-500 text-xs mt-1 ml-4">Adicione pelo menos um item na lista de soluções</p>
                                                    )}
                                                </div>
                                            )}

                                            {/* SOLUÇÃO: Conserto em bancada */}
                                            {formData.solutionType === "Conserto em bancada" && (
                                                <div className="space-y-4 animate-in fade-in">
                                                    {!isViewMode && (
                                                        <div className="bg-amber-50 p-4 rounded-2xl border border-amber-100 space-y-3">
                                                            <div className="relative flex gap-2">
                                                                <div className="relative flex-1">
                                                                    <input
                                                                        placeholder="Descreva uma etapa do conserto em bancada..."
                                                                        className="w-full p-3 bg-white border border-amber-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-amber-500/20"
                                                                        value={tempBenchRepair}
                                                                        onChange={e => {
                                                                            setTempBenchRepair(e.target.value);
                                                                            setShowBenchRepairSuggestions(true);
                                                                        }}
                                                                        onFocus={() => setShowBenchRepairSuggestions(true)}
                                                                        onBlur={() => setTimeout(() => setShowBenchRepairSuggestions(false), 200)}
                                                                        onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); addBenchRepairItem(); } }}
                                                                    />
                                                                    {showBenchRepairSuggestions && uniqueBenchRepair.length > 0 && (
                                                                        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden z-50 max-h-48 overflow-y-auto animate-in slide-in-from-top-2">
                                                                            <div className="p-2 bg-slate-50 text-[10px] uppercase font-bold text-slate-400 flex justify-between items-center">
                                                                                <span>Sugestões de Etapas</span>
                                                                            </div>
                                                                            {uniqueBenchRepair
                                                                                .filter(s => s.toLowerCase().includes(tempBenchRepair.toLowerCase()))
                                                                                .slice(0, 5)
                                                                                .map((s, idx) => (
                                                                                    <div
                                                                                        key={idx}
                                                                                        className="flex items-center justify-between p-3 hover:bg-amber-50 cursor-pointer border-b border-slate-50 text-sm text-slate-700 group"
                                                                                    >
                                                                                        <span
                                                                                            className="flex-1"
                                                                                            onMouseDown={(e) => {
                                                                                                e.preventDefault();
                                                                                                setTempBenchRepair(s);
                                                                                                setShowBenchRepairSuggestions(false);
                                                                                            }}
                                                                                        >
                                                                                            {s.length > 50 ? s.substring(0, 50) + '...' : s}
                                                                                        </span>
                                                                                        {userData?.role === 'admin' && (
                                                                                            <button
                                                                                                type="button"
                                                                                                onClick={(e) => {
                                                                                                    e.stopPropagation();
                                                                                                    e.preventDefault();
                                                                                                    handleHideSuggestion('solution', s);
                                                                                                }}
                                                                                                className="p-1 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                                                                                title="Remover sugestão"
                                                                                            >
                                                                                                <X size={14} />
                                                                                            </button>
                                                                                        )}
                                                                                    </div>
                                                                                ))
                                                                            }
                                                                        </div>
                                                                    )}
                                                                </div>
                                                                <button
                                                                    type="button"
                                                                    onClick={addBenchRepairItem}
                                                                    className="bg-amber-600 text-white p-3 rounded-xl shadow-lg shadow-amber-200 hover:bg-amber-700 transition-colors"
                                                                >
                                                                    <Plus size={20} />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    )}

                                                    <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                                                        {formData.benchRepairList && formData.benchRepairList.map((item, i) => (
                                                            <div key={i} className="flex justify-between items-start p-3 bg-white border rounded-xl shadow-sm animate-in slide-in-from-left-2">
                                                                <div className="text-sm font-medium text-slate-700 leading-snug">{item}</div>
                                                                {!isViewMode && (
                                                                    <button type="button" onClick={() => removeBenchRepairItem(i)} className="text-slate-300 hover:text-red-500 transition-colors p-1">
                                                                        <X size={16} />
                                                                    </button>
                                                                )}
                                                            </div>
                                                        ))}
                                                        {(!formData.benchRepairList || formData.benchRepairList.length === 0) && (
                                                            <div className="text-center text-xs text-slate-400 italic py-2">Nenhuma etapa de conserto listada.</div>
                                                        )}
                                                    </div>
                                                    {fieldErrors.benchRepairList && (!formData.benchRepairList || formData.benchRepairList.length === 0) && !isViewMode && (
                                                        <p className="text-red-500 text-xs mt-1 ml-4">Descreva as etapas do conserto em bancada</p>
                                                    )}
                                                </div>
                                            )}

                                            {/* SOLUÇÃO: Não passível de conserto */}
                                            {formData.solutionType === "Não passível de conserto, substituir por novo equipamento / material" && (
                                                <div>
                                                    <textarea
                                                        placeholder="Detalhe a substituição por novo equipamento / material..."
                                                        className={`w-full p-4 ${fieldErrors.notRepairableDetail ? 'bg-red-50 border-red-500' : 'bg-red-50 border-red-100'} text-red-900 border rounded-2xl outline-none font-bold`}
                                                        value={formData.notRepairableDetail}
                                                        onChange={isViewMode ? undefined : (e => {
                                                            setFormData({ ...formData, notRepairableDetail: e.target.value });
                                                            if (fieldErrors.notRepairableDetail) setFieldErrors(prev => ({ ...prev, notRepairableDetail: false }));
                                                        })}
                                                        onBlur={isViewMode ? undefined : () => handleBlur('notRepairableDetail')}
                                                        rows={3}
                                                        readOnly={isViewMode}
                                                    />
                                                    {fieldErrors.notRepairableDetail && !isViewMode && (
                                                        <p className="text-red-500 text-xs mt-1 ml-4">Detalhe a substituição por novo equipamento/material</p>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* ===== SEÇÃO DE FOTOS ===== */}
                                <div className="space-y-4">
                                    <div className="flex items-center gap-2 text-purple-600 font-bold uppercase text-xs tracking-widest">
                                        <ImageIcon size={16} /> Fotos do Equipamento
                                    </div>

                                    {/* Botão de upload – aparece apenas em modo de edição */}
                                    {!isViewMode && (
                                        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                                            <div className="flex flex-wrap gap-3 items-center">
                                                {/* Upload de arquivo */}
                                                <label className="flex items-center gap-2 px-4 py-3 bg-white border border-slate-200 rounded-xl cursor-pointer hover:bg-blue-50 transition-colors">
                                                    <Upload size={20} className="text-blue-600" />
                                                    <span className="text-sm font-bold">Adicionar Fotos</span>
                                                    <input
                                                        type="file"
                                                        multiple
                                                        accept="image/*"
                                                        className="hidden"
                                                        onChange={handlePhotoUpload}
                                                        disabled={uploadingPhotos}
                                                    />
                                                </label>

                                                {/* Câmera – abre câmera traseira no mobile, webcam no desktop */}
                                                <label className="flex items-center gap-2 px-4 py-3 bg-white border border-slate-200 rounded-xl cursor-pointer hover:bg-purple-50 transition-colors">
                                                    <ImageIcon size={20} className="text-purple-600" />
                                                    <span className="text-sm font-bold">Usar Câmera</span>
                                                    <input
                                                        type="file"
                                                        accept="image/*"
                                                        capture="environment"
                                                        className="hidden"
                                                        onChange={handlePhotoUpload}
                                                        disabled={uploadingPhotos}
                                                    />
                                                </label>

                                                {uploadingPhotos && (
                                                    <div className="flex items-center gap-2 text-blue-600">
                                                        <Loader2 size={20} className="animate-spin" />
                                                        <span className="text-sm">Enviando...</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    )}

                                    {/* Galeria de fotos */}
                                    {formData.photos && formData.photos.length > 0 ? (
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                                            {formData.photos.map((photoUrl, index) => (
                                                <div key={index} className="relative group rounded-xl overflow-hidden border border-slate-200 bg-white">
                                                    <img
                                                        src={photoUrl}
                                                        alt={`Foto ${index + 1}`}
                                                        className="w-full h-32 object-cover"
                                                        onError={(e) => {
                                                            e.target.onerror = null;
                                                            e.target.src = 'https://via.placeholder.com/150?text=Erro';
                                                        }}
                                                    />
                                                    {/* Botão de remover – só em modo de edição */}
                                                    {!isViewMode && (
                                                        <button
                                                            type="button"
                                                            onClick={() => removePhoto(index)}
                                                            className="absolute top-2 right-2 p-1.5 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600 shadow-lg"
                                                            title="Remover foto"
                                                        >
                                                            <Trash2 size={14} />
                                                        </button>
                                                    )}
                                                    {/* Link para abrir a foto em tamanho real */}
                                                    <a
                                                        href={photoUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="absolute bottom-2 right-2 p-1.5 bg-blue-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-blue-600 shadow-lg"
                                                        title="Abrir em nova guia"
                                                    >
                                                        <ExternalLink size={14} />
                                                    </a>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="text-center py-8 bg-slate-50 rounded-2xl border border-slate-100">
                                            <ImageIcon size={40} className="mx-auto text-slate-300 mb-2" />
                                            <p className="text-sm text-slate-400 font-medium">Nenhuma foto adicionada</p>
                                            {!isViewMode && (
                                                <p className="text-xs text-slate-400 mt-1">
                                                    Clique em "Adicionar Fotos" para enviar imagens do equipamento.
                                                </p>
                                            )}
                                        </div>
                                    )}
                                </div>

                                {/* SEÇÃO FINANCEIRA - SOMENTE EM MODO EDIÇÃO */}
                                {!isViewMode && (
                                    <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 space-y-6 transition-all duration-300">
                                        <div className="flex items-center justify-between cursor-pointer hover:opacity-80 transition-opacity" onClick={() => setIsFinancialOpen(!isFinancialOpen)}>
                                            <div className="flex items-center gap-2 text-red-600 font-bold uppercase text-xs tracking-widest">
                                                <DollarSign size={16} /> Financeiro & Custos (Controle Interno)
                                            </div>
                                            {isFinancialOpen ? <ChevronUp size={20} className="text-slate-400" /> : <ChevronDown size={20} className="text-slate-400" />}
                                        </div>
                                        {isFinancialOpen && (
                                            <div className="space-y-6 animate-in slide-in-from-top-4 fade-in duration-300">
                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-bold text-slate-500 uppercase">Nome do Terceiro / Transportadora</label>
                                                    <input placeholder="Ex: JadLog / Lab Especializado" className="w-full p-4 bg-white border border-slate-200 rounded-2xl outline-none font-bold" value={formData.costThirdPartyName} onChange={e => setFormData({ ...formData, costThirdPartyName: e.target.value })} />
                                                </div>
                                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                                    <div className="space-y-2">
                                                        <label className="text-[10px] font-bold text-slate-500 uppercase">Frete Terceiro (R$)</label>
                                                        <input placeholder="0,00" className="w-full p-4 bg-white border border-slate-200 rounded-2xl outline-none font-bold" value={formData.costThirdPartyShipping} onChange={e => setFormData({ ...formData, costThirdPartyShipping: e.target.value })} />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label className="text-[10px] font-bold text-slate-500 uppercase">Peças/Serviços (R$)</label>
                                                        <input placeholder="0,00" className="w-full p-4 bg-white border border-slate-200 rounded-2xl outline-none font-bold" value={formData.costParts} onChange={e => setFormData({ ...formData, costParts: e.target.value })} />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label className="text-[10px] font-bold text-slate-500 uppercase">Frete Cliente (R$)</label>
                                                        <input placeholder="0,00" className="w-full p-4 bg-white border border-slate-200 rounded-2xl outline-none font-bold" value={formData.costClientShipping} onChange={e => setFormData({ ...formData, costClientShipping: e.target.value })} />
                                                    </div>
                                                </div>
                                                <hr className="border-slate-200/50" />
                                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-start">
                                                    {/* COLUNA 1: Valor Sugerido + Botão Boleto */}
                                                    <div className="space-y-2">
                                                        <label className="text-[10px] font-bold text-blue-500 uppercase">Valor Sugerido (+60%)</label>
                                                        <div className="w-full p-4 bg-blue-50/50 border border-blue-100 rounded-2xl font-black text-blue-600 cursor-not-allowed text-sm">R$ {formatMoney(suggestedValue)}</div>

                                                        {/* Botão de adicionar opção de boleto - só quando Boleto selecionado */}
                                                        {!isViewMode && formData.paymentCondition === 'Boleto' && (
                                                            <div className="mt-2">
                                                                {!showAddBoletoInput ? (
                                                                    <button
                                                                        type="button"
                                                                        onClick={() => setShowAddBoletoInput(true)}
                                                                        className="w-full p-3 bg-blue-50 text-blue-600 border-2 border-blue-200 border-dashed rounded-xl font-bold text-sm hover:bg-blue-100 transition-colors flex items-center gap-2 justify-center"
                                                                    >
                                                                        <Plus size={16} />
                                                                        Adicionar nova opção de boleto
                                                                    </button>
                                                                ) : (
                                                                    <div className="space-y-2 animate-in fade-in w-full">
                                                                        <div className="flex gap-2 items-center">
                                                                            <input
                                                                                type="text"
                                                                                placeholder="Ex: 45 / 75 dias"
                                                                                className="flex-1 p-3 bg-white border border-blue-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-500/20"
                                                                                value={newBoletoOption}
                                                                                onChange={(e) => setNewBoletoOption(e.target.value)}
                                                                                onKeyDown={(e) => {
                                                                                    if (e.key === 'Enter' && newBoletoOption.trim()) {
                                                                                        addCustomInstallmentOption('Boleto', newBoletoOption.trim());
                                                                                        setNewBoletoOption('');
                                                                                        setShowAddBoletoInput(false);
                                                                                    }
                                                                                }}
                                                                                autoFocus
                                                                            />
                                                                            <button
                                                                                type="button"
                                                                                onClick={() => {
                                                                                    if (newBoletoOption.trim()) {
                                                                                        addCustomInstallmentOption('Boleto', newBoletoOption.trim());
                                                                                        setNewBoletoOption('');
                                                                                        setShowAddBoletoInput(false);
                                                                                    }
                                                                                }}
                                                                                className="bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 transition-colors flex-shrink-0"
                                                                                title="Adicionar"
                                                                            >
                                                                                <Plus size={16} />
                                                                            </button>
                                                                            <button
                                                                                type="button"
                                                                                onClick={() => {
                                                                                    setShowAddBoletoInput(false);
                                                                                    setNewBoletoOption('');
                                                                                }}
                                                                                className="text-slate-400 hover:text-slate-600 p-2 flex-shrink-0"
                                                                                title="Cancelar"
                                                                            >
                                                                                <X size={16} />
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        )}
                                                    </div>

                                                    {/* COLUNA 2: Soma Itens Laudo */}
                                                    <div className="space-y-2">
                                                        <label className="text-[10px] font-bold text-purple-600 uppercase">Soma Itens Laudo</label>
                                                        <div className="w-full p-4 bg-purple-50/50 border border-purple-100 rounded-2xl font-black text-purple-700 cursor-not-allowed text-sm">R$ {formatMoney(solutionsTotal)}</div>
                                                    </div>

                                                    <div className="space-y-2">
                                                        <label className="text-[10px] font-bold text-green-600 uppercase">Valor Cobrado (R$)</label>
                                                        <div className="relative">
                                                            <input
                                                                placeholder="0,00"
                                                                className="w-full p-4 bg-green-50 border border-green-100 rounded-2xl outline-none font-black text-green-700 text-sm"
                                                                value={formData.chargedAmount}
                                                                onChange={e => setFormData({ ...formData, chargedAmount: e.target.value })}
                                                            />
                                                            {formData.discount5Days && (
                                                                <div className="absolute -right-2 -top-2 bg-red-500 text-white text-[10px] font-black px-2 py-1 rounded-full animate-pulse">
                                                                    5% OFF
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label className="text-[10px] font-bold text-slate-500 uppercase">Condição Pagamento</label>
                                                        <AccessibleSelect
                                                            value={formData.paymentCondition}
                                                            onChange={(e) => setFormData({ ...formData, paymentCondition: e.target.value, installments: '' })}
                                                            options={['À vista', 'Boleto', 'Cartão']}
                                                            label="Condição de pagamento"
                                                        />
                                                    </div>
                                                    {(formData.paymentCondition === 'Boleto' || formData.paymentCondition === 'Cartão') && (
                                                        <div className="space-y-2 animate-in fade-in">
                                                            <label className="text-[10px] font-bold text-slate-400 uppercase">Parcelas</label>
                                                            <InstallmentSelect
                                                                value={formData.installments}
                                                                onChange={(e) => {
                                                                    const newInstallments = e.target.value;
                                                                    const is5Days = formData.paymentCondition === 'Boleto' && newInstallments === "5 dias (5% de desconto)";
                                                                    setFormData({
                                                                        ...formData,
                                                                        installments: newInstallments,
                                                                        discount5Days: is5Days
                                                                    });
                                                                }}
                                                                paymentCondition={formData.paymentCondition}
                                                                options={[...new Set([...(installmentOptions[formData.paymentCondition] || []), ...(customOptions[formData.paymentCondition] || [])])]}
                                                                customOptions={customOptions[formData.paymentCondition] || []}
                                                                onDeleteOption={handleDeleteCustomOption}
                                                                userRole={userData?.role}
                                                                showAddOption={false} // o botão de adicionar já está fora, então não mostrar dentro
                                                                onAddOption={addCustomInstallmentOption}
                                                            />
                                                        </div>
                                                    )}
                                                </div>
                                                <div className={`p-6 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-4 transition-colors ${profit >= 0 ? 'bg-green-100/50 border border-green-200' : 'bg-red-100/50 border border-red-200'}`}>
                                                    <div className="flex items-center gap-3">
                                                        <div className={`p-3 rounded-full ${profit >= 0 ? 'bg-green-200 text-green-700' : 'bg-red-200 text-red-700'}`}>
                                                            <Calculator size={24} />
                                                        </div>
                                                        <div>
                                                            <div className="text-[10px] font-black uppercase text-slate-500">Resultado Operacional</div>
                                                            <div className={`text-2xl font-black ${profit >= 0 ? 'text-green-700' : 'text-red-700'}`}>
                                                                {profit >= 0 ? 'LUCRO' : 'PREJUÍZO'}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-8 text-right">
                                                        <div>
                                                            <div className="text-[10px] font-bold text-slate-400 uppercase">Custo Total</div>
                                                            <div className="font-bold text-slate-700">R$ {formatMoney(totalCost)}</div>
                                                        </div>
                                                        <div>
                                                            <div className="text-[10px] font-bold text-slate-400 uppercase">Resultado</div>
                                                            <div className={`text-xl font-black ${profit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                                                R$ {formatMoney(profit)}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}
                                {/* SEÇÃO LOGÍSTICA E STATUS FINAL */}
                                <div className="space-y-6 pt-6 border-t">
                                    <div className="flex items-center gap-2 text-slate-900 font-bold uppercase text-xs tracking-widest">
                                        <Truck size={16} /> Logística e Status Final
                                    </div>

                                    {/* TIMELINE HORIZONTAL */}
                                    <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 space-y-6">
                                        <div className="w-full overflow-x-auto py-2">
                                            <div className="flex items-center justify-between min-w-[600px] relative px-4">
                                                <div className="absolute left-4 right-4 top-1/2 -translate-y-1/2 h-0.5 bg-slate-200 z-0"></div>
                                                <div
                                                    className="absolute left-4 top-1/2 -translate-y-1/2 h-0.5 bg-blue-600 z-0 transition-all duration-500 ease-in-out"
                                                    style={{ width: `${activeWidthPercent}%` }}
                                                ></div>

                                                {TIMELINE_STEPS.map((step, index) => {
                                                    const isCompleted = index <= currentStatusIndex;
                                                    const isCurrent = index === currentStatusIndex;
                                                    const stepDate = getStatusTimelineDate(step.value);

                                                    return (
                                                        <div
                                                            key={index}
                                                            className="relative z-10 flex flex-col items-center gap-3 cursor-pointer group min-w-[80px]"
                                                            onClick={isViewMode ? undefined : () => setFormData({ ...formData, status: step.value, statusDate: new Date().toISOString().split('T')[0] })}
                                                        >
                                                            <div
                                                                className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all duration-300 shadow-sm ${isCompleted
                                                                    ? 'text-white scale-110'
                                                                    : 'bg-white border-slate-300 text-slate-300 group-hover:border-blue-300'
                                                                    }`}
                                                                style={isCompleted ? { backgroundColor: step.color, borderColor: step.color } : {}}
                                                            >
                                                                {isCompleted ? <Check size={14} strokeWidth={4} /> : <div className="w-2 h-2 rounded-full bg-slate-200" />}
                                                            </div>
                                                            <div className="text-center flex flex-col items-center">
                                                                <span className={`text-[10px] font-bold uppercase tracking-wide transition-colors ${isCurrent ? 'text-blue-700' : 'text-slate-400'}`}>
                                                                    {step.label}
                                                                </span>
                                                                <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded mt-1 whitespace-nowrap ${stepDate ? 'bg-white text-slate-600 shadow-sm border border-slate-200' : 'text-slate-300'}`}>
                                                                    {stepDate || '---'}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start pt-4 border-t border-slate-200/50">
                                            <div className="space-y-1">
                                                <label className="text-[10px] font-black text-slate-400 uppercase">Status Geral</label>
                                                {isViewMode ? (
                                                    <div className={`w-full p-4 ${isViewMode ? 'bg-slate-50 cursor-not-allowed' : 'bg-white'} border border-slate-200 rounded-2xl font-bold`}>
                                                        {formData.status}
                                                    </div>
                                                ) : (
                                                    <AccessibleSelect
                                                        value={formData.status}
                                                        onChange={(e) => {
                                                            setFormData({
                                                                ...formData,
                                                                status: e.target.value,
                                                                statusDate: new Date().toISOString().split('T')[0]
                                                            })
                                                        }}
                                                        options={statusOptions}
                                                        label="Status geral"
                                                    />
                                                )}
                                            </div>
                                            <div className="space-y-1">
                                                <label className="text-[10px] font-black text-slate-400 uppercase">Data do Status Atual</label>
                                                <input
                                                    type="date"
                                                    className={`w-full p-4 ${isViewMode ? 'bg-slate-50 cursor-not-allowed' : 'bg-white'} border border-slate-200 rounded-2xl outline-none font-bold`}
                                                    value={formData.statusDate}
                                                    onChange={isViewMode ? undefined : (e => setFormData({ ...formData, statusDate: e.target.value }))}
                                                    readOnly={isViewMode}
                                                />
                                            </div>
                                        </div>

                                        {(formData.status === "Em orçamento" || formData.status === "Aguardando aprovação") && (
                                            <div className="space-y-1 animate-in fade-in">
                                                <label className="text-[10px] font-black text-slate-400 uppercase">Prazo de Entrega</label>
                                                <div className="flex items-center">
                                                    <input
                                                        type="number"
                                                        placeholder="Ex: 7"
                                                        className="w-20 p-4 border border-slate-200 rounded-l-2xl outline-none font-bold text-center"
                                                        value={formData.deliveryDeadline}
                                                        onChange={e => setFormData({ ...formData, deliveryDeadline: e.target.value })}
                                                    />
                                                    <div className="p-4 bg-slate-100 border border-slate-200 rounded-r-2xl font-bold text-slate-600">dias úteis</div>
                                                </div>
                                                <p className="text-[10px] text-slate-400 mt-1 ml-4">Esta informação será exibida na proposta de orçamento</p>
                                            </div>
                                        )}
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {formData.status !== 'Recebido' && (
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                {!isViewMode && formData.status !== 'Recebido' && (
                                                    <div className="space-y-1 animate-in fade-in">
                                                        <label className="text-[10px] font-black text-slate-400 uppercase">Enviado para Terceiro?</label>
                                                        <AccessibleSelect
                                                            value={formData.sentToThirdParty}
                                                            onChange={(e) => setFormData({ ...formData, sentToThirdParty: e.target.value })}
                                                            options={['Não', 'Sim']}
                                                            variant="light"
                                                            label="Enviado para terceiro"
                                                        />
                                                    </div>
                                                )}
                                                {formData.status === "Em rota de entrega" && (
                                                    <div className="space-y-1 animate-in zoom-in-95">
                                                        <label className="text-[10px] font-black text-blue-600 uppercase">Rastreamento</label>
                                                        <input
                                                            placeholder="Código de Rastreio"
                                                            className={`w-full p-4 ${isViewMode ? 'bg-blue-50 cursor-not-allowed' : 'bg-blue-50'} border border-blue-100 rounded-2xl outline-none font-bold`}
                                                            value={formData.trackingCode}
                                                            onChange={isViewMode ? undefined : (e => setFormData({ ...formData, trackingCode: e.target.value }))}
                                                            readOnly={isViewMode}
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                        {formData.status === "Em rota de entrega" && (
                                            <div className="space-y-1 animate-in zoom-in-95">
                                                <label className="text-[10px] font-black text-blue-600 uppercase">Rastreamento</label>
                                                <input
                                                    placeholder="Código de Rastreio"
                                                    className={`w-full p-4 ${isViewMode ? 'bg-blue-50 cursor-not-allowed' : 'bg-blue-50'} border border-blue-100 rounded-2xl outline-none font-bold`}
                                                    value={formData.trackingCode}
                                                    onChange={isViewMode ? undefined : (e => setFormData({ ...formData, trackingCode: e.target.value }))}
                                                    readOnly={isViewMode}
                                                />
                                            </div>
                                        )}
                                    </div>
                                    {!isViewMode && formData.sentToThirdParty === "Sim" && formData.status !== 'Recebido' && (
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-slate-100 rounded-3xl border border-slate-200 animate-in slide-in-from-top-4">
                                            <input
                                                placeholder="Empresa Terceira"
                                                className={`w-full p-3 ${isViewMode ? 'bg-slate-50 cursor-not-allowed' : 'bg-white'} border rounded-xl text-sm`}
                                                value={formData.thirdPartyInfo}
                                                onChange={isViewMode ? undefined : (e => setFormData({ ...formData, thirdPartyInfo: e.target.value }))}
                                                readOnly={isViewMode}
                                            />
                                            <input
                                                placeholder="Rastreio Terceiro"
                                                className={`w-full p-3 ${isViewMode ? 'bg-slate-50 cursor-not-allowed' : 'bg-white'} border rounded-xl text-sm`}
                                                value={formData.thirdPartyTracking}
                                                onChange={isViewMode ? undefined : (e => setFormData({ ...formData, thirdPartyTracking: e.target.value }))}
                                                readOnly={isViewMode}
                                            />
                                            <input
                                                type="date"
                                                className={`w-full p-3 ${isViewMode ? 'bg-slate-50 cursor-not-allowed' : 'bg-white'} border rounded-xl text-sm`}
                                                value={formData.thirdPartyDate}
                                                onChange={isViewMode ? undefined : (e => setFormData({ ...formData, thirdPartyDate: e.target.value }))}
                                                readOnly={isViewMode}
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                            {/* Seção de Associação de OS */}
                            {!isViewMode && (
                                <div className="space-y-4 mt-6">
                                    <div className="flex items-center gap-2 text-purple-600 font-bold uppercase text-xs tracking-widest">
                                        <Link2 size={16} /> Associar OS
                                    </div>
                                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                                        <label className="text-xs font-bold text-slate-500 block mb-2">
                                            Selecione outras OS para vincular a esta (ao selecionar esta, as vinculadas serão selecionadas automaticamente):
                                        </label>
                                        <SelectLinkedOS
                                            currentOSId={editingOrder?.firestoreId}
                                            selectedIds={formData.linkedOS || []}
                                            onChange={(ids) => setFormData({ ...formData, linkedOS: ids })}
                                        />
                                        <p className="text-xs text-slate-400 mt-2">
                                            As OS vinculadas aparecerão juntas na seleção da dashboard e na impressão em lote.
                                        </p>
                                    </div>
                                </div>
                            )}

                            {/* BOTÕES DO MODAL */}
                            <div className="flex flex-col md:flex-row gap-4 pt-10 border-t">
                                {isViewMode ? (
                                    // APENAS NO VIEW MODE: Botão único para fechar
                                    <div className="w-full flex justify-center">
                                        <button
                                            type="button"
                                            onClick={() => setIsModalOpen(false)}
                                            className="px-8 py-4 bg-slate-100 text-slate-600 rounded-2xl font-black hover:bg-slate-200 transition-colors w-full max-w-xs"
                                        >
                                            Fechar
                                        </button>
                                    </div>
                                ) : (
                                    // MODO EDIÇÃO/NOVA: Todos os botões normais
                                    <>
                                        <div className="flex gap-2">
                                            <button
                                                type="button"
                                                onClick={() => setIsModalOpen(false)}
                                                className="px-6 py-5 bg-slate-100 text-slate-600 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-slate-200 transition-colors"
                                            >
                                                Cancelar
                                            </button>
                                            {editingOrder && (
                                                <>
                                                    <button
                                                        type="button"
                                                        onClick={() => handleModalPrint('client')}
                                                        className="p-5 bg-blue-50 text-blue-600 rounded-2xl hover:bg-blue-100 transition-colors border border-blue-100"
                                                        title="Imprimir Relatório do Cliente"
                                                    >
                                                        <Printer size={20} />
                                                    </button>
                                                    {userData?.role !== 'client' && (
                                                        <button
                                                            type="button"
                                                            onClick={() => handleModalPrint('internal')}
                                                            className="p-5 bg-slate-50 text-slate-600 rounded-2xl hover:bg-slate-100 transition-colors border border-slate-200"
                                                            title="Imprimir Relatório Interno"
                                                        >
                                                            <ShieldAlert size={20} />
                                                        </button>
                                                    )}
                                                </>
                                            )}
                                        </div>
                                        <div className="flex-1 flex flex-col md:flex-row gap-4">
                                            <button
                                                type="button"
                                                onClick={handleSaveAndNewWithSameClient}
                                                disabled={isSaving}
                                                className="flex-1 bg-indigo-50 text-indigo-700 border-2 border-indigo-100 p-5 rounded-2xl font-black text-xs hover:bg-indigo-100 transition-all flex items-center justify-center gap-3"
                                            >
                                                {isSaving ? <Loader2 className="animate-spin" size={18} /> : <RefreshCw size={18} />} NOVA OS COM MESMO CLIENTE
                                            </button>
                                            <button
                                                type="submit"
                                                disabled={isSaving}
                                                className="flex-1 bg-blue-600 text-white p-5 rounded-2xl font-black text-lg hover:bg-blue-700 shadow-xl shadow-blue-200 transition-all flex items-center justify-center gap-3"
                                            >
                                                {isSaving ? <Loader2 className="animate-spin" size={20} /> : <Save size={20} />} SALVAR OS
                                            </button>
                                        </div>
                                    </>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {isContractModalOpen && (
                <div
                    className="fixed inset-0 z-[60]"
                    role="dialog"
                    aria-modal="true"
                    onClick={(e) => {
                        if (e.target === e.currentTarget) setIsContractModalOpen(false);
                    }}
                >
                    <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md overflow-y-auto">
                        <div className="min-h-full flex items-start justify-center p-4 py-8">
                            <div className="bg-white rounded-[2.5rem] w-full max-w-4xl shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-200 my-8">
                                <form onSubmit={handleSaveContract} className="p-8 space-y-8">
                                    <div className="flex justify-between items-center border-b pb-6">
                                        <div>
                                            <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                                                {isContractViewMode
                                                    ? 'Visualizar Contrato'
                                                    : (isNewContractMode ? 'Novo Contrato' : 'Configurar Contrato')}
                                            </h2>
                                            <p className="text-slate-500 text-sm font-medium">
                                                {isContractViewMode ? contractForm.clientName : (isNewContractMode ? 'Preencha os dados do cliente e contrato' : contractForm.clientName)}
                                            </p>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => setIsContractModalOpen(false)}
                                            className="p-2 hover:bg-slate-100 rounded-full text-slate-400"
                                        >
                                            <X size={20} />
                                        </button>
                                    </div>

                                    <div className="space-y-8">
                                        {/* Dados do Cliente */}
                                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4">
                                            <div className="flex items-center gap-2 text-blue-600 font-bold uppercase text-xs tracking-widest mb-2">
                                                <User size={16} /> Dados do Cliente
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-bold text-slate-400 uppercase">Nome do Cliente *</label>
                                                <input
                                                    className={`w-full p-3 border rounded-xl font-bold ${isNewContractMode && !isContractViewMode ? 'bg-white border-slate-200' : 'bg-slate-100 border-slate-200 cursor-not-allowed'}`}
                                                    value={contractForm.clientName}
                                                    onChange={e => !isContractViewMode && isNewContractMode && setContractForm({ ...contractForm, clientName: e.target.value })}
                                                    placeholder="Nome da Empresa / Hospital"
                                                    readOnly={isContractViewMode || !isNewContractMode}
                                                    required
                                                />
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-bold text-slate-400 uppercase">CNPJ</label>
                                                    <input
                                                        className="w-full p-3 bg-white border border-slate-200 rounded-xl font-medium text-sm"
                                                        value={contractForm.cnpj}
                                                        onChange={e => !isContractViewMode && setContractForm({ ...contractForm, cnpj: e.target.value })}
                                                        placeholder="00.000.000/0000-00"
                                                        disabled={isContractViewMode}
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-bold text-slate-400 uppercase">Contato</label>
                                                    <input
                                                        className="w-full p-3 bg-white border border-slate-200 rounded-xl font-medium text-sm"
                                                        value={contractForm.contactPerson}
                                                        onChange={e => !isContractViewMode && setContractForm({ ...contractForm, contactPerson: e.target.value })}
                                                        placeholder="Nome do Responsável"
                                                        disabled={isContractViewMode}
                                                    />
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-bold text-slate-400 uppercase">E-mail</label>
                                                    <input
                                                        className="w-full p-3 bg-white border border-slate-200 rounded-xl font-medium text-sm"
                                                        value={contractForm.email}
                                                        onChange={e => !isContractViewMode && setContractForm({ ...contractForm, email: e.target.value })}
                                                        placeholder="financeiro@hospital.com"
                                                        disabled={isContractViewMode}
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-bold text-slate-400 uppercase">Endereço</label>
                                                    <input
                                                        className="w-full p-3 bg-white border border-slate-200 rounded-xl font-medium text-sm"
                                                        value={contractForm.address}
                                                        onChange={e => !isContractViewMode && setContractForm({ ...contractForm, address: e.target.value })}
                                                        placeholder="Rua, Número, Cidade - UF"
                                                        disabled={isContractViewMode}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                            <div className="space-y-6">
                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-bold text-slate-400 uppercase">Vigência (Início - Fim)</label>
                                                    <div className="flex gap-2">
                                                        <input
                                                            type="date"
                                                            className="w-full p-3 bg-white border border-slate-200 rounded-xl font-bold text-sm"
                                                            value={contractForm.startDate}
                                                            onChange={e => !isContractViewMode && setContractForm({ ...contractForm, startDate: e.target.value })}
                                                            required
                                                            disabled={isContractViewMode}
                                                        />
                                                        <input
                                                            type="date"
                                                            className="w-full p-3 bg-white border border-slate-200 rounded-xl font-bold text-sm"
                                                            value={contractForm.endDate}
                                                            onChange={e => !isContractViewMode && setContractForm({ ...contractForm, endDate: e.target.value })}
                                                            required
                                                            disabled={isContractViewMode}
                                                        />
                                                    </div>
                                                </div>

                                                {/* Valor Mensal - visível apenas em modo edição */}
                                                {!isContractViewMode && (
                                                    <div className="space-y-2">
                                                        <label className="text-[10px] font-bold text-slate-400 uppercase">Valor Mensal (R$)</label>
                                                        <input
                                                            className="w-full p-3 bg-white border border-slate-200 rounded-xl font-black text-slate-800"
                                                            value={contractForm.monthlyValue}
                                                            onChange={e => {
                                                                const val = e.target.value;
                                                                const numVal = parseCurrency(val);
                                                                setContractForm({
                                                                    ...contractForm,
                                                                    monthlyValue: val,
                                                                    annualValue: (numVal * 12).toLocaleString('pt-BR', { minimumFractionDigits: 2 })
                                                                });
                                                            }}
                                                            placeholder="0,00"
                                                            disabled={isContractViewMode}
                                                        />
                                                    </div>
                                                )}

                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-bold text-slate-400 uppercase">Observações</label>
                                                    <textarea
                                                        rows="3"
                                                        className="w-full p-3 bg-white border border-slate-200 rounded-xl text-sm resize-none"
                                                        value={contractForm.observations}
                                                        onChange={e => !isContractViewMode && setContractForm({ ...contractForm, observations: e.target.value })}
                                                        placeholder="Detalhes adicionais..."
                                                        disabled={isContractViewMode}
                                                    ></textarea>
                                                </div>

                                                {/* Status Ativo/Inativo */}
                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-bold text-slate-400 uppercase">Status do Contrato</label>
                                                    <div className="flex gap-2">
                                                        {[{ v: true, l: 'Ativo' }, { v: false, l: 'Inativo' }].map(({ v, l }) => (
                                                            <button
                                                                key={l}
                                                                type="button"
                                                                onClick={() => !isContractViewMode && setContractForm(p => ({ ...p, isActive: v }))}
                                                                className={`flex-1 py-2.5 rounded-xl font-bold text-sm border transition-all ${contractForm.isActive === v
                                                                    ? (v ? 'bg-green-600 text-white border-green-600' : 'bg-slate-600 text-white border-slate-600')
                                                                    : 'bg-white text-slate-500 border-slate-200 hover:border-slate-300'
                                                                    }`}
                                                                disabled={isContractViewMode}
                                                            >
                                                                {v ? '✓ ' : '✗ '}{l}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Anexos */}
                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-bold text-slate-400 uppercase">Anexos (Fotos, Documentos)</label>
                                                    {!isContractViewMode && (
                                                        <label className="flex items-center gap-2 px-4 py-3 bg-white border-2 border-dashed border-slate-300 rounded-xl cursor-pointer hover:border-blue-400 hover:bg-blue-50 transition-colors">
                                                            <Upload size={18} className="text-blue-500" />
                                                            <span className="text-sm font-bold text-slate-600">
                                                                {uploadingContractAttachments ? 'Enviando...' : 'Clique para adicionar anexos'}
                                                            </span>
                                                            <input type="file" multiple className="hidden" onChange={handleContractAttachmentUpload} disabled={uploadingContractAttachments || isContractViewMode} />
                                                        </label>
                                                    )}
                                                    {contractForm.attachments && contractForm.attachments.length > 0 && (
                                                        <div className="space-y-2">
                                                            {contractForm.attachments.map((url, idx) => {
                                                                const isImage = /\.(jpg|jpeg|png|gif|webp)/i.test(url.split('?')[0]);
                                                                const filename = decodeURIComponent(url.split('/').pop().split('?')[0]).replace(/^\d+_/, '');
                                                                return (
                                                                    <div key={idx} className="flex items-center gap-2 p-2.5 bg-blue-50 rounded-xl border border-blue-100">
                                                                        {isImage ? <ImageIcon size={14} className="text-blue-600 flex-shrink-0" /> : <FileText size={14} className="text-blue-600 flex-shrink-0" />}
                                                                        <a href={url} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-blue-700 truncate flex-1 hover:underline">{filename}</a>
                                                                        {!isContractViewMode && (
                                                                            <button type="button" onClick={() => handleContractAttachmentRemove(idx)} className="p-1 text-red-400 hover:text-red-600 rounded flex-shrink-0">
                                                                                <X size={14} />
                                                                            </button>
                                                                        )}
                                                                    </div>
                                                                );
                                                            })}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Itens Cobertos */}
                                            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4 h-fit">
                                                <div className="flex items-center gap-2 text-indigo-600 font-bold uppercase text-xs tracking-widest mb-2">
                                                    <CheckSquare size={16} /> Itens Cobertos
                                                </div>
                                                <div className="space-y-3">
                                                    {[
                                                        { key: 'videoSurgeryInstruments', label: 'Instrumentais de Vídeo Cirurgia' },
                                                        { key: 'openInstruments', label: 'Instrumentais Abertos' },
                                                        { key: 'videoSurgeryEquipment', label: 'Equipamentos de Vídeo' },
                                                        { key: 'endoscopes', label: 'Endoscópios' }
                                                    ].map(item => (
                                                        <label key={item.key} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 cursor-pointer hover:border-indigo-300 transition-colors">
                                                            <input
                                                                type="checkbox"
                                                                className="w-5 h-5 text-indigo-600 rounded border-slate-300 focus:ring-indigo-500"
                                                                checked={contractForm.coveredItems[item.key]}
                                                                onChange={e => !isContractViewMode && setContractForm({
                                                                    ...contractForm,
                                                                    coveredItems: { ...contractForm.coveredItems, [item.key]: e.target.checked }
                                                                })}
                                                                disabled={isContractViewMode}
                                                            />
                                                            <span className="text-sm font-bold text-slate-700">{item.label}</span>
                                                        </label>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-4 border-t flex justify-end gap-3">
                                        {isContractViewMode ? (
                                            <button
                                                type="button"
                                                onClick={() => setIsContractModalOpen(false)}
                                                className="px-8 py-3 bg-slate-100 text-slate-600 rounded-xl font-bold hover:bg-slate-200"
                                            >
                                                Fechar
                                            </button>
                                        ) : (
                                            <>
                                                <button
                                                    type="button"
                                                    onClick={() => setIsContractModalOpen(false)}
                                                    className="px-6 py-3 rounded-xl font-bold text-slate-500 hover:bg-slate-100"
                                                >
                                                    Cancelar
                                                </button>
                                                <button
                                                    type="submit"
                                                    disabled={isSaving}
                                                    className="px-8 py-3 bg-blue-600 text-white rounded-xl font-bold shadow-lg hover:bg-blue-700 flex items-center gap-2"
                                                >
                                                    {isSaving ? <Loader2 className="animate-spin" size={20} /> : <Save size={20} />}
                                                    Salvar Contrato
                                                </button>
                                            </>
                                        )}
                                    </div>
                                </form>
                            </div>
                        </div>
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

            {/* Modal de Condições de Pagamento */}
            <PaymentConditionsModal
                isOpen={isPaymentModalOpen}
                onClose={() => setIsPaymentModalOpen(false)}
                selectedOrdersCount={selectedOrders.length}
                totalOriginalValue={paymentModalData.totalOriginalValue}
                initialData={paymentModalData}
                onConfirm={handleConfirmPrintWithPayment}
                customOptions={customOptions}
                onAddOption={addCustomInstallmentOption}
                onDeleteOption={handleDeleteCustomOption}
                userRole={userData?.role}
                showNotification={showNotification}
            />

            <ClientPaymentModal
                isOpen={isClientPaymentModalOpen}
                onClose={() => {
                    setIsClientPaymentModalOpen(false);
                    setOrderForPayment(null);
                }}
                order={orderForPayment}
                onConfirm={handleConfirmClientPayment}
                customOptions={customOptions}
                onAddOption={addCustomInstallmentOption}
                onDeleteOption={handleDeleteCustomOption}
                userRole={userData?.role}
            />

            <HistoryModal
                isOpen={isHistoryModalOpen}
                onClose={() => {
                    setIsHistoryModalOpen(false);
                    setSelectedOrderForHistory(null);
                }}
                order={selectedOrderForHistory}
            />

            <RejectConfirmModal
                isOpen={isRejectModalOpen}
                onClose={() => {
                    setIsRejectModalOpen(false);
                    setOrderToReject(null);
                }}
                order={orderToReject}
                onConfirm={confirmRejectBudget}
            />

            {/* MODAL FORNECEDOR */}
            {isSupplierModalOpen && (
                <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-[80] flex items-center justify-center p-4">
                    <div className="bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl border border-slate-200 animate-in zoom-in-95 max-h-[90vh] overflow-y-auto">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h2 className="text-2xl font-black text-slate-900">
                                    {editingSupplier ? 'Editar Fornecedor' : 'Novo Fornecedor'}
                                </h2>
                                <p className="text-slate-500 text-sm mt-1">Dados do fornecedor / terceiro</p>
                            </div>
                            <button
                                onClick={() => setIsSupplierModalOpen(false)}
                                className="p-2 hover:bg-slate-100 rounded-full text-slate-400 transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <label className="text-xs font-bold text-slate-400 uppercase block mb-1">Nome / Empresa *</label>
                                <input
                                    className="w-full p-4 bg-white border border-slate-200 rounded-2xl outline-none font-bold focus:ring-4 focus:ring-blue-500/10 transition-all"
                                    value={supplierFormData.name}
                                    onChange={e => setSupplierFormData({ ...supplierFormData, name: e.target.value })}
                                    placeholder="Nome do fornecedor ou empresa"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-xs font-bold text-slate-400 uppercase block mb-1">CPF / CNPJ</label>
                                    <input
                                        className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none font-bold focus:ring-4 focus:ring-blue-500/10 transition-all"
                                        value={supplierFormData.cpf}
                                        onChange={e => setSupplierFormData({ ...supplierFormData, cpf: e.target.value })}
                                        placeholder="000.000.000-00"
                                    />
                                </div>
                                <div>
                                    <label className="text-xs font-bold text-slate-400 uppercase block mb-1">Responsável</label>
                                    <input
                                        className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none font-bold focus:ring-4 focus:ring-blue-500/10 transition-all"
                                        value={supplierFormData.contactPerson}
                                        onChange={e => setSupplierFormData({ ...supplierFormData, contactPerson: e.target.value })}
                                        placeholder="Nome do contato"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="text-xs font-bold text-slate-400 uppercase block mb-1">E-mail</label>
                                <input
                                    type="email"
                                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none font-bold focus:ring-4 focus:ring-blue-500/10 transition-all"
                                    value={supplierFormData.email}
                                    onChange={e => setSupplierFormData({ ...supplierFormData, email: e.target.value })}
                                    placeholder="contato@fornecedor.com"
                                />
                            </div>
                            <div>
                                <label className="text-xs font-bold text-slate-400 uppercase block mb-1">Endereço</label>
                                <input
                                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none font-bold focus:ring-4 focus:ring-blue-500/10 transition-all"
                                    value={supplierFormData.address}
                                    onChange={e => setSupplierFormData({ ...supplierFormData, address: e.target.value })}
                                    placeholder="Rua, Número, Cidade - UF"
                                />
                            </div>
                            <div>
                                <label className="text-xs font-bold text-slate-400 uppercase block mb-1">Observações</label>
                                <textarea
                                    rows={3}
                                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none font-bold focus:ring-4 focus:ring-blue-500/10 transition-all resize-none"
                                    value={supplierFormData.observations}
                                    onChange={e => setSupplierFormData({ ...supplierFormData, observations: e.target.value })}
                                    placeholder="Especialidade, condições, observações..."
                                />
                            </div>
                        </div>
                        <div className="flex gap-3 mt-6">
                            <button
                                onClick={() => setIsSupplierModalOpen(false)}
                                className="flex-1 py-4 rounded-xl font-bold text-slate-500 hover:bg-slate-100 transition-colors"
                            >
                                Cancelar
                            </button>
                            <button
                                onClick={handleSaveSupplier}
                                disabled={isSaving || !supplierFormData.name.trim()}
                                className="flex-1 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 shadow-xl shadow-blue-200 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                            >
                                {isSaving ? <Loader2 size={18} className="animate-spin" /> : <Save size={18} />}
                                Salvar Fornecedor
                            </button>
                        </div>
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