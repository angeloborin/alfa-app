import React, { useState, useEffect } from 'react';
import { 
  Plus, Search, Edit2, Trash2, Save, X, Download, FileSpreadsheet, 
  ChevronDown, Check, AlertCircle, Clock, Truck, Package, 
  Image as ImageIcon, Upload, XCircle, Building2, User, 
  MapPin, Map, Loader2, ExternalLink, CalendarCheck, Hash, 
  Wrench, Copy, CopyPlus, ChevronUp, Printer, Mail, Send 
} from 'lucide-react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, updateDoc, deleteDoc, doc, onSnapshot, setDoc } from 'firebase/firestore';
import { getAuth, signInAnonymously, onAuthStateChanged } from 'firebase/auth';

// --- CONFIGURAÇÃO DO SEU FIREBASE ---
const firebaseConfig = {
  apiKey: "AIzaSyByTLQL0dpLBB3m5nzI1Soy1p0VJpFIt1Y",
  authDomain: "alfa-sistema.firebaseapp.com",
  projectId: "alfa-sistema",
  storageBucket: "alfa-sistema.firebasestorage.app",
  messagingSenderId: "813034550369",
  appId: "1:813034550369:web:a9c7d2ed17794f81d3a620",
  measurementId: "G-RDEW2PWBKC"
};

// Inicialização do Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Identificador único para a coleção do seu sistema
const finalAppId = 'alfa-tecnologia-hospitalar-prod';

