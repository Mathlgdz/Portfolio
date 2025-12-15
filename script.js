// --- GESTION DE L'OUVERTURE FLUIDE (RIDEAU) ---
window.addEventListener('load', () => {
    const overlay = document.querySelector('.reveal-overlay');
    if (overlay) {
        setTimeout(() => {
            overlay.classList.add('hidden');
        }, 100);
        
        setTimeout(() => {
            overlay.remove();
        }, 1000);
    }
});

// On attend que le DOM soit chargé pour le reste
document.addEventListener('DOMContentLoaded', () => {

    const navLinks = document.querySelectorAll('.side-nav li');
    const sections = document.querySelectorAll('.content-section');

    // Référence aux blocs projets univ
    const univIntroBlock = document.getElementById('univ-intro');
    const univProjectsContainer = document.getElementById('univ-projects-container');

    // Référence aux blocs projets perso
    const persoIntroBlock = document.getElementById('perso-intro');
    const persoProjectsContainer = document.getElementById('perso-projects-container');

    // --- NAVIGATION ---
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            const targetId = this.getAttribute('data-target');
            
            sections.forEach(section => {
                section.classList.remove('active');
            });
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');

                // --- GESTION DE LA RÉAPPARITION FLUIDE (UNIV) ---
                if (targetId === 'section-2') {
                    if (univIntroBlock) univIntroBlock.classList.remove('hidden');
                    if (univProjectsContainer) univProjectsContainer.classList.remove('visible');
                }

                // --- GESTION DE LA RÉAPPARITION FLUIDE (PERSO) ---
                if (targetId === 'section-3') {
                    if (persoIntroBlock) persoIntroBlock.classList.remove('hidden');
                    if (persoProjectsContainer) persoProjectsContainer.classList.remove('visible');
                }

                // Reset Animation Separateur
                const separator = targetSection.querySelector('.separator');
                if(separator) {
                    separator.style.animation = 'none';
                    void separator.offsetWidth; // Trigger reflow
                    separator.style.animation = 'expandLine 2s ease-out forwards 1.5s'; 
                }
                
                // Reset Animation Pivot
                const pivotO = targetSection.querySelector('.pivot-o');
                if(pivotO) {
                    pivotO.style.animation = 'none';
                    void pivotO.offsetWidth; 
                    pivotO.style.animation = 'rotate3D 30s ease-in-out infinite 2.5s';
                }

                const pivotI = targetSection.querySelector('.pivot-I');
                if(pivotI) {
                    pivotI.style.animation = 'none';
                    void pivotI.offsetWidth; 
                    pivotI.style.animation = 'rotate3D2 30s ease-in-out infinite 2.5s';
                }

                // --- RESET DES ANIMATIONS D'ENTREE ---
                const animatedElements = targetSection.querySelectorAll('.content-wrapper > *:not(.separator)');
                
                animatedElements.forEach(el => {
                    el.style.animation = 'none';
                    void el.offsetHeight; 
                    el.style.animation = ''; 
                });
            }
        });
    });

    // --- GESTION DU CLIC SUR LA FLÈCHE ---
    const arrow = document.querySelector('.arrow-icon');
    if (arrow) {
        arrow.addEventListener('click', function() {
            const section2Link = document.querySelector('.side-nav li[data-target="section-2"]');
            if (section2Link) {
                section2Link.click();
            }
        });
    }

    // --- GESTION DU TOGGLE PROJETS UNIV ---
    const btnUnivDiscover = document.getElementById('btn-univ-discover');
    const btnUnivBack = document.getElementById('btn-univ-back');

    if (btnUnivDiscover && univIntroBlock && univProjectsContainer) {
        btnUnivDiscover.addEventListener('click', function(e) {
            e.preventDefault(); 
            univIntroBlock.classList.add('hidden');
            setTimeout(() => {
                univProjectsContainer.classList.add('visible');
            }, 300);
        });
    }

    if (btnUnivBack && univIntroBlock && univProjectsContainer) {
        btnUnivBack.addEventListener('click', function() {
            univProjectsContainer.classList.remove('visible');
            setTimeout(() => {
                univIntroBlock.classList.remove('hidden');
            }, 500);
        });
    }

    // --- GESTION DU TOGGLE PROJETS PERSO ---
    const btnPersoDiscover = document.getElementById('btn-perso-discover');
    const btnPersoBack = document.getElementById('btn-perso-back');

    if (btnPersoDiscover && persoIntroBlock && persoProjectsContainer) {
        btnPersoDiscover.addEventListener('click', function(e) {
            e.preventDefault(); 
            persoIntroBlock.classList.add('hidden');
            setTimeout(() => {
                persoProjectsContainer.classList.add('visible');
            }, 300);
        });
    }

    if (btnPersoBack && persoIntroBlock && persoProjectsContainer) {
        btnPersoBack.addEventListener('click', function() {
            persoProjectsContainer.classList.remove('visible');
            setTimeout(() => {
                persoIntroBlock.classList.remove('hidden');
            }, 500);
        });
    }

    // =========================================
    // --- GESTION DE LA MODALE (POPUP) ---
    // =========================================

    // 1. Base de données des projets
    const projectsData = {
        "mercato": {
            title: "Mercato Viz",
            category: "Data Visualisation / Web",
            images: ["/Images/Mercatoviz.png", "/Images/Mercatoviz2.png", "/Images/Mercatoviz3.png", "/Images/Mercatoviz4.png", "/Images/Mercatoviz5.png"], 
            stack: "HTML, CSS, JavaScript (D3.js), GitHub, VScode",
            description: `Ce projet a été réalisé dans le cadre d'un projet universitaire (module DataViz). L'objectif était de concevoir un site web interactif capable de raconter l'évolution d'un phénomène à travers la donnée.

            Nous avons choisi d'analyser le marché des transferts de football pour répondre à cette consigne. Le site est hébergé sur GitHub, et permet de visualiser l'inflation des prix et les tendances du marché, alliant ainsi développement technique et analyse de l'information.`,
            link: "https://idrisouus.github.io/Mercato_Viz/"
        },
        "inventory": {
            title: "Web Inventory",
            category: "Développement Back-end / SQL",
            images: ["/Images/Webinventory2.png", "/Images/Webinventory3.png", "/Images/Webinventory4.png", "/Images/Webinventory5.png"],
            stack: "PHP, MySQL,HTML/CSS, JavaScript, VScode",
            description: `Ce projet m'a permis de créer un site web d'inventaire complet. J'ai sélectionné un sujet qui m'intéressait, à savoir la composition de l'équipe du Paris Saint-Germain. Pour réussir, nous devions impérativement intégrer une base de données et utiliser des technologies spécifiques. J'ai ainsi pu développer des fonctionnalités essentielles comme le tri dynamique et le filtrage des joueurs.`,
            link: "https://webinventory.legedza.projetsmmichamps.fr"
        },
        "teloche": {
            title: "La Téloche",
            category: "Audiovisuel / Montage Vidéo",
            images: ["/Images/lateloche.png"],
            stack: "Premiere Pro, After Effects, Caméra 4K",
            description: `Description`,
            link: "https://youtube.com/..."
        },
    };

    // 2. Sélection des éléments du DOM
    const modalOverlay = document.getElementById('project-modal');
    const modalCloseBtn = document.querySelector('.modal-close');
    const modalTitle = document.getElementById('modal-title');
    const modalTags = document.getElementById('modal-tags');
    const swiperWrapper = document.getElementById('swiper-wrapper-content'); 
    
    const modalDesc = document.getElementById('modal-desc');
    const modalStack = document.getElementById('modal-stack'); 
    const modalLinkBtn = document.getElementById('modal-btn-link');

    const projectLinks = document.querySelectorAll('.small-link');

    // Variable pour stocker l'instance du Swiper
    let mySwiper = null;

    // 3. Fonction pour ouvrir la modale
    projectLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const projectId = this.getAttribute('data-id');
            
            if (projectsData[projectId]) {
                const data = projectsData[projectId];
                
                modalTitle.innerHTML = data.title;
                modalTags.innerHTML = data.category;
                modalDesc.innerHTML = data.description;
                modalStack.innerHTML = data.stack ? data.stack : "Non spécifié";

                // --- GESTION DU SWIPER (Carrousel) ---
                
                // 1. Vider le contenu précédent du carrousel
                swiperWrapper.innerHTML = '';

                // 2. Générer les slides pour chaque image du tableau
                if (data.images && data.images.length > 0) {
                    data.images.forEach(imgSrc => {
                        const slideDiv = document.createElement('div');
                        slideDiv.className = 'swiper-slide';
                        
                        const img = document.createElement('img');
                        img.src = imgSrc;
                        img.alt = data.title;
                        
                        slideDiv.appendChild(img);
                        swiperWrapper.appendChild(slideDiv);
                    });
                } else {
                    // Fallback si pas d'image
                    swiperWrapper.innerHTML = '<div class="swiper-slide"><p>Aucune image</p></div>';
                }

                // 3. Initialiser (ou réinitialiser) Swiper
                if (mySwiper) {
                    mySwiper.destroy(true, true); 
                }

                // --- CORRECTION DU BUG ICI ---
                mySwiper = new Swiper(".mySwiper", {
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    },
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: true,
                    },
                    loop: true, 
                    grabCursor: true, 
                    autoHeight: false, 
                    
                    // CES DEUX LIGNES CORRIGENT LE BUG D'AFFICHAGE DANS LA MODALE :
                    observer: true, 
                    observeParents: true 
                });

                // --- FIN GESTION SWIPER ---

                if (modalLinkBtn) {
                    if (data.link && data.link !== "#") {
                        modalLinkBtn.href = data.link;
                        modalLinkBtn.style.display = "inline-block";
                    } else {
                        modalLinkBtn.href = "#";
                        modalLinkBtn.style.display = "none";
                    }
                }
                
                modalOverlay.classList.add('active');
            }
        });
    });

    // 4. Fonction pour fermer la modale
    function closeModal() {
        modalOverlay.classList.remove('active');
    }

    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', closeModal);
    }

    if (modalOverlay) {
        modalOverlay.addEventListener('click', function(e) {
            if (e.target === modalOverlay) {
                closeModal();
            }
        });
    }

}); // Fin du DOMContentLoaded