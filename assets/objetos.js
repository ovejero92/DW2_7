// let miJugador = {
//     nombre: "Messi",
//     edad: 36,
//     posicion:10,
// }

// miJugador.nombre = "Di Maria"
// miJugador.ciudad = "Buenos Aires"

// console.log(miJugador.edad);
// console.log(miJugador["nombre"]);
// console.log(miJugador.posicion);
// console.log(miJugador.ciudad);
// let arrayJugadores = [
//     {
//         id: 1,
//         nombre: "Lionel Messi",
//         posicion: "10"
//     },
//     {
//         id:2,
//         nombre: "Gabriel López",
//         posicion: "8"
//     },
//     {
//         id:3,
//         nombre:"Di Maria",
//         posicion: "11"
//     }
// ];

// if(arrayJugadores.length === 3) {
//    for(let i = 0; i <= arrayJugadores.length; i++){
//     console.log("Jugador numero " + arrayJugadores[i].id + ":");
//     console.log("Nombre: "+arrayJugadores[i].nombre);
//     console.log("posicion: "+arrayJugadores[i].posicion);
//     console.log(" ");
// }
// } else {
//     console.warn("hay mas de 3 elementos en nuestro array")
// }

function calcularPrecioTotal(cantidad){
    const precioUnitario = 15.99;
    const cantidadFloat = parseFloat(cantidad);


    if(isNaN(cantidadFloat)){
        console.log("Por favor, ingresa una cantidad válida")
    } else {
        const total = precioUnitario * cantidadFloat;
        console.log(`Total a pagar: ${total.toFixed(2)}`);
    }
}
const inputCantidad = prompt("Ingresa la cantidad de productos: ");
calcularPrecioTotal(inputCantidad);