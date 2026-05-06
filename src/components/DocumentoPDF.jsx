import React from 'react';
import {
    Document,
    Page,
    View,
    Text,
    StyleSheet,
    Image,
    Font,
    Link,
} from '@react-pdf/renderer';

import Hypher from "hypher";
import pt from "hyphenation.pt";

import logo from '../assets/logo.png';
import assinatura from '../assets/assinatura.jpg';

// cria o hifenizador em português
const hypher = new Hypher(pt);

try {
    Font.register({
        family: 'Helvetica',
        fonts: [
            { src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf', fontWeight: 300 },
            { src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.ttf', fontWeight: 400 },
            { src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf', fontWeight: 500 },
            { src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-bold-webfont.ttf', fontWeight: 700 },
        ],
    });

    Font.registerHyphenationCallback((word) => {
        return hypher.hyphenate(word);
    });
} catch (e) {
    console.log('Font registration failed:', e);
}

const formatDateBR = (dateString) => {
    if (!dateString) return '';
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
};

// ─── STATUS DE ORÇAMENTO (deve espelhar exatamente os valores do MainApp) ────
const BUDGET_STATUSES = [
    'Em orçamento',
    'Aguardando aprovação',          // valor real salvo no Firestore
    'Aguardando aprovação do orçamento', // legado — mantido para compatibilidade
];
const isBudgetStatus = (status) => BUDGET_STATUSES.includes(status);

const styles = StyleSheet.create({
    page: {
        padding: 25,
        fontSize: 9,
        fontFamily: 'Helvetica',
        flexDirection: 'column',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
        paddingBottom: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#1a56db',
        borderBottomStyle: 'solid',
    },
    logoSection: { width: '40%' },
    logo: { width: 90, height: 40, objectFit: 'contain' },
    reportInfo: { width: '55%', textAlign: 'right' },
    reportTitle: {
        fontSize: 11,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 3,
        textTransform: 'uppercase',
    },
    internalBadge: {
        backgroundColor: '#b91c1c',
        color: 'white',
        padding: '2 4',
        fontSize: 7,
        borderRadius: 2,
        fontWeight: 'bold',
        marginBottom: 3,
    },
    section: { marginBottom: 8 },
    sectionTitle: {
        backgroundColor: '#f1f5f9',
        padding: '4 8',
        fontSize: 8,
        fontWeight: 'bold',
        marginBottom: 6,
        color: '#1e40af',
        borderLeftWidth: 3,
        borderLeftColor: '#1a56db',
        borderLeftStyle: 'solid',
    },
    clientGrid: { flexDirection: 'row', flexWrap: 'wrap', marginBottom: 8 },
    clientItem: { width: '33%', marginBottom: 8, paddingRight: 8 },
    clientLabel: { fontWeight: 'bold', fontSize: 7, color: '#666' },
    clientValue: { fontSize: 7, lineHeight: 1.4, marginTop: 1, hyphenationFactor: 1 },
    itemsTable: { width: '100%', marginTop: 8, marginBottom: 0 },
    tableHeader: {
        flexDirection: 'row',
        backgroundColor: '#f8fafc',
        borderBottomWidth: 1,
        borderBottomColor: '#e2e8f0',
        paddingVertical: 4,
    },

    // ── LINHA DA TABELA ──────────────────────────────────────────────────────
    // Removidos alignItems:'stretch' e minHeight fixo para que a linha cresça
    // conforme o conteúdo mais alto (especialmente a coluna de Observações).
    tableRow: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#f1f5f9',
        paddingVertical: 4,
        // sem minHeight para não suprimir crescimento natural
        // sem alignItems para não forçar stretch que conflita com texto longo
    },

    tableCell: { paddingHorizontal: 3, fontSize: 7 },

    // Larguras com valor (Obs=15%, Valor=10%)
    cellOS:  { width: '10%' },
    cell18:  { width: '18%' },
    cell17:  { width: '17%' },
    cell30:  { width: '30%' },
    cellObs: { width: '15%' },
    cell15:  { width: '10%' },

    // Larguras sem valor (Obs=25%)
    cellOS_noValor:  { width: '10%' },
    cell18_noValor:  { width: '18%' },
    cell17_noValor:  { width: '17%' },
    cell30_noValor:  { width: '30%' },
    cellObs_noValor: { width: '25%' },

    osTag: { fontWeight: 'bold', color: '#1a56db', fontSize: 7 },

    // ── CAIXA DE OBSERVAÇÃO ─────────────────────────────────────────────────
    // Removido flex:1 (controlava largura, não altura em contexto de row).
    // Mantida apenas decoração visual; a altura cresce com o conteúdo.
    observationBox: {
        backgroundColor: '#f8fafc',
        paddingVertical: 3,
        paddingHorizontal: 3,
        borderRadius: 2,
        fontSize: 6.5,
        lineHeight: 1.3,
        hyphenationFactor: 1,
    },

    defectSolutionItem: { marginBottom: 1, fontSize: 6.5, lineHeight: 1.1 },
    italicText:  { fontStyle: 'italic' },
    bold:        { fontWeight: 'bold' },
    discountText:{ fontSize: 5, color: '#059669', fontStyle: 'italic' },
    boldGreen:   { fontWeight: 'bold', color: '#059669' },
    valorCell:   { fontSize: 7, fontWeight: 'bold', color: '#166534', textAlign: 'right' },

    // ── FOTOS ──────────────────────────────────────────────────────────────
    photoRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: 6,
        marginBottom: 8,
        paddingHorizontal: 3,
        width: '100%',
    },
    photoItem: { width: 145, height: 145, marginRight: 4, marginBottom: 8 },
    photoItemLast: { marginRight: 0 },
    photoImage: { width: '100%', height: '100%', objectFit: 'cover', borderRadius: 4 },
    linkWrapper: { width: '100%', height: '100%' },
    photoCount: { fontSize: 7, color: '#666', fontStyle: 'italic', marginLeft: 4, alignSelf: 'center' },

    // ── BLOCO POR ITEM ─────────────────────────────────────────────────────
    // wrap={false} na tableRow garante que a linha não quebre no meio.
    // As fotos ficam num bloco separado para que possam ser paginadas
    // independentemente se o bloco de linha + fotos não couber na página.
    itemRowBlock:  { width: '100%' },
    itemPhotoBlock:{ width: '100%' },
    finalBlock:    { width: '100%' },

    // ── TERMOS ─────────────────────────────────────────────────────────────
    termosSection: {
        marginTop: 10,
        padding: 8,
        backgroundColor: '#f8fafc',
        borderWidth: 1,
        borderColor: '#e2e8f0',
        borderRadius: 3,
        fontSize: 7,
        lineHeight: 1.2,
        marginBottom: 15,
    },
    termoTitulo: { fontSize: 8, fontWeight: 'bold', color: '#475569', marginBottom: 3 },
    termoTexto:  { fontSize: 7, color: '#475569', marginBottom: 4, textAlign: 'justify' },
    totalOrcamento: {
        fontSize: 9, fontWeight: 'bold', color: '#166534', marginTop: 4, textAlign: 'center',
    },

    // ── RODAPÉ ─────────────────────────────────────────────────────────────
    footerArea: {
        marginTop: 20,
        paddingTop: 15,
        borderTopWidth: 1,
        borderTopColor: '#eee',
        borderTopStyle: 'solid',
    },
    signatureArea: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 8, alignItems: 'flex-end' },
    signatureBox:  { width: '45%', textAlign: 'center' },
    signatureImage:{ width: 110, height: 50, objectFit: 'contain', marginBottom: 4, alignSelf: 'center' },
    signatureLine: {
        borderTopWidth: 1, borderTopColor: '#333', borderTopStyle: 'solid',
        marginTop: 8, paddingTop: 6, width: '100%',
    },
    signatureText: { fontSize: 8, fontWeight: 'bold', marginTop: 2 },
    companyFooter: {
        marginTop: 12, fontSize: 7, color: '#666', textAlign: 'center',
        paddingTop: 6, lineHeight: 1.1,
    },
});

// ─── PARSE CURRENCY ROBUSTO ────────────────────────────────────────────────
// Suporta: number | 'R$ 1.500,00' | '1.500,00' | '1500.00' | '0' | null
const parseCurrencyRobust = (value) => {
    if (value === null || value === undefined || value === '') return 0;
    if (typeof value === 'number') return isNaN(value) ? 0 : value;

    const str = String(value)
        .trim()
        .replace(/^R\$\s*/i, '')   // remove prefixo "R$"
        .replace(/\s/g, '');        // remove espaços internos

    // Formato brasileiro: 1.500,00 — ponto como milhar, vírgula como decimal
    if (/^\d{1,3}(\.\d{3})*,\d{0,2}$/.test(str)) {
        return parseFloat(str.replace(/\./g, '').replace(',', '.')) || 0;
    }

    // Formato brasileiro sem milhar: 1500,00
    if (/^\d+,\d{0,2}$/.test(str)) {
        return parseFloat(str.replace(',', '.')) || 0;
    }

    // Formato US/neutro: 1500.00 ou 1500
    return parseFloat(str.replace(',', '')) || 0;
};

// ─── SOMA SEGURA ───────────────────────────────────────────────────────────
const safeAdd = (acc, val) => {
    const n = parseCurrencyRobust(val);
    return acc + (isNaN(n) ? 0 : n);
};

// ─── COMPONENTE ────────────────────────────────────────────────────────────
const DocumentoPDF = ({ groups, printType, title, customPaymentConditions }) => {
    const formatMoney = (val) => {
        if (val === null || val === undefined) return 'R$ 0,00';
        const num = parseCurrencyRobust(val);
        return `R$ ${num.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    };

    // ── Detectar se é orçamento ──────────────────────────────────────────
    const isOrcamento =
        title.toLowerCase().includes('orçamento') ||
        Object.values(groups).some(group =>
            group.items.some(item => isBudgetStatus(item.status))
        );

    // ── Calcular totais (sem customPaymentConditions) ────────────────────
    const calculateTotals = () => {
        let totalOriginal = 0;
        let totalFinal    = 0;

        Object.values(groups).forEach(group => {
            group.items.forEach(item => {
                if (!isBudgetStatus(item.status)) return;

                const original = parseCurrencyRobust(item.chargedAmount);
                // finalChargedAmount pode ser 0 (desconto 100%) — verificar explicitamente
                const hasFinal =
                    item.finalChargedAmount !== undefined &&
                    item.finalChargedAmount !== null &&
                    item.finalChargedAmount !== '';
                const final = hasFinal ? parseCurrencyRobust(item.finalChargedAmount) : original;

                totalOriginal = safeAdd(totalOriginal, original);
                totalFinal    = safeAdd(totalFinal, final);
            });
        });

        return {
            totalOriginal,
            totalFinal,
            hasDiscount: Math.abs(totalFinal - totalOriginal) > 0.001,
        };
    };

    // ── Resolver totais ──────────────────────────────────────────────────
    let totalOriginal, totalFinal, hasDiscount;
    if (customPaymentConditions) {
        totalOriginal = parseCurrencyRobust(customPaymentConditions.originalValue);
        totalFinal    = parseCurrencyRobust(customPaymentConditions.finalChargedAmount);
        hasDiscount   = Math.abs(totalFinal - totalOriginal) > 0.001;
    } else {
        ({ totalOriginal, totalFinal, hasDiscount } = calculateTotals());
    }

    // ── Preparar lista de itens ──────────────────────────────────────────
    const allItems = Object.values(groups).flatMap((group, groupIndex) =>
        group.items.map(item => ({ ...item, groupIndex, client: group.header.client }))
    );

    const firstGroup  = Object.values(groups)[0];
    const headerData  = firstGroup?.header || {};

    const primeiroItemOrcamento = allItems.find(item => isBudgetStatus(item.status));

    const paymentCondition =
        customPaymentConditions?.paymentCondition ||
        primeiroItemOrcamento?.paymentCondition ||
        'À vista';

    const installments =
        customPaymentConditions?.installments ||
        primeiroItemOrcamento?.installments ||
        '';

    const mostrarValor = isOrcamento && printType === 'client';

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                {/* CABEÇALHO */}
                <View style={styles.header}>
                    <View style={styles.logoSection}>
                        <Image src={logo} style={styles.logo} />
                    </View>
                    <View style={styles.reportInfo}>
                        {printType === 'internal' && (
                            <Text style={styles.internalBadge}>USO INTERNO - CONFIDENCIAL</Text>
                        )}
                        <Text style={styles.reportTitle}>{title}</Text>
                        <Text style={{ fontSize: 7, color: '#666' }}>
                            Data: {new Date().toLocaleDateString('pt-BR')}
                        </Text>
                    </View>
                </View>

                {/* DADOS DO CLIENTE */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Dados do Cliente</Text>
                    <View style={styles.clientGrid}>
                        {[
                            ['Cliente',      headerData.client],
                            ['CNPJ',         headerData.cnpj],
                            ['Contato',      headerData.contactPerson],
                            ['E-mail',       headerData.email],
                            ['Endereço',     headerData.address],
                            ['Atendimento',  [headerData.billingType, headerData.maintenanceVisit].filter(Boolean).join(' - ')],
                        ].map(([label, value]) => (
                            <View key={label} style={styles.clientItem}>
                                <Text style={styles.clientLabel}>{label}:</Text>
                                <Text style={styles.clientValue}>{value || '---'}</Text>
                            </View>
                        ))}
                    </View>
                </View>

                {/* TABELA DE EQUIPAMENTOS */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Equipamentos</Text>
                    <View style={styles.itemsTable}>

                        {/* Cabeçalho da tabela */}
                        <View style={styles.tableHeader}>
                            <View style={[styles.tableCell, mostrarValor ? styles.cellOS  : styles.cellOS_noValor]}>
                                <Text style={styles.bold}>OS</Text>
                            </View>
                            <View style={[styles.tableCell, mostrarValor ? styles.cell18 : styles.cell18_noValor]}>
                                <Text style={styles.bold}>Equipamento</Text>
                            </View>
                            <View style={[styles.tableCell, mostrarValor ? styles.cell17 : styles.cell17_noValor]}>
                                <Text style={styles.bold}>Defeito</Text>
                            </View>
                            <View style={[styles.tableCell, mostrarValor ? styles.cell30 : styles.cell30_noValor]}>
                                <Text style={styles.bold}>Solução</Text>
                            </View>
                            <View style={[styles.tableCell, mostrarValor ? styles.cellObs : styles.cellObs_noValor]}>
                                <Text style={styles.bold}>Observações</Text>
                            </View>
                            {mostrarValor && (
                                <View style={[styles.tableCell, styles.cell15]}>
                                    <Text style={styles.bold}>Valor (R$)</Text>
                                </View>
                            )}
                        </View>

                        {/* Linhas de itens */}
                        {allItems.map((item, index) => {
                            const defects     = item.defect   ? item.defect.split('\n').filter(d => d.trim())   : [];
                            const solutions   = item.solution ? item.solution.split('\n').filter(s => s.trim()) : [];
                            const observation = (item.equipmentObservation || '').trim();
                            const isBudgetItem = isBudgetStatus(item.status);

                            const validPhotos = (item.photos || []).filter(
                                url => url && typeof url === 'string' && url.trim() !== ''
                            );

                            return (
                                // ── Cada item é dois blocos independentes ────────────────────
                                // itemRowBlock com wrap={false} garante que a linha (por maior
                                // que seja a observação) não quebra no meio de uma célula.
                                // itemPhotoBlock separado permite que as fotos sejam paginadas
                                // normalmente se não couberem na mesma página.
                                <View key={`item-${item.groupIndex}-${index}`}>
                                    <View style={styles.itemRowBlock} wrap={false}>
                                        <View style={styles.tableRow}>
                                            {/* OS / Status / Data */}
                                            <View style={[styles.tableCell, mostrarValor ? styles.cellOS : styles.cellOS_noValor]}>
                                                <Text style={styles.osTag}>{item.osNumber || '---'}</Text>
                                                <Text style={{ fontSize: 6.5 }}>{item.status || '---'}</Text>
                                                {item.statusDate && (
                                                    <Text style={{ fontSize: 6, color: '#666', marginTop: 2 }}>
                                                        {formatDateBR(item.statusDate)}
                                                    </Text>
                                                )}
                                            </View>

                                            {/* Equipamento */}
                                            <View style={[styles.tableCell, mostrarValor ? styles.cell18 : styles.cell18_noValor]}>
                                                <Text style={styles.bold}>{item.item || '---'}</Text>
                                                <Text style={{ fontSize: 6.5, color: '#666' }}>
                                                    {[item.manufacturer, item.model].filter(Boolean).join(' ')}
                                                </Text>
                                                <Text style={{ fontSize: 6.5, color: '#999' }}>NS: {item.serial || 'N/D'}</Text>
                                                {item.quantity && parseInt(item.quantity) > 1 && (
                                                    <Text style={{ fontSize: 6.5, color: '#666' }}>Qtd: {item.quantity}</Text>
                                                )}
                                            </View>

                                            {/* Defeito */}
                                            <View style={[styles.tableCell, mostrarValor ? styles.cell17 : styles.cell17_noValor]}>
                                                {defects.length > 0
                                                    ? defects.map((d, i) => (
                                                        <Text key={i} style={styles.defectSolutionItem}>• {d}</Text>
                                                    ))
                                                    : <Text style={{ fontSize: 6.5, color: '#999' }}>Sem defeitos</Text>
                                                }
                                            </View>

                                            {/* Solução */}
                                            <View style={[styles.tableCell, mostrarValor ? styles.cell30 : styles.cell30_noValor]}>
                                                {solutions.length > 0
                                                    ? solutions.map((s, i) => (
                                                        <Text key={i} style={styles.defectSolutionItem}>• {s}</Text>
                                                    ))
                                                    : <Text style={{ fontSize: 6.5, color: '#999' }}>Solução em análise</Text>
                                                }
                                            </View>

                                            {/* Observações — cresce livremente com o texto */}
                                            <View style={[styles.tableCell, mostrarValor ? styles.cellObs : styles.cellObs_noValor]}>
                                                <View style={styles.observationBox}>
                                                    <Text wrap>
                                                        {observation || 'Sem observações'}
                                                    </Text>
                                                </View>
                                            </View>

                                            {/* Valor */}
                                            {mostrarValor && (
                                                <View style={[styles.tableCell, styles.cell15]}>
                                                    {isBudgetItem ? (
                                                        <Text style={styles.valorCell}>
                                                            {formatMoney(item.chargedAmount)}
                                                        </Text>
                                                    ) : (
                                                        <Text style={[styles.italicText, { fontSize: 6.5, color: '#999' }]}>
                                                            Não orçado
                                                        </Text>
                                                    )}
                                                </View>
                                            )}
                                        </View>
                                    </View>

                                    {/* Fotos em bloco separado — podem paginar de forma independente */}
                                    {validPhotos.length > 0 && (
                                        <View style={styles.itemPhotoBlock} wrap={false}>
                                            <View style={styles.photoRow}>
                                                {validPhotos.slice(0, 6).map((photoUrl, idx, arr) => (
                                                    <View
                                                        key={idx}
                                                        style={[
                                                            styles.photoItem,
                                                            idx === arr.length - 1 ? styles.photoItemLast : null,
                                                        ]}
                                                    >
                                                        <Link src={photoUrl} style={styles.linkWrapper}>
                                                            <Image src={photoUrl} style={styles.photoImage} />
                                                        </Link>
                                                    </View>
                                                ))}
                                                {validPhotos.length > 6 && (
                                                    <Text style={styles.photoCount}>
                                                        +{validPhotos.length - 6} foto(s)
                                                    </Text>
                                                )}
                                            </View>
                                        </View>
                                    )}
                                </View>
                            );
                        })}
                    </View>
                </View>

                {/* TERMOS DO ORÇAMENTO */}
                {isOrcamento && printType === 'client' && (
                    <View style={styles.termosSection}>
                        <Text style={styles.termoTitulo}>Garantia:</Text>
                        <Text style={styles.termoTexto}>
                            3 meses. Não está coberto por garantia os danos causados por uso inadequado,
                            queda ou choque mecânico, acondicionamento inadequado e/ou acondicionamento
                            fora dos padrões recomendados pelo fabricante.
                        </Text>

                        <Text style={styles.termoTitulo}>Prazo de entrega:</Text>
                        <Text style={styles.termoTexto}>
                            {primeiroItemOrcamento?.deliveryDeadline
                                ? `${primeiroItemOrcamento.deliveryDeadline} dias úteis após aprovação do orçamento`
                                : 'A combinar conforme disponibilidade de peças e recursos técnicos necessários.'}
                        </Text>

                        <Text style={styles.termoTitulo}>Condições de pagamento:</Text>
                        <Text style={styles.termoTexto}>
                            {paymentCondition === 'À vista' && (
                                `Pagamento à vista = ${formatMoney(totalFinal)}.`
                            )}
                            {paymentCondition === 'Boleto' && (
                                `Pagamento via boleto bancário${installments ? ` em ${installments}` : ''} = ${formatMoney(totalFinal)}.${
                                    installments !== '5 dias (5% de desconto)'
                                        ? `\nBoleto bancário em 5 dias = ${formatMoney(totalOriginal * 0.95)} (com 5% de desconto)`
                                        : ''
                                }`
                            )}
                            {paymentCondition === 'Cartão' && (
                                `Pagamento via cartão de crédito em ${installments || '1x (30 Dias)'} = ${formatMoney(totalFinal)}.`
                            )}
                        </Text>

                        <Text style={styles.totalOrcamento}>
                            VALOR TOTAL: {formatMoney(totalFinal)}
                        </Text>
                    </View>
                )}

                {/* RODAPÉ */}
                <View style={styles.footerArea}>
                    <View style={styles.signatureArea}>
                        <View style={styles.signatureBox}>
                            <Image src={assinatura} style={styles.signatureImage} />
                            <View style={styles.signatureLine} />
                            <Text style={styles.signatureText}>Consultor Técnico</Text>
                            <Text style={{ fontSize: 7 }}>Angelo Borin</Text>
                        </View>
                        <View style={styles.signatureBox}>
                            <View style={{ height: 50, marginBottom: 4 }} />
                            <View style={styles.signatureLine} />
                            <Text style={styles.signatureText}>Cliente / Recebedor</Text>
                            <Text style={{ fontSize: 7, color: '#999' }}>Nome e assinatura</Text>
                        </View>
                    </View>
                    <View style={styles.companyFooter}>
                        <Text style={styles.bold}>Alfa Tecnologia Hospitalar - CNPJ: 50.993.453/0001-34</Text>
                        <Text>(55) 9 9137-9413 - alfa.manutencaosm@gmail.com</Text>
                        <Text>Endereço: Travessa Moreira, 125 - CEP: 97070-540 - Bairro: Duque de Caxias, Santa Maria/ RS</Text>
                    </View>
                </View>

                {/* Paginação */}
                <Text
                    style={{ position: 'absolute', bottom: 8, right: 20, fontSize: 7, color: '#999' }}
                    fixed
                    render={({ pageNumber, totalPages }) => `Página ${pageNumber} / ${totalPages}`}
                />
            </Page>
        </Document>
    );
};

export default DocumentoPDF;