const App = () => {
  // Estados da Aplicação
  const [user, setUser] = useState(null); 
  const [orders, setOrders] = useState([]); 
  const [clients, setClients] = useState([]); 
  const [savedManufacturers, setSavedManufacturers] = useState([]);
  const [savedMaterials, setSavedMaterials] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 
  const [selectedOrders, setSelectedOrders] = useState([]); 
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingOrder, setEditingOrder] = useState(null);
  const [isSaving, setIsSaving] = useState(false); 

  const [formData, setFormData] = useState({
    osNumber: '', client: '', cnpj: '', contactPerson: '', email: '', address: '', manufacturer: '', material: '', reference: '', serial: '',
    defect: '', solution: '', billingType: 'Serviço Avulso', billingTypeDetail: '', serviceType: 'Manutenção Corretiva',
    serviceTypeDetail: '', technician: 'Angelo Borin', technicianDetail: '', preventiveVisit: '', trackingCode: '',
    collectionDate: '', sentToCenter: 'Não', repairCenter: '', returnDate: '', deliveryDate: '', status: 'Recebido',
    cost: '', price: '', notes: '', images: []
  });

  const statusOptions = [
    "Recebido", "Em inspeção", "Elaborando orçamento", "Aguardando aprovação do orçamento",
    "Em reparo", "Em rota de entrega", "Entregue"
  ];

  // Autenticação Silenciosa
  useEffect(() => {
    const initAuth = async () => {
      try {
        await signInAnonymously(auth);
      } catch (e) { console.error("Erro Auth:", e); }
    };
    initAuth();
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return () => unsubscribe();
  }, []);

  // Sincronização em Tempo Real com Firestore
  useEffect(() => {
    if (!user) return;

    // Ordens de Serviço
    const ordersRef = collection(db, 'artifacts', finalAppId, 'public', 'data', 'serviceOrders');
    const unsubscribeOrders = onSnapshot(ordersRef, (snap) => {
      const list = snap.docs.map(d => ({ firestoreId: d.id, ...d.data() }));
      list.sort((a, b) => {
          const getVal = (os) => {
              if(!os) return 0;
              const parts = os.split('/');
              if(parts.length === 2) return parseInt(parts[1]) * 10000 + parseInt(parts[0]);
              return 0;
          };
          return getVal(b.osNumber) - getVal(a.osNumber);
      });
      setOrders(list);
      setIsLoading(false);
    });

    // Clientes
    const clientsRef = collection(db, 'artifacts', finalAppId, 'public', 'data', 'clients');
    onSnapshot(clientsRef, (snap) => setClients(snap.docs.map(d => d.data()).sort((a,b) => a.name.localeCompare(b.name))));
    
    // Listas auxiliares (Fabricantes e Materiais)
    onSnapshot(collection(db, 'artifacts', finalAppId, 'public', 'data', 'manufacturers'), 
      (snap) => setSavedManufacturers(snap.docs.map(d => d.data().name).sort()));

    onSnapshot(collection(db, 'artifacts', finalAppId, 'public', 'data', 'materials'), 
      (snap) => setSavedMaterials(snap.docs.map(d => d.data().name).sort()));

    return () => unsubscribeOrders();
  }, [user]);

  // Gerador de Número de OS Sequencial
  const generateNextOsNumber = () => {
    const currentYear = new Date().getFullYear();
    const yearSuffix = `/${currentYear}`;
    const numbersThisYear = orders
      .filter(o => o.osNumber && o.osNumber.endsWith(yearSuffix))
      .map(o => parseInt(o.osNumber.split('/')[0], 10))
      .filter(n => !isNaN(n));
    const nextNum = numbersThisYear.length > 0 ? Math.max(...numbersThisYear) + 1 : 1;
    return `${String(nextNum).padStart(4, '0')}/${currentYear}`;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'client') {
        const selected = clients.find(c => c.name.toLowerCase() === value.toLowerCase());
        if (selected) {
            setFormData(prev => ({ 
              ...prev, 
              [name]: value, 
              cnpj: selected.cnpj || '', 
              contactPerson: selected.contactPerson || '', 
              email: selected.email || '', 
              address: selected.address || '' 
            }));
            return;
        }
    }
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (formData.images.length + files.length > 3) return alert("Máximo de 3 fotos.");
    files.forEach(file => {
      const reader = new FileReader();
      reader.onloadend = () => setFormData(prev => ({ ...prev, images: [...prev.images, reader.result] }));
      reader.readAsDataURL(file);
    });
  };

  const openModal = (order = null) => {
    if (order) {
      setEditingOrder(order);
      setFormData({ ...order, images: order.images || [] });
    } else {
      setEditingOrder(null);
      setFormData({
        osNumber: generateNextOsNumber(), client: '', cnpj: '', contactPerson: '', email: '', address: '', manufacturer: '', material: '', reference: '', serial: '',
        defect: '', solution: '', billingType: 'Serviço Avulso', billingTypeDetail: '', serviceType: 'Manutenção Corretiva',
        serviceTypeDetail: '', technician: 'Angelo Borin', technicianDetail: '', preventiveVisit: '', trackingCode: '',
        collectionDate: new Date().toISOString().split('T')[0], sentToCenter: 'Não', repairCenter: '', returnDate: '',
        deliveryDate: '', status: 'Recebido', cost: '', price: '', notes: '', images: []
      });
    }
    setIsModalOpen(true);
  };

  const saveOrderToDb = async (dataToSave, isEdit, firestoreId) => {
    const collRef = collection(db, 'artifacts', finalAppId, 'public', 'data', 'serviceOrders');
    if (isEdit) await updateDoc(doc(db, 'artifacts', finalAppId, 'public', 'data', 'serviceOrders', firestoreId), dataToSave);
    else await addDoc(collRef, { ...dataToSave, id: Date.now(), createdAt: new Date().toISOString() });
    
    const safeId = (t) => t.toLowerCase().replace(/[^a-z0-9]/g, '_');
    if (dataToSave.client) await setDoc(doc(db, 'artifacts', finalAppId, 'public', 'data', 'clients', safeId(dataToSave.client)), { name: dataToSave.client, cnpj: dataToSave.cnpj, contactPerson: dataToSave.contactPerson, email: dataToSave.email, address: dataToSave.address, lastUpdated: new Date().toISOString() }, { merge: true });
    if (dataToSave.manufacturer) await setDoc(doc(db, 'artifacts', finalAppId, 'public', 'data', 'manufacturers', safeId(dataToSave.manufacturer)), { name: dataToSave.manufacturer }, { merge: true });
    if (dataToSave.material) await setDoc(doc(db, 'artifacts', finalAppId, 'public', 'data', 'materials', safeId(dataToSave.material)), { name: dataToSave.material }, { merge: true });
  };

  const sendEmail = (order) => {
    if (!order.email) return alert("O cliente não possui e-mail cadastrado.");
    const subject = `Status da OS ${order.osNumber} - Alfa Tecnologia`;
    const body = `Olá ${order.contactPerson || 'Cliente'},\n\nO status da sua OS ${order.osNumber} (${order.material}) foi atualizado para: ${order.status}.\n\nAtenciosamente,\nAlfa Tecnologia Hospitalar.`;
    window.open(`mailto:${order.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    try {
      const { firestoreId, ...dataToSave } = formData;
      await saveOrderToDb(dataToSave, !!editingOrder, editingOrder?.firestoreId);
      if (editingOrder && editingOrder.status !== dataToSave.status && dataToSave.email) {
          if (confirm("Deseja notificar o cliente por e-mail sobre a mudança de status?")) sendEmail(dataToSave);
      }
      setIsModalOpen(false);
    } catch (err) { console.error(err); } finally { setIsSaving(false); }
  };

  const handlePrint = () => {
    const selected = orders.filter(o => selectedOrders.includes(o.firestoreId));
    if (!selected.length) return;
    const win = window.open('', '_blank');
    win.document.write(`
      <html><head><title>Relatório Alfa</title><style>body{font-family:sans-serif;padding:20px;font-size:12px}.header{text-align:center;border-bottom:2px solid #1a56db;padding-bottom:10px;margin-bottom:20px}.logo{width:250px}table{width:100%;border-collapse:collapse;margin-bottom:20px}td,th{border:1px solid #ddd;padding:8px}th{background:#f4f7ff;color:#1a56db}.items th{background:#1a56db;color:#fff}</style></head>
      <body>
        <div class="header">
          <svg class="logo" viewBox="0 0 400 100" xmlns="http://www.w3.org/2000/svg"><text x="50%" y="55" text-anchor="middle" font-weight="900" font-size="52" fill="#1a56db">ALFA</text><text x="50%" y="85" text-anchor="middle" font-size="18" fill="#1a56db" letter-spacing="4">TECNOLOGIA HOSPITALAR</text></svg>
          <p>RELATÓRIO DE SERVIÇOS TÉCNICOS</p>
        </div>
        ${selected.map(o => `
          <div>
            <strong>CLIENTE:</strong> ${o.client} | <strong>CNPJ:</strong> ${o.cnpj || '-'} <br>
            <strong>ENDEREÇO:</strong> ${o.address || '-'} | <strong>RESPONSÁVEL:</strong> ${o.contactPerson || '-'}
            <table class="items" style="margin-top:10px">
              <thead><tr><th>OS</th><th>Equipamento</th><th>Defeito</th><th>Solução</th></tr></thead>
              <tbody><tr><td>${o.osNumber}</td><td>${o.material} ${o.manufacturer}<br><small>Ref: ${o.reference || '-'}</small></td><td>${o.defect}</td><td>${o.solution || 'Em análise'}</td></tr></tbody>
            </table>
          </div>
        `).join('<hr style="margin:20px 0; border:0; border-top:1px dashed #ccc;">')}
        <script>window.onload=()=>window.print();</script>
      </body></html>
    `);
    win.document.close();
  };

  const filtered = orders.filter(o => o.client?.toLowerCase().includes(searchTerm.toLowerCase()) || o.osNumber?.toLowerCase().includes(searchTerm.toLowerCase()));

  const handleDelete = async (firestoreId) => {
    if (!confirm('Excluir esta Ordem de Serviço permanentemente?')) return;
    try {
      await deleteDoc(doc(db, 'artifacts', finalAppId, 'public', 'data', 'serviceOrders', firestoreId));
      setSelectedOrders(prev => prev.filter(id => id !== firestoreId));
    } catch (e) { console.error(e); }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans p-2 sm:p-4 md:p-6 lg:p-8 w-full overflow-x-hidden">
      <div className="w-full mx-auto space-y-6">
        <header className="flex flex-col sm:flex-row justify-between items-center bg-white p-4 sm:p-6 rounded-2xl shadow-sm border sticky top-4 z-10 gap-4">
          <div className="flex items-center gap-4">
            <div className="bg-blue-600 p-3 rounded-xl text-white shadow-lg shadow-blue-200"><FileSpreadsheet size={28}/></div>
            <div>
              <h1 className="text-xl md:text-2xl font-black tracking-tight text-gray-900">Alfa Tecnologia Hospitalar</h1>
              <p className="text-[10px] text-green-600 flex items-center gap-1 font-bold uppercase tracking-widest"><Check size={10} strokeWidth={4}/> Sistema Online</p>
            </div>
          </div>
          <div className="flex gap-3 w-full sm:w-auto">
            {selectedOrders.length > 0 && (
              <button onClick={handlePrint} className="flex-1 sm:flex-none bg-indigo-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100"><Printer size={18}/> Imprimir ({selectedOrders.length})</button>
            )}
            <button onClick={() => openModal()} className="flex-1 sm:flex-none bg-blue-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-lg shadow-blue-100"><Plus size={18}/> Nova OS</button>
          </div>
        </header>

        <main className="space-y-6">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" size={20}/>
            <input 
              type="text" 
              placeholder="Pesquisar por cliente, número de OS ou equipamento..." 
              className="w-full pl-12 pr-6 py-4 rounded-2xl border-2 border-transparent bg-white focus:border-blue-500 focus:ring-0 outline-none shadow-sm text-lg transition-all" 
              value={searchTerm} 
              onChange={(e) => setSearchTerm(e.target.value)} 
            />
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left border-collapse">
                <thead className="bg-gray-50/80 border-b text-[11px] font-black uppercase text-gray-500 tracking-wider">
                  <tr>
                    <th className="px-6 py-5 text-center w-12"><input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600" onChange={(e) => setSelectedOrders(e.target.checked ? filtered.map(o => o.firestoreId) : [])} checked={selectedOrders.length === filtered.length && filtered.length > 0} /></th>
                    <th className="px-6 py-5 w-40">Status</th>
                    <th className="px-6 py-5 w-32">OS</th>
                    <th className="px-6 py-5">Cliente</th>
                    <th className="px-6 py-5">Equipamento</th>
                    <th className="px-6 py-5 text-center w-32">Ações</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {isLoading ? <tr><td colSpan="6" className="py-24 text-center"><Loader2 className="animate-spin mx-auto text-blue-600 mb-2" size={32}/><p className="text-gray-400 font-medium">Carregando dados...</p></td></tr> : 
                    filtered.length === 0 ? <tr><td colSpan="6" className="py-24 text-center"><AlertCircle className="mx-auto text-gray-300 mb-2" size={32}/><p className="text-gray-400 font-medium">Nenhuma ordem encontrada.</p></td></tr> :
                    filtered.map(o => (
                      <tr key={o.firestoreId} className={`group hover:bg-blue-50/30 transition-colors ${selectedOrders.includes(o.firestoreId) ? 'bg-blue-50/50' : ''}`}>
                        <td className="px-6 py-4 text-center"><input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600" checked={selectedOrders.includes(o.firestoreId)} onChange={() => setSelectedOrders(prev => prev.includes(o.firestoreId) ? prev.filter(id => id !== o.firestoreId) : [...prev, o.firestoreId])} /></td>
                        <td className="px-6 py-4">
                          <span className="px-3 py-1 bg-white rounded-full text-[10px] font-black border-2 border-gray-100 shadow-sm text-gray-600">
                            {o.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 font-black text-blue-700 tracking-tight">{o.osNumber}</td>
                        <td className="px-6 py-4">
                          <div className="font-bold text-gray-900">{o.client}</div>
                          <div className="text-[11px] text-gray-400 font-medium flex items-center gap-1 uppercase tracking-tighter"><User size={10}/> {o.contactPerson || 'N/D'}</div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="font-bold text-gray-700">{o.material} {o.manufacturer}</div>
                          <div className="text-[11px] text-gray-400 font-mono">NS: {o.serial || '-'}</div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex justify-center gap-1">
                            {o.email && <button onClick={() => sendEmail(o)} className="p-2.5 text-blue-600 hover:bg-blue-100 rounded-xl transition-colors" title="Notificar por E-mail"><Send size={18}/></button>}
                            <button onClick={() => openModal(o)} className="p-2.5 text-gray-600 hover:bg-gray-100 rounded-xl transition-colors"><Edit2 size={18}/></button>
                            <button onClick={() => handleDelete(o.firestoreId)} className="p-2.5 text-red-600 hover:bg-red-100 rounded-xl transition-colors"><Trash2 size={18}/></button>
                          </div>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900/60 backdrop-blur-md flex items-center justify-center z-50 p-2 sm:p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl w-full max-w-5xl my-auto animate-fadeIn shadow-2xl overflow-hidden border">
            <form onSubmit={handleSubmit}>
              <div className="p-5 sm:p-6 border-b bg-gray-50/50 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-600 text-white p-2 rounded-lg"><Clock size={20}/></div>
                  <h2 className="text-xl font-black text-gray-900">Ordem de Serviço {formData.osNumber}</h2>
                </div>
                <button type="button" onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-gray-200 rounded-full transition-colors"><X size={24}/></button>
              </div>
              <div className="p-5 sm:p-8 space-y-8 max-h-[85vh] overflow-y-auto custom-scrollbar">
                
                {/* Cabeçalho Modal */}
                <div className="flex flex-col sm:flex-row gap-6 items-end">
                    <div className="w-full sm:w-48">
                      <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1 block">Número da OS</label>
                      <input required name="osNumber" value={formData.osNumber} onChange={handleInputChange} className="w-full p-3 border-2 border-gray-100 rounded-xl text-sm font-black bg-gray-50 outline-none" />
                    </div>
                    <div className="flex-1 text-right text-[11px] font-bold text-red-500 uppercase tracking-tighter">* Campos obrigatórios</div>
                </div>

                {/* Bloco Cliente */}
                <div className="bg-blue-50/30 p-6 rounded-2xl border-2 border-blue-50 space-y-5">
                  <h3 className="text-xs font-black text-blue-800 uppercase flex items-center gap-2"><Building2 size={16}/> Cliente</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    <div className="lg:col-span-2">
                      <label className="text-[10px] font-bold text-blue-700 uppercase mb-1 block">Razão Social / Empresa *</label>
                      <input required name="client" value={formData.client} onChange={handleInputChange} list="cli" className="w-full p-3 border-2 border-white rounded-xl text-sm shadow-sm focus:border-blue-400 outline-none" placeholder="Ex: Hospital Central"/>
                      <datalist id="cli">{clients.map((c, i) => <option key={i} value={c.name}/>)}</datalist>
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-blue-700 uppercase mb-1 block">CNPJ</label>
                      <input name="cnpj" value={formData.cnpj} onChange={handleInputChange} className="w-full p-3 border-2 border-white rounded-xl text-sm shadow-sm focus:border-blue-400 outline-none" placeholder="00.000.000/0000-00"/>
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-blue-700 uppercase mb-1 block">Responsável</label>
                      <input name="contactPerson" value={formData.contactPerson} onChange={handleInputChange} className="w-full p-3 border-2 border-white rounded-xl text-sm shadow-sm focus:border-blue-400 outline-none" placeholder="Nome do contato"/>
                    </div>
                    <div className="lg:col-span-2">
                      <label className="text-[10px] font-bold text-blue-700 uppercase mb-1 block">E-mail para Notificações</label>
                      <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full p-3 border-2 border-white rounded-xl text-sm shadow-sm focus:border-blue-400 outline-none" placeholder="exemplo@cliente.com"/>
                    </div>
                    <div className="lg:col-span-2">
                      <label className="text-[10px] font-bold text-blue-700 uppercase mb-1 block">Endereço Completo</label>
                      <div className="flex gap-2">
                        <input name="address" value={formData.address} onChange={handleInputChange} className="flex-1 p-3 border-2 border-white rounded-xl text-sm shadow-sm focus:border-blue-400 outline-none" placeholder="Rua, Número, Bairro..."/>
                        {formData.address && <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(formData.address)}`} target="_blank" className="bg-white p-3 rounded-xl border-2 border-white shadow-sm text-blue-600 hover:text-blue-800 transition-colors" title="Ver no Maps"><ExternalLink size={20}/></a>}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bloco Equipamento */}
                <div className="space-y-5">
                  <h3 className="text-xs font-black text-gray-400 uppercase flex items-center gap-2"><Package size={16}/> Equipamento</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
                    <div>
                      <label className="text-[10px] font-bold text-gray-500 uppercase mb-1 block">Fabricante</label>
                      <input name="manufacturer" value={formData.manufacturer} onChange={handleInputChange} list="mfr" className="w-full p-3 border-2 border-gray-100 rounded-xl text-sm focus:border-blue-400 outline-none" placeholder="Ex: GE, Philips"/>
                      <datalist id="mfr">{savedManufacturers.map((m, i) => <option key={i} value={m}/>)}</datalist>
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-gray-500 uppercase mb-1 block">Equipamento / Material *</label>
                      <input required name="material" value={formData.material} onChange={handleInputChange} list="mat" className="w-full p-3 border-2 border-gray-100 rounded-xl text-sm focus:border-blue-400 outline-none" placeholder="Ex: Monitor, Ventilador"/>
                      <datalist id="mat">{savedMaterials.map((m, i) => <option key={i} value={m}/>)}</datalist>
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-gray-500 uppercase mb-1 block">Referência / Modelo</label>
                      <input name="reference" value={formData.reference} onChange={handleInputChange} className="w-full p-3 border-2 border-gray-100 rounded-xl text-sm focus:border-blue-400 outline-none" placeholder="Ex: DASH 4000"/>
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-gray-500 uppercase mb-1 block">Nº de Série</label>
                      <input name="serial" value={formData.serial} onChange={handleInputChange} className="w-full p-3 border-2 border-gray-100 rounded-xl text-sm font-mono focus:border-blue-400 outline-none" placeholder="S/N"/>
                    </div>
                    <div className="md:col-span-2">
                      <label className="text-[10px] font-black text-gray-700 uppercase mb-1 block">Status Atual da OS</label>
                      <select name="status" value={formData.status} onChange={handleInputChange} className="w-full p-3 border-2 border-gray-100 rounded-xl text-sm bg-white font-bold text-blue-800 focus:border-blue-400 outline-none cursor-pointer">
                        {statusOptions.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                      {formData.status === 'Em rota de entrega' && (
                        <div className="mt-3 animate-fadeIn">
                          <label className="text-[10px] font-bold text-blue-600 uppercase mb-1 block flex items-center gap-1"><Truck size={12}/> Código de Rastreamento</label>
                          <input name="trackingCode" value={formData.trackingCode} onChange={handleInputChange} className="w-full p-3 border-2 border-blue-100 rounded-xl text-sm bg-blue-50 focus:border-blue-400 outline-none" placeholder="Insira o código da transportadora"/>
                        </div>
                      )}
                    </div>
                    <div className="md:col-span-2">
                      <label className="text-[10px] font-bold text-gray-500 uppercase mb-1 block">Técnico Responsável</label>
                      <select name="technician" value={formData.technician} onChange={handleInputChange} className="w-full p-3 border-2 border-gray-100 rounded-xl text-sm bg-white focus:border-blue-400 outline-none">
                          <option value="Angelo Borin">Angelo Borin</option>
                          <option value="Outros">Outros</option>
                      </select>
                      {formData.technician === 'Outros' && (
                        <input name="technicianDetail" value={formData.technicianDetail} onChange={handleInputChange} className="w-full mt-3 p-3 border-2 border-gray-100 rounded-xl text-sm focus:border-blue-400 outline-none" placeholder="Nome do Técnico"/>
                      )}
                    </div>
                  </div>
                </div>

                {/* Bloco Diagnóstico */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-5">
                    <h3 className="text-xs font-black text-gray-400 uppercase flex items-center gap-2"><Wrench size={16}/> Diagnóstico e fotos</h3>
                    <div>
                      <label className="text-[10px] font-bold text-gray-500 uppercase mb-1 block">Tipo de Serviço</label>
                      <select name="serviceType" value={formData.serviceType} onChange={handleInputChange} className="w-full p-3 border-2 border-gray-100 rounded-xl text-sm bg-white focus:border-blue-400 outline-none">
                          <option>Manutenção Corretiva</option>
                          <option>Manutenção Preventiva</option>
                          <option>Não passível de conserto</option>
                      </select>
                      {formData.serviceType === 'Não passível de conserto' && (
                          <div className="mt-3 p-4 bg-red-50 rounded-2xl border-2 border-red-100 animate-fadeIn">
                            <label className="text-[10px] font-black text-red-800 uppercase mb-2 block">Recomendação Final</label>
                            <select name="serviceTypeDetail" value={formData.serviceTypeDetail} onChange={handleInputChange} className="w-full p-2 border-2 border-red-200 rounded-xl text-sm bg-white text-red-700 outline-none">
                                <option value="">Selecione recomendação...</option>
                                <option>Conserto em bancada</option>
                                <option>Necessário substituir por novo</option>
                            </select>
                          </div>
                      )}
                    </div>

                    <div className="bg-gray-100/50 p-5 rounded-2xl border-2 border-dashed border-gray-300">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-xs font-black text-gray-500 uppercase tracking-widest flex items-center gap-2"><ImageIcon size={14}/> Fotos anexadas ({formData.images.length}/3)</span>
                        {formData.images.length < 3 && (
                          <label className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase cursor-pointer flex items-center gap-2 transition-colors shadow-lg shadow-blue-100">
                            <Upload size={14}/> Enviar Foto 
                            <input type="file" accept="image/*" multiple onChange={handleImageUpload} className="hidden"/>
                          </label>
                        )}
                      </div>
                      <div className="grid grid-cols-3 gap-3">
                        {formData.images.map((img, idx) => (
                          <div key={idx} className="relative aspect-square rounded-xl overflow-hidden border-2 border-white shadow-sm group">
                            <img src={img} className="w-full h-full object-cover" alt={`Anexo ${idx + 1}`} />
                            <button type="button" onClick={() => setFormData(prev => ({ ...prev, images: prev.images.filter((_, i) => i !== idx) }))} className="absolute inset-0 bg-red-600/80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                              <Trash2 size={24} />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-5">
                    <h3 className="text-xs font-black text-gray-400 uppercase flex items-center gap-2"><AlertCircle size={16}/> Relatório Técnico</h3>
                    <div>
                      <label className="text-[10px] font-bold text-gray-500 uppercase mb-1 block">Defeito Identificado *</label>
                      <textarea required name="defect" value={formData.defect} onChange={handleInputChange} className="w-full p-4 border-2 border-gray-100 rounded-2xl text-sm focus:border-blue-400 outline-none resize-none" placeholder="Sintomas relatados..." rows="4"/>
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-gray-500 uppercase mb-1 block">Solução Técnica</label>
                      <textarea name="solution" value={formData.solution} onChange={handleInputChange} className="w-full p-4 border-2 border-gray-100 rounded-2xl text-sm focus:border-blue-400 outline-none resize-none" placeholder="Procedimentos realizados..." rows="4"/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 sm:p-8 border-t bg-gray-50/80 flex flex-col sm:flex-row justify-end gap-4 rounded-b-3xl">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-8 py-3 text-sm font-black text-gray-500 hover:text-gray-700 transition-colors uppercase tracking-widest order-2 sm:order-1">Cancelar</button>
                <button type="submit" disabled={isSaving} className="px-10 py-4 bg-blue-600 text-white rounded-2xl text-sm font-black shadow-xl shadow-blue-200 flex items-center justify-center gap-3 hover:bg-blue-700 active:scale-95 transition-all uppercase tracking-widest order-1 sm:order-2">
                    {isSaving ? <Loader2 className="animate-spin" size={20}/> : <Save size={20}/>} Salvar Ordem
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      
      <style>{`
        /* AJUSTE PARA OCUPAR TELA TODA NO VITE */
        #root {
          max-width: 100% !important;
          width: 100% !important;
          margin: 0 !important;
          padding: 0 !important;
        }
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; }
        @keyframes fadeIn { from { opacity: 0; transform: scale(0.98); } to { opacity: 1; transform: scale(1); } }
        .animate-fadeIn { animation: fadeIn 0.2s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default App;