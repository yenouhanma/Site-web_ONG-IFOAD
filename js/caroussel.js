const carousel = document.getElementById('carousel');

// Animation Tailwind personnalisée
let isPaused = false;

function startCarousel() {
    carousel.style.animation = 'scroll 20s linear infinite';
}

function pauseCarousel() {
    carousel.style.animationPlayState = 'paused';
}

function resumeCarousel() {
    carousel.style.animationPlayState = 'running';
}

carousel.addEventListener('mouseover', pauseCarousel);
carousel.addEventListener('mouseout', resumeCarousel);

startCarousel();
