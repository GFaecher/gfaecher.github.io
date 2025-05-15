const images = [
    'galleryImg1.jpg',
    'galleryImg2.jpg',
    'galleryImg3.jpg',
];

let currentIndex = 0;
const galleryImg = document.getElementById('gallery-img');

function showImage(index) {
    galleryImg.src = images[index];
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}