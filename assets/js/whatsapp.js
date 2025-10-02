// AZUL EMPRÉSTIMO - WHATSAPP INTEGRATION

// WhatsApp configuration
const WHATSAPP_CONFIG = {
    number: '5527996098641',
    baseUrl: 'https://wa.me/'
};

// WhatsApp message templates
const WHATSAPP_MESSAGES = {
    default: 'Olá, vi no site a respeito de serviços financeiros, pode me falar mais a respeito?',
    simulacao: 'Olá, gostaria de fazer uma simulação de empréstimo. Podem me ajudar com as melhores condições?',
    consorcio: 'Olá, estou pronto para começar um novo investimento, quero simular um consórcio',
    especialista: 'Olá, gostaria de falar com um especialista para esclarecer algumas dúvidas sobre os serviços financeiros',
    cartao: 'Olá, tenho interesse no cartão de crédito para aposentados. Podem me passar mais informações?',
    fgts: 'Olá, gostaria de informações sobre o empréstimo com FGTS. Qual a taxa e condições?',
    consignado: 'Olá, sou aposentado/pensionista e gostaria de informações sobre crédito consignado',
    pessoal: 'Olá, preciso de um crédito pessoal. Podem me ajudar com as melhores condições?',
    ajuda: 'Olá, preciso de ajuda com os serviços financeiros. Podem me orientar?'
};

// Open WhatsApp with default message
function openWhatsApp() {
    const message = WHATSAPP_MESSAGES.default;
    const whatsappUrl = `${WHATSAPP_CONFIG.baseUrl}${WHATSAPP_CONFIG.number}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Open WhatsApp for general simulation
function openWhatsAppSimulacao() {
    const message = WHATSAPP_MESSAGES.simulacao;
    const whatsappUrl = `${WHATSAPP_CONFIG.baseUrl}${WHATSAPP_CONFIG.number}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Open WhatsApp for consortium simulation
function openWhatsAppConsorcio() {
    const message = WHATSAPP_MESSAGES.consorcio;
    const whatsappUrl = `${WHATSAPP_CONFIG.baseUrl}${WHATSAPP_CONFIG.number}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Open WhatsApp to speak with specialist
function openWhatsAppEspecialista() {
    const message = WHATSAPP_MESSAGES.especialista;
    const whatsappUrl = `${WHATSAPP_CONFIG.baseUrl}${WHATSAPP_CONFIG.number}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Open WhatsApp for credit card
function openWhatsAppCartao() {
    const message = WHATSAPP_MESSAGES.cartao;
    const whatsappUrl = `${WHATSAPP_CONFIG.baseUrl}${WHATSAPP_CONFIG.number}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Open WhatsApp for FGTS loan
function openWhatsAppFGTS() {
    const message = WHATSAPP_MESSAGES.fgts;
    const whatsappUrl = `${WHATSAPP_CONFIG.baseUrl}${WHATSAPP_CONFIG.number}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Open WhatsApp for consigned credit
function openWhatsAppConsignado() {
    const message = WHATSAPP_MESSAGES.consignado;
    const whatsappUrl = `${WHATSAPP_CONFIG.baseUrl}${WHATSAPP_CONFIG.number}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Open WhatsApp for personal credit
function openWhatsAppPessoal() {
    const message = WHATSAPP_MESSAGES.pessoal;
    const whatsappUrl = `${WHATSAPP_CONFIG.baseUrl}${WHATSAPP_CONFIG.number}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Open WhatsApp for help
function openWhatsAppAjuda() {
    const message = WHATSAPP_MESSAGES.ajuda;
    const whatsappUrl = `${WHATSAPP_CONFIG.baseUrl}${WHATSAPP_CONFIG.number}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Generic WhatsApp opener with custom message
function openWhatsAppCustom(messageKey, customData = {}) {
    let message = WHATSAPP_MESSAGES[messageKey] || WHATSAPP_MESSAGES.default;
    
    // Replace placeholders with custom data
    Object.keys(customData).forEach(key => {
        message = message.replace(`{{${key}}}`, customData[key]);
    });
    
    const whatsappUrl = `${WHATSAPP_CONFIG.baseUrl}${WHATSAPP_CONFIG.number}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// WhatsApp floating button functionality
function initWhatsAppFloat() {
    const whatsappFloat = document.getElementById('whatsappFloat');
    if (!whatsappFloat) return;
    
    // Show/hide on scroll
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 200) {
            whatsappFloat.classList.add('visible');
        } else {
            whatsappFloat.classList.remove('visible');
        }
        
        // Hide on scroll down, show on scroll up
        if (currentScrollY > lastScrollY && currentScrollY > 500) {
            whatsappFloat.classList.add('hidden');
        } else {
            whatsappFloat.classList.remove('hidden');
        }
        
        lastScrollY = currentScrollY;
    });
    
    // Click tracking
    const whatsappBtn = whatsappFloat.querySelector('.whatsapp-btn');
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', function(e) {
            // Track click event
            if (typeof gtag !== 'undefined') {
                gtag('event', 'whatsapp_click', {
                    event_category: 'engagement',
                    event_label: 'floating_button'
                });
            }
            
            console.log('WhatsApp floating button clicked');
        });
    }
}

// Service-specific WhatsApp functions with form data
function openWhatsAppWithFormData(serviceType, formData = {}) {
    let message = WHATSAPP_MESSAGES[serviceType] || WHATSAPP_MESSAGES.default;
    
    // Add form data to message if provided
    if (formData.nome) {
        message += `\n\nMeus dados:\nNome: ${formData.nome}`;
        
        if (formData.servico) {
            message += `\nServiço: ${formData.servico}`;
        }
        
        if (formData.valor) {
            message += `\nValor: ${formData.valor}`;
        }
    }
    
    const whatsappUrl = `${WHATSAPP_CONFIG.baseUrl}${WHATSAPP_CONFIG.number}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Update WhatsApp number (for admin use)
function updateWhatsAppNumber(newNumber) {
    WHATSAPP_CONFIG.number = newNumber;
    localStorage.setItem('whatsappNumber', newNumber);
    console.log('WhatsApp number updated:', newNumber);
}

// Load saved WhatsApp number
function loadWhatsAppConfig() {
    const savedNumber = localStorage.getItem('whatsappNumber');
    if (savedNumber) {
        WHATSAPP_CONFIG.number = savedNumber;
    }
}

// Add WhatsApp buttons to service cards
function initServiceWhatsAppButtons() {
    // Add click handlers to service cards
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        const button = card.querySelector('.btn, button');
        if (button) {
            button.addEventListener('click', function() {
                const serviceName = card.querySelector('h3')?.textContent?.toLowerCase();
                
                if (serviceName?.includes('consignado')) {
                    openWhatsAppConsignado();
                } else if (serviceName?.includes('fgts')) {
                    openWhatsAppFGTS();
                } else if (serviceName?.includes('cartão')) {
                    openWhatsAppCartao();
                } else if (serviceName?.includes('consórcio')) {
                    openWhatsAppConsorcio();
                } else if (serviceName?.includes('pessoal')) {
                    openWhatsAppPessoal();
                } else {
                    openWhatsAppSimulacao();
                }
            });
        }
    });
}

// Initialize WhatsApp functionality
function initWhatsApp() {
    loadWhatsAppConfig();
    initWhatsAppFloat();
    initServiceWhatsAppButtons();
    
    console.log('WhatsApp integration initialized');
    console.log('Number:', WHATSAPP_CONFIG.number);
}