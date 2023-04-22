const slides = document.querySelectorAll('.slider img');
const bullets = document.querySelectorAll('.bullet');

let currentSlide = 0;

function showSlide(slideIndex) {
  slides.forEach(slide => slide.style.display = 'none');
  slides[slideIndex].style.display = 'block';

  bullets.forEach(bullet => bullet.classList.remove('active'));
  bullets[slideIndex].classList.add('active');
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

setInterval(nextSlide, 3000);

bullets.forEach((bullet, index) => {
  bullet.addEventListener('click', () => {
    currentSlide = index;
    showSlide(currentSlide);
  });
});
