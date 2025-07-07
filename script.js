

// Popup functionality
function showPopup(service) {
    const popup = document.getElementById('popup');
    const popupTitle = document.getElementById('popup-title');
    const popupDescription = document.getElementById('popup-description');
    const popupDetails = document.getElementById('popup-details');

    // Populate the popup with relevant content
    if (service === 'webDevelopment') {
        popupTitle.innerText = 'Web Development';
        popupDescription.innerText = 'Building responsive and interactive websites.';
        popupDetails.innerHTML = '<li>Custom website design</li><li>Responsive layouts</li><li>SEO optimization</li>';
    } else if (service === 'cyberSecurity') {
        popupTitle.innerText = 'Cybersecurity';
        popupDescription.innerText = 'Implementing security measures for web applications.';
        popupDetails.innerHTML = '<li>Vulnerability assessment</li><li>Penetration testing</li><li>Data encryption</li>';
    } else if (service === 'videoEditing') {
        popupTitle.innerText = 'Video Editing';
        popupDescription.innerText = 'Creating impactful video content and transitions.';
        popupDetails.innerHTML = '<li>Professional cuts</li><li>Transition effects</li><li>Color correction</li>';
    } else if (service === 'uiUxDesign') {
        popupTitle.innerText = 'UI/UX Design';
        popupDescription.innerText = 'Designing intuitive and user-centered interfaces.';
        popupDetails.innerHTML = '<li>User research</li><li>Wireframing</li><li>Prototype testing</li>';
    } else if (service === 'productDesign') {
        popupTitle.innerText = 'Product Design';
        popupDescription.innerText = 'Crafting functional and aesthetically pleasing designs.';
        popupDetails.innerHTML = '<li>Product conceptualization</li><li>Material selection</li><li>3D modeling</li>';
    }

    popup.classList.add('show');
    // Close popup when clicking outside the content box
    popup.addEventListener('click', function (event) {
        if (event.target === popup) { // check if the click is outside the popup-content
            hidePopup();
        }
    });
}

// Hide the popup
function hidePopup() {
    const popup = document.getElementById('popup');
    popup.classList.remove('show');
}


// Add this script at the bottom of your HTML file
document.addEventListener('DOMContentLoaded', function () {
    const aboutContent = document.querySelector('.about-content');

    // Function to handle scrolling animation
    function handleScroll() {
        const scrollPosition = window.scrollY + window.innerHeight;
        if (scrollPosition > aboutContent.offsetTop) {
            aboutContent.classList.add('animated');
        }
    }

    // Check scroll position on page load and on scroll
    window.addEventListener('scroll', handleScroll);
    handleScroll();
});


// Add this script at the bottom of your HTML file
document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.animated');

    function checkVisibility() {
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;

            if (rect.top <= windowHeight) {
                element.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility();
});
// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navbar.classList.toggle('active');
});

// Active link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollY >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Close mobile menu on link click
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navbar.classList.remove('active');
    });
});