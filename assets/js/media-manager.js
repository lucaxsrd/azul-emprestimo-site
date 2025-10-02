// SISTEMA DE GERENCIAMENTO DE MÍDIAS - AZUL EMPRÉSTIMO
// Permite usar Google Drive, links externos ou arquivos locais

const MediaManager = {
    // ==========================================
    // CONFIGURAÇÃO DE MÍDIAS
    // ==========================================
    
    // Imagens locais da pasta imagens/
    localMedia: {
        // Imagens do Hero
        heroBackground: 'imagens/CAPA SEM FRANQUIAS 2.png', // Foto capa para fundo
        heroIllustration: 'imagens/CAPA SEM FRANQUIAS 2.png',
        
        // Logos
        logo: 'imagens/LOGO AZUL EMPRESTIMO 2.png', // Logo azul 2 (padrão)
        logoWhite: 'imagens/LOGO AZUL EMPRESTIMO (branca).png', // Logo azul branca (WhatsApp button)
        
        // Imagens dos serviços
        serviceConsignado: 'imagens/CREDITO PARA EMPRESA.png',
        serviceFGTS: 'imagens/FINANCIAMENTO VEICULOS.png',
        servicePessoal: 'imagens/CREDITO PARA EMPRESA.png',
        serviceCartaoCredito: 'imagens/FEED CARTAO1.png', // Feed cartão para aposentados
        
        // Consórcios (seção especial)
        consorcio1: 'imagens/CONSORCIO 1.png',
        consorcio2: 'imagens/CONSORCIO 2.png',
        consorcio3: 'imagens/CONSORCIO 3.png',
        consorcio4: 'imagens/CONSORCIO 4.png',
        consorcio5: 'imagens/CONSORCIO 5.png',
        consorcio6: 'imagens/CONSORCIO 5.png',
        consorcioSimule: 'imagens/CONSORCIO SIMULE.png',
        
        // Portfólio
        portfolioImovel: 'imagens/FINANCIAMENTO-IMOBILIARIO.png',
        portfolioVeiculo: 'imagens/FINANCIAMENTO VEICULOS.png',
        portfolioEmpresa: 'imagens/CREDITO PARA EMPRESA.png',
        
        // Propagandas (para o modal) - DESABILITADAS
        promoFGTS: 'imagens/CONSIGNADO INSS.png',
        promoConsignado: 'imagens/CONSIGNADO INSS.png',
        promoConsorcio: 'imagens/CONSORCIO SIMULE.png',
        
        // Depoimentos/Testemunhos - DESABILITADAS  
        cliente1: 'imagens/LOGO AZUL EMPRESTIMO 2.png',
        cliente2: 'imagens/LOGO AZUL EMPRESTIMO 2.png',
        cliente3: 'imagens/LOGO AZUL EMPRESTIMO 2.png'
    },
    
    // Links externos (podem ser de qualquer lugar)
    externalMedia: {
        // Exemplo de uso de outras fontes
        partnerBank1: 'https://exemplo.com/logo-banco1.png',
        partnerBank2: 'https://exemplo.com/logo-banco2.png',
        certifications: 'https://exemplo.com/certificacoes.jpg'
    },
    
    // Fallbacks locais (caso o Drive não carregue)
    localFallbacks: {
        heroBackground: 'assets/images/hero-bg.jpg',
        logo: 'assets/images/logo.png',
        defaultService: 'assets/images/service-default.jpg'
    },
    
    // ==========================================
    // FUNÇÕES DE CONVERSÃO E CARREGAMENTO
    // ==========================================
    
    // Converte ID do Drive para link direto
    getDriveDirectLink: function(driveId) {
        if (!driveId || driveId.includes('_SUBSTITUA_')) {
            return null;
        }
        return `https://drive.google.com/uc?id=${driveId}`;
    },
    
    // Converte ID do Drive para embed de vídeo
    getDriveVideoEmbed: function(driveId) {
        if (!driveId || driveId.includes('_SUBSTITUA_')) {
            return null;
        }
        return `https://drive.google.com/file/d/${driveId}/preview`;
    },
    
    // Carrega imagem com fallback
    loadImage: function(key, element, options = {}) {
        const localPath = this.localMedia[key];
        const externalLink = this.externalMedia[key];
        const fallbackLink = this.localFallbacks[key];
        
        // Prioridade: Local -> External -> Fallback -> Placeholder
        const imageUrl = localPath || externalLink || fallbackLink || this.getPlaceholder(options);
        
        if (element) {
            element.src = imageUrl;
            element.onerror = () => {
                if (fallbackLink && imageUrl !== fallbackLink) {
                    element.src = fallbackLink;
                } else {
                    element.src = this.getPlaceholder(options);
                }
            };
        }
        
        return imageUrl;
    },
    
    // Gera placeholder SVG personalizado
    getPlaceholder: function(options = {}) {
        const width = options.width || 400;
        const height = options.height || 300;
        const text = options.text || 'Azul Empréstimo';
        const bgColor = options.bgColor || '#1a237e';
        const textColor = options.textColor || '#ffffff';
        
        const svg = `
            <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
                <rect width="100%" height="100%" fill="${bgColor}"/>
                <text x="50%" y="50%" font-family="Inter, Arial, sans-serif" 
                      font-size="20" font-weight="600" fill="${textColor}" 
                      text-anchor="middle" dy=".3em">${text}</text>
            </svg>
        `;
        
        return 'data:image/svg+xml;base64,' + btoa(svg);
    },
    
    // ==========================================
    // SISTEMA DE PROPAGANDAS DINÂMICO
    // ==========================================
    
    // Propagandas editáveis (conecta com o modal)
    adsContent: [
        {
            id: 'promo-fgts',
            title: 'FGTS Liberado em 24h',
            description: 'Antecipe seu FGTS com aprovação expressa. Dinheiro na conta em até 24 horas.',
            image: 'promoFGTS',
            badge: 'Urgente',
            validUntil: '2025-10-31',
            ctaText: 'Solicitar Agora',
            featured: true
        },
        {
            id: 'promo-consignado',
            title: 'Taxa Zero para Consignado INSS',
            description: 'Por tempo limitado! Empréstimo consignado para aposentados e pensionistas.',
            image: 'promoConsignado',
            badge: 'Promoção Especial',
            validUntil: '2025-11-15',
            ctaText: 'Saiba Mais',
            featured: false
        },
        {
            id: 'promo-consorcio',
            title: 'Consórcio Contemplado Disponível',
            description: 'Cartas contempladas de veículos e imóveis com condições especiais.',
            image: 'promoConsorcio',
            badge: 'Limitado',
            validUntil: '2025-12-31',
            ctaText: 'Consultar',
            featured: false
        }
    ],
    
    // Carrega propagandas no modal
    loadAdsToModal: function() {
        const adsContainer = document.getElementById('adsContent');
        if (!adsContainer) return;
        
        adsContainer.innerHTML = '<div class="ads-container"></div>';
        const container = adsContainer.querySelector('.ads-container');
        
        this.adsContent.forEach(ad => {
            const adElement = this.createAdElement(ad);
            container.appendChild(adElement);
        });
    },
    
    // Cria elemento de propaganda
    createAdElement: function(ad) {
        const adDiv = document.createElement('div');
        adDiv.className = `ad-item ${ad.featured ? 'featured-ad' : ''}`;
        adDiv.innerHTML = `
            ${ad.badge ? `<div class="ad-badge">${ad.badge}</div>` : ''}
            <h4>${ad.title}</h4>
            <p>${ad.description}</p>
            ${ad.image ? `<img src="${this.loadImage(ad.image)}" alt="${ad.title}" style="width:100%;max-width:200px;margin:10px 0;border-radius:8px;">` : ''}
            <div class="ad-details">
                <span class="ad-condition">Válido até: ${this.formatDate(ad.validUntil)}</span>
                <button class="ad-btn" onclick="scrollToSection('contact'); closeAdsModal();">
                    ${ad.ctaText}
                </button>
            </div>
        `;
        return adDiv;
    },
    
    // ==========================================
    // FUNÇÕES DE ATUALIZAÇÃO DINÂMICA
    // ==========================================
    
    // Adiciona nova propaganda (editável via console)
    addAd: function(adData) {
        this.adsContent.push(adData);
        this.loadAdsToModal();
        this.saveToLocalStorage();
        console.log('Nova propaganda adicionada:', adData.title);
    },
    
    // Remove propaganda
    removeAd: function(adId) {
        this.adsContent = this.adsContent.filter(ad => ad.id !== adId);
        this.loadAdsToModal();
        this.saveToLocalStorage();
        console.log('Propaganda removida:', adId);
    },
    
    // Atualiza ID do Google Drive
    updateDriveId: function(key, newId) {
        this.driveMedia[key] = newId;
        this.saveToLocalStorage();
        console.log(`Drive ID atualizado para ${key}:`, newId);
        // Recarrega imagens que usam essa chave
        this.reloadImages(key);
    },
    
    // Recarrega imagens específicas
    reloadImages: function(key) {
        const elements = document.querySelectorAll(`[data-media-key="${key}"]`);
        elements.forEach(el => {
            this.loadImage(key, el);
        });
    },
    
    // ==========================================
    // PERSISTÊNCIA LOCAL
    // ==========================================
    
    // Salva configurações no localStorage
    saveToLocalStorage: function() {
        const data = {
            driveMedia: this.driveMedia,
            adsContent: this.adsContent,
            lastUpdate: new Date().toISOString()
        };
        localStorage.setItem('azulEmprestimoMedia', JSON.stringify(data));
    },
    
    // Carrega configurações do localStorage
    loadFromLocalStorage: function() {
        const saved = localStorage.getItem('azulEmprestimoMedia');
        if (saved) {
            const data = JSON.parse(saved);
            if (data.driveMedia) {
                Object.assign(this.driveMedia, data.driveMedia);
            }
            if (data.adsContent) {
                this.adsContent = data.adsContent;
            }
            console.log('Configurações carregadas do localStorage');
        }
    },
    
    // ==========================================
    // UTILITÁRIOS
    // ==========================================
    
    formatDate: function(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('pt-BR');
    },
    
    // Inicializa o sistema
    init: function() {
        console.log('🎨 MediaManager iniciado');
        this.loadFromLocalStorage();
        this.loadAdsToModal();
        
        // Carrega imagens com data-media-key
        document.querySelectorAll('[data-media-key]').forEach(el => {
            const key = el.getAttribute('data-media-key');
            this.loadImage(key, el);
        });
    }
};

