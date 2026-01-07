const header = document.getElementById('main-header');
const menuBtn = document.getElementById('menu-btn');
const closeMenu = document.getElementById('close-menu');
const mobileMenu = document.getElementById('mobile-menu');

// Scroll Header Effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile Menu Logic
menuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; 
});

const hideMenu = () => {
    mobileMenu.classList.add('hidden');
    document.body.style.overflow = 'auto';
};

closeMenu.addEventListener('click', hideMenu);

document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', hideMenu);
});

// Scroll Animation Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section, .service-card').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
});

const privacyBtn = document.getElementById('privacy-btn');
const modal = document.getElementById('privacy-modal');
const closeModal = document.getElementById('close-modal');

if (privacyBtn && modal && closeModal) {
    privacyBtn.addEventListener('click', () => {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    });

    closeModal.addEventListener('click', () => {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    });
}