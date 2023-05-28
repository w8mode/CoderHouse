// Actividad Nº 1 - PDF
/* 1- Pedir número mediante prompt y sumarle otro número en cada repetición, 
realizando una salida por cada resultado */


/*

let numeroUno = parseInt(prompt('Ingrese un número'));
let numeroDos = parseInt(prompt('Ingrese otro número'));

for (i = 1; i < 10; i++) {
  let resultado = numeroUno + numeroDos++
  console.log('la suma es: ' + resultado)
}

*/


/* 2- Pedir un texto mediante prompt,concatenar un valor en cada repetición, 
realizando una salida por cada resultado, hasta que se ingresa “ESC” */


/* 
let comando;


while (comando !== "ESC") {

  let nombre = prompt("ingresa tu nombre");

  if (nombre == "Blas") {
    
    let receptor = prompt("Hola " + nombre +", ¿A quien queres enviarle un mensaje?");
    let mensaje = prompt("ingresa tu mensaje para " + receptor);
    alert(receptor + ", dice " + nombre + " que " + mensaje);
    comando = prompt("Ingresa ESC para salir o enter para continuar")

  } else if (nombre == "Facu") {
    alert("Hacete culear");
    comando = prompt('Ingresa ESC para salir, o enter para continuar')

  } else {
    alert("Vos tambien hacete culear")
    break
  }
} 
 */



//Pedir un número por prompt, repetir la salida del mensaje “Hola” la cantidad de veces 


/* 
let cantidadDeVeces = prompt("Ingrese un numero");

for( i = 0; i < cantidadDeVeces; i ++) {
  let mensaje = "Hola" ;
  document.write(mensaje + "<br>" );
}
*/
