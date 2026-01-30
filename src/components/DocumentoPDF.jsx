import React from 'react';
import {
    Document,
    Page,
    View,
    Text,
    StyleSheet,
    Image,
} from '@react-pdf/renderer';

// Importar imagens localmente
import logo from '../assets/logo.png';
import assinatura from '../assets/assinatura.jpeg';

// Não use fontes externas - apenas fontes padrão do PDF
const styles = StyleSheet.create({
    page: {
        padding: 25,
        fontSize: 9,
        fontFamily: 'Helvetica',
        position: 'relative',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        paddingBottom: 12,
        borderBottomWidth: 2,
        borderBottomColor: '#1a56db',
        borderBottomStyle: 'solid',
    },
    logoSection: {
        width: '40%',
    },
    logo: {
        width: 100,
        height: 45,
        objectFit: 'contain',
    },
    reportInfo: {
        width: '55%',
        textAlign: 'right',
    },
    reportTitle: {
        fontSize: 12,
        fontFamily: 'Helvetica-Bold',
        color: '#333',
        marginBottom: 4,
        textTransform: 'uppercase',
    },
    internalBadge: {
        backgroundColor: '#b91c1c',
        color: 'white',
        padding: '2 6',
        fontSize: 8,
        borderRadius: 3,
        fontFamily: 'Helvetica-Bold',
        marginBottom: 5,
    },
    section: {
        marginBottom: 12,
    },
    sectionTitle: {
        backgroundColor: '#f1f5f9',
        padding: '5 10',
        fontSize: 9,
        fontFamily: 'Helvetica-Bold',
        marginBottom: 8,
        color: '#1e40af',
        borderLeftWidth: 4,
        borderLeftColor: '#1a56db',
        borderLeftStyle: 'solid',
    },
    clientGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 10,
    },
    clientItem: {
        width: '33%',
        marginBottom: 6,
    },
    clientLabel: {
        fontFamily: 'Helvetica-Bold',
        fontSize: 8,
        color: '#666',
    },
    clientValue: {
        fontSize: 8,
    },
    itemsTable: {
        width: '100%',
        marginTop: 10,
        marginBottom: 20,
    },
    tableHeader: {
        flexDirection: 'row',
        backgroundColor: '#f8fafc',
        borderBottomWidth: 1,
        borderBottomColor: '#e2e8f0',
        paddingVertical: 5,
    },
    tableRow: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#f1f5f9',
        paddingVertical: 6,
    },
    tableCell: {
        paddingHorizontal: 4,
        fontSize: 8,
        verticalAlign: 'top',
    },
    cell10: { width: '10%' },
    cell25: { width: '25%' },
    cell20: { width: '20%' },
    cell25w: { width: '25%' },
    osTag: {
        fontFamily: 'Helvetica-Bold',
        color: '#1a56db',
        fontSize: 8,
    },
    // Área de rodapé (apenas última página)
    footerArea: {
        marginTop: 30,
        paddingTop: 20,
        borderTopWidth: 1,
        borderTopColor: '#eee',
        borderTopStyle: 'solid',
    },
    signatureArea: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        alignItems: 'flex-end',
    },
    signatureBox: {
        width: '45%',
        textAlign: 'center',
    },
    signatureImage: {
        width: 120,
        height: 60,
        objectFit: 'contain',
        marginBottom: 5,
        alignSelf: 'center',
    },
    signatureLine: {
        borderTopWidth: 1,
        borderTopColor: '#333',
        borderTopStyle: 'solid',
        marginTop: 10,
        paddingTop: 8,
        width: '100%',
    },
    signatureText: {
        fontSize: 9,
        fontFamily: 'Helvetica-Bold',
        marginTop: 2,
    },
    companyFooter: {
        marginTop: 25,
        fontSize: 8,
        color: '#666',
        textAlign: 'center',
        paddingTop: 8,
        lineHeight: 1.2,
    },
    valorSection: {
        marginTop: 10,
        padding: 10,
        backgroundColor: '#f0fdf4',
        borderLeftWidth: 3,
        borderLeftColor: '#10b981',
        borderLeftStyle: 'solid',
        borderRadius: 4,
        fontSize: 8,
        lineHeight: 1.3,
    },
    valorDestaque: {
        fontSize: 14,
        fontFamily: 'Helvetica-Bold',
        color: '#166534',
        textAlign: 'center',
        marginVertical: 8,
    },
    bold: {
        fontFamily: 'Helvetica-Bold',
    },
    observationBox: {
        backgroundColor: '#f8fafc',
        padding: 4,
        borderRadius: 2,
        fontSize: 7,
        lineHeight: 1.2,
    },
    defectSolutionItem: {
        marginBottom: 1,
        fontSize: 7,
        lineHeight: 1.1,
    },
    // Contador de páginas
    pageCounter: {
        position: 'absolute',
        bottom: 15,
        right: 25,
        fontSize: 8,
        color: '#666',
        fontFamily: 'Helvetica',
    },
    // Espaçamento extra para página única
    singlePageSpacing: {
        flex: 1,
        minHeight: 200,
    },
});

