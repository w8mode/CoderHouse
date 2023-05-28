//alert('Hola Mamá')

// ejercicio con colores if - else

/* let color = 'azul';

if (color == 'rojo') {
    console.log('El color es Rojo!')
} else {
    console.log('El color NO es Rojo! ')
} */

// ejercicio con numeros if - else

/* let numero = 7;

if(numero == 5) {
    console.log('El número es el correcto')
} else {
    console.log ('El número NO es el correcto')
}
 */
//

/* let nombre = prompt('ingresa tu nombre!');

if (nombre == 'Nora') {
    alert('Hola ' + nombre + ' sos la mama mas hermosa del mundo!');
} else {
    alert ('Hola ' + nombre + ' VOS NO SOS MI MAMA! ')
}
 */

/* let numero = prompt('ingrese un numero');

if (numero < 20) {
    alert('El número es menor que 20')

} else if (numero < 50) {
    alert('El número es menor que 50')

} else if (numero < 100) {
    alert('El número es menor que 100')

} else  {
    alert('El número es mayor que 100')
}; */


// ejercicio con boolean.

/* let numero = 10;
let esMayor5 = (numero >= 5); //su valor será TRUE

if (esMayor5) {
    alert('Es boolean true');
} else {
    alert('Es bollean false')
} */



// ejercicio con operadores AND && (tiene que cumplir con las 2)

/* let name = prompt("ingrese su nombre")
let lastName = prompt("ingrese su apellido")

if ((name != "") && (lastName !="")) {
    document.write('Nombre: ' + name + ' Apellido: ' + lastName) 
} else {
    document.write('no ingresaste correctamente los datos, intenta nuevamente.')
} */

// ejercicio con operador OR \\ (tiene que commplir con al menos 1)

/* let name = prompt("ingrese su nombre")
let lastName = prompt ("ingrese su apellido")

if ((!name == "") || (!lastName == "")) {
    document.write("Hola " + name + " " + lastName +  ", bienvenida.")
} else {
    document.write("Hola " + name + " " + lastName + ", no sos bienvenido.")
} */


// EJERCICIOS DE LA CLASE

/* let nacimiento = prompt('introduce tu año de nacimiento');
let edad = 2023 - nacimiento;

let mayorEdad;

if (edad >= 18) {
    mayorEdad = true;
} else {
    mayorEdad = false;
}

console.log(mayorEdad)

if (mayorEdad == true) {
    document.write('podes pasar')
} else {
    document.write('Me puse la gorra!')
} */

// ejercicio login clase 2

const USER = "w8mode";
const PASS = "1234";

let usuario = prompt('Ingresa tu user');
let password = prompt('Ingresa tu contraseña');

if (usuario == USER && password == PASS) {
    document.write('Bienvenido ' + USER);
} else {
   if (usuario != USER) {
    document.write('El usuario no es correcto')
   } else if (password != PASS) { 
    document.write('La contraseña es incorrecta')
   } else {
    document.write('Usuario y contraseña incorrectos')
   }
}


