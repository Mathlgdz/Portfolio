document.addEventListener("DOMContentLoaded", function() {
    
    // --- 1. EFFET MACHINE A ECRIRE (TITRE) ---
    let texte = document.querySelector('h1');
    if (texte) {
        let contenu = texte.innerHTML;
        texte.innerHTML = '';
        let index = 0;
        let timer = setInterval(function() {
            if (index < contenu.length) {
                texte.innerHTML += contenu.charAt(index);
                index++;
            } else {
                clearInterval(timer);
            }
        }, 250);
    }

    // --- 2. LOGIQUE DE TRANSITION ---
    const enterBtn = document.querySelector('.button');
    const overlay = document.querySelector('.transition-overlay');
    const bars = document.querySelector('.loader-bars');

    // On vérifie si le bouton existe bien
    if (enterBtn) {
        console.log("Bouton ENTRER trouvé, script actif."); // Vérification dans la console

        enterBtn.addEventListener('click', function(e) {
            console.log("Clic détecté !"); // Vérification du clic
            e.preventDefault(); // EMPÊCHE LE CHANGEMENT DE PAGE IMMÉDIAT
            
            const targetUrl = this.getAttribute('href'); 

            // 1. Écran noir
            if (overlay) overlay.classList.add('active');

            // 2. Barres de chargement (après 0.5s)
            setTimeout(() => {
                if (bars) {
                    bars.style.opacity = '1';
                    bars.classList.add('animate');
                }
            }, 500);
            // 4. Redirection finale (après 4.5s au total)
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 3000);
        });
    } else {
        console.error("Erreur : Le bouton .button n'a pas été trouvé dans le HTML.");
    }
});