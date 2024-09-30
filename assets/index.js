// function hayStock(cantidadDisponible, cantidadSolicitada) {
//     return cantidadSolicitada <= cantidadDisponible;
// }


// document.querySelector('#btn-ex').addEventListener('click', function (e) {
//     e.preventDefault();

//     let stockBanana = 10;
//     let stockPalta = 15;
//     let stockSandia = 8;

//     // Producto 1: Banana por Kg
//     Swal.fire({
//         title: 'Selecciona la cantidad para Banana por Kg',
//         imageUrl: 'https://w7.pngwing.com/pngs/893/335/png-transparent-cavendish-banana-juice-fruit-banana-box-individual-natural-foods-dried-fruit-food.png',
//         imageWidth: 200,
//         imageHeight: 200,
//         imageAlt: 'Banana',
//         input: 'number',
//         inputLabel: 'Precio por unidad: $2000',
//         inputPlaceholder: 'Cantidad',
//         inputAttributes: {
//             min: 0,
//             max: 100,
//             step: 1
//         },
//         showCancelButton: true
//     }).then((result) => {
//         let cantidadBanana = result.value ? parseInt(result.value) : 0;
//         let subtotalBanana = cantidadBanana * 2000;

//         if(!hayStock(stockBanana,cantidadBanana)) {
//             Swal.fire({
//                 title: 'Stock insuficiente',
//                 text: `Solo hay ${stockBanana} KG de bananas disponibles.`,
//                 icon: 'error',
//                 confirmButtonText: 'Aceptar'
//             });
//             return;
//         }

//         // Producto 2: Palta
//         Swal.fire({
//             title: 'Selecciona la cantidad para Palta',
//             imageUrl: 'https://e7.pngegg.com/pngimages/785/25/png-clipart-sliced-avocado-illustration-avocado-avocado-food-fruit-thumbnail.png',
//             imageWidth: 200,
//             imageHeight: 200,
//             imageAlt: 'Palta',
//             input: 'number',
//             inputLabel: 'Precio por unidad: $1000',
//             inputPlaceholder: 'Cantidad',
//             inputAttributes: {
//                 min: 0,
//                 max: stockPalta,
//                 step: 1
//             },
//             showCancelButton: true
//         }).then((result) => {
//             let cantidadPalta = result.value ? parseInt(result.value) : 0;
//             let subtotalPalta = cantidadPalta * 1000;

//             // Producto 3: Sandía por Kg
//             Swal.fire({
//                 title: 'Selecciona la cantidad para Sandía por Kg',
//                 imageUrl: 'https://w7.pngwing.com/pngs/467/70/png-transparent-sliced-watermelon-fruit-mudslide-watermelon-graphy-fruit-watermelon-food-melon-fruit-nut.png',
//                 imageWidth: 200,
//                 imageHeight: 200,
//                 imageAlt: 'Sandía',
//                 input: 'number',
//                 inputLabel: 'Precio por unidad: $2000',
//                 inputPlaceholder: 'Cantidad',
//                 inputAttributes: {
//                     min: 0,
//                     max: 100,
//                     step: 1
//                 },
//                 showCancelButton: true
//             }).then((result) => {
//                 let cantidadSandia = result.value ? parseInt(result.value) : 0;
//                 let subtotalSandia = cantidadSandia * 2000;

//                 // Mostrar el resumen
//                 if (cantidadBanana > 0 || cantidadPalta > 0 || cantidadSandia > 0) {
//                     let total = subtotalBanana + subtotalPalta + subtotalSandia;
//                     let resumen = 'Resumen de tu compra:<br>';

//                     if (cantidadBanana > 0) {
//                         resumen += `Banana por Kg: ${cantidadBanana} x $2000 = $${subtotalBanana}<br>`;
//                     }
//                     if (cantidadPalta > 0) {
//                         resumen += `Palta: ${cantidadPalta} x $1000 = $${subtotalPalta}<br>`;
//                     }
//                     if (cantidadSandia > 0) {
//                         resumen += `Sandía por Kg: ${cantidadSandia} x $2000 = $${subtotalSandia}<br>`;
//                     }

//                     resumen += `<br><strong>Total: $${total}</strong>`;

