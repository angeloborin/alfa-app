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
import assinatura from '../assets/assinatura.jpg';

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
        marginBottom: 0,
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
    // Ajustando larguras para acomodar nova coluna de valor
    cell8: { width: '8%' },    // OS (reduzida)
    cell22: { width: '22%' },  // Equipamento (reduzida)
    cell18: { width: '18%' },  // Defeito (reduzida)
    cell18w: { width: '18%' }, // Solução (reduzida)
    cell16: { width: '16%' },  // Observações (reduzida)
    cell18v: { width: '18%' }, // Valor (nova coluna)
    osTag: {
        fontFamily: 'Helvetica-Bold',
        color: '#1a56db',
        fontSize: 8,
    },
    // Área de rodapé
    footerArea: {
        position: 'absolute',
        bottom: 40,
        left: 25,
        right: 25,
        paddingTop: 20,
        borderTopWidth: 1,
        borderTopColor: '#eee',
        borderTopStyle: 'solid',
    },
    signatureArea: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
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
        marginTop: 15,
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
    pageCounter: {
        position: 'absolute',
        bottom: 15,
        right: 25,
        fontSize: 8,
        color: '#666',
        fontFamily: 'Helvetica',
    },
    // Espaçamento flexível
    spacer: {
        flexGrow: 1,
    },
    // NOVOS ESTILOS PARA ORÇAMENTO
    orcamentoInfo: {
        marginTop: 15,
        padding: 10,
        backgroundColor: '#f0f9ff',
        borderWidth: 1,
        borderColor: '#bae6fd',
        borderRadius: 4,
        fontSize: 8,
        lineHeight: 1.3,
    },
    orcamentoTitulo: {
        fontSize: 9,
        fontFamily: 'Helvetica-Bold',
        color: '#0369a1',
        marginBottom: 6,
    },
    orcamentoValorItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 3,
        fontSize: 8,
    },
    orcamentoTotal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
        paddingTop: 5,
        borderTopWidth: 1,
        borderTopColor: '#cbd5e1',
        borderTopStyle: 'solid',
        fontSize: 9,
        fontFamily: 'Helvetica-Bold',
        color: '#166534',
    },
    termosSection: {
        marginTop: 10,
        padding: 10,
        backgroundColor: '#f8fafc',
        borderWidth: 1,
        borderColor: '#e2e8f0',
        borderRadius: 4,
        fontSize: 8,
        lineHeight: 1.3,
    },
    termoTitulo: {
        fontSize: 9,
        fontFamily: 'Helvetica-Bold',
        color: '#475569',
        marginBottom: 4,
    },
    termoTexto: {
        fontSize: 8,
        color: '#475569',
        marginBottom: 5,
        textAlign: 'justify',
    },
    valorCell: {
        fontSize: 8,
        fontFamily: 'Helvetica-Bold',
        color: '#166534',
        textAlign: 'right',
    },
    totalOrcamento: {
        fontSize: 10,
        fontFamily: 'Helvetica-Bold',
        color: '#166534',
        marginTop: 5,
        textAlign: 'center',
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

    // Verificar se é um documento de orçamento
    const isOrcamento = title.toLowerCase().includes('orçamento') ||
        Object.values(groups).some(group =>
            group.items.some(item =>
                item.status === 'Em orçamento' || item.status === 'Aguardando aprovação do orçamento'
            )
        );

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

    // Preparar todos os itens
    const prepareAllItems = () => {
        const groupsArray = Object.values(groups);
        let allItems = [];

        groupsArray.forEach((group, groupIndex) => {
            // Adiciona os itens do grupo
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

    // Função de distribuição SIMPLES
    const distributeItems = (items) => {
        const totalItems = items.length;

        if (totalItems <= 8) {
            return [items];
        }

        const pages = [];

        // Primeira página: 8 itens (com cabeçalho)
        const firstPageItems = Math.min(8, totalItems);
        pages.push(items.slice(0, firstPageItems));

        let remainingItems = items.slice(firstPageItems);

        // Demais páginas: 12 itens cada (mais espaço)
        const itemsPerOtherPage = 12;

        while (remainingItems.length > 0) {
            const pageItems = remainingItems.slice(0, itemsPerOtherPage);
            pages.push(pageItems);
            remainingItems = remainingItems.slice(itemsPerOtherPage);
        }

        return pages;
    };

    const allItems = prepareAllItems();
    const totalBudgetValue = calculateTotalBudget();
    const pages = distributeItems(allItems);
    const totalPages = pages.length;

    // Contar itens orçados
    const budgetItemsCount = allItems.filter(item =>
        item.status === 'Em orçamento' || item.status === 'Aguardando aprovação do orçamento'
    ).length;

    // Pegar o primeiro grupo para dados do cliente
    const firstGroup = Object.values(groups)[0];
    const headerData = firstGroup?.header || {};

    // Pegar informações do primeiro item em orçamento para prazo de entrega
    const primeiroItemOrcamento = allItems.find(item =>
        item.status === 'Em orçamento' || item.status === 'Aguardando aprovação do orçamento'
    );

    // Determinar condições de pagamento
    const paymentCondition = customPaymentConditions?.paymentCondition ||
        primeiroItemOrcamento?.paymentCondition ||
        'À vista';

    const installments = customPaymentConditions?.installments ||
        primeiroItemOrcamento?.installments ||
        '';

    const discount5Days = customPaymentConditions?.discount5Days ||
        primeiroItemOrcamento?.discount5Days ||
        false;

    return (
        <Document>
            {pages.map((pageItems, pageIndex) => {
                const isFirstPage = pageIndex === 0;
                const isLastPage = pageIndex === pages.length - 1;

                return (
                    <Page key={pageIndex} size="A4" style={styles.page}>
                        {/* Cabeçalho - APENAS na primeira página */}
                        {isFirstPage && (
                            <>
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

                                {/* Dados do Cliente - APENAS na primeira página */}
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
                            </>
                        )}

                        {/* Equipamentos */}
                        <View style={styles.section}>
                            <Text style={styles.sectionTitle}>Equipamentos</Text>
                            <View style={styles.itemsTable}>
                                <View style={styles.tableHeader}>
                                    <View style={[styles.tableCell, styles.cell8]}>
                                        <Text style={styles.bold}>OS</Text>
                                    </View>
                                    <View style={[styles.tableCell, styles.cell22]}>
                                        <Text style={styles.bold}>Equipamento</Text>
                                    </View>
                                    <View style={[styles.tableCell, styles.cell18]}>
                                        <Text style={styles.bold}>Defeito</Text>
                                    </View>
                                    <View style={[styles.tableCell, styles.cell18w]}>
                                        <Text style={styles.bold}>Solução</Text>
                                    </View>
                                    <View style={[styles.tableCell, styles.cell16]}>
                                        <Text style={styles.bold}>Observações</Text>
                                    </View>
                                    {/* Nova coluna para valor - APENAS em orçamentos */}
                                    {isOrcamento && printType === 'client' && (
                                        <View style={[styles.tableCell, styles.cell18v]}>
                                            <Text style={styles.bold}>Valor (R$)</Text>
                                        </View>
                                    )}
                                </View>

                                {pageItems.map((item, index) => {
                                    const defects = item.defect ? item.defect.split('\n').filter(d => d.trim()) : [];
                                    const solutions = item.solution ? item.solution.split('\n').filter(s => s.trim()) : [];
                                    const observation = item.equipmentObservation || '';

                                    // Calcular valor para este item (apenas para orçamentos)
                                    const valorItem = (isOrcamento && printType === 'client') ?
                                        (item.finalChargedAmount ? parseCurrency(item.finalChargedAmount) : parseCurrency(item.chargedAmount)) :
                                        0;

                                    const isBudgetItem = item.status === 'Em orçamento' || item.status === 'Aguardando aprovação do orçamento';

                                    return (
                                        <View key={`${item.groupIndex}-${index}`} style={styles.tableRow}>
                                            <View style={[styles.tableCell, styles.cell8]}>
                                                <Text style={styles.osTag}>{item.osNumber || '---'}</Text>
                                                <Text style={{ fontSize: 7 }}>{item.status || '---'}</Text>
                                            </View>

                                            <View style={[styles.tableCell, styles.cell22]}>
                                                <Text style={styles.bold}>{item.item || '---'}</Text>
                                                <Text style={{ fontSize: 7, color: '#666' }}>
                                                    {item.manufacturer || ''} {item.model || ''}
                                                </Text>
                                                <Text style={{ fontSize: 7, color: '#999' }}>NS: {item.serial || 'N/D'}</Text>
                                                {item.quantity && parseInt(item.quantity) > 1 && (
                                                    <Text style={{ fontSize: 7, color: '#666' }}>Qtd: {item.quantity}</Text>
                                                )}
                                            </View>

                                            <View style={[styles.tableCell, styles.cell18]}>
                                                {defects.length > 0 ? (
                                                    defects.map((d, i) => (
                                                        <Text key={i} style={styles.defectSolutionItem}>• {d}</Text>
                                                    ))
                                                ) : (
                                                    <Text style={{ fontSize: 7, color: '#999' }}>Sem defeitos</Text>
                                                )}
                                            </View>

                                            <View style={[styles.tableCell, styles.cell18w]}>
                                                {solutions.length > 0 ? (
                                                    solutions.map((s, i) => (
                                                        <Text key={i} style={styles.defectSolutionItem}>• {s}</Text>
                                                    ))
                                                ) : (
                                                    <Text style={{ fontSize: 7, color: '#999' }}>Solução em análise</Text>
                                                )}
                                            </View>

                                            <View style={[styles.tableCell, styles.cell16]}>
                                                {observation ? (
                                                    <View style={styles.observationBox}>
                                                        <Text style={{ fontSize: 7 }}>{observation}</Text>
                                                    </View>
                                                ) : (
                                                    <Text style={{ fontSize: 7, color: '#999' }}>Sem observações</Text>
                                                )}
                                            </View>

                                            {/* Nova célula para valor - APENAS em orçamentos */}
                                            {isOrcamento && printType === 'client' && (
                                                <View style={[styles.tableCell, styles.cell18v]}>
                                                    {isBudgetItem ? (
                                                        <Text style={styles.valorCell}>
                                                            {formatMoney(valorItem)}
                                                        </Text>
                                                    ) : (
                                                        <Text style={{ fontSize: 7, color: '#999', fontStyle: 'italic' }}>
                                                            Não orçado
                                                        </Text>
                                                    )}
                                                </View>
                                            )}
                                        </View>
                                    );
                                })}
                            </View>
                        </View>

                        {/* Seção de termos e condições (APENAS na última página para orçamentos) */}
                        {isLastPage && isOrcamento && printType === 'client' && (
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
                                    {paymentCondition === 'À vista' ? 'Pagamento à vista.' : ''}
                                    {paymentCondition === 'Boleto' ? `Pagamento via boleto bancário${installments ? ` em ${installments}` : ''}.` : ''}
                                    {paymentCondition === 'Cartão' ? `Pagamento via cartão de crédito em ${installments || '1x'}.` : ''}
                                    {discount5Days ? ' Desconto de 5% para pagamento em até 5 dias úteis.' : ''}
                                </Text>

                                <Text style={styles.totalOrcamento}>
                                    VALOR TOTAL: {formatMoney(totalBudgetValue)}
                                </Text>
                            </View>
                        )}

                        {/* Espaço flexível para empurrar o rodapé para baixo na última página */}
                        {isLastPage && <View style={styles.spacer} />}

                        {/* Rodapé com assinaturas - APENAS na última página */}
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
                                        <Text style={{ fontSize: 8, color: '#999' }}>Nome e assinatura</Text>
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
                        <Text style={styles.pageCounter}>
                            Página {pageIndex + 1} de {totalPages}
                        </Text>
                    </Page>
                );
            })}
        </Document>
    );
};

export default DocumentoPDF;