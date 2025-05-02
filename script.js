let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.slider-item');
    const totalSlides = slides.length;

    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

    const slider = document.getElementById('slider');
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Tự động chuyển slide mỗi 3 giây (optional)
setInterval(() => {
    moveSlide(1);
}, 3000);
