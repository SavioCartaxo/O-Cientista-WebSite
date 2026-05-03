function loadComponent(id, path, callback) {
    fetch(path)
        .then(res => res.text())
        .then(data => {
            const el = document.getElementById(id);
            if (el) {
                el.innerHTML = data;
                if (callback) callback();
            }
        });
}

function initAccordion() {
    document.querySelectorAll(".accordion-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const content = btn.nextElementSibling;
            content.classList.toggle("open");
            btn.classList.toggle("open");
        });
    });
}

loadComponent("header",  "/test-site/HTML/nav.html");
loadComponent("sidebar", "/test-site/HTML/sidebar.html", initAccordion);
loadComponent("footer",  "/test-site/HTML/footer.html");