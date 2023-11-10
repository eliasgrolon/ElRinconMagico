var url = window.location.href; // Parsea la URL y obtén los parámetros
var urlParams = new URL(url); // Ahora puedes acceder a los parámetros de la URL
var param1 = urlParams.searchParams.get("page"); // crea un parametro dentro de la url

function crear(parametro) {
    fetch("../indexApi.json")
        .then(data => data.json())
        .then(Element => {
            let index = param1 ? parseInt(param1) : 0; //evalua si el parametro tiene un valor o si se ingreso un valor al parametro
            let datos = Element[parametro][index];
            layouts.innerHTML += `
            <div>
                <h1 class="tituloLibro">${datos.titulo}</h1>
                    <img src="${datos.imagen}" class="portada" />
                    <iframe src="${datos.trailer}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div>
                <h1 class="tituloLibro">${datos.sinop}</h1>
                    <p class="textoLibro">${datos.descripcion}</p>
                    <div class="menu">
                        <div class="acordeon">
                            <input type="radio" name="acordeon" id="boton1" class="boton">
                            <label for="boton1">
                                Fecha
                            </label>
                            <div class="contenido">
                                <p>${datos.fecha}</p>
                            </div>
                        </div>
                        <div class="acordeon">
                            <input type="radio" name="acordeon" id="boton2" class="boton">
                            <label for="boton2">
                                Director
                            </label>
                            <div class="contenido">
                                <p>${datos.director}</p>
                            </div>
                        </div>
                        <div class="acordeon">
                            <input type="radio" name="acordeon" id="boton3" class="boton">
                            <label for="boton3">
                                Guionista
                            </label>
                            <div class="contenido">
                                <p>${datos.guionista}</p>
                            </div>
                        </div>
                        <div class="acordeon">
                            <input type="radio" name="acordeon" id="boton4" class="boton">
                            <label for="boton4">
                                Productor
                            </label>
                            <div class="contenido">
                                <p>${datos.productor}</p>
                            </div>
                        </div>
                    </div>
            </div>
            ${index ? `<a href="previewPelis.html?page=${index - 1}"><button id="boton2">Anterior</button></a>` : " "}
            ${index != Element[parametro].length - 1 ? `<a href="previewPelis.html?page=${index + 1}"><button id="boton2">Siguiente</button></a>` : " "}`;
        });
}
crear("peliculas")