const introText = document.getElementById('intro-text');
const toggleBtn = document.getElementById('toggle-btn');

let isExpanded = false;

// Texte tronqué de base
const fullText = introText.innerText;
const maxLength = 150; // Nombre de caractères affichés avant le bouton

// Fonction pour tronquer le texte
function truncateText() {
    if (fullText.length > maxLength && !isExpanded) {
        introText.innerText = fullText.substring(0, maxLength) + '...';
    }
}

// Fonction pour basculer le texte complet
toggleBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (!isExpanded) {
        introText.innerText = fullText;
        toggleBtn.innerText = 'Réduire';
        isExpanded = true;
    } else {
        introText.innerText = fullText.substring(0, maxLength) + '...';
        toggleBtn.innerText = 'En savoir plus';
        isExpanded = false;
    }
});

// Initialiser
truncateText();



// Compteur d'animation
const counters = document.querySelectorAll('.counter');
const speed = 200;

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const increment = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 20);
        } else {
            counter.innerText = target;
        }
    };

    updateCount();
});


// Bouton de retour en haut de page
const scrollTopBtn = document.getElementById('scrollTopBtn');

// Afficher le bouton quand on scroll vers le bas
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { // Apparait après 300px de scroll
        scrollTopBtn.classList.remove('hidden');
    } else {
        scrollTopBtn.classList.add('hidden');
    }
});

// Remonter en haut quand on clique
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

