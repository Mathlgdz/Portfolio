/* --- project-script.js --- */

function getProjectId() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    return id ? parseInt(id) : null;
}

async function loadProjectDetails() {
    const id = getProjectId();
    if (!id) { window.location.href = 'index.html'; return; }

    try {
        // Anti-cache pour être sûr de charger la dernière version du JSON
        const response = await fetch('data.json?t=' + new Date().getTime());
        if (!response.ok) throw new Error("Impossible de charger le JSON");
        
        const projects = await response.json();
        const project = projects.find(p => p.id === id);

        if (!project) {
            document.querySelector('.project-hero-content').innerHTML = "<h1>Projet introuvable</h1><a href='index.html' class='back-btn'>Retour</a>";
            return;
        }

        // --- Remplissage Textes ---
        const setText = (elementId, txt) => { 
            const el = document.getElementById(elementId); 
            if(el) el.innerText = txt || ""; 
        };

        setText('p-title', project.title);
        setText('p-category', (project.category || "").toUpperCase());
        setText('p-year', project.année); 
        setText('p-desc', project.description);
        
        const img = document.getElementById('p-img');
        if(img) img.src = project.mediaSrc || "";

        const btnLink = document.getElementById('p-link');
        if (project.lien && project.lien.trim() !== "") {
            btnLink.href = project.lien;
            btnLink.style.display = 'inline-flex';
        } else if(btnLink) {
            btnLink.style.display = 'none';
        }

        setText('p-long-desc', project.descriptionpage || project.description);
        setText('p-interest', project.typedeprojet || "Projet Universitaire");
        setText('p-role', project.role || "Créateur");
        setText('p-duration', project.duree || "N/C");

        // Technologies
        const techBox = document.getElementById('p-techs');
        if (techBox) {
            let techsArray = [];
            if (project.technologies) {
                techsArray = typeof project.technologies === 'string' 
                    ? project.technologies.split(',') 
                    : project.technologies;
            }
            techBox.innerHTML = techsArray.length > 0 
                ? techsArray.map(t => `<span class="tech-pill">${t.trim()}</span>`).join('') 
                : '<span class="tech-pill">Non spécifié</span>';
        }

        // --- GALERIE (SYSTÈME ILLIMITÉ) ---
        const galleryContainer = document.getElementById('simple-carousel-container');
        const galleryTitle = document.getElementById('gallery-title');

        if (galleryContainer) {
            // Logique pour récupérer un nombre illimité d'images (images1, images2, images10...)
            const images = Object.keys(project)
                .filter(key => /^images\d+$/.test(key)) // Garde uniquement les clés "images" + chiffre
                .sort((a, b) => {
                    // Tri numérique (pour que images10 vienne après images2)
                    const numA = parseInt(a.replace('images', ''));
                    const numB = parseInt(b.replace('images', ''));
                    return numA - numB;
                })
                .map(key => project[key]) // Récupère l'URL
                .filter(url => url && url.trim() !== ""); // Enlève les vides

            if (images.length > 0) {
                // Initialisation du carrousel maison avec la liste dynamique
                initSimpleCarousel(galleryContainer, images);
                
                galleryContainer.style.display = 'block';
                if(galleryTitle) galleryTitle.style.display = 'block';
            } else {
                galleryContainer.style.display = 'none';
                if(galleryTitle) galleryTitle.style.display = 'none';
            }
        }

    } catch (error) {
        console.error("Erreur:", error);
    }
}

// --- FONCTION DU CARROUSEL MAISON ---
function initSimpleCarousel(container, images) {
    // 1. Créer la structure HTML interne (Track + Slides + Boutons)
    let slidesHTML = images.map(src => `
        <div class="carousel-slide">
            <img src="${src}" alt="Galerie image" onerror="this.style.display='none'; this.parentElement.innerText='Image introuvable';">
        </div>
    `).join('');

    container.innerHTML = `
        <div class="carousel-track">${slidesHTML}</div>
        <button class="carousel-btn prev">&#10094;</button>
        <button class="carousel-btn next">&#10095;</button>
        <div class="carousel-counter">1 / ${images.length}</div>
    `;

    // 2. Logique Javascript
    const track = container.querySelector('.carousel-track');
    const prevBtn = container.querySelector('.prev');
    const nextBtn = container.querySelector('.next');
    const counter = container.querySelector('.carousel-counter');
    
    let currentIndex = 0;
    const totalSlides = images.length;

    // Fonction qui déplace le "rail"
    const updateSlide = () => {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        counter.innerText = `${currentIndex + 1} / ${totalSlides}`;
    };

    // Clic Suivant
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalSlides; // Revient au début à la fin
        updateSlide();
    });

    // Clic Précédent
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Revient à la fin au début
        updateSlide();
    });

    // Masquer les boutons s'il n'y a qu'une seule image
    if (totalSlides <= 1) {
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
        counter.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', loadProjectDetails);