const DocumentoPDF = ({ groups, printType, title, customPaymentConditions }) => {
    const formatMoney = (val) => {
        if (!val) return 'R$ 0,00';
        const num = typeof val === 'string' ? parseFloat(val.replace(/\./g, '').replace(',', '.')) || 0 : val;
        return `R$ ${num.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    };

    const parseCurrency = (value) => {
        if (!value) return 0;
        if (typeof value === 'number') return value;
        return parseFloat(value.toString().replace(/\./g, '').replace(',', '.')) || 0;
    };

    const calculateTotalValue = (groupItems) => {
        const budgetItems = groupItems.filter(item =>
            item.status === 'Em orçamento' || item.status === 'Aguardando aprovação do orçamento'
        );
        
        if (customPaymentConditions) {
            return customPaymentConditions.finalChargedAmount;
        }
        
        let total = 0;
        budgetItems.forEach(item => {
            const valor = item.finalChargedAmount ?
                parseCurrency(item.finalChargedAmount) :
                parseCurrency(item.chargedAmount);
            total += valor;
        });
        return total;
    };

    // Juntar todos os itens de todos os grupos em uma única lista
    const getAllItems = () => {
        const groupsArray = Object.values(groups);
        let allItems = [];
        
        groupsArray.forEach((group, groupIndex) => {
            // Adiciona um marcador de início de grupo
            allItems.push({ 
                isGroupHeader: true, 
                groupData: group,
                groupIndex: groupIndex 
            });
            
            // Adiciona os itens do grupo
            group.items.forEach(item => {
                allItems.push({ ...item, groupIndex });
            });
        });
        
        return allItems;
    };

    // Calcular total de orçamentos
    const calculateTotalBudget = () => {
        const groupsArray = Object.values(groups);
        let total = 0;
        
        groupsArray.forEach(group => {
            const budgetItems = group.items.filter(item =>
                item.status === 'Em orçamento' || item.status === 'Aguardando aprovação do orçamento'
            );
            
            budgetItems.forEach(item => {
                const valor = item.finalChargedAmount ?
                    parseCurrency(item.finalChargedAmount) :
                    parseCurrency(item.chargedAmount);
                total += valor;
            });
        });
        
        return total;
    };

    // Distribuir itens de forma inteligente
    const distributeItems = (items) => {
        const totalItems = items.length;
        
        // Se tiver 15 ou menos itens (incluindo headers), tudo em uma página
        if (totalItems <= 15) {
            return [items];
        }
        
        // Contar quantos itens cabem por página (considerando espaço do header na primeira)
        const itemsPerFirstPage = 12; // Menos porque tem header
        const itemsPerOtherPage = 16; // Mais porque não tem header
        
        const pages = [];
        let currentPage = [];
        let currentPageIndex = 0;
        let itemsAdded = 0;
        
        for (let i = 0; i < totalItems; i++) {
            const item = items[i];
            
            // Se for primeira página e já tiver muitos itens, ou se for outras páginas e já tiver limite
            if ((currentPageIndex === 0 && currentPage.length >= itemsPerFirstPage) ||
                (currentPageIndex > 0 && currentPage.length >= itemsPerOtherPage)) {
                pages.push(currentPage);
                currentPage = [];
                currentPageIndex++;
            }
            
            currentPage.push(item);
            itemsAdded++;
            
            // Se for o último item, fecha a página
            if (i === totalItems - 1) {
                pages.push(currentPage);
            }
        }
        
        // Otimização: se última página tiver muito poucos itens, redistribui
        if (pages.length >= 2) {
            const lastPage = pages[pages.length - 1];
            const secondLastPage = pages[pages.length - 2];
            
            // Se última página tiver menos de 4 itens, junta com a anterior
            if (lastPage.length < 4 && secondLastPage.length + lastPage.length <= 20) {
                pages[pages.length - 2] = [...secondLastPage, ...lastPage];
                pages.pop();
            }
        }
        
        return pages;
    };

    const allItems = getAllItems();
    const totalBudgetValue = calculateTotalBudget();
    const pages = distributeItems(allItems);
    const totalPages = pages.length;
    
    // Contar itens orçados
    const budgetItemsCount = allItems.filter(item => 
        !item.isGroupHeader && 
        (item.status === 'Em orçamento' || item.status === 'Aguardando aprovação do orçamento')
    ).length;
    
    // Pegar o primeiro grupo para dados do cliente (assumindo que todos os grupos são do mesmo cliente)
    const firstGroup = Object.values(groups)[0];
    const headerData = firstGroup?.header || {};

    return (
        <Document>
            {pages.map((pageItems, pageIndex) => {
                const isFirstPage = pageIndex === 0;
                const isLastPage = pageIndex === pages.length - 1;

                return (
                    <Page key={pageIndex} size="A4" style={styles.page}>
                        {/* Cabeçalho - APENAS na primeira página */}
                        {isFirstPage && (
                            <View style={styles.header}>
                                <View style={styles.logoSection}>
                                    <Image 
                                        src={logo}
                                        style={styles.logo}
                                    />
                                </View>
                                <View style={styles.reportInfo}>
                                    {printType === 'internal' && (
                                        <Text style={styles.internalBadge}>USO INTERNO - CONFIDENCIAL</Text>
                                    )}
                                    <Text style={styles.reportTitle}>{title}</Text>
                                    <Text style={{ fontSize: 8, color: '#666' }}>
                                        Data: {new Date().toLocaleDateString('pt-BR')}
                                    </Text>
                                </View>
                            </View>
                        )}

                        {/* Dados do Cliente - APENAS na primeira página */}
                        {isFirstPage && (
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
                        )}

                        {/* Valor da Proposta - APENAS na primeira página */}
                        {isFirstPage && budgetItemsCount > 0 && printType === 'client' && (
                            <View style={styles.valorSection}>
                                <Text style={styles.bold}>VALOR TOTAL DA PROPOSTA</Text>
                                <Text style={styles.valorDestaque}>
                                    {formatMoney(totalBudgetValue)}
                                </Text>
                                <Text style={{ marginBottom: 4 }}>
                                    <Text style={styles.bold}>Itens em orçamento:</Text> {budgetItemsCount}
                                </Text>
                                <Text style={{ marginBottom: 4 }}>
                                    <Text style={styles.bold}>Condições:</Text> {customPaymentConditions ?
                                        `${customPaymentConditions.paymentCondition}${customPaymentConditions.installments ? ` ${customPaymentConditions.installments}` : ''}` :
                                        `${headerData.paymentCondition || 'À vista'}${headerData.installments ? ` ${headerData.installments}` : ''}`
                                    }
                                </Text>
                                {customPaymentConditions?.discount5Days && (
                                    <Text style={{ marginBottom: 4 }}>
                                        <Text style={styles.bold}>Desconto:</Text> 5% para pagamento em 5 dias
                                    </Text>
                                )}
                            </View>
                        )}

                        {/* Equipamentos */}
                        <View style={styles.section}>
                            <Text style={styles.sectionTitle}>Equipamentos</Text>
                            <View style={styles.itemsTable}>
                                <View style={styles.tableHeader}>
                                    <View style={[styles.tableCell, styles.cell10]}>
                                        <Text style={styles.bold}>OS</Text>
                                    </View>
                                    <View style={[styles.tableCell, styles.cell25]}>
                                        <Text style={styles.bold}>Equipamento</Text>
                                    </View>
                                    <View style={[styles.tableCell, styles.cell20]}>
                                        <Text style={styles.bold}>Defeito</Text>
                                    </View>
                                    <View style={[styles.tableCell, styles.cell20]}>
                                        <Text style={styles.bold}>Solução</Text>
                                    </View>
                                    <View style={[styles.tableCell, styles.cell25w]}>
                                        <Text style={styles.bold}>Observações</Text>
                                    </View>
                                </View>

                                {pageItems.map((item, index) => {
                                    // Se for header de grupo, mostra separador
                                    if (item.isGroupHeader) {
                                        return (
                                            <View key={`group-${item.groupIndex}`} style={[styles.tableRow, { backgroundColor: '#f8fafc', paddingVertical: 4 }]}>
                                                <View style={[styles.tableCell, { width: '100%' }]}>
                                                </View>
                                            </View>
                                        );
                                    }

                                    const defects = item.defect ? item.defect.split('\n').filter(d => d.trim()) : [];
                                    const solutions = item.solution ? item.solution.split('\n').filter(s => s.trim()) : [];
                                    const observation = item.equipmentObservation || '';

                                    return (
                                        <View key={`${item.groupIndex}-${index}`} style={styles.tableRow}>
                                            <View style={[styles.tableCell, styles.cell10]}>
                                                <Text style={styles.osTag}>{item.osNumber || '---'}</Text>
                                                <Text style={{ fontSize: 7 }}>{item.status || '---'}</Text>
                                            </View>
                                            
                                            <View style={[styles.tableCell, styles.cell25]}>
                                                <Text style={styles.bold}>{item.item || '---'}</Text>
                                                <Text style={{ fontSize: 7, color: '#666' }}>
                                                    {item.manufacturer || ''} {item.model || ''}
                                                </Text>
                                                <Text style={{ fontSize: 7, color: '#999' }}>NS: {item.serial || 'N/D'}</Text>
                                                {item.quantity && parseInt(item.quantity) > 1 && (
                                                    <Text style={{ fontSize: 7, color: '#666' }}>Qtd: {item.quantity}</Text>
                                                )}
                                            </View>
                                            
                                            <View style={[styles.tableCell, styles.cell20]}>
                                                {defects.length > 0 ? (
                                                    defects.map((d, i) => (
                                                        <Text key={i} style={styles.defectSolutionItem}>• {d}</Text>
                                                    ))
                                                ) : (
                                                    <Text style={{ fontSize: 7, color: '#999' }}>Sem defeitos</Text>
                                                )}
                                            </View>
                                            
                                            <View style={[styles.tableCell, styles.cell20]}>
                                                {solutions.length > 0 ? (
                                                    solutions.map((s, i) => (
                                                        <Text key={i} style={styles.defectSolutionItem}>• {s}</Text>
                                                    ))
                                                ) : (
                                                    <Text style={{ fontSize: 7, color: '#999' }}>Solução em análise</Text>
                                                )}
                                            </View>
                                            
                                            <View style={[styles.tableCell, styles.cell25w]}>
                                                {observation ? (
                                                    <View style={styles.observationBox}>
                                                        <Text style={{ fontSize: 7 }}>{observation}</Text>
                                                    </View>
                                                ) : (
                                                    <Text style={{ fontSize: 7, color: '#999' }}>Sem observações</Text>
                                                )}
                                            </View>
                                        </View>
                                    );
                                })}
                            </View>
                        </View>

                        {/* Espaçamento extra para última página se tiver poucos itens */}
                        {isLastPage && pageItems.filter(item => !item.isGroupHeader).length <= 8 && (
                            <View style={styles.singlePageSpacing} />
                        )}

                        {/* Rodapé (assinaturas + empresa) - APENAS na última página */}
                        {isLastPage && (
                            <View style={styles.footerArea}>
                                <View style={styles.signatureArea}>
                                    <View style={styles.signatureBox}>
                                        <Image 
                                            src={assinatura}
                                            style={styles.signatureImage}
                                        />
                                        <View style={styles.signatureLine} />
                                        <Text style={styles.signatureText}>Consultor Técnico</Text>
                                        <Text style={{ fontSize: 8 }}>Angelo Borin</Text>
                                    </View>
                                    
                                    <View style={styles.signatureBox}>
                                        <View style={{ height: 60, marginBottom: 5 }} />
                                        <View style={styles.signatureLine} />
                                        <Text style={styles.signatureText}>Cliente / Recebedor</Text>
                                    </View>
                                </View>

                                <View style={styles.companyFooter}>
                                    <Text style={styles.bold}>Alfa Tecnologia Hospitalar - CNPJ: 50.993.453/0001-34</Text>
                                    <Text>(55) 9 9137-9413 - alfa.manutencaosm@gmail.com</Text>
                                    <Text>Endereço: Travessa Moreira, 125 - CEP: 97070-540 - Bairro: Duque de Caxias, Santa Maria/ RS</Text>
                                </View>
                            </View>
                        )}

                        {/* Contador de páginas - Em todas as páginas */}
                        <Text style={styles.pageCounter} render={({ pageNumber, totalPages }) => (
                            `Página ${pageNumber} de ${totalPages}`
                        )} fixed />
                    </Page>
                );
            })}
        </Document>
    );
};

export default DocumentoPDF;