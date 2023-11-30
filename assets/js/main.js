console.log("first")

// Update Footer Credit year 
document.querySelector("#footer-credit span").innerText = new Date().getFullYear();

// Render cities in top footer 
function renderCitiesInTopFooter() {
    const container = document.querySelector("footer .top #cities-link");
    const screenWidth = window.innerWidth;

    let itemCount = 20; // Default to 20 items

    if (screenWidth > 768) {
        itemCount = 122; // If screen width is above 600px, render 122 items
    }

    const innerHtml = Array.from({ length: itemCount }, (_, index) => {
        return `<li><a href="#">Place Name ${index + 1}</a></li>`;
    }).join('');

    container.innerHTML = innerHtml;
}
// Call the function to render the HTML
renderCitiesInTopFooter();
window.addEventListener('resize', renderCitiesInTopFooter);