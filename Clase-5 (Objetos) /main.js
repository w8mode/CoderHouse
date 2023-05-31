// Que son los objetos
//Un objeto nos sirve para agrupar tipos de datos. Hacer una coleccion de distintos datos agrupados en un objeto.


const persona = {
    nombre: "Homero",    //estos datos se denominan ATRIBUTOS y las fn METODOS.
    edad: 39,
    calle: "Av. siempreviva 742"
}

console.log(typeof(persona)); // devuelve Type Object

console.log(persona.nombre); // asi puedo llamar a los atributos
console.log(persona.edad);
console.log(persona.calle);  


const carrito = {
    producto: "celular",
    stock: 49,
    precio: 100,
    precioConIva: 121
}

console.log(carrito["producto"]) // asi tambien podemos llamar a los atributos
console.log(carrito) // esto devuelve todo el objeto


carrito.stock -= 1,  // puedo cambiar los atributos de los objetos llamando al atributo y dandole una definicion
console.log(carrito.stock);


// OBJETOS CONSTRUCTORES

//En JS, el constructor de objetos es una funcion para construir objetos
// (es como hacer un molde para que podamos replicar)
// usamos THIS (palabra reservada) para diferenciarla de las variables.
// usamos NEW (palabra reservada) para indicar que haga un OBJETO
// cuando usamos CLASES Y CONSTRUCTORES usamos la primera letra Mayuscula

function Persona (nombre, edad, calle) {
    this.nombre = nombre;
    this.edad = edad;
}

let homero = new Persona("Homero", 39, "Av. Siempreviva 247")
console.log(homero)


//otra forma de hacerlo

function persona(objeto) {
    this.nombre = objeto.nombre,
    this.edad = objeto.edad,
    this.calle = objeto.calle,
}

let homero = new Persona({ nombre: "Homero", edad: 39, calle: "Av. siempreviva 742"});