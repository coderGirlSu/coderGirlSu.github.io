// A function to show and hide the hamburgermenu
function burgerMenu() {
    // Find the element by ID called burger-menu in html
    let menu = document.getElementById("burger-menu"); 
    // Add or remove the "visible" class
    menu.classList.toggle("visible");
}
