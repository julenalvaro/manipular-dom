let num1 = document.querySelector('#input-id1');
let num2 = document.querySelector('#input-id2');
const btn = document.querySelector('button');
const resul = document.querySelector('#resultado');
const form = document.querySelector('form');

//cuando se pulsa el botón se ejecuta la función
form.addEventListener('submit', sumarInputsVarios);

function sumarInputsVarios(event) {
  console.log(event);
  event.preventDefault();
  let suma = parseFloat(num1.value) + parseFloat(num2.value);
  resul.textContent = suma;
}





