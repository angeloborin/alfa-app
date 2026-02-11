const functions = require('firebase-functions');
const admin = require('firebase-admin');
const sgMail = require('@sendgrid/mail');

// Inicializar admin SDK
admin.initializeApp();

// Configurar SendGrid com as configurações do Firebase
const sendgridConfig = functions.config().sendgrid;
sgMail.setApiKey(sendgridConfig.key);

const adminEmail = functions.config().admin.email;
const fromEmail = sendgridConfig.from;

console.log('SendGrid configurado com:', { 
    fromEmail, 
    adminEmail,
    hasKey: !!sendgridConfig.key 
});

// Função principal: dispara quando uma OS é atualizada
exports.onBudgetApproved = functions.firestore
    .document('artifacts/{appId}/public/data/serviceOrders/{orderId}')
    .onUpdate(async (change, context) => {
        try {
            const newData = change.after.data();
            const previousData = change.before.data();
            
            console.log('📋 Evento disparado:', {
                appId: context.params.appId,
                orderId: context.params.orderId,
                novoStatus: newData.status,
                statusAnterior: previousData.status,
                osNumber: newData.osNumber
            });

            // Verificar se o status mudou para "Em manutenção"
            if (newData.status === 'Em manutenção' && previousData.status !== 'Em manutenção') {
                
                console.log(`✅ Status mudou para "Em manutenção" para OS ${newData.osNumber}`);
                
                // Verificar se foi um cliente que aprovou
                if (newData.clientUid || newData.clientEmail) {
                    
                    console.log(`📧 Preparando e-mail para OS ${newData.osNumber}`);
                    
                    // Dados para o e-mail
                    const orderData = {
                        osNumber: newData.osNumber || 'N/D',
                        client: newData.client || 'Cliente não informado',
                        clientEmail: newData.email || newData.clientEmail || 'Email não informado',
                        item: newData.item || 'Equipamento não informado',
                        chargedAmount: newData.finalChargedAmount || newData.chargedAmount || 0,
                        paymentCondition: newData.paymentCondition || 'À vista',
                        installments: newData.installments || '',
                        approvalDate: newData.statusDate || new Date().toISOString().split('T')[0]
                    };

                    // Enviar e-mail para o administrador
                    await sendApprovalEmailToAdmin(orderData);
                    
                    console.log(`✅ E-mail enviado para ${adminEmail} sobre OS ${orderData.osNumber}`);
                } else {
                    console.log('⚠️  OS atualizada para "Em manutenção", mas sem clientUid/clientEmail');
                }
            }

            return null;
        } catch (error) {
            console.error('❌ Erro ao processar aprovação de orçamento:', error);
            return null;
        }
    });

