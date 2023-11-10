// esta pagina es magica, asi que venga a verla antes de que desaparezca
var url = window.location.href; // Parsea la URL y obtén los parámetros
var urlParams = new URL(url); // Ahora puedes acceder a los parámetros de la URL
var param1 = urlParams.searchParams.get("page"); // crea un parametro dentro de la url

function crear(parametro) {
    fetch("../indexApi.json")
        .then(data => data.json())
        .then(Element => {
            let index = param1 ? parseInt(param1) : 0; //evalua si el parametro tiene un valor o si se ingreso un valor al parametro
            let datos = Element[parametro][index];
            console.log(Element[parametro].length)
            layouts.innerHTML += `
            <div>
                <h1 class="tituloLibro">${datos.libro}</h1>
                    <img src="${datos.imagen}" class="portada" />
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
                                Autor
                            </label>
                            <div class="contenido">
                                <p>${datos.autor}</p>
                            </div>
                        </div>
                        <div class="acordeon">
                            <input type="radio" name="acordeon" id="boton3" class="boton">
                            <label for="boton3">
                                Leer libro
                            </label>
                            <div class="contenido">
                            <a href="${datos.url}"><p>Clic aqui para leer el libro en formato .pdf!</p></a>
                            </div>
                        </div>
                    </div>
            </div>
            ${index ? `<a href="../libros/previewLibros.html?page=${index - 1}"><button id="boton2">Anterior</button></a>` : " "}
            ${index != Element[parametro].length - 1 ? `<a href="previewLibros.html?page=${index + 1}"><button id="boton2">Siguiente</button></a>` : ""}`;
        });
}
crear("libros")