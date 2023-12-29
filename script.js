const words = document.querySelectorAll('.words');
let currentWordIndex = 0;

function showNextWord() {
  words.forEach((word, index) => {
    if (index === currentWordIndex) {
      word.classList.add('active');
    } else {
      word.classList.remove('active');
    }
  });

  currentWordIndex = (currentWordIndex + 1) % words.length;
}

showNextWord();
setInterval(showNextWord, 2000);
const namasteImage = document.querySelector('.namaste-image');

// Initially hide the image
namasteImage.style.left = '-300px';

// Function to animate Namaste image
function animateNamasteImage() {
  namasteImage.style.left = '0'; // Position the image at the left corner
  setTimeout(() => {
    namasteImage.style.left = '-300px';
  }, 5000); 
}
setTimeout(() => {
  animateNamasteImage();
}, 5000);
setInterval(() => {
  animateNamasteImage();
}, 10000);