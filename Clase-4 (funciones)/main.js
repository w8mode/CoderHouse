// Ejercicio de Funciones para ver la diferencia de usar o no el RETURN

const IVA1 = 21;
let precioBase = 0;

function SumarIva(precio) {
    precioBase = precio + (precio * IVA / 100)
}

let nombreProducto1 = "celular"
let precioBaseProducto1 = 100;
sumarIVA(precioBaseProducto1)
let precioConIva1 = precioFinal

let nombreProducto2 = "televisor"
let precioBaseProducto2 = 200;
sumarIVA(precioBaseProducto2)
let precioConIva2 = precioFinal


// las mismas funciones pero con Return

const IVA = 21;

function SumarIva(precio) {
    let precioBase = precio + (precio * IVA / 100)
    return precioFinal
}

let nombreProducto12 = "celular"
let precioConIva12 = sumarIVA(100)
console.log(precioConIva1)

let nombreProducto23 = "televisor"
let precioConIva24 = sumarIVA(200)
console.log(precioConIva2)

//---------------------------------------------
// REPASO FUNCIONES REGULARES ANONIMAS Y FLECHA
//----------------------------------------------
/* ¿Para que usamos return en las funciones?
Rsp. de chatGPT GOD:
Aunque es posible obtener el mismo resultado sin utilizar return, 
es importante tener en cuenta que el uso de variables globales puede 
llevar a problemas de mantenibilidad y legibilidad del código.
 Las variables globales pueden ser modificadas en cualquier parte del 
 programa, lo que puede llevar a errores difíciles de depuerar. Es por eso que , 
 en general, se recomienda utilizar return para devolver valores desde funciones 
 y evitar el uso de variables globales en la medida de lo posible */
 
 function holaMundo() {
    mensaje = "Hola mundo";

}
console.log(holaMundo());

function esPar(numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

 if (esPar(5)) {
    console.log(" EL NUMERO ES PAR")
 }else{
    console.log("EL NUMERO ES IMPAR")
 }

// FUNCION REGULAR
 function sumar(valor1, valor2) {
    let resultado = valor1 + valor2;
    return resultado;
    //tambien se puede poner solo return valor1 + valor2 (sin el let)
 }

 console.log(sumar(2,2));

 //FUNCION ANONIMA (lo mismo con otra sintaxis)

 const sumar = function (valor1, valor2){
    return valor1 + valor2
 }
 setTimeout(function(){
    alert("Se va a ejecutar este alert en 3 segundo")
 }, 3000);

//FUNCION FLECHA (nueva sintaxis)
//tiene menos codigo y se puede pasar como parametro
//no la puedo llamar antes, primero tiene que estar definida porque tiene una variable

 const sumar = (valor1, valor2) => {
    return valor1 + valor2
 }

 console.log(sumar(1,2));


 //cambia la estetica
 //Saco las llaves y me lo toma como return

 const sumar = (valor1, valor2) => valor1 + valor2;

 //ejemplo de funcion par en flecha

 const esPar = (numero) => numero % 2 === 0;
console.log(esPar(2)); //true
console.log(esPar(5)); // false