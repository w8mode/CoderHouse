// EJERCICIOS COMPLEMENTARIOS

// Actividad 1
/* Solicitar al usuario un (1) nombre.
Si el mismo es igual a otro nombre almacenado en una variable, realizar una salida por alerta con el mensaje “Fui yo”. 
Caso contrario, la salida será “Yo no fui”. */

const nombre = 'Blas'
const otroNombre = prompt('Ingrese un nombre')

if (otroNombre == nombre) {
    alert('Ingresaste el nombre correcto')
} else {
    alert('Yo no fui')
}


// Actividad 2
// Solicitar al usuario una (1) tecla.
// Si se presiona “y” (minúscula), o “Y” (mayúscula), realizar una salida por alerta con el mensaje “Correcto”. Caso contrario, la salida será “Error”.


const ingreso = prompt('Ingrese una tecla');

if ((ingreso == 'Y') || (ingreso == 'y')) {
    alert('Correcto');
} else {
    alert('Error');
}

// Actividad 3
/* Solicitar al usuario un (1) número.
Si el valor está entre 1 y 4, efectuar una de las siguientes salidas según corresponda: 
“Elegiste a Homero” si es 1.
“Elegiste a Marge” si es 2.
“Elegiste a Bart” si es 3.
“Elegiste a Lisa” si es 4. */


const numero = prompt('ingrese un número entre el 1 y el 4')

switch (numero) {
    case '1':
    document.write('Elegiste a Homero');
    break;

    case '2':
    document.write('Elegiste a Marge');
    break;

    case '3':
    document.write('Elegiste a Bart');
    break;

    case '4':
    document.write('Elegiste a Lisa');
    break;

    default:
        alert('No elegiste ningun personaje');
        break
}


// Actividad 4
/* Solicitar al usuario un (1) número.
Si el valor está entre dos números, efectuar una de las siguientes salidas, según corresponda: 
“Presupuesto bajo” si está entre 0 y 1000.
“Presupuesto medio” si está entre 1001 y 3000.
“Presupuesto alto” si es  mayor que 3000. */



let number = prompt('ingrese un numero');

if ((number >= 0) && (number <= 1000)) {
    document.write('Presupuesto bajo');
} else if ((number > 1000) && (number <= 3000)) {
    document.write('Presupuesto medio');
} else {
    document.write('presupuesto alto');
}


// Actividad 5

/* Solicitar al usuario cuatro (4) productos de almacén. Si todos los elementos fueron cargados, realizar una única salida compuesta por el listado de productos. Caso contrario, la salida será “Error: Es necesario cargar todos los productos”.
 */


let producto1 = prompt('Carga el primer producto');
let producto2 = prompt('Carga el segundo producto');
let producto3 = prompt('Carga el tercer producto');
let producto4 = prompt('Carga el cuarto producto');


if ((producto1 !== "") && (producto2 !== "") && (producto3 !== "") && (producto4 !== "")) {
    document.write("tu carro tiene estos productos: " + producto1 +" "+producto2+" "+producto3+" y "+ producto4);
} else {
    document.write('Es necesario cargar todos los productos al carro')
}