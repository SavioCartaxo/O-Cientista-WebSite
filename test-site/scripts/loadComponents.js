function loadComponent(id, path) {
    fetch(path)
        .then(res => res.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        });
}

loadComponent("nav", "/test-site/HTML/nav.html");
loadComponent("sidebar", "/test-site/HTML/sidebar.html");