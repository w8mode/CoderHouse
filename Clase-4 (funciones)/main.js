// Ejercicio de Funciones para ver la diferencia de usar o no el RETURN

const IVA = 21;
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

let nombreProducto1 = "celular"
let precioConIva1 = sumarIVA(100)
console.log(precioConIva1)

let nombreProducto2 = "televisor"
let precioConIva2 = sumarIVA(200)
console.log(precioConIva2)