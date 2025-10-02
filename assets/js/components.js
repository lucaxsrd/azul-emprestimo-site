// AZUL EMPRÉSTIMO - COMPONENTS JAVASCRIPT

// Navigation functionality
function initNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navbar = document.getElementById('navbar');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }));
        
        console.log('✅ Navegação inicializada');
    } else {
        console.log('⚠️ Elementos de navegação não encontrados');
    }

    // Navbar scroll effect
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
        console.log('✅ Scroll effect da navbar inicializado');
    }
}

// Smooth scrolling
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth'
        });
    }
}

// FAQ functionality
function toggleFAQ(element) {
    const faqItem = element.parentElement;
    const answer = faqItem.querySelector('.faq-answer');
    const icon = element.querySelector('i');
    
    faqItem.classList.toggle('active');
    
    if (faqItem.classList.contains('active')) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
        icon.style.transform = 'rotate(180deg)';
    } else {
        answer.style.maxHeight = '0';
        icon.style.transform = 'rotate(0deg)';
    }
}

// Carousel functionality
let currentSlideIndex = 0;
const totalSlides = 5;

function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
    updateCarousel();
}

function previousSlide() {
    currentSlideIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
}

function currentSlide(slideIndex) {
    currentSlideIndex = slideIndex - 1;
    updateCarousel();
}

function updateCarousel() {
    const track = document.getElementById('carouselTrack');
    const dots = document.querySelectorAll('.dot');
    
    if (track) {
        track.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
    }
    
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlideIndex);
    });
}

// Auto-play carousel
function initCarousel() {
    // Verify carousel exists before starting auto-play
    const carouselTrack = document.getElementById('carouselTrack');
    if (carouselTrack) {
        setInterval(() => {
            nextSlide();
        }, 5000);
        console.log('✅ Carrossel inicializado');
    } else {
        console.log('⚠️ Carrossel não encontrado, pulando inicialização');
    }
}

// Modal functionality
function openAdsModal() {
    const modal = document.getElementById('adsModal');
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function closeAdsModal() {
    const modal = document.getElementById('adsModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Close modal when clicking outside
function initModalHandlers() {
    const modal = document.getElementById('adsModal');
    if (modal) {
        window.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeAdsModal();
            }
        });
        console.log('✅ Handlers de modal inicializados');
    } else {
        console.log('⚠️ Modal não encontrado, pulando inicialização');
    }
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 4000);
}

// Animation observer
function initAnimations() {
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, observerOptions);

        // Observe elements for animation
        const animatedElements = document.querySelectorAll('.service-card, .portfolio-item, .contact-card, .faq-item');
        if (animatedElements.length > 0) {
            animatedElements.forEach(el => {
                observer.observe(el);
            });
            console.log(`✅ Animações inicializadas para ${animatedElements.length} elementos`);
        } else {
            console.log('⚠️ Nenhum elemento para animação encontrado');
        }
    } else {
        console.log('⚠️ IntersectionObserver não suportado neste navegador');
    }
}

// Button loading states
function initButtonStates() {
    document.querySelectorAll('.btn-primary, .btn-secondary, .ad-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            if (!this.classList.contains('loading')) {
                this.classList.add('loading');
                setTimeout(() => {
                    this.classList.remove('loading');
                }, 2000);
            }
        });
    });
}

// Social links management
const socialData = {
    facebook: 'https://www.facebook.com/profile.php?id=61575925683121',
    instagram: 'https://www.instagram.com/azul.emprestimo_aracruz/',
    whatsapp: 'https://wa.me/5527996098641'
};

function updateSocialLink(platform, url) {
    socialData[platform] = url;
    const link = document.querySelector(`[data-social="${platform}"]`);
    if (link) {
        link.href = url;
    }
    localStorage.setItem('socialData', JSON.stringify(socialData));
}

function initSocialLinks() {
    const savedSocialData = localStorage.getItem('socialData');
    if (savedSocialData) {
        Object.assign(socialData, JSON.parse(savedSocialData));
        Object.keys(socialData).forEach(platform => {
            const link = document.querySelector(`[data-social="${platform}"]`);
            if (link) {
                link.href = socialData[platform];
            }
        });
    }
}

// Initialize all components
function initComponents() {
    // Initialize functionality
    initNavigation();
    initModalHandlers();
    initAnimations();
    initButtonStates();
    initSocialLinks();
    initCarousel();
}