/* //PRECTICA DE LA CLASE
function Pokemon(nombre, nivel, energia) {
    this.nombre = nombre;
    this.nivel = nivel;   // cuando creamos clases cerramos con ; y cuando es atributo de objeto se usa ,
    this.energia = energia;
}

let charmander = new Pokemon ("Charmander", 1, 10);
let bulbasour = new Pokemon ("Bulbasor", 1, 10);


//adentro de un objeto podemos meter funciones y se denominan METODOS.
// QUE SON LOS METODOS? 


// JS ya tiene metodos incluidos en su codigo 
//metodo LENGTH
let string = "esto es un string";
console.log(string.length)  // devuelve la cantidad de caracteres que tiene el string

console.log(string.toUpperCase)  // devuelve el string en MAYUSCULA
console.log(string.toLowerCase)  // devuelve el string en minuscula

// METODOS PERSONALIZADOS

function Pokemon(nombre, nivel, energia) {
    this.nombre = nombre;
    this.nivel = nivel;   // cuando creamos clases cerramos con ; y cuando es atributo de objeto se usa ,
    this.energia = energia;

    this.atacar = function() {
        console.log(this.nombre + " esta atacando")
    }
}
 // como llamarla

 charmander.atacar();  //llamo al metodo como si fuera un atributo pero con parentesis para ejecutar la funcion del constuctor.
 bulbasour.atacar();

 // CLASES
 //es lo mismo que el contructor pero nos permite crear objetos de manera mas ordenada
 //usamos CLASS y dentro hacemos el CONSTRUCTOR (palabras reservadas CLASS) 
 // es como un plano o molde donde podemos crear distintos objetos

 class Pokemon {
    constructor(nombre, nivel, energia) {
        this.nombre = nombre;
        this.nivel = nivel;   // cuando creamos clases cerramos con ; y cuando es atributo de objeto se usa ,
        this.energia = energia;
        }
} 


// EJEMPLO DE CLASE

class Producto {
    constructor(nombre, precio) {
        this.nombre  = nombre.toUpperCase();
        this.precio  = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
    vender() {
        this.vendido = true;
    }
}
const producto1 = new Producto("arroz", "125");
const producto2 = new Producto("fideo", "50");
producto1.sumaIva();
producto2.sumaIva();
producto1.vender();

 */
// EJERCICIO POKEMON

class Pokemon {
    constructor(nombre, nivel, energia) {
        this.nombre = nombre;
        this.nivel = nivel;   
        this.energia = energia;
        }
        //que me suba de nivel el pokemon
        //que me reste 1 de energia
        // que no pueda entrenar si la energia es igual o menor que 1
        
        entrenar() {
            if(this.energia <= 1){
                //si no tiene energia no puede entrenar
                console.log("no podes entrenar a " + this.nombre + " porque tiene poca energia")
            } else {
                // entrenamos al pokemon
                this.nivel = this.nivel +1;
                this.energia = this.energia -1;
                console.log(this.nombre + "ah subido a nivel!" + this.nivel)
            }
        }
        // sube la energia en 1
        // limite de energia 10
        alimentar() {
            if(this.energia < 10) { 
            this.energia += 1;
            console.log("la energia de "+ this.nombre +" es " + this.energia)
            
        } else {
            console.log("La energia de "+ this.nombre + " esta al maximo.")
        }
    }
        atacar(objetivo) {
            objetivo.restarEnergia(1);
        }

        restarEnergia(cantidad) {
            if(this.energia > 1) {
                this.energia = this.energia - cantidad;
                console.log("La energia de "+ this.nombre + "es" + this.energia)
            } else {
                console.log(this.nombre +" esta incapacitado.")
            }
        }

} 


let charmander = new Pokemon ("Charmander", 1, 10);
let bulbasour = new Pokemon ("Bulbasor", 1, 10);


