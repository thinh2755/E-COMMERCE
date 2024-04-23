const navbarbrand = document.querySelector("#navbar-brand");

navbarbrand.addEventListener("keydown", function(event) {
    if(event.code === "navbar-brand") {
        click();
    }
});

function click() {
    // Redirect to index1.html
    window.location.href = "index1.html";
}