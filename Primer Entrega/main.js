// elementos
let disponibles = 50     //  <--- condiciona el bucle
let nombre;
let pedido;
let acompañamiento;
let cantidad;
let precio = parseInt('10 €');

// tipos de pasta y stock
const pasta_1 = 'Ravioles'
const pasta_2 = 'Sorrentinos'
const pasta_3 = 'Ñoquis'
const pasta_4 = 'Spaghettis'

// Tipos de salsa y stock
const salsa_1 = 'Bologñesa'
const salsa_2 = 'Blanca'
const salsa_3 = 'Rosa'

// solicitud de nombre
nombre = prompt('ingrese su nombre')

// comienzo de bucle
while (disponibles !== 0) { 

// solicitud de tipo de pasta
    pedido = prompt('Hola '+ nombre + ' , ¿Estas preparado para enamorarte de nuestras pastas?' + '\n' +
                'Tenemos disponibles las siguientes opciones:'+ '\n' +
                '- '+ pasta_1 + '\n' +
                '- '+ pasta_2 + '\n' + 
                '- '+ pasta_3 + '\n' + 
                '- '+ pasta_4 + '\n' + 
                'Elige la opción que deseas:');

// solicitud de tipo de salsa
    if (pedido === pasta_1 || 
        pedido === pasta_2 || 
        pedido === pasta_3 || 
        pedido === pasta_4) {

        acompañamiento = prompt ('Ahora selecciona con que salsa deseas acompañar tus ' + pedido + '\n' +
                '- '+ salsa_1 + '\n' +
                '- '+ salsa_2 + '\n' +  
                '- '+ salsa_3 + '\n' + 
                'Elige la opción que deseas:');
                
// mensaje en caso de que no se ingrese texto en los prompt    
    } else if (pedido == '' || acompañamiento == '') {
        alert('Debes seleccionar una opción, por favor intentalo nuevamente')
        continue
    
// mensaje en caso de que ingrese una opción no válida        
    } else {
        alert('Desafortunadamente no tenemos la opción ingresada, pero la tendremos en cuenta para un futuro. Por favor selecciona una opción válida')
        continue
    }

// solicitud de cantidad de porciones
    while (true) {
        cantidad = parseInt(prompt('Seleccionaste ' + pedido +' con salsa ' + acompañamiento +
            '\n' + 'Ingresa cuántas porciones quieres pedir:'));
        if (cantidad <= 0) {
            alert('Ingresa un valor válido para la cantidad de porciones');
        } else if (cantidad > disponibles) {
            alert('No hay suficientes porciones disponibles. Por favor, elige una cantidad válida.' +
            '\n' + '\n' + 'Tenemos ' + disponibles +' porciones disponibles');
        } else {
          break; // Salir del bucle si la cantidad es válida
        }
    }
    
    descontarPorciones();

const retiro = prompt('Ingrese una de las siguientes opciones: ' + '\n' +
                    '- Retiro por local' + '\n' + '- Envio a domicilio')

    switch(retiro) {
        case 'Retiro por local':
            alert('Lo esperamos en nuestro local dentro de 30 minutos, GRACIAS POR SU COMPRA')
            break
        case 'Envio a domicilio':
            const domicilio = prompt('Por favor ingrese su domicilio')
            const telefono = prompt('Por favor ingrese su teéfono de contacto')
            alert('En breve le enviaremos su pedido, GRACIAS POR SU COMPRA')
            break
        default:
            alert('No ha ingresado una opcion válida, contectenos al 11423131')
            break
    }

    alert('Seleccione ACEPTAR si desea realizar otra compra')
}

// Funcion que descuenta las porciones de la variable "Disponibles"

function descontarPorciones () { 
    for (let i = 0; i < cantidad; i++) {
        disponibles--;
    }
        alert('El precio de tu compra es: € ' + precio * cantidad);   
}
    




