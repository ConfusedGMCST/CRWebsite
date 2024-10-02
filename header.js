let darkTheme = false

function homePage() {
    window.open("index.html","_self")
}
function companiesPage() {
    window.open("companies.html","_self")
}
function infoPage() {
    window.open("info.html","_self")
}
function themeButton() {
    const consumerHeader = document.getElementById("consumerHeader");
    const homeButton = document.getElementById("homeButton");
    const infoButton = document.getElementById("infoButton");
    const companiesButton = document.getElementById("companiesButton");
    const body = document.body;
    if (darkTheme == true) {
        darkTheme = false;
        body.style.backgroundImage = "linear-gradient(90deg, #a6a6a6, #cdcdcd)";
        consumerHeader.style.color = "black";
        homeButton.style.color = "black";
        infoButton.style.color = "black";
        companiesButton.style.color = "black";
    } else {
        darkTheme = true;
        body.style.backgroundImage = "linear-gradient(90deg, #3d3d3d, #4e4e4e)";
        consumerHeader.style.color = "white";
        homeButton.style.color = "white";
        infoButton.style.color = "white";
        companiesButton.style.color = "white";
    }
}