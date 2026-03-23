document.addEventListener("DOMContentLoaded", () => {


    // LINKS (href)
    const links = {
        // Navegação geral
        "link-home":                  CONFIG.pages.home,

        // Introdução à Computação
        "link-historia-computacao":   CONFIG.pages.introducaoAComputacao.historiaComputacao,
        "link-introducao-computacao": CONFIG.pages.introducaoAComputacao.introducaoComputacao,
        "link-oque-e-um-computador":  CONFIG.pages.introducaoAComputacao.oQueEUmComputador,
    };


    for (const [id, path] of Object.entries(links)) {
        const el = document.getElementById(id);
        if (el) el.href = path;
    }


    // IMAGENS (src)
    const images = {
        // Introdução à Computação
        "img-processamento-dados":          CONFIG.images.introducaoAComputacao.processamentoDeDados,
        "img-peopleware-hardware-software": CONFIG.images.introducaoAComputacao.peoplewareHardwareSoftware,
    };


    for (const [id, path] of Object.entries(images)) {
        const el = document.getElementById(id);
        if (el) el.src = path;
    }

    
    // ESTILOS (href de <link> no <head>)
    const styles = {
        "style-default": CONFIG.styles.default,
    };

    
    for (const [id, path] of Object.entries(styles)) {
        const el = document.getElementById(id);
        if (el) el.href = path;
    }

});