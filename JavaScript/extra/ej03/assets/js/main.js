// Array con los nombres de los meses
var nombreMeses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");

/*
	Utilizaremos distintas formas de recorrer un array
	y después mostraremos los datos de este en la consola.
*/

// Recorreremos el array con un For..In
console.log("Usando el For .. In");
for (i in nombreMeses) {
	console.log("Nombre del mes " + nombreMeses[i]);
}

// Recorreremos el array con un For
console.log("\nUsando el For");
for (var i = 0; i <= nombreMeses.length; i++) {
	console.log("Nombre del mes " + nombreMeses[i]);
}

// Recorremos el array con un While
console.log("\n Usando el While");
var i = 0;
while(i < nombreMeses.length) {
	console.log("Nombre del mes " + nombreMeses[i]);
	i++;
}