// ==========================================
// FUNÇÕES GLOBAIS PARA FÁCIL EDIÇÃO
// ==========================================

// Função para atualizar facilmente IDs do Drive
function updateDriveImage(key, driveId) {
    MediaManager.updateDriveId(key, driveId);
}

// Função para adicionar nova propaganda
function addNewAd(title, description, driveImageId, validUntil) {
    const newAd = {
        id: `ad-${Date.now()}`,
        title: title,
        description: description,
        image: driveImageId ? driveImageId : null,
        badge: 'Novo',
        validUntil: validUntil,
        ctaText: 'Solicitar',
        featured: false
    };
    MediaManager.addAd(newAd);
}

// Função para listar todas as mídias configuradas
function listAllMedia() {
    console.log('📁 Mídias configuradas:');
    console.table(MediaManager.driveMedia);
}

// ==========================================
// CARROSSEL DE CONSÓRCIOS
// ==========================================
let currentSlide = 0;
let carouselInterval;

function initializeCarousel() {
    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    
    if (!track || slides.length === 0) return;
    
    // Configurar imagens do carrossel
    slides.forEach((slide, index) => {
        const img = slide.querySelector('.carousel-image');
        if (img) {
            const consorcioKey = `consorcio${index + 1}`;
            MediaManager.loadImage(consorcioKey, img, {
                text: `Consórcio ${index + 1}`,
                width: 800,
                height: 400
            });
        }
    });
    
    // Função para ir para um slide específico
    function goToSlide(slideIndex) {
        currentSlide = slideIndex;
        const translateX = -slideIndex * 100;
        track.style.transform = `translateX(${translateX}%)`;
        
        // Atualizar dots
        dots.forEach(dot => dot.classList.remove('active'));
        if (dots[slideIndex]) {
            dots[slideIndex].classList.add('active');
        }
    }
    
    // Função para próximo slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        goToSlide(currentSlide);
    }
    
    // Função para slide anterior
    function prevSlide() {
        currentSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
        goToSlide(currentSlide);
    }
    
    // Event listeners para botões
    if (nextBtn) {
        nextBtn.addEventListener('click', nextSlide);
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', prevSlide);
    }
    
    // Event listeners para dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => goToSlide(index));
    });
    
    // Auto-play do carrossel
    function startAutoPlay() {
        carouselInterval = setInterval(nextSlide, 4000); // Troca a cada 4 segundos
    }
    
    function stopAutoPlay() {
        if (carouselInterval) {
            clearInterval(carouselInterval);
        }
    }
    
    // Pausar auto-play quando mouse estiver sobre o carrossel
    const carouselContainer = document.querySelector('.carousel-container');
    if (carouselContainer) {
        carouselContainer.addEventListener('mouseenter', stopAutoPlay);
        carouselContainer.addEventListener('mouseleave', startAutoPlay);
    }
    
    // Inicializar carrossel
    goToSlide(0);
    startAutoPlay();
}

// Inicializa quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
    MediaManager.init();
    initializeCarousel();
});

// ==========================================
// EXPORTA PARA USO GLOBAL
// ==========================================
window.MediaManager = MediaManager;
window.updateDriveImage = updateDriveImage;
window.addNewAd = addNewAd;
window.listAllMedia = listAllMedia;