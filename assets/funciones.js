// function saludar(nombre) {
//     console.log(`Hola ${nombre}, como estan?`);
// }

// saludar("Juan");
// saludar("Erik")

// saludar(prompt("Ingrese su nombre:"));

function sumar(numero1,numero2) {
    return numero1 + numero2
}

let UsN1 = prompt("pone el primer numero que queres sumar:");
let UsN2 = prompt("pone el segundo numero que queres sumar:");

let total = sumar(parseInt(UsN1),parseInt(UsN2))

console.log(`${UsN1} + ${UsN2} = ${total}`);


function restar(numero1,numero2) {
    let resta = numero1 - numero2;
    console.log(`${numero1} - ${numero2} = ${resta}`);
}

restar(2,5);

let multiplicar = (numero1,numero2) => {
    let multiplicar = numero1 * numero2;
    console.log(`${numero1} * ${numero2} = ${multiplicar}`)
}

multiplicar(5,2)
multiplicar(7,8)

