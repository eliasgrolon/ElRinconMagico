var url = "../indexApi.json";
var portadaLibro = document.getElementById("layoutLibros");
var titu = document.getElementById("cabecera")

imprimirDatos({PATH : url}) .then(elementApi =>{
    console.log(elementApi)
    elementApi.titulos.map(data =>{
        titu.innerHTML +=`
        <h1 class="titulo">${data.titulo2}</h1>
            <h2 class="subtitulo">${data.subtitulo2}</h2>`
    });
    // data= dv los datos del arreglo,i=dv la posicion 
    elementApi.libros.map((data,i)=>{
        console.log(data);
        portadaLibro.innerHTML += `
            <div>
                <a href="previewLibros.html?page=${i}">
                    <img src="${data.imagen}" class="foto">
                </a>
            </div>`
    });
});