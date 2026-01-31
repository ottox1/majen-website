// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
});

// Close mobile menu when clicking a link
mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
    });
});

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
        // Close other open items
        faqItems.forEach(otherItem => {
            if (otherItem !== item && otherItem.classList.contains('active')) {
                otherItem.classList.remove('active');
            }
        });

        // Toggle current item
        item.classList.toggle('active');
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background on scroll
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }
});

// Scroll animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add scroll-animate class to elements and observe them
const animateElements = document.querySelectorAll(
    '.feature-card, .phone-mockup, .clients-content, .clients-images, ' +
    '.designers-content, .designers-images, .step, .team-member, .faq-item'
);

animateElements.forEach((el, index) => {
    el.classList.add('scroll-animate');
    el.style.transitionDelay = `${index % 4 * 0.1}s`;
    observer.observe(el);
});

// Waitlist button click handler (placeholder for future functionality)
const waitlistButtons = document.querySelectorAll('a[href="#waitlist"], .btn-primary');

waitlistButtons.forEach(button => {
    if (button.textContent.includes('Waitlist')) {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            // Scroll to the CTA section
            const ctaSection = document.getElementById('waitlist');
            if (ctaSection) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = ctaSection.getBoundingClientRect().top + window.pageYOffset - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
            // Could trigger a modal or form here in the future
            console.log('Waitlist button clicked - integrate your waitlist form here');
        });
    }
});

// Partner button click handler (placeholder)
const partnerButtons = document.querySelectorAll('a[href="#partner"]');

partnerButtons.forEach(button => {
    if (button.textContent.includes('Partner')) {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const partnerSection = document.getElementById('partner');
            if (partnerSection) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = partnerSection.getBoundingClientRect().top + window.pageYOffset - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
            console.log('Partner button clicked - integrate your partner form here');
        });
    }
});

// Add active state to navigation based on scroll position
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    const navHeight = document.querySelector('.navbar').offsetHeight;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - navHeight - 100;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Page load animation
document.addEventListener('DOMContentLoaded', () => {
    // Add loaded class to body for any initial animations
    document.body.classList.add('loaded');

    // Animate hero content on load
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.classList.add('fade-in-up');
    }
});
