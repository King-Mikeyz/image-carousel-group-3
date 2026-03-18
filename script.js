// Select all slides and buttons
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentSlide = 0;          // Tracks the current active slide
const totalSlides = slides.length;

// Function to show slide at given index
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
    });
}

// Move to next slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides; // loops to first slide
    showSlide(currentSlide);
}

// Move to previous slide
function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; // loops to last slide
    showSlide(currentSlide);
}

// Event listeners for buttons
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

// Optional: autoplay every 5 seconds
let autoplayInterval = setInterval(nextSlide, 5000);

// Pause autoplay on hover
const slideshowContainer = document.querySelector(".slideshow-container");
slideshowContainer.addEventListener("mouseenter", () => clearInterval(autoplayInterval));
slideshowContainer.addEventListener("mouseleave", () => {
    autoplayInterval = setInterval(nextSlide, 5000);
});

// Initialize first slide
showSlide(currentSlide);