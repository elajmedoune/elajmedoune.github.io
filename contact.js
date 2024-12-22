document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.querySelector(".contact-form form");
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault(); 
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();
        if (!name || !email || !subject || !message) {
            alert("Veuillez remplir tous les champs du formulaire.");
            return;
        }
        if (!validateEmail(email)) {
            alert("Veuillez entrer une adresse email valide.");
            return;
        }
        alert(`Merci ${name}, votre message a été envoyé avec succès !`);
        contactForm.reset();
    });
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
});