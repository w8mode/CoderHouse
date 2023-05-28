
// ejercicio pdf multipilcando con for 

/* let ingresarNumero = parseInt(prompt("ingresar un numero"));

for (let i = 1; i <= 10; i++) {
    let resultado = ingresarNumero * i;
    document.write(" " + ingresarNumero + " x " + i + " = " + resultado)
} */


// ejercicio de tablas con for

/* let tabla = prompt("Que tabla queres saber")

for (let i = 1; i < 10; i++) {
    let resultado = tabla * i;
    alert(tabla + " x " + i + " es igual a " + resultado);
} */

//ejercicio de asignacion de turnos con for

/*  for (let i = 1; i <= 20; i++) {
    let ingresarNombre = prompt("Ingresar Nombre");
    alert(" Turno Nº " + i + " Nombre: " + ingresarNombre);
}  */


/* let cupos = 3; // simula el numero de tunos que tengo para dar
for (let turno = 1; turno < 10; turno++) {
    let nombre = prompt(" ingresa tu nombre")
    if ( cupos == 0) {
        alert ("diculpa, no tenemos mas turnos disponibles");
        break;
    } 
    alert (nombre + ", tu turno es el Nº" + turno);
    cupos--;
} */


//ejemplo ocn continue

/* let cupos = 3; // simula el numero de tunos que tengo para dar

for (let turno = 1; turno < 10; turno++) {
    let nombre = prompt(" ingresa tu nombre")
    if(nombre == "ricardo"){
        alert(" no le damos turnos a los ricardos");
        continue;
    }
    if ( cupos == 0) {
        alert ("diculpa, no tenemos mas turnos disponibles");
        break;
    } 
    alert (nombre + ", tu turno es el Nº" + turno);
    cupos--;
    
} */


// ejercicio con WHILE

/* let comando;
while (comando != 'salir') {
    comando = prompt('ingrese el comando');
    alert('comando ingresado' + comando)

    if (comando == 'enviar mensaje') {
        let destinatario = prompt('ingrese el nombre del destinatario');
        let mensaje = prompt('ingrese el mensaje que quiere enviar');
        alert ( "mensaje" + mensaje +" enviado a " + destinatario);
    } else if (comando == 'mostrar productos') {
        for (let i = 0; i <= 3; i++) {
            alert('producto Nº' + i)
        }
    }
}
 */
//ejercicio con switch

/* let comando;
while (comando != 'salir') {
    comando = prompt('ingrese el comando');

    switch (comando) {
        case 'enviar mensaje':
            let destinatario = prompt('ingrese el nombre del destinatario');
            let mensaje = prompt('ingrese el mensaje que quiere enviar');
            alert("mensaje " + mensaje + " enviado a " + destinatario);
            break;

        case 'mostrar productos':
            for (let i = 0; i <= 3; i++) {
                alert('producto Nº' + i);
            }
            break;

        case 'Hackear la NASA':
            alert('Conectandose con la NASA, aguarde');
            let clave = prompt('Ingrese la clave por favor');
            if (clave == 1234) {
                alert('conectado');
                window.location = 'https://www.youtube.com';
                comando = 'salir';
            }
            break;
    }
}
} */