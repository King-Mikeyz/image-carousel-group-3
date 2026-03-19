// Select elements
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const slideshowContainer = document.querySelector(".slideshow-container");
const navButtons = document.querySelector(".nav-buttons");

let currentSlide = 0;
const totalSlides = slides.length;
let autoplayInterval;

// Show slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
    });
}

// Next
function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

// Previous
function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// Button events
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

// AUTOPLAY FUNCTION (clean)
function startAutoplay() {
    autoplayInterval = setInterval(nextSlide, 5000);
}

function stopAutoplay() {
    clearInterval(autoplayInterval);
}

// Start autoplay
startAutoplay();

// Desktop hover pause only
if (window.matchMedia("(min-width: 769px)").matches) {
    slideshowContainer.addEventListener("mouseenter", stopAutoplay);
    slideshowContainer.addEventListener("mouseleave", startAutoplay);
}

// Mobile toggle buttons
if (window.matchMedia("(max-width: 768px)").matches) {
    slideshowContainer.addEventListener("click", () => {
        navButtons.classList.toggle("show-buttons");
    });
}

// Init
showSlide(currentSlide);