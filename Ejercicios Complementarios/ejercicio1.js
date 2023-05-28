// EJERCICIOS COMPLEMENTARIOS

//Actividad 1
//Crear tres (3) variables para asignar el nombre, apellido y edad de Homero, respectivamente. Es indistinto el empleo de var o let en la declaración.

const nombre = 'Homero'
const apellido = 'Simpson'
const edad = '67' 

//Actividad 2
//Crear cinco (5) variables constantes, asignando a cada una de ellas diferentes nombres de ciudades. Generalmente, dichas variables se declaran con const.

const ciudad1 = 'Buenos Aires'
const ciudad2 = 'Barcelona'
const ciudad3 = 'Copenhague'
const ciudad4 = 'Madrid'
const ciudad5 = 'Bangkok' 


//Actividad 3
//Declarar variables para representar la información de un carnet de conducir.
//Luego, concatenarlas y asignar el resultado de la operación a una variable denominada carnet.

const nacionalidad = 'Argentina'
const direccion = 'Concordia 22, primero derecha'
const nombre = 'Blas Mococain'
const dni = '32858598'
const clase = 'B'
const nacimiento = '22/04/1988'
const edad = 35
const vencimiento = '22/04/2026'

const carnet = nacionalidad + direccion + nombre + dni + clase + nacimiento + edad + vencimiento 

//Actividad 4
//Solicitar al usuario cinco (5) nombres pertenecientes a integrantes de una familia. Luego, concatenar dichas entradas y efectuar una salida por alerta.



let primerNombre = prompt('ingrese el nombre del primer familiar');
let segundoNombre = prompt('ingrese el nombre del segundo familiar');
let tercerNombre = prompt('ingrese el nombre del tercer familiar');
let cuartoNombre = prompt('ingrese el nombre del cuarto familiar');
let quintoNombre = prompt('ingrese el nombre del quinto familiar');

let familia = primerNombre +", "+ segundoNombre +", "+ tercerNombre +", "+ cuartoNombre +"y "+ quintoNombre;

alert('Los nombres de mis familiares son: '+ familia);



//Actividad 5
//Solicitar al usuario uno o más precios.
//Luego, efectuar un descuento en porcentajes (20%, 30%, etcétera) sobre los valores ingresados, y realizar una salida.


let primerPrecio = parseFloat(prompt('Ingrese el primer precio'));
let segundoPrecio = parseFloat(prompt('Ingrese el segundo precio'));

let descuentoVenite = primerPrecio * 0.8;
let descuentoTrenita =  segundoPrecio * 0.7;

console.log('El primer precio con dto del 20% queda en: ' + descuentoVenite)
console.log('El segundo precio con dto del 30% queda en: ' + descuentoTrenita) 
