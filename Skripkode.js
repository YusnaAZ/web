// Toggle Burger Menu
const burger = document.getElementById('menu-button');
const navLinks = document.getElementById('menu');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navLinks.classList.toggle('show');
});

// Toggle Theme
const themeToggle = document.getElementById('theme-toggle');

// Set default theme based on localStorage
if (localStorage.getItem('theme') === 'dark') {
    themeToggle.checked = true;
    document.body.classList.add('dark-theme');
}

themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        document.body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
    }
});

// Slideshow logic
let currentSlide = 0;
const slides = document.querySelectorAll('.slides img');

function showSlide(index) {
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    const offset = -currentSlide * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

// Auto-slide
setInterval(() => {
    currentSlide++;
    showSlide(currentSlide);
}, 3000); // Change slide every 3 seconds

// Optionally, you can add buttons to manually navigate slides
/*const prevButton = document.createElement('button');
prevButton.textContent = 'Previous';
prevButton.onclick = () => showSlide(currentSlide - 1);
document.body.appendChild(prevButton);

const nextButton = document.createElement('button'); 
nextButton.textContent = 'Next';
nextButton.onclick = () => showSlide(currentSlide + 1);
document.body.appendChild(nextButton);*/
