// AZUL EMPRÉSTIMO - MAIN JAVASCRIPT

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Azul Empréstimo - Sistema inicializado');
    
    try {
        // Initialize all modules in correct order
        if (typeof initComponents === 'function') {
            initComponents();
        } else {
            console.warn('⚠️ initComponents não encontrada, inicializando componentes individualmente');
            // Initialize components individually
            if (typeof initNavigation === 'function') initNavigation();
            if (typeof initModalHandlers === 'function') initModalHandlers();
            if (typeof initAnimations === 'function') initAnimations();
            if (typeof initButtonStates === 'function') initButtonStates();
            if (typeof initSocialLinks === 'function') initSocialLinks();
            if (typeof initCarousel === 'function') initCarousel();
        }
        
        if (typeof initForms === 'function') initForms();
        if (typeof initContactForm === 'function') initContactForm();
        if (typeof initFormValidation === 'function') initFormValidation();
        if (typeof initWhatsApp === 'function') initWhatsApp();
        
        console.log('✅ Todos os módulos carregados com sucesso');
    } catch (error) {
        console.error('❌ Erro durante inicialização:', error);
    }
});

// Global error handler
window.addEventListener('error', function(e) {
    if (e.error) {
        console.error('❌ Erro global capturado:', e.error.message || e.error);
        console.error('📍 Arquivo:', e.filename);
        console.error('📍 Linha:', e.lineno);
        
        // Optional: Send error to tracking service
        if (typeof gtag !== 'undefined') {
            gtag('event', 'exception', {
                'description': e.error.message || 'Unknown error',
                'fatal': false
            });
        }
    }
});

