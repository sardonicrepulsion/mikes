// ========================================
// KOCÚR MIKEŠ - Script
// Language switching + AOS initialization
// ========================================

// Initialize AOS (Animate on Scroll)
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 100,
        delay: 0
    });

    // Language Switcher
    const langButtons = document.querySelectorAll('.lang-btn');
    const defaultLang = 'sk';
    let currentLang = localStorage.getItem('selectedLang') || defaultLang;

    // Set initial language
    setLanguage(currentLang);
    updateActiveLangButton(currentLang);

    // Add click listeners
    langButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const lang = e.target.getAttribute('data-lang');
            setLanguage(lang);
            updateActiveLangButton(lang);
            localStorage.setItem('selectedLang', lang);
            
            // Animate the switch
            document.body.style.opacity = '0.8';
            setTimeout(() => {
                document.body.style.opacity = '1';
            }, 200);
        });
    });

    function setLanguage(lang) {
        const elements = document.querySelectorAll('[data-sk], [data-cs], [data-en]');
        
        elements.forEach(el => {
            const langKey = lang === 'cs' ? 'data-cs' : `data-${lang}`;
            const text = el.getAttribute(langKey);
            
            if (text) {
                el.textContent = text;
            }
        });
    }

    function updateActiveLangButton(lang) {
        langButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            }
        });
    }

    // Smooth transition on language change
    document.body.style.transition = 'opacity 0.2s ease-in-out';
});

// Scroll-to-top on page load
window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});

// Additional hover animation for sections
document.querySelectorAll('.section').forEach((section, index) => {
    section.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.01)';
    });

    section.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Keyboard accessibility (arrow keys for navigation)
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
        window.scrollBy(0, 100);
    } else if (e.key === 'ArrowUp') {
        window.scrollBy(0, -100);
    }
});
