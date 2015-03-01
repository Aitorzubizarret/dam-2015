// Este es el array que nos dan
var valores = [true, 5, false, "hola", "adios", 2];

/*
	1 - Cual de los elementos de texto es mayor
*/
// Primero creamos una array e introducimos en el solo los elementos de tipo  texto
var cadenas = [];
for (var i = 0; i < valores.length; i++) {
	if (typeof valores[i] === 'string') {
		cadenas.push(valores[i]);
	}
}
// Utilizando una función recursiva calculamos que string del array es el mayor (el que más carácteres tiene)
var getBiggerString = function(cadena) {
	if (cadena.length/2 > 1) {
		var uno = getBiggerString(cadena.slice(0, cadena.length/2));
		var dos = getBiggerString(cadena.slice((cadena.length/2), cadena.length));
	} else {
		if (cadena.length === 1) {
			return cadena[0];
		} else {
			return (cadena[0].length >= cadena[1].length) ? cadena[0] : cadena[1];
		}
	}
	return (uno.length > dos.length) ? uno : dos;
}

// Cadenas extra para hacer pruebas
var cadenaString = ['uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve', 'diez', 'once'];
var cadenaString = ['1', '22', '333', '4444', '55555', '666666', '7777777', '88888888', '999999999', '0000000000'];

// Mostraremos en pantalla el elemento más grande
console.log("La cadena más larga es : " + getBiggerString(cadenas));

/*
	2 - Utilizando exclusivamente los dos valores booleanos del array, determinar los operadores necesarios para obtener un resultado true y otro resultado false
*/

/*
	3 - Determinar el resultado de las cinco operaciones matemáticas realizadas con los dos elementos numéricos
*/
// Primero obtendremos los elementos de tipo número
var numeros = [];
for (var i = 0; i < valores.length; i++) {
	if (typeof valores[i] === 'number') {
		numeros.push(valores[i]);
	}
};

if (numeros.length === 2) {
	var suma = numeros[0] + numeros[1];
	console.log("Suma : " + suma);

	var resta = numeros[0] - numeros[1];
	console.log("Resta : " + resta);

	var multiplicacion = numeros[0] * numeros[1];
	console.log("Multiplicación : " + multiplicacion);

	var division = numeros[0] / numeros[1];
	console.log("División : " + division);

	var resto = numeros[0] % numeros[1];
	console.log("Resto : " + resto);
}
