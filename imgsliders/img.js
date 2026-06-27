const slider = document.getElementById("slider");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const images = [
    "images/image1.jpg",
    "images/image2.jpg",
    "images/image3.jpg",
    "images/image4.jpg"
];

let currentIndex = 0;

function showImage() {
    slider.src = images[currentIndex];
}

nextBtn.addEventListener("click", () => {

    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    showImage();

});

prevBtn.addEventListener("click", () => {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    showImage();

});