// Off canvas mobile menu
document.querySelector("header .mob-menu-toggler").addEventListener("click", () => {
    document.querySelector("header .mob").classList.toggle("off-canvas-active")
})


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


// App Download Section
const appSection = document.querySelector("section.app-download");
const apps = appSection.querySelectorAll(".apps .app");
const appName = appSection.querySelector(".app-details #app-name");
const appDesc = appSection.querySelector(".app-details #app-desc");
const appImg = appSection.querySelector(".app-details #app-img picture");
const appFeature1 = appSection.querySelector(".app-details #app-feature-1");
const appFeature2 = appSection.querySelector(".app-details #app-feature-2");
const appFeature3 = appSection.querySelector(".app-details #app-feature-3");
const appFeature4 = appSection.querySelector(".app-details #app-feature-4");

// Attach event-listener to change the app-detail
apps.forEach(app => {
    app.addEventListener('click', (event) => {
        const selectedApp = event.target.closest('.app');
        const selectedAppId = selectedApp.getAttribute("id")
        if (!selectedApp) return;
        
        // Remove 'selected' class from all apps
        apps.forEach(app => {
            app.classList.remove('selected');
        });
    
        // Add 'selected' class to the clicked app
        selectedApp.classList.add('selected');

        // Change the app details
        if(selectedAppId == "mob-app"){
            appName.textContent = "Mobile App";
            appDesc.textContent = "Free AQI Mobile App For Your IOS, Android, And Smart TV Devices";
        }
        else if(selectedAppId == "tv-app"){
            appName.textContent = "Tv App";
            appDesc.textContent = "Free AQI Tv App For Your IOS, Android, And Smart TV Devices";
        }

    });
});


// console.log(appName)
// console.log(appDesc)
// console.log(appImg)
// console.log(appFeature1)
// console.log(appFeature2)
// console.log(appFeature3)
// console.log(appFeature4)