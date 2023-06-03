

// -------------------- AHORA CARRITO CON OBJETOS ---------------------//

let arroz = {id: 1, producto: "Arroz" }
let fideos= {id: 2, producto: "Fideo" }
let pan = {id: 3, producto: "Pan" }

const productos = [];

productos.push(arroz);
productos.push(fideos);
productos.push(pan);



for (const p of productos) { //puedo poner cualquier cosa es el nombre del p (ejemplo i del for comun) pero tengo que definir una variable let o const dentro del for
        console.log(p)      //productos es el nombre del array que voy a recorrer
}

//CREAMOS CLASE PARA EL CARRITO

class Carrito{
    constructor(){
        this.productos = [];
    } // CREAMOS METODOS A LA CLASE

    enCarrito(nuevoProducto){ //queremos ver si esta el producto devuelve true o false. Tenemos que recorrer el array manualmente
        for(let producto of this.productos) { //aca recorremos el carrito
            if(producto.nombre == nuevoProducto.nombre) { //aca verifica si el producto esta en el carrito, el return corta como el continue
                return true;
            }
            return false;
        } 
    }

    agregar(nuevoProducto){
        if(this.enCarrito(nuevoProducto)){
            alert("El producto" + nuevoProducto.nombre + "ya esta en el carrito")
        } else {
            this.productos.push(nuevoProducto);
            alert("El producto" + nuevoProducto.nombre + "fue agregado al carrito")
        }
        console.log(this.productos)
    }

    listar(){
        console.clear();
        console.log("Mis productos en el carrito:");
        for (let producto of this.productos) {
            console.log("---------------------")
            console.log("nombre: " + producto.nombre)
            console.log("precio: " + producto.precio)
            console.log("cantidad: " + producto.cantidad)
        }
    }

    quitar(nombre){ //le paso por prompt el nombre que quiero borrar y recorro el array 1x1 y si es igual lo borro
        for (let producto of this.productos) {
           if(producto.nombre === nombre) {
            let indice = this.productos.indexOf(producto)
            this.productos.splice(indice, 1);
            alert("El producto" + nombre +" fue borrado del carrito")
           }
        }
    }
}

//CREAMOS EL OBJETO PARA AGREGAR LOS PRODUCTOS.

const carrito = new Carrito();

//cuando tocamos el boton agregamos producto (funcionalidades del boton)
function agregarProducto(){
    let nombre = prompt("Introducir el nombre del producto")
    let precio = prompt("Introducir el precio del producto")

    //definimos el objeto (creo el objeto producto con los datos que le paso del prompt)
    const nuevoProducto = {
        nombre: nombre,
        precio: parseInt(precio),
        cantidad: 1
    }
    carrito.agregar(nuevoProducto);
}

console.log(carrito.productos)


//hago click en el boton, me pregunta los datos
//agrego al array .push 

function quitarProducto(){
    let nombre = prompt(" que producto queres sacar")

    carrito.quitar(nombre)
}