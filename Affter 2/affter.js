/* Objetivos de la aplicacion:
- Estructira HTML
- Funciones
- Objetos
- Arrays
- Metodo de array (busqueda o filtrado)
-- push: para agregar al array
-- splice: para quitar del array
-- find: para buscar el elemento
-- indexOf: para encontrar el indice del elemento
*/



//clase molde para los objetos del juego
class Item{
    //parametros para instanciar o crear el item del juego
    constructor(nombre, precio, imagen) {
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
    }
}

// Variables global
const mochila = [] //Array donde guardamos todos los items que compramos

//items del juego
const pocion = new Item("Poción de Vida", 80, "pocion.jpeg");
const espada = new Item("Espada", 160, "espada.jpeg")
const escudo = new Item("Escudo", 120, "escudo.jpeg")

//Oro
let oro = 1000;

// Elementos
const elementoOro = document.querySelector("#oro");
elementoOro.innerText = oro;

const elementoMochila = document.querySelector("#mochila");

// Funciones regulares 
// comprar recibe un objeto como parametro(el item/objeto que queremos comprar)
function comprar(item){
    if(oro - item.precio <= 0){
        alert("no tenes suficiente oro para comprar el item" + item.nombre);
    } else {
        mochila.push(item);
        oro = oro - item.precio;  //al oro actual le resto el precio
        actualizarHTML();
    }
}

function vender(indice) {
    const item = mochila[indice];
    mochila.splice(indice, 1);
    oro = oro + item.precio;
    actualizarHTML();
    }

//actualizar mochila (renderiza los elementos en la mochila cuando pongo o saco elementos)
function actualizarHTML(){
    elementoMochila.innerHTML = "";
    for(const item of mochila) { //recorre 1 por 1 los elementos de la mochila y los guarda en la variable item
        let indiceItem = mochila.indexOf(item);
        let elementoItem = `
        <li class="item" onclick="vender(${indiceItem})">
        <img src="${item.imagen}" />
        ${item.nombre}
        </li>`;
        elementoMochila.innerHTML += elementoItem; //va sumando los div con los elementos q(tienen solo el nombre del item)
    }
    elementoOro.innerText = oro; // actualizo el oro
}