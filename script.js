const menuBtn = document.getElementById('menuBtn');
const menuOverlay = document.getElementById('menuOverlay');
const menuLinks = document.querySelectorAll('.menu-link');
const body = document.body;
const themeBtn = document.getElementById('themeBtn');

// --- GESTION DU MODE SOMBRE (MANUEL) ---

// 1. Vérifier si l'utilisateur a déjà choisi une préférence
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    enableDarkMode();
}

// 2. Fonction pour activer le mode sombre
function enableDarkMode() {
    body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
    // Change l'icône en Soleil
    themeBtn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>';
    
    // SUPPRESSION DU FORÇAGE DE STYLE ICI : Le CSS s'en charge via body.dark-mode .nav-btn
}

// 3. Fonction pour désactiver le mode sombre (Mode Clair)
function disableDarkMode() {
    body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light');
    // Change l'icône en Lune
    themeBtn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';
    
    // SUPPRESSION DU FORÇAGE DE STYLE ICI
}

// 4. Écouteur d'événement sur le bouton thème
themeBtn.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
});


// --- CHARGEMENT DES PROJETS VIA JSON ---
async function loadProjects() {
    try {
        // Assurez-vous que le fichier data.json est bien à la racine du dossier
        const response = await fetch('data.json');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const projects = await response.json();
        const container = document.getElementById('projects-container');

        // Vider le conteneur avant d'ajouter pour éviter les doublons si rappelée
        container.innerHTML = '';

        projects.forEach(project => {
            let mediaContent = '';
            if (project.mediaType === 'video') {
                mediaContent = `
                    <video autoplay muted loop playsinline class="card-media">
                        <source src="${project.mediaSrc}" type="video/mp4">
                        <img src="${project.poster}" alt="${project.title}" style="width:100%; height:100%; object-fit:cover;">
                    </video>`;
            } else {
                mediaContent = `<img src="${project.mediaSrc}" alt="${project.title}" class="card-media">`;
            }

            const layoutClass = project.layout === 'wide' ? 'wide' : (project.layout === 'tall' ? 'tall' : '');

            const cardHTML = `
                <article class="card ${layoutClass}">
                    ${mediaContent}
                    <div class="card-content">
                        <span class="tag ${project.tagColor}">${project.category}</span>
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                    </div>
                </article>
            `;
            container.innerHTML += cardHTML;
        });

        // On initialise l'observer sur les cartes nouvellement créées
        initScrollAnimations();

    } catch (error) {
        console.error("Erreur lors du chargement des projets :", error);
        // Optionnel : Afficher un message d'erreur à l'utilisateur dans le container
        const container = document.getElementById('projects-container');
        if(container) container.innerHTML = '<p>Impossible de charger les projets.</p>';
    }
}

// --- MENU ---
let isMenuOpen = false;

function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
        menuOverlay.classList.add('active'); 
        body.classList.add('menu-open');
        menuBtn.textContent = "Fermer"; 
        
        // Le changement de couleur est géré par le CSS (body.menu-open header)
        // On force juste le style blanc pour le bouton fermer si besoin de contraste spécifique
        // Mais idéalement, laissez le CSS gérer ça aussi.
        menuBtn.style.background = "#ffffff"; 
        menuBtn.style.color = "var(--col-deep-blue)";
    } else {
        menuOverlay.classList.remove('active'); 
        body.classList.remove('menu-open');
        menuBtn.textContent = "Menu";
        
        // On retire les styles inline pour laisser le CSS (Dark/Light mode) reprendre la main
        menuBtn.style.background = ""; 
        menuBtn.style.color = "";
    }
}

menuBtn.addEventListener('click', toggleMenu);
menuLinks.forEach(link => { link.addEventListener('click', toggleMenu); });


// --- ANIMATIONS ---
function initScrollAnimations() {
    // On cible aussi les cartes projets qui viennent d'être chargées
    const scrollElements = document.querySelectorAll('.card, .skill-card, .contact-section-inner');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                // Une fois apparu, on peut arrêter d'observer pour la performance
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    scrollElements.forEach(el => {
        // On applique le style initial seulement si l'élément n'est pas déjà visible
        if(el.style.opacity !== '1') {
            el.style.opacity = 0; 
            el.style.transform = 'translateY(30px)'; 
            el.style.transition = 'all 0.6s ease-out'; 
            observer.observe(el);
        }
    });
}

// Initialisation globale
document.addEventListener('DOMContentLoaded', () => {
    // 1. Charger les projets
    loadProjects();

    // 2. Observer les éléments statiques (compétences, contact)
    // Note : initScrollAnimations s'occupera de tout, pas besoin de dupliquer le code ici
    initScrollAnimations();
});