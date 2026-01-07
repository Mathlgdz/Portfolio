/* --- script.js --- */

const menuBtn = document.getElementById('menuBtn');
const menuOverlay = document.getElementById('menuOverlay');
const menuLinks = document.querySelectorAll('.menu-link');
const body = document.body;
const themeBtn = document.getElementById('themeBtn');

// --- GESTION DU MODE SOMBRE ---
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') enableDarkMode();

function enableDarkMode() {
    body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
    themeBtn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>';
}

function disableDarkMode() {
    body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light');
    themeBtn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';
}

themeBtn.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) disableDarkMode();
    else enableDarkMode();
});

// --- CHARGEMENT DES PROJETS ---
async function loadProjects() {
    try {
        const response = await fetch('data.json');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const projects = await response.json();
        const container = document.getElementById('projects-container');
        container.innerHTML = '';

        projects.forEach(project => {
            let mediaContent = '';
            // Gestion Vidéo vs Image
            if (project.mediaType === 'video') {
                mediaContent = `
                    <video autoplay muted loop playsinline class="card-media">
                        <source src="${project.mediaSrc}" type="video/mp4">
                        <img src="${project.poster || ''}" alt="${project.title}">
                    </video>`;
            } else {
                mediaContent = `<img src="${project.mediaSrc}" alt="${project.title}" class="card-media">`;
            }

            const layoutClass = project.layout === 'wide' ? 'wide' : (project.layout === 'tall' ? 'tall' : '');

            // CRÉATION DU LIEN VERS PROJET.HTML AVEC L'ID
            const cardHTML = `
                <a href="projet.html?id=${project.id}" class="card ${layoutClass}" style="display: flex; text-decoration: none;">
                    ${mediaContent}
                    <div class="card-content">
                        <span class="tag ${project.tagColor}">${project.category}</span>
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                    </div>
                </a>
            `;
            container.innerHTML += cardHTML;
        });

        initScrollAnimations();

    } catch (error) {
        console.error("Erreur chargement projets :", error);
    }
}

// --- MENU & ANIMATIONS ---
let isMenuOpen = false;
function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
        menuOverlay.classList.add('active'); 
        body.classList.add('menu-open');
        menuBtn.textContent = "Fermer";
        menuBtn.style.background = "#ffffff"; 
        menuBtn.style.color = "var(--col-deep-blue)";
    } else {
        menuOverlay.classList.remove('active'); 
        body.classList.remove('menu-open');
        menuBtn.textContent = "Menu";
        menuBtn.style.background = ""; 
        menuBtn.style.color = "";
    }
}
menuBtn.addEventListener('click', toggleMenu);
menuLinks.forEach(link => link.addEventListener('click', toggleMenu));

function initScrollAnimations() {
    // MODIFICATION ICI : Ajout de .cv-card dans la liste des éléments surveillés
    const scrollElements = document.querySelectorAll('.card, .skill-card, .contact-card, .cv-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    scrollElements.forEach(el => {
        if(el.style.opacity !== '1') {
            el.style.opacity = 0; 
            el.style.transform = 'translateY(30px)'; 
            el.style.transition = 'all 0.6s ease-out'; 
            observer.observe(el);
        }
    });
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    // Mouse Glow
    const glow = document.querySelector('.mouse-glow');
    if (glow) {
        window.addEventListener('mousemove', (e) => {
            glow.style.opacity = '1';
            glow.style.left = e.clientX + 'px';
            glow.style.top = e.clientY + 'px';
        });
    }
});