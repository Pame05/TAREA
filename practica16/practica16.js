// Escribe una funcion que reciba el ano de nacimiento 
// como argumento y muestre en un alert la edad correspondiente

'use strict'
function getEdad (a) {
    let edad = 2023-a;
    alert (edad)
}

let ano=Number(prompt('Ingrese su año de nacimiento'));
getEdad(ano);


