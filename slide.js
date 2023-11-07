let currentSlide5 = 0;
const slides5 = document.querySelectorAll('.slide5');

function nextSlide5() {
    slides5[currentSlide5].style.display = 'none';
    currentSlide5 = (currentSlide5 + 1) % slides5.length;
    slides5[currentSlide5].style.display = 'block';
}

function startSlider5() {
    slides5[currentSlide5].style.display = 'block';
    setInterval(nextSlide, 3000); // Altera a imagem a cada 3 segundos
}

startSlider5();
