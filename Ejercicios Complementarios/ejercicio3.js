// EJERCICIOS 3

// Actividad 1
// Solicitar al usuario un (1) un número y un (1) texto. Efectuar una salida por alerta con el mensaje ingresado por cada repetición, hasta alcanzar el valor señalado por el usuario.


/* const numero = prompt('ingrese un número');
const mensaje = prompt('ingerse un mensaje');

for (let i = 1; i <= numero; i++) {
    document.write(mensaje + "<br>")
}  */


// Actividad 2
//Solicitar al usuario un (1) número. Emplear este valor para determinar la cantidad de repeticiones, y efectuar una salida por alerta con el mensaje “lado” en cada repetición. Pero si se alcanza un número de iteraciones mayor que cuatro (4), cancelar el ciclo.

/* 
const numero = prompt('ingrese un número');

for (let i = 0; i < numero; i++) {
    if (i > 3) {
        break
    } else {
        document.write("lado" + "<br>")
    }
}  */

// Actividad 3
//Solicitar al usuario la carga de diez (10) alumnos de forma consecutiva.
//Luego realizar un única salida por alerta, con el listado de alumnos registrados.


/* 
let alumnos = '';
let numAlumno = 1;

for (i = 0; i < 10; i++) {
    alumnos += prompt('Carga el alumno Nº '+ numAlumno++)+"\n";
}
alert(alumnos);
 */


// Actividad 4
//Solicitar al usuario la carga de nombres de forma consecutiva, hasta que se ingrese “Voldemort”. Luego realizar un única salida por alerta, con todos los nombres ingresados.

/* 
let entrada = prompt("INGRESAR NOMBRE"); 
let ingresados = '';

while (entrada != 'Voldemort') {

    ingresados += entrada +"\n";
    entrada = prompt("INGRESAR NOMBRE"); 

}
alert(ingresados);
 */

// Actividad 5
//Solicitar al usuario un (1) número de forma consecutiva, hasta que se ingrese “ESC”. Generar una única salida compuesta por los siguientes productos, según el valor ingresado en cada ciclo:
// ✓ “Tomate” si es 1. ✓ “Papa” si es 2. ✓ “Carne” si es 3. ✓ “Pollo” si es 4.


let entrada = '';
let lista = entrada +"\n";  

while (entrada !== "ESC") {
    
    entrada = prompt('ingresar el número de producto');
    
switch(entrada) {

    case '1':
        lista += "Tomate" +"\n"
        break

    case '2':
        lista += "Papa" +"\n"
        break

    case '3':
        lista += "Carne" +"\n"
        break
    
    case '4':
        lista += 'Pollo' +"\n"
        break

    }

}   alert(lista);


