function loadComponent(id, path) {
    fetch(path)
        .then(res => res.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        });
}

loadComponent("header",  "/test-site/HTML/nav.html");
loadComponent("sidebar", "/test-site/HTML/sidebar.html");
loadComponent("footer",  "/test-site/HTML/footer.html");