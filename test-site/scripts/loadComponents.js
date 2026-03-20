function loadComponent(id, path) {
    fetch(path)
        .then(res => res.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        });
}

// carregar componentes
loadComponent("nav", "/test-site/HTML/nav.html");
loadComponent("toc", "/test-site/HTML/toc.html");