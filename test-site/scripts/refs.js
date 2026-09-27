document.addEventListener("DOMContentLoaded", () => {

    const refs = {
        "link-home": "/test-site/HTML/HOME/home.html",

        "link-historia-computacao": "/test-site/HTML/introducao-a-computacao/00-historia-da-computacao.html",
        "link-introducao-computacao": "/test-site/HTML/introducao-a-computacao/01-introducao-a-computacao.html",
        "link-oque-e-um-computador": "/test-site/HTML/introducao-a-computacao/02-oque-e-um-computador.html",

        "link-familias-de-grafos": "/test-site/HTML/grafos/04-familias-de-grafos.html",
        "link-matriz-de-adjacencia": "/test-site/HTML/grafos/05-matriz-de-adjacencia.html",
        "link-matriz-de-incidencia": "/test-site/HTML/grafos/06-matriz-de-incidencia.html",
        "link-graus-de-vertices": "/test-site/HTML/grafos/07-graus-de-vertices.html",
        "link-grafo-completo-e-vazio": "/test-site/HTML/grafos/08-grafo-completo-e-grafo-vazio.html",
        "link-passeio-e-caminho": "/test-site/HTML/grafos/09-grafo-caminho-e-grafo-ciclo.html",
        "link-grafo-ciclo": "/test-site/HTML/grafos/10-grafo-ciclo.html",
        "link-grafo-conectado": "/test-site/HTML/grafos/11-grafo-conectado.html",
        "link-complemento-de-grafo": "/test-site/HTML/grafos/12-complemento-de-um-grafo.html",
        "link-grafo-bipartido": "/test-site/HTML/grafos/13-grafo-bipartido.html",
        "link-grafo-regular-e-cubico": "/test-site/HTML/grafos/14-grafo-regular-e-cubico.html",
        "link-grafos-direcionados": "/test-site/HTML/grafos/15-grafos-direcionados.html",
        "link-grafos-ponderados": "/test-site/HTML/grafos/16-grafos-ponderados.html",
        "link-caixeiro-viajante": "/test-site/HTML/grafos/17-problema-do-caixeiro-viajante.html",
        "link-remocao-de-vertices-e-arestas": "/test-site/HTML/grafos/18-operacoes-sobre-grafos-remocao-de-vertices-e-arestas.html",
        "link-identificacao-e-contracao": "/test-site/HTML/grafos/19-operacoes-sobre-grafos-identificacao-e-contracao.html",
        "link-divisao-e-subdivisao": "/test-site/HTML/grafos/20-operacoes-sobre-grafos-divisaro-de-vertices-e-subdivisao-de-aresta.html",
        "link-isomorfismo": "/test-site/HTML/grafos/24-isomorfismo.html",
        "link-incorporacao": "/test-site/HTML/grafos/25-incorporacao.html"
    };

    Object.entries(refs).forEach(([id, href]) => {
        const elemento = document.getElementById(id);

        if (elemento) {
            elemento.href = href;
        }
    });

    const stylePadrao = document.getElementById("style-padrao");

    if (stylePadrao) {
        stylePadrao.href = "/test-site/styles/style-pagina-padrao.css";
    }
});