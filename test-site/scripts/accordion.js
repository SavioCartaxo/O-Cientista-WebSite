document.querySelectorAll(".accordion-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const content = btn.nextElementSibling;
        content.classList.toggle("open");
        btn.classList.toggle("open");
    });
});