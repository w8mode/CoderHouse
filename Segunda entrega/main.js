
class articulo {
  // Parámetros para instanciar o crear los articulos
  constructor(nombre, precio, cantidad) {
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.precio = precio;
  }

  agregar() {
    deposito.push(this);
    alert("El articulo " + this.nombre + " fue agregado al deposito.");
    actualizarDeposito();
  }

// Método para quitar un artículo y su cantidad del depósito
quitar(nombreArticulo, cantidad) {
    // Buscar el artículo en el depósito
    const indice = deposito.findIndex(articulo => articulo.nombre === nombreArticulo);
  
    // Verificar si se encontró el artículo
    if (indice !== -1) {
      const articulo = deposito[indice];
  
      // Verificar si la cantidad a quitar es menor o igual a la cantidad existente
      if (cantidad <= articulo.cantidad) {
        // Actualizar la cantidad del artículo
        articulo.cantidad -= cantidad;
  
        // Si la cantidad llega a cero, remover el artículo del depósito
        if (articulo.cantidad === 0) {
          deposito.splice(indice, 1);
        }
  
        alert(`Se han quitado ${cantidad} unidades del artículo ${nombreArticulo} del depósito.`);
        actualizarDeposito();
      } else {
        alert(`No hay suficientes unidades del artículo ${nombreArticulo} en el depósito.`);
      }
    } else {
      alert(`El artículo ${nombreArticulo} no se encuentra en el depósito.`);
    }
  }
}

// Variables globales
const deposito = []; // Array donde guardamos todos los items que agregamos
let unArticulo; // Variable para almacenar 

// Función global para agregar articulos solicitados por el prompt
function agregarArticulo() {
  let nombre = prompt("Introduzca el nombre del producto");
  // Valida si el input no está vacío
  if (nombre === "") {
    alert("El nombre ingresado es inválido, intente nuevamente.");
    return;
  }

  // Solicita el precio del articulo
  let precio = prompt("Introduzca el precio del producto");
  // Valida si el input no está vacío o tiene como valor 0
  if (precio === "" || parseInt(precio) <= 0) {
    alert("El precio ingresado es inválido, intente nuevamente.");
    return;
  }

  // Solicita la cantidad de productos que se va a stockear
  let cantidad = prompt("Introduzca la cantidad de artículos que desea stockear");
  if (cantidad <= 0) {
    alert("La cantidad ingresada es inválida, intente nuevamente.");
    return;
  }

  // Crea el objeto con los atributos solicitados por el prompt
  unArticulo = new articulo(nombre, parseInt(precio), parseInt(cantidad));

  // Llama al método agregar de la clase articulo
  unArticulo.agregar();
}

// Función para actualizar el contenido del div "deposito"
function actualizarDeposito() {
    const depositoDiv = document.getElementById("deposito");
    depositoDiv.innerHTML = ""; // Limpiar el contenido existente

    deposito.forEach(articulo => {
        const articuloDiv = document.createElement("div");
        articuloDiv.innerText = `Nombre: ${articulo.nombre} | Cantidad: ${articulo.cantidad} | Precio (c/u): $ ${articulo.precio}`;
        depositoDiv.appendChild(articuloDiv);
    });
}

function quitarArticulo() {
    let nombreArticulo = prompt("Introduzca el nombre del artículo que desea quitar");
    if (nombreArticulo === "") {
      alert("El nombre ingresado es inválido, intente nuevamente.");
      return;
    }
  
    let cantidad = prompt("Introduzca la cantidad de artículos que desea quitar");
    if (cantidad <= 0) {
      alert("La cantidad ingresada es inválida, intente nuevamente.");
      return;
    }
  
    // Llama al método quitar de la clase articulo
    unArticulo.quitar(nombreArticulo, parseInt(cantidad));
  }
