const images = ['images/image1.jpg', 'images/image2.jpg', 'images/image3.jpg'];
let currentIndex = 0;
const slide = document.getElementById('slide');

document.body.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    slide.src = images[currentIndex];
});