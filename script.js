const thumbnailContainer = document.getElementById('thumbnailContainer');
const displayImage = document.getElementById('mainImage');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const galleryImages = thumbnailContainer.getElementsByTagName('img');
let currentIndex = 0;

function updateDisplayImage(index) {
    displayImage.src = galleryImages[index].src;
}

function updateNavigationButtons() {
    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === galleryImages.length - 1;
}

function onThumbnailClick(event) {
    currentIndex = Array.from(galleryImages).indexOf(event.target);
    updateDisplayImage(currentIndex);
    updateNavigationButtons();
}

function onPrevButtonClick() {
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    updateDisplayImage(currentIndex);
    updateNavigationButtons();
}

function onNextButtonClick() {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    updateDisplayImage(currentIndex);
    updateNavigationButtons();
}

thumbnailContainer.addEventListener('click', onThumbnailClick);
prevButton.addEventListener('mouseover', onPrevButtonClick);
nextButton.addEventListener('mouseover', onNextButtonClick);

updateDisplayImage(currentIndex);
updateNavigationButtons();


const exitButton = document.getElementById('exitButton');

function onExitButtonClick() {
    const confirmExit = confirm('Are you sure you want to exit this assignment?');
    if (confirmExit) {
        window.close();
    }
}

exitButton.addEventListener('click', onExitButtonClick);
