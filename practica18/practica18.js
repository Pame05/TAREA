//Hacer una funcion que reciba dos parametros
// siendo estos el multiplicador y el multiplicando
//ejecute el bucle para realizar la suma necesaria
// para lograr la multiplicacion, al final retornar la suma.

'use strict'

function multiplicar(multiplicador,multiplicando) { // multiplicando numero de veces que se va a sumar el multiplicando
        let suma=0;
        for (let i=0; i<multiplicador; i++){
                suma = suma + multiplicando;
        }
        return suma
}


let multiplicador1 = Number(prompt('Ingrese el valor del multiplicador'));
let multiplicando1 = Number(prompt('Ingrese el valor del multiplicador'));

let resultado = multiplicar(multiplicador1,multiplicando1);
alert (resultado);