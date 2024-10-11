// Añadir las importaciones de las funciones que crean la imagen, la tabla, el párrafo y l lista

import { creaImagen } from "./funciones.js";

// Variables para guardar la zona y la entrada
let zona = "";
let entrada = "";

// Esta función guarda la zona seleccionada
function seleZona() {
  // Selecciona la zona del select elegir zona y lo guarda
  zona = document.querySelector("#zona").value;
  // Si hay entrada, habilito el botón aplicar

  if (entrada != "") {
    document.querySelector("#aplicar").disabled = false;
  }
}

// Esta función guarda la entrada seleccionada
function seleInput() {
  // Selecciona la entrada del select elegir entrada y la guarda
  entrada = document.querySelector("#entrada").value;
  // Si hay zona elegida, hablitar el botón aplicar
  if (zona != "") {
    document.querySelector("#aplicar").disabled = false;
  }
}

/* La función enviar llama a la función importada según 
la entrada seleccionada y lo coloca en la zona seleccionada. */
function enviar() {
  // Limpiar la zona seleccionada (para que no se coloquen más de una entrada en la zona)

  /* comprueba cual es la zona seleccionada y ejecuta la función de creación
    correspondiente (switch)*/

  switch (entrada) {
    case "img":
      

    
      let opcion = document.querySelector(`#${zona}`).append(creaImagen());
      
      document.querySelector('#borrar').innerHTML = '';

    

      
     
      break;
    case "table":
      break;
    case "list":
      break;
    case "p":
      break;
  }
}

// Asignación de funciones al objeto window
window.seleZona = seleZona;
window.seleInput = seleInput;
window.enviar = enviar;
