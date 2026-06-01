document.addEventListener("DOMContentLoaded", () => {

    const toc = document.getElementById("toc");
    if (!toc) return;

    const titles = document.querySelectorAll("main h1, main h2, main h3");
    if (titles.length === 0) return;

    const tocTitle = document.createElement("h2");
    tocTitle.textContent = "Nesta página";
    toc.appendChild(tocTitle);

    const ul = document.createElement("ul");
    ul.classList.add("toc-list");

    titles.forEach((title, index) => {

        if (!title.id) {
            title.id = `titulo-${index}`;
        }

        const level = parseInt(title.tagName.replace("H", ""));

        const li = document.createElement("li");
        li.classList.add("toc-item", `toc-level-${level}`);

        const a = document.createElement("a");
        a.href = `#${title.id}`;
        a.textContent = title.textContent;
        a.classList.add("toc-link");

        li.appendChild(a);
        ul.appendChild(li);
    });

    toc.appendChild(ul);
});