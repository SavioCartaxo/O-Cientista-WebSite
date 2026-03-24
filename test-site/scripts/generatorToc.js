document.addEventListener("DOMContentLoaded", () => {

    const toc = document.getElementById("toc");
    if (!toc) return;

    // Pega todos os títulos do main
    const titles = document.querySelectorAll("main h1, main h2, main h3");
    if (titles.length === 0) return;

    // Cria o título da TOC
    const tocTitle = document.createElement("h2");
    tocTitle.textContent = "Nesta página";
    tocTitle.classList.add("h2-sidebar");
    toc.appendChild(tocTitle);

    // Cria a lista
    const ul = document.createElement("ul");
    ul.classList.add("ul-toc");

    titles.forEach((title, index) => {

        // Adiciona id ao título para o link funcionar
        if (!title.id) {
            title.id = `titulo-${index}`;
        }

        const li = document.createElement("li");
        const a  = document.createElement("a");

        a.href        = `#${title.id}`;
        a.textContent = title.textContent;

        // Indentação visual por nível (h1, h2, h3)
        const level = parseInt(title.tagName.replace("H", ""));
        li.style.marginLeft = `${(level - 1) * 0.5}rem`;

        li.appendChild(a);
        ul.appendChild(li);
    });

    toc.appendChild(ul);
});