// Utility functions
const Utils = {
    // Debounce function
    debounce: function(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Throttle function
    throttle: function(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },

    // Format currency
    formatCurrency: function(amount) {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(amount);
    },

    // Format phone number
    formatPhone: function(phone) {
        const cleaned = phone.replace(/\D/g, '');
        if (cleaned.length === 11) {
            return cleaned.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
        } else if (cleaned.length === 10) {
            return cleaned.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
        }
        return phone;
    },

    // Validate CPF
    validateCPF: function(cpf) {
        cpf = cpf.replace(/\D/g, '');
        if (cpf.length !== 11) return false;
        
        // Check for invalid sequences
        if (/^(\d)\1{10}$/.test(cpf)) return false;
        
        // Validate check digits
        let sum = 0;
        for (let i = 0; i < 9; i++) {
            sum += parseInt(cpf.charAt(i)) * (10 - i);
        }
        let digit = 11 - (sum % 11);
        if (digit === 10 || digit === 11) digit = 0;
        if (digit !== parseInt(cpf.charAt(9))) return false;
        
        sum = 0;
        for (let i = 0; i < 10; i++) {
            sum += parseInt(cpf.charAt(i)) * (11 - i);
        }
        digit = 11 - (sum % 11);
        if (digit === 10 || digit === 11) digit = 0;
        return digit === parseInt(cpf.charAt(10));
    },

    // Get URL parameters
    getUrlParameter: function(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    },

    // Copy to clipboard
    copyToClipboard: function(text) {
        if (navigator.clipboard) {
            return navigator.clipboard.writeText(text);
        } else {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            return Promise.resolve();
        }
    }
};

// Performance monitoring
const Performance = {
    start: function(name) {
        if (performance.mark) {
            performance.mark(`${name}-start`);
        }
    },

    end: function(name) {
        if (performance.mark && performance.measure) {
            performance.mark(`${name}-end`);
            performance.measure(name, `${name}-start`, `${name}-end`);
            
            const measure = performance.getEntriesByName(name)[0];
            console.log(`⏱️ ${name}: ${measure.duration.toFixed(2)}ms`);
        }
    }
};

// Analytics integration
const Analytics = {
    // Track page view
    trackPageView: function(page) {
        if (typeof gtag !== 'undefined') {
            gtag('config', 'GA_MEASUREMENT_ID', {
                page_title: document.title,
                page_location: window.location.href
            });
        }
    },

    // Track events
    trackEvent: function(action, category, label, value) {
        if (typeof gtag !== 'undefined') {
            gtag('event', action, {
                event_category: category,
                event_label: label,
                value: value
            });
        }
        
        console.log(`📊 Event: ${action} | ${category} | ${label}`);
    },

    // Track form submissions
    trackFormSubmission: function(formName, success = true) {
        this.trackEvent(
            success ? 'form_submit_success' : 'form_submit_error',
            'engagement',
            formName
        );
    },

    // Track WhatsApp clicks
    trackWhatsAppClick: function(source) {
        this.trackEvent('whatsapp_click', 'engagement', source);
    }
};

// Accessibility improvements
const Accessibility = {
    // Initialize accessibility features
    init: function() {
        this.addSkipLink();
        this.improveFocus();
        this.addAriaLabels();
    },

    // Add skip navigation link
    addSkipLink: function() {
        const skipLink = document.createElement('a');
        skipLink.href = '#main';
        skipLink.className = 'skip-link';
        skipLink.textContent = 'Pular para o conteúdo principal';
        skipLink.style.cssText = `
            position: absolute;
            top: -40px;
            left: 6px;
            background: var(--primary-color);
            color: white;
            padding: 8px;
            text-decoration: none;
            border-radius: 4px;
            z-index: 1000;
        `;
        
        skipLink.addEventListener('focus', function() {
            this.style.top = '6px';
        });
        
        skipLink.addEventListener('blur', function() {
            this.style.top = '-40px';
        });
        
        document.body.insertBefore(skipLink, document.body.firstChild);
    },

    // Improve focus management
    improveFocus: function() {
        // Add focus styles for keyboard navigation
        const style = document.createElement('style');
        style.textContent = `
            .nav-link:focus,
            .btn:focus,
            input:focus,
            select:focus,
            textarea:focus,
            button:focus {
                outline: 2px solid var(--primary-color);
                outline-offset: 2px;
            }
        `;
        document.head.appendChild(style);
    },

    // Add missing ARIA labels
    addAriaLabels: function() {
        // Add labels to buttons without text
        document.querySelectorAll('button:not([aria-label])').forEach(button => {
            const icon = button.querySelector('i');
            if (icon && !button.textContent.trim()) {
                const ariaLabel = this.getAriaLabelFromIcon(icon.className);
                if (ariaLabel) {
                    button.setAttribute('aria-label', ariaLabel);
                }
            }
        });
    },

    // Get ARIA label from icon class
    getAriaLabelFromIcon: function(className) {
        if (className.includes('whatsapp')) return 'Abrir WhatsApp';
        if (className.includes('menu') || className.includes('bars')) return 'Menu de navegação';
        if (className.includes('close') || className.includes('times')) return 'Fechar';
        if (className.includes('phone')) return 'Telefone';
        if (className.includes('envelope')) return 'E-mail';
        return null;
    }
};

// SEO improvements
const SEO = {
    // Update meta tags dynamically
    updateMetaTags: function(title, description) {
        document.title = title;
        
        let metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', description);
        } else {
            metaDescription = document.createElement('meta');
            metaDescription.name = 'description';
            metaDescription.content = description;
            document.head.appendChild(metaDescription);
        }
    },

    // Add structured data
    addStructuredData: function() {
        const structuredData = {
            "@context": "https://schema.org",
            "@type": "FinancialService",
            "name": "Azul Empréstimos Aracruz",
            "description": "Soluções financeiras em Aracruz - Empréstimos consignados, cartão de crédito, consórcios",
            "url": window.location.origin,
            "telephone": "+55-27-99609-8641",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Aracruz",
                "addressRegion": "ES",
                "addressCountry": "BR"
            },
            "sameAs": [
                "https://www.facebook.com/profile.php?id=61575925683121",
                "https://www.instagram.com/azul.emprestimo_aracruz/"
            ]
        };

        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(structuredData);
        document.head.appendChild(script);
    }
};

// Initialize additional features
document.addEventListener('DOMContentLoaded', function() {
    Performance.start('initialization');
    
    // Initialize accessibility
    Accessibility.init();
    
    // Add structured data for SEO
    SEO.addStructuredData();
    
    // Track page view
    Analytics.trackPageView(window.location.pathname);
    
    Performance.end('initialization');
});

// Make utilities globally available
window.AzulEmprestimo = {
    Utils,
    Performance,
    Analytics,
    Accessibility,
    SEO
};

console.log('🏢 Azul Empréstimo - Sistema completo carregado');