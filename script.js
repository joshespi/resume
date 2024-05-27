// Function to save the scroll position
function saveScrollPosition() {
sessionStorage.setItem("scrollPosition", window.scrollY);
}

// Function to restore the scroll position
function restoreScrollPosition() {
const scrollPosition = sessionStorage.getItem("scrollPosition");
if (scrollPosition) {
    window.scrollTo(0, parseInt(scrollPosition));
    sessionStorage.removeItem("scrollPosition");
}
}

// Event listener to save the scroll position when the user scrolls
window.addEventListener("scroll", saveScrollPosition);

// Event listener to restore the scroll position on page load
window.addEventListener("load", restoreScrollPosition);
