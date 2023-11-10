async function imprimirDatos({ PATH = "" }) {
  try {
    let response = await fetch(PATH);
    console.log("Consulta realizada");
    return await response.json();
  } catch (err) {
    console.log(err);
  }
}
const toggleButton = document.getElementById('botonMenu')
const navWrapper = document.getElementById('nav')

toggleButton.addEventListener('click', () => {
  toggleButton.classList.toggle('close')
  navWrapper.classList.toggle('show')
})

navWrapper.addEventListener('click', e => {
  if (e.target.id === 'nav') {
    navWrapper.classList.remove('show')
    toggleButton.classList.remove('close')
  }
})