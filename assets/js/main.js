// Off canvas mobile menu
document.querySelector("header .mob-menu-toggler").addEventListener("click", () => {
    document.querySelector("header .mob").classList.toggle("off-canvas-active")
})

// UI Togggle Component
const uiToggles = document.querySelectorAll(".ui-toggle");

uiToggles.forEach(selector => {
    const toggleHandler = selector.querySelector(".ui-toggle-handler");

    toggleHandler.addEventListener("click", () => {
        selector.classList.toggle("active");
    });
});

document.addEventListener("click", (event) => {
    uiToggles.forEach(selector => {
        if (selector.classList.contains("ui-toggle-auto-close") && !selector.contains(event.target)) {
            selector.classList.remove("active");
        }
    });
});


// Main Dashboard Share Function
document.getElementById('main-dashboard-share-btn').addEventListener('click', function() {
    if (navigator.share) {
        navigator.share({
            title: document.title,
            url: window.location.href
        })
    } else {
        alert('Your browser does not supporting share web content directly.\n\nPlease copy the link and share.');
    }
});


// Ask for user location
const askUserLocation = async () => {
    navigator.geolocation.getCurrentPosition(
        (location) => {
            console.log(location);
            alert("Location received")
        },

        () => {
            alert("Location services is disabled.");
        }
    )
}


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