//                     Swal.fire({
//                         title: 'Compra completada',
//                         html: resumen,
//                         icon: 'success',
//                         confirmButtonText: 'Aceptar'
//                     });
//                 } else {
//                     Swal.fire({
//                         title: 'Carrito vacío',
//                         text: 'No seleccionaste ningún producto.',
//                         icon: 'warning',
//                         confirmButtonText: 'Aceptar'
//                     });
//                 }
//             });
//         });
//     });
// });

 // Función para verificar si hay stock
 function hayStock(cantidadDisponible, cantidadSolicitada) {
    return cantidadSolicitada <= cantidadDisponible;
}

// Función para mostrar un mensaje de alerta de SweetAlert
function mostrarAlerta(titulo, texto, icono) {
    return Swal.fire({
        title: titulo,
        text: texto,
        icon: icono,
        confirmButtonText: 'Aceptar'
    });
}

// Función para solicitar la cantidad de un producto
function solicitarCantidad(nombreProducto, precio, stock, imagenUrl) {
    return Swal.fire({
        title: `Selecciona la cantidad para ${nombreProducto}`,
        imageUrl: imagenUrl,
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: nombreProducto,
        input: 'number',
        inputLabel: `Precio por unidad: $${precio}`,
        inputPlaceholder: 'Cantidad',
        inputAttributes: {
            min: 0,
            max: stock,
            step: 1
        },
        showCancelButton: true
    });
}

// Función principal que se ejecuta al hacer clic en "Explorar ahora"
document.querySelector('#btn-ex').addEventListener('click', function (e) {
    e.preventDefault();

    let stockBanana = 10;
    let stockPalta = 15;
    let stockSandia = 8;

    solicitarCantidad('Banana por Kg', 2000, stockBanana, 'https://w7.pngwing.com/pngs/893/335/png-transparent-cavendish-banana-juice-fruit-banana-box-individual-natural-foods-dried-fruit-food.png')
    .then((result) => {
        let cantidadBanana = result.value ? parseInt(result.value) : 0;

        if (!hayStock(stockBanana, cantidadBanana)) {
            mostrarAlerta('Stock insuficiente', `Solo hay ${stockBanana} bananas disponibles.`, 'error');
            return;
        }

        let subtotalBanana = cantidadBanana * 2000;

        solicitarCantidad('Palta', 1000, stockPalta, 'https://e7.pngegg.com/pngimages/785/25/png-clipart-sliced-avocado-illustration-avocado-avocado-food-fruit-thumbnail.png')
        .then((result) => {
            let cantidadPalta = result.value ? parseInt(result.value) : 0;

            if (!hayStock(stockPalta, cantidadPalta)) {
                mostrarAlerta('Stock insuficiente', `Solo hay ${stockPalta} paltas disponibles.`, 'error');
                return;
            }

            let subtotalPalta = cantidadPalta * 1000;

            solicitarCantidad('Sandía por Kg', 2000, stockSandia, 'https://w7.pngwing.com/pngs/467/70/png-transparent-sliced-watermelon-fruit-mudslide-watermelon-graphy-fruit-watermelon-food-melon-fruit-nut.png')
            .then((result) => {
                let cantidadSandia = result.value ? parseInt(result.value) : 0;

                if (!hayStock(stockSandia, cantidadSandia)) {
                    mostrarAlerta('Stock insuficiente', `Solo hay ${stockSandia} sandías disponibles.`, 'error');
                    return;
                }

                let subtotalSandia = cantidadSandia * 2000;

                let total = subtotalBanana + subtotalPalta + subtotalSandia;
                let resumen = 'Resumen de tu compra:<br>';

                if (cantidadBanana > 0) {
                    resumen += `Banana por Kg: ${cantidadBanana} x $2000 = $${subtotalBanana}<br>`;
                }
                if (cantidadPalta > 0) {
                    resumen += `Palta: ${cantidadPalta} x $1000 = $${subtotalPalta}<br>`;
                }
                if (cantidadSandia > 0) {
                    resumen += `Sandía por Kg: ${cantidadSandia} x $2000 = $${subtotalSandia}<br>`;
                }

                resumen += `<br><strong>Total: $${total}</strong>`;

                mostrarAlerta('Compra completada', resumen, 'success');
            });
        });
    });
});