// Função para enviar e-mail ao administrador
async function sendApprovalEmailToAdmin(orderData) {
    const msg = {
        to: adminEmail,
        from: {
            email: fromEmail,
            name: 'Sistema de OS - Alfa Tecnologia'
        },
        subject: `✅ Orçamento Aprovado - OS ${orderData.osNumber}`,
        html: `
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body { 
                        font-family: Arial, sans-serif; 
                        line-height: 1.6; 
                        color: #333; 
                        max-width: 600px; 
                        margin: 0 auto; 
                        padding: 20px; 
                    }
                    .header { 
                        background: #1a56db; 
                        color: white; 
                        padding: 20px; 
                        text-align: center; 
                        border-radius: 8px 8px 0 0; 
                    }
                    .content { 
                        background: #f9fafb; 
                        padding: 20px; 
                        border: 1px solid #e5e7eb; 
                    }
                    .info-box { 
                        background: white; 
                        border: 1px solid #d1d5db; 
                        border-radius: 6px; 
                        padding: 15px; 
                        margin: 10px 0; 
                    }
                    .label { 
                        font-weight: bold; 
                        color: #4b5563; 
                    }
                    .value { 
                        color: #111827; 
                    }
                    .highlight { 
                        color: #1a56db; 
                        font-weight: bold; 
                    }
                    .footer { 
                        text-align: center; 
                        padding: 15px; 
                        color: #6b7280; 
                        font-size: 12px; 
                        border-top: 1px solid #e5e7eb; 
                        margin-top: 20px; 
                    }
                    .test-notice {
                        background: #fef3c7;
                        border: 1px solid #fbbf24;
                        border-radius: 6px;
                        padding: 10px;
                        margin: 10px 0;
                        text-align: center;
                    }
                </style>
            </head>
            <body>
                <div class="header">
                    <h1 style="margin:0;">✅ Orçamento Aprovado</h1>
                    <p style="margin:5px 0 0 0;">Novo orçamento aprovado pelo cliente</p>
                </div>
                
                <div class="content">
                    <div class="test-notice">
                        <strong>⚠️ ESTE É UM E-MAIL DE TESTE ⚠️</strong><br>
                        Sistema em fase de desenvolvimento
                    </div>
                    
                    <h2 style="color:#1a56db;">OS ${orderData.osNumber}</h2>
                    
                    <div class="info-box">
                        <h3 style="margin-top:0;">📋 Informações da OS</h3>
                        <p><span class="label">Cliente:</span> <span class="value">${orderData.client}</span></p>
                        <p><span class="label">E-mail do Cliente:</span> <span class="value">${orderData.clientEmail}</span></p>
                        <p><span class="label">Equipamento:</span> <span class="value">${orderData.item}</span></p>
                        <p><span class="label">Data de Aprovação:</span> <span class="value">${orderData.approvalDate}</span></p>
                    </div>
                    
                    <div class="info-box">
                        <h3 style="margin-top:0;">💰 Detalhes Financeiros</h3>
                        <p><span class="label">Valor Aprovado:</span> <span class="highlight">R$ ${parseFloat(orderData.chargedAmount).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span></p>
                        <p><span class="label">Condição de Pagamento:</span> <span class="value">${orderData.paymentCondition}</span></p>
                        ${orderData.installments ? `<p><span class="label">Parcelas:</span> <span class="value">${orderData.installments}</span></p>` : ''}
                    </div>
                    
                    <p><em>Esta é uma notificação automática. A OS já foi movida para "Em manutenção".</em></p>
                </div>
                
                <div class="footer">
                    <p>Sistema de Gestão de OS - Alfa Tecnologia Hospitalar</p>
                    <p>© ${new Date().getFullYear()} - Este é um e-mail automático, não responda.</p>
                </div>
            </body>
            </html>
        `
    };
    
    try {
        console.log('📤 Enviando e-mail para:', adminEmail);
        const result = await sgMail.send(msg);
        console.log('✅ E-mail enviado com sucesso:', result[0].statusCode);
        return result;
    } catch (error) {
        console.error('❌ Erro ao enviar e-mail:', error);
        if (error.response) {
            console.error('Detalhes do erro:', error.response.body);
        }
        throw error;
    }
}

// Função HTTP de teste
exports.sendTestEmail = functions.https.onRequest(async (req, res) => {
    try {
        console.log('🔄 Teste de e-mail solicitado');
        
        const testData = {
            osNumber: 'TEST-001/2024',
            client: 'Cliente Teste',
            clientEmail: 'cliente.teste@email.com',
            item: 'Equipamento de Teste',
            chargedAmount: 1234.56,
            paymentCondition: 'Boleto',
            installments: '30/60 dias',
            approvalDate: new Date().toISOString().split('T')[0]
        };

        await sendApprovalEmailToAdmin(testData);
        
        console.log('✅ Teste de e-mail concluído com sucesso');
        res.status(200).send({ 
            success: true, 
            message: '✅ E-mail de teste enviado com sucesso!',
            to: adminEmail,
            from: fromEmail
        });
    } catch (error) {
        console.error('❌ Erro no teste de e-mail:', error);
        res.status(500).send({ 
            success: false, 
            error: error.message,
            details: error.response ? error.response.body : 'Sem detalhes adicionais'
        });
    }
});

// Função de teste simples
exports.helloWorld = functions.https.onRequest((req, res) => {
    res.send("Hello from Firebase!");
});