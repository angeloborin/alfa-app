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

    // separação silábica automática
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
    logoSection: {
        width: '40%',
    },
    logo: {
        width: 90,
        height: 40,
        objectFit: 'contain',
    },
    reportInfo: {
        width: '55%',
        textAlign: 'right',
    },
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
    section: {
        marginBottom: 8,
    },
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
    clientGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 8,
    },
    clientItem: {
        width: '33%',
        marginBottom: 8,
        paddingRight: 8,
    },
    clientLabel: {
        fontWeight: 'bold',
        fontSize: 7,
        color: '#666',
    },
    clientValue: {
        fontSize: 7,
        lineHeight: 1.4,
        marginTop: 1,
        hyphenationFactor: 1,
    },
    itemsTable: {
        width: '100%',
        marginTop: 8,
        marginBottom: 0,
    },
    tableHeader: {
        flexDirection: 'row',
        backgroundColor: '#f8fafc',
        borderBottomWidth: 1,
        borderBottomColor: '#e2e8f0',
        paddingVertical: 4,
    },
    tableRow: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#f1f5f9',
        paddingVertical: 4,
        minHeight: 45,
        alignItems: 'stretch',
    },
    tableCell: {
        paddingHorizontal: 3,
        fontSize: 7,
        verticalAlign: 'top',
    },
    // Larguras das colunas (Observações 15%, Valor 10%)
    cellOS: { width: '10%' },
    cell18: { width: '18%' },
    cell17: { width: '17%' },
    cell30: { width: '30%' },
    cellObs: { width: '15%' },
    cell15: { width: '10%' },

    cellOS_noValor: { width: '10%' },
    cell18_noValor: { width: '18%' },
    cell17_noValor: { width: '17%' },
    cell30_noValor: { width: '30%' },
    cellObs_noValor: { width: '25%' },

    osTag: {
        fontWeight: 'bold',
        color: '#1a56db',
        fontSize: 7,
    },
    footerArea: {
        marginTop: 20,
        paddingTop: 15,
        borderTopWidth: 1,
        borderTopColor: '#eee',
        borderTopStyle: 'solid',
    },
    signatureArea: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 8,
        alignItems: 'flex-end',
    },
    signatureBox: {
        width: '45%',
        textAlign: 'center',
    },
    signatureImage: {
        width: 110,
        height: 50,
        objectFit: 'contain',
        marginBottom: 4,
        alignSelf: 'center',
    },
    signatureLine: {
        borderTopWidth: 1,
        borderTopColor: '#333',
        borderTopStyle: 'solid',
        marginTop: 8,
        paddingTop: 6,
        width: '100%',
    },
    signatureText: {
        fontSize: 8,
        fontWeight: 'bold',
        marginTop: 2,
    },
    companyFooter: {
        marginTop: 12,
        fontSize: 7,
        color: '#666',
        textAlign: 'center',
        paddingTop: 6,
        lineHeight: 1.1,
    },
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
    termoTitulo: {
        fontSize: 8,
        fontWeight: 'bold',
        color: '#475569',
        marginBottom: 3,
    },
    termoTexto: {
        fontSize: 7,
        color: '#475569',
        marginBottom: 4,
        textAlign: 'justify',
    },
    totalOrcamento: {
        fontSize: 9,
        fontWeight: 'bold',
        color: '#166534',
        marginTop: 4,
        textAlign: 'center',
    },
    valorCell: {
        fontSize: 7,
        fontWeight: 'bold',
        color: '#166534',
        textAlign: 'right',
    },
    bold: {
        fontWeight: 'bold',
    },
    observationBox: {
        backgroundColor: '#f8fafc',
        paddingVertical: 3,
        paddingHorizontal: 3,
        borderRadius: 2,
        fontSize: 6.5,
        lineHeight: 1.2,
        minHeight: 35,
        flex: 1,
        hyphenationFactor: 1,
    },
    defectSolutionItem: {
        marginBottom: 1,
        fontSize: 6.5,
        lineHeight: 1.1,
    },
    italicText: {
        fontStyle: 'italic',
    },
    discountText: {
        fontSize: 5,
        color: '#059669',
        fontStyle: 'italic',
    },
    boldGreen: {
        fontWeight: 'bold',
        color: '#059669',
    },
    photoRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: 4,
        marginBottom: 8,
        paddingHorizontal: 3,
        width: '100%',
    },
    photoItem: {
        width: 145,
        height: 145,
        marginRight: 4,
        marginBottom: 8,
    },
    photoItemLast: {
        marginRight: 0,
    },
    photoImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: 4,
    },
    linkWrapper: {
        width: '100%',
        height: '100%',
    },
    photoCount: {
        fontSize: 7,
        color: '#666',
        fontStyle: 'italic',
        marginLeft: 4,
        alignSelf: 'center',
    },
    itemBlock: {
        width: '100%',
    },
    finalBlock: {
        width: '100%',
    },
});

