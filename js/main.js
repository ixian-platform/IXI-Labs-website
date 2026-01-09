// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, observerOptions);

// Observe all elements with animation classes
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in');
    const staggerElements = document.querySelectorAll('.stagger');

    fadeElements.forEach(el => observer.observe(el));
    staggerElements.forEach(el => observer.observe(el));

    // Stack svg swapping: fade hero stack out and core stack in when .core-values is visible
    const heroStack = document.getElementById('heroStack');
    const coreStack = document.getElementById('coreStack');
    const coreSection = document.querySelector('.core-values');

    if (heroStack && coreStack && coreSection) {
        const stacksObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    heroStack.classList.add('hidden');
                    coreStack.classList.remove('hidden');
                } else {
                    heroStack.classList.remove('hidden');
                    coreStack.classList.add('hidden');
                }
            });
        }, { threshold: 0.35 });

        stacksObserver.observe(coreSection);
    }
});
