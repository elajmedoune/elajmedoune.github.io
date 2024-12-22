document.addEventListener("DOMContentLoaded", function () {
    const projectCards = document.querySelectorAll(".project-card");
    projectCards.forEach((card) => {
        card.addEventListener("mouseover", () => {
            card.style.transform = "scale(1.05)";
            card.style.boxShadow = "0 10px 15px rgba(0, 0, 0, 0.2)";
            card.style.transition = "all 0.3s ease";
        });

        card.addEventListener("mouseout", () => {
            card.style.transform = "scale(1)";
            card.style.boxShadow = "none";
        });
    });
    const filterInput = document.createElement("input");
    filterInput.type = "text";
    filterInput.placeholder = "Rechercher un projet...";
    filterInput.style.margin = "20px auto";
    filterInput.style.display = "block";
    filterInput.style.padding = "10px";
    filterInput.style.width = "80%";
    filterInput.style.borderRadius = "5px";
    filterInput.style.border = "1px solid #ccc";
    const projectSection = document.getElementById("projects");
    projectSection.insertBefore(filterInput, projectSection.querySelector(".projects-grid"));

    filterInput.addEventListener("input", function () {
        const filterText = filterInput.value.toLowerCase();

        projectCards.forEach((card) => {
            const title = card.querySelector("h3").innerText.toLowerCase();
            const description = card.querySelector("p").innerText.toLowerCase();

            if (title.includes(filterText) || description.includes(filterText)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
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