// --- 1. Age Verification Logic (Fixed with Local Storage) ---
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById('ageModal');
    
    // Check if the user already confirmed they are 18+
    if (localStorage.getItem('ageVerified') === 'true') {
        if (modal) modal.style.display = 'none';
    }
});

function acceptAge() {
    const modal = document.getElementById('ageModal');
    if(modal) {
        modal.style.display = 'none';
        // Save the choice in the browser's local storage
        localStorage.setItem('ageVerified', 'true');
    }
}

// --- 2. Sidebar & Theme Toggle Logic ---
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('sidebar-overlay');
const themeToggle = document.getElementById('theme-toggle');
const closeOnClickItems = document.querySelectorAll('.close-on-click');

// Toggle Sidebar
if(menuBtn && sidebar && overlay) {
    menuBtn.addEventListener('click', () => {
        sidebar.classList.add('active');
        overlay.classList.add('active');
    });

    closeBtn.addEventListener('click', () => {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    });

    overlay.addEventListener('click', () => {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    });

    // Close sidebar when clicking anchor links inside it
    closeOnClickItems.forEach(item => {
        item.addEventListener('click', () => {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
        });
    });
}

// Theme Toggle
if(themeToggle) {
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.body.getAttribute('data-theme');
        if (currentTheme === 'light') {
            document.body.setAttribute('data-theme', 'dark');
            themeToggle.innerText = '☀️ Light Mode';
        } else {
            document.body.setAttribute('data-theme', 'light');
            themeToggle.innerText = '🌙 Dark Mode';
        }
    });
}

// --- 3. Automated Hero Background Slider ---
const heroSection = document.getElementById('hero-section');
if (heroSection) {
    // Hardcoded to look for images inside an 'images' folder
    const heroImages = [
        "url('images/HI/hero1.jpg')", 
        "url('images/HI/hero2.jpg')", 
        "url('images/HI/hero3.jpg')", 
        "url('images/HI/hero4.jpg')", 
        "url('images/HI/hero5.jpg')", 
        "url('images/HI/hero6.jpg')", 
        "url('images/HI/hero7.jpg')", 
        "url('images/HI/hero8.jpg')", 
        "url('images/HI/hero9.jpg')", 
    ];

    let currentImageIndex = 0;
    heroSection.style.backgroundImage = heroImages[currentImageIndex];

    setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % heroImages.length;
        heroSection.style.backgroundImage = heroImages[currentImageIndex];
    }, 4000);
}

// --- 4. Data & Settings ---
const BUSINESS_PHONE = "919004365706"; 

// Replaced explicit terms with premium, search-engine-safe keywords to prevent SafeSearch filtering
const profiles = [
    { name: "Anjali", age: 23, image: "images/PI/image6.jpeg", services: ["VIP Dating", "Private Events", "Companionship"] },
    { name: "Priya", age: 25, image: "images/PI/image7.jpeg", services: ["Dinner Dates", "Travel Partner", "Weekend Getaways"] },
    { name: "Neha", age: 21, image: "images/PI/image23.jpeg", services: ["Clubbing", "Party Model", "Exclusive Meetups"] },
    { name: "Kavita", age: 24, image: "images/PI/image26.jpeg", services: ["VIP Events", "Dinner Dates", "Companionship"] },
    { name: "Roshni", age: 22, image: "images/PI/image14.jpeg", services: ["Dating", "Weekend Getaways", "Private Events"] },
    { name: "Simran", age: 26, image: "images/PI/image27.jpeg", services: ["Travel Partner", "Event Companion", "Dinner Dates"] }
];

// --- 5. Render Profiles ---
const container = document.getElementById('profile-container');
if (container) {
    profiles.forEach(profile => {
        const card = document.createElement('div');
        card.className = 'profile-card fade-up';
        
        let bubblesHTML = '';
        profile.services.forEach(service => {
            bubblesHTML += `<span class="bubble">${service}</span>`;
        });
        
        const waMessage = `I am intrested in your service , and i want to book ${profile.name} if she is available , so lets discuss further`;
        const encodedMessage = encodeURIComponent(waMessage);
        
        const waLink = `https://wa.me/${BUSINESS_PHONE}?text=${encodedMessage}`;
        const callLink = `tel:+${BUSINESS_PHONE}`;

        // Added highly optimized alt tags for image SEO
        card.innerHTML = `
            <div class="img-container">
                <img src="${profile.image}" alt="${profile.name} - Premium Escort and VIP Companion in Indore">
            </div>
            <div class="profile-info">
                <h3>${profile.name}, ${profile.age}</h3>
                <div class="service-bubbles">
                    ${bubblesHTML}
                </div>
            </div>
            <div class="actions">
                <a href="${callLink}" class="action-btn btn-call">📞 Call</a>
                <a href="${waLink}" class="action-btn btn-whatsapp">💬 WhatsApp</a>
            </div>
        `;
        container.appendChild(card);
    });
}

// --- 6. Scroll Animations (Intersection Observer) ---
document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    const fadeElements = document.querySelectorAll('.fade-up');
    fadeElements.forEach(el => observer.observe(el));
});
