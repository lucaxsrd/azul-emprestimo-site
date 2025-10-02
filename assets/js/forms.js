// AZUL EMPRÉSTIMO - FORMS JAVASCRIPT

// Form submission handler
async function initForms() {
    const formElement = document.getElementById('heroContactForm');
    if (!formElement) {
        console.error('❌ Formulário heroContactForm não encontrado!');
        return;
    }
    
    console.log('✅ Formulário encontrado, adicionando listener');
    formElement.addEventListener('submit', handleFormSubmit);
    
    console.log('🎯 Sistema de formulário inicializado');
    console.log('📋 Formulário ID: heroContactForm');
    console.log('🔗 Apps Script URL configurada');
}

// Handle form submission
async function handleFormSubmit(event) {
    event.preventDefault();
    console.log('🚀 FORMULÁRIO SUBMETIDO');
    
    const form = event.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    // Update button state
    setButtonLoading(submitBtn, true);
    
    try {
        // Collect form data
        const formData = new FormData(form);
        const data = {
            nome: formData.get('nome'),
            email: formData.get('email'),
            whatsapp: formData.get('whatsapp'),
            servico: formData.get('servico'),
            valor: formData.get('valor'),
            data: new Date().toLocaleString('pt-BR')
        };
        
        console.log('📝 Dados coletados:', data);
        
        // Validate form data
        if (!validateFormData(data)) {
            throw new Error('Campos obrigatórios vazios');
        }
        
        console.log('✅ Validação passou');
        
        // Submit to Google Apps Script
        const success = await submitToAppsScript(data);
        
        if (success) {
            showNotification('✅ Proposta enviada com sucesso! Entraremos em contato em breve.', 'success');
            form.reset();
            console.log('🧹 Formulário resetado');
        } else {
            throw new Error('Falha na submissão');
        }
        
    } catch (error) {
        console.log('❌ ERRO: ' + error.message);
        console.log('❌ Stack: ' + error.stack);
        showNotification('❌ Erro ao enviar: ' + error.message, 'error');
    } finally {
        setButtonLoading(submitBtn, false, originalText);
        console.log('🔄 Botão restaurado');
    }
}

// Validate form data
function validateFormData(data) {
    const requiredFields = ['nome', 'email', 'whatsapp', 'servico'];
    
    for (const field of requiredFields) {
        if (!data[field] || data[field].trim() === '') {
            console.error(`Campo obrigatório vazio: ${field}`);
            return false;
        }
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        console.error('Email inválido');
        return false;
    }
    
    // WhatsApp validation (basic)
    const whatsappRegex = /^\(?[\d\s\(\)\-\+]{10,}$/;
    if (!whatsappRegex.test(data.whatsapp)) {
        console.error('WhatsApp inválido');
        return false;
    }
    
    return true;
}

// Submit to Google Apps Script
async function submitToAppsScript(data) {
    const url = 'https://script.google.com/macros/s/AKfycbx-98ihuO-yAd1V0RkjDwloqZzhmV4kb9uqkixj1EWOVYMVH8EEekRt8Mp-b4fnMyQK/exec';
    
    console.log('📤 Enviando para: ' + url);
    console.log('📦 Payload: ' + JSON.stringify(data));
    
    try {
        const startTime = Date.now();
        const response = await fetch(url, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        const endTime = Date.now();
        
        console.log(`✅ FETCH COMPLETADO em ${endTime - startTime}ms`);
        console.log('📊 Response type: ' + response.type);
        console.log('📊 Response ok: ' + response.ok);
        
        // no-cors mode always returns opaque response
        if (response.type === 'opaque') {
            console.log('✅ SUCESSO! (modo no-cors = resposta opaque)');
            return true;
        } else {
            console.log('⚠️ Resposta inesperada: ' + response.status);
            return false;
        }
        
    } catch (error) {
        console.error('❌ Erro na requisição:', error);
        return false;
    }
}

// Set button loading state
function setButtonLoading(button, loading, originalText = null) {
    if (loading) {
        button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
        button.disabled = true;
    } else {
        button.innerHTML = originalText || '<i class="fas fa-paper-plane"></i> Solicitar Proposta';
        button.disabled = false;
    }
}

// Contact form handler (if exists)
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async function(event) {
            event.preventDefault();
            
            const form = event.target;
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            setButtonLoading(submitBtn, true);
            
            try {
                const formData = new FormData(form);
                const data = {
                    nome: formData.get('nome'),
                    email: formData.get('email'),
                    telefone: formData.get('telefone'),
                    assunto: formData.get('assunto'),
                    mensagem: formData.get('mensagem'),
                    data: new Date().toLocaleString('pt-BR'),
                    tipo: 'contato'
                };
                
                if (!validateContactData(data)) {
                    throw new Error('Preencha todos os campos obrigatórios');
                }
                
                const success = await submitToAppsScript(data);
                
                if (success) {
                    showNotification('✅ Mensagem enviada com sucesso!', 'success');
                    form.reset();
                } else {
                    throw new Error('Falha no envio');
                }
                
            } catch (error) {
                showNotification('❌ ' + error.message, 'error');
            } finally {
                setButtonLoading(submitBtn, false, originalText);
            }
        });
    }
}

// Validate contact form data
function validateContactData(data) {
    const requiredFields = ['nome', 'email', 'assunto', 'mensagem'];
    
    for (const field of requiredFields) {
        if (!data[field] || data[field].trim() === '') {
            return false;
        }
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(data.email);
}

// Input formatters
function formatCurrency(input) {
    let value = input.value.replace(/\D/g, '');
    value = (value / 100).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
    input.value = value;
}

function formatPhone(input) {
    let value = input.value.replace(/\D/g, '');
    
    if (value.length <= 11) {
        value = value.replace(/(\d{2})(\d)/, '($1) $2');
        value = value.replace(/(\d{4,5})(\d{4})/, '$1-$2');
    }
    
    input.value = value;
}

// Initialize form validation
function initFormValidation() {
    // Real-time validation
    document.querySelectorAll('input[type="email"]').forEach(input => {
        input.addEventListener('blur', function() {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (this.value && !emailRegex.test(this.value)) {
                this.setCustomValidity('Email inválido');
                this.classList.add('invalid');
            } else {
                this.setCustomValidity('');
                this.classList.remove('invalid');
            }
        });
    });
    
    // Phone formatting
    document.querySelectorAll('input[type="tel"]').forEach(input => {
        input.addEventListener('input', function() {
            formatPhone(this);
        });
    });
    
    // Currency formatting
    document.querySelectorAll('input[name="valor"]').forEach(input => {
        input.addEventListener('input', function() {
            formatCurrency(this);
        });
    });
}