const themeButton = document.getElementById("themeBtn");
const menuButton = document.getElementById("menuBtn");
const nav = document.getElementById("nav");


/* DARK MODE */

if (themeButton) {

    themeButton.addEventListener("click", function () {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            themeButton.textContent = "☀️";
        } else {
            themeButton.textContent = "🌙";
        }

    });

}


/* MOBILE MENU */

if (menuButton && nav) {

    menuButton.addEventListener("click", function () {

        if (nav.style.display === "flex") {
            nav.style.display = "none";
        } else {
            nav.style.display = "flex";
        }

    });

}


/* CLOSE MOBILE MENU AFTER CLICKING LINK */

if (nav) {

    const navLinks = nav.querySelectorAll("a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (window.innerWidth <= 900) {
                nav.style.display = "none";
            }

        });

    });

}


/* CONTACT FORM */

const contactForm =
    document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        alert(
            "Thank you! Your message has been submitted successfully."
        );

        contactForm.reset();

    });

}


/* SERVICE BUTTONS */

const serviceLinks =
    document.querySelectorAll(".service-card a");


serviceLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        alert(
            "This smart city service is available in the demonstration system."
        );

    });

});


/* DASHBOARD STATUS */

function updateCityStatus() {

    const progressBars =
        document.querySelectorAll(".progress-bar");

    progressBars.forEach(function (bar) {

        const currentWidth =
            bar.style.width;

        bar.setAttribute(
            "aria-label",
            "City monitoring status " + currentWidth
        );

    });

}


updateCityStatus();


/* CONSOLE MESSAGE */

console.log(
    "Smart City Management System loaded successfully."
);
