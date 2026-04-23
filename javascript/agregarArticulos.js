const noticias_json = await fetch("json/noticias.json");
const noticias = await noticias_json.json();

const seccionUltimasNoticias = document.getElementById("ultimas-noticias");

seccionUltimasNoticias.appendChild()