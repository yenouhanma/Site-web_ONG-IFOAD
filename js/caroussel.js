// Pour les images de la page d'accueil
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

const showSlide = (index) => {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
};

document.getElementById("nextBtn").addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});

document.getElementById("prevBtn").addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});

// Auto-slide every 6 seconds
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 6000);







// Pour les logo sponsors
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
