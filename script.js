// Smooth Scroll for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Offset for header height
                behavior: 'smooth'
            });
        }
    });
});

// Parallax Effect for Hero Section
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const hero = document.querySelector('.hero');

    hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`; // Slower background movement for parallax effect
});

// CTA Button Hover Animation
const ctaButton = document.querySelector('.cta-button');
ctaButton.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.05)';
    this.style.boxShadow = '0px 10px 20px rgba(0, 113, 227, 0.3)';
});

ctaButton.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
    this.style.boxShadow = 'none';
});

// Product Card Hover Animation
const productItems = document.querySelectorAll('.product-item');

productItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.03)';
        this.style.boxShadow = '0px 10px 15px rgba(0, 0, 0, 0.1)';
        this.querySelector('img').style.transform = 'scale(1.05)';
    });

    item.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = 'none';
        this.querySelector('img').style.transform = 'scale(1)';
    });
});




// Scroll-Triggered Animations
const elementsToAnimate = document.querySelectorAll('.fade-in-on-scroll');

window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;
    
    elementsToAnimate.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        if (scrollPosition + window.innerHeight > elementPosition + 100) {
            element.classList.add('active');
        }
    });
});
