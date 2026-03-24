document.addEventListener("DOMContentLoaded", () => {

    // Home
    document.getElementById("link-home").href = "/test-site/HTML/HOME/home.html";

    // ESTILOS (href de <link> no <head>)
    document.getElementById("style-padrao").href = "/test-site/styles/style-pagina-padrao.css"

    // introdução à Computação
        // href
        document.getElementById("link-historia-computacao").href = "/test-site/HTML/introducao-a-computacao/00-historia-da-computacao.html";
        document.getElementById("link-introducao-computacao").href  = "/test-site/HTML/introducao-a-computacao/01-introducao-a-computacao.html";
        document.getElementById("link-oque-e-um-computador" ).href  = "/test-site/HTML/introducao-a-computacao/02-oque-e-um-computador.html";
            
        // IMAGENS
        document.getElementById("img-peopleware-hardware-and-software").src = "/test-site/assets/IMAGES/introducao-a-computacao/peopleware-hardware-and-software.png";
        document.getElementById("img-processamento-de-dados").src = "/test-site/assets/IMAGES/introducao-a-computacao/processamento-de-dados.png";

});