const DocumentoPDF = ({ groups, printType, title, customPaymentConditions }) => {
    const formatMoney = (val) => {
        if (!val && val !== 0) return 'R$ 0,00';
        const num = typeof val === 'string' ? parseFloat(val.replace(/\./g, '').replace(',', '.')) || 0 : val;
        return `R$ ${num.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    };

    const parseCurrency = (value) => {
        if (!value) return 0;
        if (typeof value === 'number') return value;
        return parseFloat(value.toString().replace(/\./g, '').replace(',', '.')) || 0;
    };

    // Verificar se é um documento de orçamento
    const isOrcamento = title.toLowerCase().includes('orçamento') ||
        Object.values(groups).some(group =>
            group.items.some(item =>
                item.status === 'Em orçamento' || item.status === 'Aguardando aprovação'
            )
        );

    const calculateTotals = () => {
        let totalOriginal = 0;
        let totalFinal = 0;
        let hasDiscount = false;

        Object.values(groups).forEach(group => {
            group.items.forEach(item => {
                const isBudget = item.status === 'Em orçamento' || item.status === 'Aguardando aprovação';
                if (isBudget) {
                    const original = parseCurrency(item.chargedAmount);
                    const final = parseCurrency(item.finalChargedAmount) || original;
                    totalOriginal += original;
                    totalFinal += final;
                    if (final !== original) hasDiscount = true;
                }
            });
        });

        return { totalOriginal, totalFinal, hasDiscount };
    };

    // Usar valores do customPaymentConditions se fornecido (para impressão em lote)
    let totalOriginal, totalFinal, hasDiscount;
    if (customPaymentConditions) {
        totalOriginal = customPaymentConditions.originalValue;
        totalFinal = customPaymentConditions.finalChargedAmount;
        hasDiscount = totalOriginal !== totalFinal;
    } else {
        const totals = calculateTotals();
        totalOriginal = totals.totalOriginal;
        totalFinal = totals.totalFinal;
        hasDiscount = totals.hasDiscount;
    }

    // Preparar todos os itens
    const prepareAllItems = () => {
        const groupsArray = Object.values(groups);
        let allItems = [];

        groupsArray.forEach((group, groupIndex) => {
            group.items.forEach(item => {
                allItems.push({
                    ...item,
                    groupIndex,
                    client: group.header.client
                });
            });
        });

        return allItems;
    };

    const allItems = prepareAllItems();

    const firstGroup = Object.values(groups)[0];
    const headerData = firstGroup?.header || {};

    const primeiroItemOrcamento = allItems.find(item =>
        item.status === 'Em orçamento' || item.status === 'Aguardando aprovação'
    );

    const paymentCondition = customPaymentConditions?.paymentCondition ||
        primeiroItemOrcamento?.paymentCondition ||
        'À vista';

    const installments = customPaymentConditions?.installments ||
        primeiroItemOrcamento?.installments ||
        '';

    const mostrarValor = isOrcamento && printType === 'client';

    return (
        <Document>
            <Page size="A4" style={styles.page}>
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

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Dados do Cliente</Text>
                    <View style={styles.clientGrid}>
                        <View style={styles.clientItem}>
                            <Text style={styles.clientLabel}>Cliente:</Text>
                            <Text style={styles.clientValue}>{headerData.client || '---'}</Text>
                        </View>
                        <View style={styles.clientItem}>
                            <Text style={styles.clientLabel}>CNPJ:</Text>
                            <Text style={styles.clientValue}>{headerData.cnpj || '---'}</Text>
                        </View>
                        <View style={styles.clientItem}>
                            <Text style={styles.clientLabel}>Contato:</Text>
                            <Text style={styles.clientValue}>{headerData.contactPerson || '---'}</Text>
                        </View>
                        <View style={styles.clientItem}>
                            <Text style={styles.clientLabel}>E-mail:</Text>
                            <Text style={styles.clientValue}>{headerData.email || '---'}</Text>
                        </View>
                        <View style={styles.clientItem}>
                            <Text style={styles.clientLabel}>Endereço:</Text>
                            <Text style={styles.clientValue}>{headerData.address || '---'}</Text>
                        </View>
                        <View style={styles.clientItem}>
                            <Text style={styles.clientLabel}>Atendimento:</Text>
                            <Text style={styles.clientValue}>
                                {headerData.billingType} {headerData.maintenanceVisit ? `- ${headerData.maintenanceVisit}` : ''}
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Equipamentos</Text>
                    <View style={styles.itemsTable}>
                        <View style={styles.tableHeader}>
                            <View style={[styles.tableCell, mostrarValor ? styles.cellOS : styles.cellOS_noValor]}>
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

                        {allItems.map((item, index) => {
                            const defects = item.defect ? item.defect.split('\n').filter(d => d.trim()) : [];
                            const solutions = item.solution ? item.solution.split('\n').filter(s => s.trim()) : [];
                            const observation = item.equipmentObservation || '';
                            const isBudgetItem = item.status === 'Em orçamento' || item.status === 'Aguardando aprovação';
                            const validPhotos = item.photos
                                ? item.photos.filter(url => url && typeof url === 'string' && url.trim() !== '')
                                : [];

                            return (
                                <View key={`${item.groupIndex}-${index}`} style={styles.itemBlock} wrap={false}>
                                    <View style={styles.tableRow}>
                                        <View style={[styles.tableCell, mostrarValor ? styles.cellOS : styles.cellOS_noValor]}>
                                            <Text style={styles.osTag}>{item.osNumber || '---'}</Text>
                                            <Text style={{ fontSize: 6.5 }}>{item.status || '---'}</Text>
                                            {item.statusDate && (
                                                <Text style={{ fontSize: 6, color: '#666', marginTop: 2 }}>
                                                    {formatDateBR(item.statusDate)}
                                                </Text>
                                            )}
                                        </View>

                                        <View style={[styles.tableCell, mostrarValor ? styles.cell18 : styles.cell18_noValor]}>
                                            <Text style={styles.bold}>{item.item || '---'}</Text>
                                            <Text style={{ fontSize: 6.5, color: '#666' }}>
                                                {item.manufacturer || ''} {item.model || ''}
                                            </Text>
                                            <Text style={{ fontSize: 6.5, color: '#999' }}>NS: {item.serial || 'N/D'}</Text>
                                            {item.quantity && parseInt(item.quantity) > 1 && (
                                                <Text style={{ fontSize: 6.5, color: '#666' }}>Qtd: {item.quantity}</Text>
                                            )}
                                        </View>

                                        <View style={[styles.tableCell, mostrarValor ? styles.cell17 : styles.cell17_noValor]}>
                                            {defects.length > 0 ? (
                                                defects.map((d, i) => (
                                                    <Text key={i} style={styles.defectSolutionItem}>• {d}</Text>
                                                ))
                                            ) : (
                                                <Text style={{ fontSize: 6.5, color: '#999' }}>Sem defeitos</Text>
                                            )}
                                        </View>

                                        <View style={[styles.tableCell, mostrarValor ? styles.cell30 : styles.cell30_noValor]}>
                                            {solutions.length > 0 ? (
                                                solutions.map((s, i) => (
                                                    <Text key={i} style={styles.defectSolutionItem}>• {s}</Text>
                                                ))
                                            ) : (
                                                <Text style={{ fontSize: 6.5, color: '#999' }}>Solução em análise</Text>
                                            )}
                                        </View>

                                        <View style={[styles.tableCell, mostrarValor ? styles.cellObs : styles.cellObs_noValor]}>
                                            <View style={styles.observationBox}>
                                                <Text wrap>{observation || 'Sem observações'}</Text>
                                            </View>
                                        </View>

                                        {mostrarValor && (
                                            <View style={[styles.tableCell, styles.cell15]}>
                                                {isBudgetItem ? (
                                                    <Text style={styles.valorCell}>
                                                        {formatMoney(parseCurrency(item.chargedAmount))}
                                                    </Text>
                                                ) : (
                                                    <Text style={[styles.italicText, { fontSize: 6.5, color: '#999' }]}>
                                                        Não orçado
                                                    </Text>
                                                )}
                                            </View>
                                        )}
                                    </View>

                                    {validPhotos.length > 0 && (
                                        <View style={styles.photoRow}>
                                            {validPhotos.slice(0, 6).map((photoUrl, idx, arr) => (
                                                <View
                                                    key={idx}
                                                    style={[
                                                        styles.photoItem,
                                                        idx === arr.length - 1 ? styles.photoItemLast : null
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
                                    )}
                                </View>
                            );
                        })}
                    </View>
                </View>

                {isOrcamento && printType === 'client' && (
                    <View style={styles.termosSection}>
                        <Text style={styles.termoTitulo}>Garantia:</Text>
                        <Text style={styles.termoTexto}>
                            3 meses. Não está coberto por garantia os danos causados por uso inadequado, queda ou choque mecânico, acondicionamento inadequado e/ou acondicionamento fora dos padrões recomendados pelo fabricante.
                        </Text>
                        <Text style={styles.termoTitulo}>Prazo de entrega:</Text>
                        <Text style={styles.termoTexto}>
                            {primeiroItemOrcamento?.deliveryDeadline ?
                                `${primeiroItemOrcamento.deliveryDeadline} dias úteis após aprovação do orçamento` :
                                'A combinar conforme disponibilidade de peças e recursos técnicos necessários.'
                            }
                        </Text>
                        <Text style={styles.termoTitulo}>Condições de pagamento:</Text>
                        <Text style={styles.termoTexto}>
                            {paymentCondition === 'À vista' &&
                                `Pagamento à vista = ${formatMoney(totalFinal)}.`
                            }
                            {paymentCondition === 'Boleto' && (
                                <>
                                    <Text>
                                        Pagamento via boleto bancário{installments ? ` em ${installments}` : ''} = {formatMoney(totalFinal)}.
                                    </Text>
                                    {installments !== "5 dias (5% de desconto)" && (
                                        <Text>
                                            {'\n'}Boleto bancário em 5 dias = {formatMoney(totalOriginal * 0.95)}{' '}
                                            <Text>(com 5% de desconto)</Text>
                                        </Text>
                                    )}
                                </>
                            )}
                            {paymentCondition === 'Cartão' && (
                                <Text>
                                    Pagamento via cartão de crédito em {installments || '1x (30 Dias)'} = {formatMoney(totalFinal)}.
                                </Text>
                            )}
                        </Text>
                        <Text style={styles.totalOrcamento}>
                            VALOR TOTAL: {formatMoney(totalFinal)}
                        </Text>
                    </View>
                )}

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

                <Text
                    style={{
                        position: 'absolute',
                        bottom: 8,
                        right: 20,
                        fontSize: 7,
                        color: '#999',
                    }}
                    fixed
                    render={({ pageNumber, totalPages }) =>
                        `Página ${pageNumber} / ${totalPages}`
                    }
                />

            </Page>
        </Document>
    );
};

export default DocumentoPDF;