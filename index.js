window.onload = function() {
    const HomeButton = document.getElementById('homeButton');
    HomeButton.addEventListener("mouseover", function() {
        this.style.cursor = "pointer";
    })
    HomeButton.addEventListener("mouseout", function() {
        this.style.cursor = "default";
    })
    HomeButton.addEventListener("mousedown", function() {
        this.style.cursor = "default"
        /*window.location.href = ""; I'll set when I deploy the website ¯\_(ツ)_/¯*/
    })
}

function homePage() {
    window.open("index.html","_self")
}
function companiesPage() {
    window.open("companies.html","_self")
}
function infoPage() {
    window.open("info.html","_self")
}