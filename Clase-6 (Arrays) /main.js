//-----------------------------------------
//        CLASE 6 ARRAYS 1-6-23 
//-----------------------------------------

//Es una variable que nos sirve para guardar otras variables
//cualquier tipo de variable podemos guardar
//es para guardar una lista
//cada elemento que guardamos tiene un indice
// 0 - 1 - 2 - 3 

//en el caso del carrito podemos hacer un array para guardar los productos
//y con los metodos podemos modificarlos(push - pop)

//acceso a los array

const string = ["Hola", "Hello"]

console.log(string[0]) //muestra Hola
console.log(string[1]) //muestra Hello

//recorrido del array
const numeros = [1,2,3,4,5]
for(let index = 0; index < 5; index++) {
    alert(numeros[index])
}

//ejemplo con nombres

const nombres1 = ["Homero", "Sebastian", "Ricardo"];
for(let index = 0; index <= 3; index ++) {
   console.log(string[index]); //tira los 3 logs con los nombres siguiendo los numeros
}



//-------------------  METODO LENGTH   ----------------------//
//me dice cuantos elementos tiene el array
//se suele usar para alert cuando el carrito esta vacio

const strings = ["Homero", "Sebastian", "Ricardo", "Ana", "Jose"];
for(let index = 0; index < strings.length; index ++) {
   console.log(string[index]);
}


//-------------------  METODO PUSH ----------------------//
//agrega al final
//agrega producto al carrito

const productos = ["Smartphone Xiaomi"];
productos.push("smartphone Motorola");

console.log(productos) //muestra xiami - motorola
for(let index = 0; index < productos.length; index ++) {
    console.log(productos[index]);
 }

 //-------------------  METODO SHIFT  ----------------------//
 //Elimina el primer elemento

 const productos1 = ["Smartphone Xiaomi"];
 productos.shift();
 
 console.log(productos1)
 for(let index = 0; index < productos.length; index ++) {
     console.log(productos1[index]);
  }

//-------------------  METODO POP  ----------------------//
 //quitar el ultimo elemento
 const productos2 = ["Smartphone Xiaomi"];
 productos.pop();

 //-------------------  METODO SPLICE  ----------------------//
 //borra dos elementos

 productos2.splice(3,4) //bora indices 3 y 4

//-------------------  METODO JOIN  ----------------------//
//agrega un string en el medio de los elementos

const nombres = ["julia", "Blas","Nora"]
nombres.join("-") //muestra julia - blas - nora

//-------------------  METODO CONCAT  ----------------------//
//combinamos 2 array en 1

const perros = ["puppi"]
const gatos = ["mishi"]
const mastcotas = perros.concat(perros)
console.log(mascotas)

//-------------------  METODO SLICE  ----------------------//
//copia

//-------------------  METODO INDEXOF  ----------------------//
//CLAVE
//cuando queremos saber que indice tienen los elementos

const familia = ["rita", "pedro", "blas", "nora"]
console.log(familia.indexOf("Pedro"))// muestra 1
console.log(familia.indexOf("nora"))// muestra 3

//si quiereo modificarlo
let ana = familia.indexOf("nora")
console.log(familia[nora])

//-------------------  METODO INCLUDES  ----------------------//
//si el elemento existe devuelve true o false
//solo funciona con strings

const nombrres = ["rita", "pedro", "blas", "nora"]
console.log(nombrres.includes("ricardo")) // FALSE
console.log(nombrres.includes("nora")) // TRUE

//este array tiene a ricardo? FALSE. Tiene a nora? TRUE
//es para ver si ya agregamos ese elemento o no

//-------------------  METODO REVERSE  ----------------------//
//invierte el orden del array
//ojo porque modifica el indice del array(peligroso)

const lala = [1,2,3,4]
lala.reverse()
console.log(lala) // 4,3,2,1

//los mas usados length, push, pop, indexOf

// ------------------------------------------    BREAK     ---------------------------------------------------//

//coding en ejercicios.