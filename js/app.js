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
const BUSINESS_PHONE_2 = "919406562823";

const profiles = [
    { name: "Anjali", age: 23, image: "images/PI/image1.jpeg", services: ["Doggy Style", "Deep Throat", "Reverse Cowgirl"] },
    { name: "Priya", age: 28, image: "images/PI/image2.jpeg", services: ["Cowgirl", "Oral", "GFE"] },
    { name: "Neha", age: 19, image: "images/PI/image3.jpeg", services: ["Anal", "Oral", "Missionary"] },
    { name: "Kavita", age: 28, image: "images/PI/image4.jpeg", services: ["Cowgirl", "69 Position", "Deep Throat"] },
    { name: "Roshni", age: 28, image: "images/PI/image5.jpeg", services: ["Anal", "69 Position", "Oral"] },
    { name: "Simran", age: 26, image: "images/PI/image6.jpeg", services: ["GFE", "French Kissing", "Cowgirl"] },
    { name: "Pooja", age: 26, image: "images/PI/image7.jpeg", services: ["Reverse Cowgirl", "Cowgirl", "69 Position"] },
    { name: "Riya", age: 26, image: "images/PI/image8.jpeg", services: ["Missionary", "Oral", "Cowgirl"] },
    { name: "Sneha", age: 19, image: "images/PI/image9.jpeg", services: ["GFE", "French Kissing", "Body to Body"] },
    { name: "Aarti", age: 26, image: "images/PI/image10.jpeg", services: ["Anal", "Oral", "Deep Throat"] },
    { name: "Kiran", age: 26, image: "images/PI/image11.jpeg", services: ["Reverse Cowgirl", "French Kissing", "Cowgirl"] },
    { name: "Divya", age: 26, image: "images/PI/image12.jpeg", services: ["Anal", "Doggy Style", "GFE"] },
    { name: "Megha", age: 18, image: "images/PI/image13.jpeg", services: ["Reverse Cowgirl", "Missionary", "GFE"] },
    { name: "Swati", age: 22, image: "images/PI/image14.jpeg", services: ["Doggy Style", "Cowgirl", "GFE"] },
    { name: "Nidhi", age: 24, image: "images/PI/image15.jpeg", services: ["Oral", "Anal", "Body to Body"] },
    { name: "Nisha", age: 18, image: "images/PI/image16.jpeg", services: ["GFE", "69 Position", "Oral"] },
    { name: "Shruti", age: 21, image: "images/PI/image17.jpeg", services: ["69 Position", "Missionary", "Anal"] },
    { name: "Sonam", age: 27, image: "images/PI/image18.jpeg", services: ["69 Position", "GFE", "Oral"] },
    { name: "Jyoti", age: 22, image: "images/PI/image19.jpeg", services: ["Body to Body", "Reverse Cowgirl", "GFE"] },
    { name: "Shikha", age: 21, image: "images/PI/image20.jpeg", services: ["Missionary", "Deep Throat", "French Kissing"] },
    { name: "Anita", age: 19, image: "images/PI/image21.jpeg", services: ["Doggy Style", "GFE", "Cowgirl"] },
    { name: "Suman", age: 26, image: "images/PI/image22.jpeg", services: ["Anal", "French Kissing", "Cowgirl"] },
    { name: "Radhika", age: 23, image: "images/PI/image23.jpeg", services: ["Anal", "Missionary", "Reverse Cowgirl"] },
    { name: "Ruchi", age: 19, image: "images/PI/image24.jpeg", services: ["Reverse Cowgirl", "French Kissing", "69 Position"] },
    { name: "Poonam", age: 26, image: "images/PI/image25.jpeg", services: ["Deep Throat", "Reverse Cowgirl", "Body to Body"] },
    { name: "Rakhi", age: 18, image: "images/PI/image26.jpeg", services: ["Cowgirl", "GFE", "French Kissing"] },
    { name: "Sapna", age: 20, image: "images/PI/image27.jpeg", services: ["Doggy Style", "French Kissing", "Missionary"] },
    { name: "Preeti", age: 25, image: "images/PI/image28.jpeg", services: ["69 Position", "French Kissing", "Doggy Style"] },
    { name: "Shweta", age: 21, image: "images/PI/image29.jpeg", services: ["Doggy Style", "GFE", "French Kissing"] },
    { name: "Kajal", age: 21, image: "images/PI/image30.jpeg", services: ["Oral", "French Kissing", "Missionary"] },
    { name: "Ritika", age: 18, image: "images/PI/image31.jpeg", services: ["French Kissing", "Deep Throat", "Cowgirl"] },
    { name: "Muskan", age: 18, image: "images/PI/image32.jpeg", services: ["GFE", "Oral", "Anal"] },
    { name: "Kirti", age: 27, image: "images/PI/image33.jpeg", services: ["Anal", "Oral", "Body to Body"] },
    { name: "Tanya", age: 27, image: "images/PI/image34.jpeg", services: ["Doggy Style", "Missionary", "French Kissing"] }
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
        const waLink2 = `https://wa.me/${BUSINESS_PHONE_2}?text=${encodedMessage}`;
        const callLink = `tel:+${BUSINESS_PHONE}`;

        card.innerHTML = `
            <div class="img-container">
                <img src="${profile.image}" alt="${profile.name} - Premium Escort and VIP Companion in Indore and Ujjain">
            </div>
            <div class="profile-info">
                <h3>${profile.name}, ${profile.age}</h3>
                <div class="service-bubbles">
                    ${bubblesHTML}
                </div>
            </div>
            <div class="actions" style="flex-wrap: wrap;">
                <a href="${callLink}" class="action-btn btn-call">📞 +91 9004365706</a>
                <a href="${waLink}" class="action-btn btn-whatsapp">💬 +91 9004365706</a>
                <a href="${waLink2}" class="action-btn btn-whatsapp" style="margin-top: 10px; flex: 1 1 100%;">💬 +91 9406562823</a>
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

