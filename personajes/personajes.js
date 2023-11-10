let boton= document.getElementById("siguiente");
let boton2= document.getElementById("anterior")
let num=1;
let pages=21;
const imagenPorDefecto='https://yt3.googleusercontent.com/OpY0Lk-vLJpfFLt1x6nqt0u7Et0wpyRif11xq30-HuubEwzJnlo8Y9_3Gu8ltkh4YS2EYEg6dHw=s900-c-k-c0x00ffffff-no-rj';


var completo = (response) => {
  const personajes = response.items;
  console.log(response)
  console.log(response.items)

  const listaPelis = document.getElementById("coleccion-pelis");
  listaPelis.innerHTML = ''; // Limpia la lista antes de mostrar las películas

  personajes.forEach((personaje) => {
      const card=document.createElement("div");
      card.classList.add("card");
      const img = document.createElement("div");
      img.className = "pelis";
      if (personaje.picture) {
        img.style.backgroundImage = "url('" + personaje.picture + "')";
      } else {
        // Si la URL no es válida, usar la imagen por defecto
        img.style.backgroundImage = "url('" + imagenPorDefecto + "')";
      }
      // img.style = "background-image:url"+"('"+ personaje.picture+"')";
      const card_cont=document.createElement("div")
      card_cont.classList.add("card__content");
      const titulo_card = document.createElement("p");
      titulo_card.classList.add("card__title");
      titulo_card.innerText=personaje.firstName +" " + personaje.lastName ;
      const card_desc=document.createElement("p");
      card_desc.classList.add("card__description");
      // card_desc.innerText=

    
      
  // else if(personaje.picture){
    listaPelis.appendChild(card);
    card.appendChild(img);
    card.appendChild(card_cont)
    card_cont.appendChild(titulo_card);
    card_cont.appendChild(card_desc);
  // }
  });
}

function fetchNew (valor){

  fetch('https://marauderapi.fr/api/characters?page='+valor)
  .then(response => response.json())
  .then(response => 
    {
          completo(response)
        })
      .catch(err => console.error(err))

    }8
    
    
    
    boton.addEventListener("click",()=>{
      if(num < pages){
    num++; 
  }
  fetchNew(num);
  document.documentElement.scrollTo=0;
});
boton2.addEventListener("click",()=>
{
  if(num>1)
  {
    num--;
  }
  fetchNew(num)
})
fetchNew(1);
function filtro(casa) 
{
  fetch('https://marauderapi.fr/api/characters?house='+casa+'&page='+num)
  .then(response => response.json())
  .then(response => 
    {
      completo(response)
    })
  .catch(err => console.error(err))
  
}
function obtenerValor(e) 
{
  const casa= event.target;
  var filtrar=casa.id;
  console.log(filtrar);
  if (filtrar=="todas")
  {
    fetchNew(1);
  }
  else
  {
    filtro(filtrar);
  }
}
