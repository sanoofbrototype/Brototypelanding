console.log("Brototype Landing Page Loaded");

// Mobile Menu Placeholder
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Background Selection Logic
const btnIT = document.getElementById('btn-it');
const btnNonIT = document.getElementById('btn-non-it');
const statsNumber = document.getElementById('stats-number');
const statsLabel = document.getElementById('stats-label');
const statsCard = document.getElementById('stats-card');

if (btnIT && btnNonIT && statsNumber && statsLabel) {
    btnIT.addEventListener('click', (e) => {
        // Update buttons
        btnIT.classList.add('active');
        btnNonIT.classList.remove('active');

        // Update stats content
        statsNumber.innerText = "1052 Students";
        statsLabel.innerText = "With IT background Have Already Placed From Brocamp";

        // Trigger Confetti from stats card position
        triggerConfettiFromElement(statsCard);
    });

    btnNonIT.addEventListener('click', (e) => {
        // Update buttons
        btnNonIT.classList.add('active');
        btnIT.classList.remove('active');

        // Update stats content
        statsNumber.innerText = "1327 Students";
        statsLabel.innerText = "With Non-IT background Have Already Placed From Brocamp";

        // Trigger Confetti from stats card position
        triggerConfettiFromElement(statsCard);
    });
}

// Confetti Animation Logic
function triggerConfettiFromElement(element) {
    // Get element position relative to viewport
    const rect = element.getBoundingClientRect();
    // Calculate center of element as a fraction of viewport (0-1)
    const originX = (rect.left + rect.width / 2) / window.innerWidth;
    const originY = (rect.top + rect.height / 2) / window.innerHeight;

    var count = 50;
    var defaults = {
        origin: { x: originX, y: originY }
    };

    function fire(particleRatio, opts) {
        confetti(Object.assign({}, defaults, opts, {
            particleCount: Math.floor(count * particleRatio)
        }));
    }

    fire(0.25, {
        spread: 26,
        startVelocity: 55,
    });
    fire(0.2, {
        spread: 60,
    });
    fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8
    });
    fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2
    });
    fire(0.1, {
        spread: 120,
        startVelocity: 45,
    });
}

// Hero CTA Scroll Logic
const heroBtn = document.querySelector('.hero-btn');
const formSection = document.querySelector('.form-section');

if (heroBtn && formSection) {
    heroBtn.addEventListener('click', () => {
        formSection.scrollIntoView({ behavior: 'smooth' });
    });
}

// Form Submission Logic
const leadForm = document.getElementById('leadForm');

// REPLACE THIS WITH YOUR GOOGLE APPS SCRIPT WEB APP URL
const scriptURL = 'https://script.google.com/macros/s/AKfycbxo1pJcZmYlnDeFUcbs5vR7i-oRAxN16vrdbd_Q0mrMChhCdRyeg0xJny5Z_EQ8vE-2Bw/exec';

if (leadForm) {
    leadForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent page reload

        // Show Success UI Immediately for better UX
        const formContent = document.querySelector('.form-content');
        const successMessage = document.createElement('div');
        successMessage.className = 'form-success-message';
        successMessage.innerHTML = `
            <h3>Thank You!</h3>
            <p>Our career expert will contact you shortly.</p>
        `;

        // Hide form and show success
        leadForm.style.display = 'none';
        formContent.appendChild(successMessage);

        // Collect Form Data
        const formData = new FormData(leadForm);

        // Send to Google Sheets in background
        fetch(scriptURL, { method: 'POST', body: formData })
            .catch(error => console.error('Background Sync Error:', error.message));

        // Reset form fields immediately in the hidden form
        leadForm.reset();

        // Restore form and remove success message after 5 seconds
        setTimeout(() => {
            if (successMessage.parentNode) {
                successMessage.parentNode.removeChild(successMessage);
            }
            leadForm.style.display = 'block';
        }, 5000);
    });
}

// Video Cards Click Logic
const videoCards = document.querySelectorAll('.video-facade-card');
videoCards.forEach(card => {
    card.addEventListener('click', function () {
        const video = this.querySelector('.story-thumb-video');
        const playBtn = this.querySelector('.play-button-small');

        if (video) {
            // Unmute and Play
            video.muted = false;
            video.controls = true;
            video.play();

            // Hide Play Button
            if (playBtn) playBtn.style.display = 'none';

            // Ensure video stays full opacity
            video.style.opacity = '1';
        }
    });
});

// Navbar Logic
const navbar = document.getElementById('mainNav');
const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');

// Sticky Scroll Effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        // Optional: Animate hamburger to X
        mobileToggle.classList.toggle('open');
    });
}
