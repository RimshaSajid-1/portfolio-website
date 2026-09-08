const menuButton = document.getElementById("menu-button");
const navMenu = document.getElementById("nav-menu");

function toggleMenu() {
    if (navMenu.style.display === "none") {
        navMenu.style.display = "flex";
    } else {
        navMenu.style.display = "none";
    }
}

menuButton.addEventListener("click", toggleMenu);

const navLinks = document.querySelectorAll("#nav-menu a");

navLinks.forEach(function(link) {
    link.addEventListener("click", function(event) {
        event.preventDefault();

        const section = document.querySelector(link.getAttribute("href"));

        section.scrollIntoView({
            behavior: "smooth"
        });

        navMenu.style.display = "none";
    });
});