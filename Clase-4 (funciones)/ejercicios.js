//ACTIVIDAD 1
/* Codificar tres funciones:
Una función entrada(), la cual solicite un valor al usuario y lo retorne.
Una función procesamiento(valor), donde se transforme la entrada.
Una función salida(valor), la cual mostrará el resultado por alerta.
Luego, invocar las tres funciones. */

/* Notas actividad 1
La actividad propone agrupar en funciones las instrucciones de 1) entrada. 2) procesamiento,
 y 3) salida. La llamada de las funciones debe coincidir con dicho orden.
  */

function entrada() {
   return prompt('ingrese valor:')
}

function procesamiento(valor){
   return 'El valor ingresado es: ' +  valor;
}

function salida(valor) {
    alert(valor)
}

salida(procesamiento(entrada()))


//ACTIVIDAD 2
/* Codificar una función que reciba un número decimal por parámetro, y lo retorne redondeado al entero
 más cercano. Para ello, puede emplearse  Math.round.
Luego invocar la función de forma iterativa cinco (5) veces, solicitando en cada ciclo un número al usuario. */

/* Notas actividad 2
La “llamada iterativa de la función” implica emplear un bucle. Como se solicita una cantidad determinada, 
se recomienda emplear for. */

//--------- MI CODIGO -----------//

/* function redondear (n) {
    
for (let i = 0; i < 5; i++) {
   let entrada = prompt("numero decimal")
   alert(Math.round(entrada)) 
   }
}

redondear() */

// ------------------ RESPUESTA ------------------//

/* function redondeo(valor){
   return Math.round(valor)
}
for (let index = 0; index < 5; index++) {
   let entrada = prompt("INGRESAR NUMERO");
   alert(redondeo(entrada));
}
 */



//ACTIVIDAD 3
/* Codificar una función con la siguiente cabecera: impuesto (precio, porcentaje).
 En ella, se retorna un valor numérico compuesto por el precio recibido, más la suma del porcentaje ingresado.
Luego invocar la función de forma iterativa cinco (5) veces, solicitando en cada ciclo un precio y porcentaje
 al usuario. */

/*  Notas actividad 3
 Un impuesto es la suma de un monto al precio inicial. Buscamos calcular en la función el porcentaje
sobre dicho precio, y sumarlo; por ejemplo: si el precio es 100, el 20% es 20, entonces el precio final 
es 100+20 = 120.
  */

function impuesto(precio, porcentaje) {
   return precio * 100/porcentaje
}
for ( let i = 0; i < 5; i++) {
   let n1 = prompt('ingresar precio')
   let n2 = prompt('ingresar porcentaje')

}





//ACTIVIDAD 4
/* Codificar dos funciones:
Una función cotizarDolar(pesos), la cual recibe un valor monetario en pesos argentinos, y lo retorna en su equivalente en dólares.
Una función cotizarPesos(dolar), que recibe un valor monetario en dólares, y lo retorna en su equivalente en pesos argentinos.
Luego invocar las funciones solicitando  al usuario el valor y el tipo de cotización a realizar.
 */

/* Notas actividad 4
Es posible cambiar la moneda a cotizar. Lo importante es codificar dos funciones que hagan operaciones contrarias (inversas).
 */



//ACTIVIDAD 5
/* Codificar una función con la siguiente cabecera: validacion(cadena). En ella, se retorna un valor booleano, el cual es true si el parámetro no es un cadena vacía. Caso contrario, se retorna false. Luego invocar la función de forma iterativa, hasta que el usuario tipee “ESC”, solicitando en cada ciclo una cadena a validar. */

/* Notas actividad 5
Es común emplear funciones para validar si un valor recibido por parámetro cumple con cierto formato. La comparación de cadena vacía es (cadena != ‘’)
 */

