// Ambil elemen penting dari DOM
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Periksa apakah ada preferensi tema yang disimpan di localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  body.classList.add("dark-mode"); // Aktifkan dark mode jika disimpan sebelumnya
  themeToggle.checked = true; // Pastikan toggle dalam posisi 'checked'
} else {
  body.classList.remove("dark-mode"); // Default ke light mode
  themeToggle.checked = false;
}

// Tambahkan event listener untuk mendeteksi perubahan pada toggle
themeToggle.addEventListener("change", () => {
  if (themeToggle.checked) {
    body.classList.add("dark-mode"); // Aktifkan dark mode
    localStorage.setItem("theme", "dark"); // Simpan preferensi ke localStorage
  } else {
    body.classList.remove("dark-mode"); // Matikan dark mode
    localStorage.setItem("theme", "light"); // Simpan preferensi ke localStorage
  }
});

// Slide show foto gw
let currentIndex = 0; // Indeks gambar aktif
const slides = document.querySelector('.slide'); // Ambil container slide
const totalSlides = slides.children.length; // Total gambar di dalam slide

function showSlide(index) {
  // Geser semua gambar di dalam slide berdasarkan index
  slides.style.transform = `translateX(${-index * 100}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides; // Pindah ke gambar berikutnya
  showSlide(currentIndex);
}

// Ganti slide setiap 3 detik
setInterval(nextSlide, 3000);

// Fungsi untuk toggle fullscreen
function toggleFullscreen(videoId) {
  const videoElement = document.getElementById(videoId);

  if (videoElement.requestFullscreen) {
    videoElement.requestFullscreen(); // Untuk browser yang mendukung Fullscreen API
  } else if (videoElement.mozRequestFullScreen) { // Firefox
    videoElement.mozRequestFullScreen();
  } else if (videoElement.webkitRequestFullscreen) { // Chrome, Safari
    videoElement.webkitRequestFullscreen();
  } else if (videoElement.msRequestFullscreen) { // Internet Explorer
    videoElement.msRequestFullscreen();
  }
}

