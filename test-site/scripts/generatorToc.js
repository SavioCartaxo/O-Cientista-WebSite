document.addEventListener("DOMContentLoaded", () => {

    const toc = document.getElementById("toc");
    if (!toc) return;

    // Pega todos os títulos do main
    const titles = document.querySelectorAll("main h1, main h2, main h3");
    if (titles.length === 0) return;

    // Cria o título da TOC (usando h2 com estilos do CSS padrão)
    const tocTitle = document.createElement("h2");
    tocTitle.textContent = "Nesta página";
    toc.appendChild(tocTitle);

    // Cria a lista
    const ul = document.createElement("ul");
    ul.style.listStyle = "none";
    ul.style.margin    = "0";
    ul.style.padding   = "0 0.75rem";

    titles.forEach((title, index) => {

        // Adiciona id ao título para o link funcionar
        if (!title.id) {
            title.id = `titulo-${index}`;
        }

        const li = document.createElement("li");
        const a  = document.createElement("a");

        a.href                 = `#${title.id}`;
        a.textContent          = title.textContent;
        a.style.textDecoration = "none";
        a.style.color          = "#222";
        a.style.fontSize       = "0.85rem";
        a.style.display        = "block";
        a.style.padding        = "0.2rem 0";

        // Hover
        a.addEventListener("mouseenter", () => a.style.color = "#0066FF");
        a.addEventListener("mouseleave", () => a.style.color = "#222");

        // Indentação visual por nível (h1, h2, h3)
        const level          = parseInt(title.tagName.replace("H", ""));
        li.style.paddingLeft = `${(level - 1) * 0.8}rem`;
        li.style.margin      = "0.1rem 0";

        li.appendChild(a);
        ul.appendChild(li);
    });

    toc.appendChild(ul);
});