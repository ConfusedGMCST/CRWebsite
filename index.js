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
        alert("hi");
        /*window.location.href = ""; I'll set when I deploy the website ¯\_(ツ)_/¯*/
    })
}