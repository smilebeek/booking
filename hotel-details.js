const hotelImages = [
    "images/hotel1.jpg", 
    "images/hotel2.jpg", 
    "images/hotel3.jpg"
];
let currentIndex = 0;

document.querySelector('.right').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % hotelImages.length;
    document.getElementById('current-image').src = hotelImages[currentIndex];
});

document.querySelector('.left').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + hotelImages.length) % hotelImages.length;
    document.getElementById('current-image').src = hotelImages[currentIndex];
});

// Capture URL parameters for hotel details (e.g., from the search results page)
const params = new URLSearchParams(window.location.search);
const hotelName = params.get("name");
const hotelPrice = params.get("price");
const hotelDescription = params.get("description");

document.getElementById("hotel-name").innerText = hotelName;
document.getElementById("hotel-price").innerText = hotelPrice;
document.getElementById("hotel-description").innerText = hotelDescription;

// Back button functionality
document.getElementById("back-button").addEventListener("click", () => {
    window.history.back(); // Go back to the previous page
});