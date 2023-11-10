var url = "indexApi.json"
var layout = document.getElementById("seccion1");
var titu = document.getElementById("cabecera");

imprimirDatos({PATH : url}) .then(elementApi =>{
    console.log(elementApi)
    elementApi.titulos.map(data =>{
        titu.innerHTML +=`
        <h1 class="titulo">${data.titulo}</h1>
            <h2 class="subtitulo">${data.subtitulo}</h2>`
    });
    elementApi.layouts.map((data,i) =>{
        layout.innerHTML +=`
        <section class="layout">
            <div class="imagen">
                <img src=${data.imagen}>
            </div>
            <div class="texto1">
                <p>${data.descripcion}</p>
                    <a href="${data.url}"><button id="boton">Conocer más!</button></a>
            </div>
            <br>
        </section>`
    });
})