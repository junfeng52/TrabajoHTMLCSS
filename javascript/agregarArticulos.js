const response = await fetch('json/noticias.json');
if (!response.ok) {
    throw new Error(response.statusText);
}
const noticias = await response.json();


const seccionUltimasNoticias = document.getElementById("ultimas-noticias");
for (const noticia of noticias) {
    const articuloNoticia = document.createElement("article");
    const headerNoticia = document.createElement("header");
    const headerText = document.createElement("h3");
    const parrafoNoticia = document.createElement("p");
    const footerNoticia = document.createElement("footer");
    const parrafoFooter = document.createElement("p");

    headerText.textContent = noticia.titulo;
    headerNoticia.appendChild(headerText);

    articuloNoticia.appendChild(headerNoticia);

    parrafoNoticia.textContent = noticia.contenido;
    articuloNoticia.appendChild(parrafoNoticia);

    parrafoFooter.textContent = "Publicado el " + noticia.fecha;
    footerNoticia.appendChild(parrafoFooter);

    articuloNoticia.appendChild(footerNoticia);

    articuloNoticia.addEventListener("click", () => {
        articuloNoticia.classList.toggle("noticiaDestacada")
    })

    seccionUltimasNoticias.appendChild(articuloNoticia);

}


