tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        RobotoMono: ["Roboto Mono"],
        ptsans: ["PT Sans"],
      },
    },
  },
};

const hamburgerButton = document.getElementById("hamburgerButton");

const ham1 = document.getElementById("ham1");
const ham2 = document.getElementById("ham2");
const ham3 = document.getElementById("ham3");

const navkecil = document.getElementById("navkecil");

hamburgerButton.addEventListener("click", function () {
  ham1.classList.toggle("rotate-45");
  ham2.classList.toggle("scale-0");
  ham3.classList.toggle("-rotate-45");

  navkecil.classList.toggle("scale-0");
});

// Mendapatkan elemen-elemen yang diperlukan
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;

// Fungsi untuk menampilkan slide berikutnya
function nextSlide() {
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  updateSlider();
}

// Fungsi untuk menampilkan slide sebelumnya
function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }
  updateSlider();
}

// Fungsi untuk memperbarui tampilan slider
function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === currentIndex) {
      slide.style.display = "block";
    } else {
      slide.style.display = "none";
    }
  });
}

// Tambahkan event listener untuk tombol Previous dan Next
prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);

// Memulai slider dengan slide pertama
updateSlider();
