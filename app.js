//Referencia de los elementos que vamos a modificar en el DOM
const inputRojo = document.getElementById('rojo');
const inputVerde = document.getElementById('verde');
const inputAzul = document.getElementById('azul');

//obtener elementos del texto del parrafo donde 
//se va a mostrar los elementos input

const textoRojo = document.getElementById('texto-rojo');
const textoVerde = document.getElementById('texto-verde');
const textoAzul = document.getElementById('texto-azul');

//Definir variables para especificar el color RGB con rango 0-255
//La propiedad value nos da el valor que tiene el elemento

let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

 //remplazamos el texto con innerText , 
 //para actualizarlos con los valores

 textoRojo.innerText = rojo;
 textoVerde.innerText = verde;
 textoAzul.innerText =azul;

  //Creamos la funcion , y remplazamos las variables
  // con el signo de dollar y llaves  ${}

  function actualizarColor(rojo,verde,azul){
    //remplazamos las variables
    const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;
    //actualizamos el color del body en el DOM
    document.body.style.backgroundColor = colorRGB;

  }

  //actualizar el color rojo con eventListener
   
  inputRojo.addEventListener('change', (e) => {
    rojo = e.target.value;
    textoRojo.innerText = rojo;
    actualizarColor(rojo, verde, azul);
  })
  //actualizar el color verde con eventListener

  inputVerde.addEventListener('change', (e) => {
    verde = e.target.value;
    textoVerde.innerText = verde;
    actualizarColor(rojo, verde, azul);
  })

  //actualizar el color azul con eventListener

  inputAzul.addEventListener('change', (e) => {
    azul = e.target.value;
    textoAzul.innerText = azul;
    actualizarColor(rojo, verde, azul);
  })
