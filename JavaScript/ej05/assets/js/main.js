(function(){
    /*
        Detectar si la cadena que se le pasa es palindromo o no
    */
    var esPalindromo = function(texto){
        var respuesta = false;
        if (typeof texto === 'string') {
            var textoProcesaro = texto.trim().toLowerCase().replace(/\s/g, '');
            var textoProcesadoGirado = textoProcesaro.split('').reverse().join().toString().replace(/\W/g, '');
            respuesta = (textoProcesaro === textoProcesadoGirado);
        }
        return respuesta;
    };

    // Pruebas
    console.log(esPalindromo("Hola mundo") === false);
    console.log(esPalindromo("La ruta nos aporto otro paso natural") === true);
    console.log(esPalindromo(2) === false) ;
    console.log(esPalindromo() === false);
})();
/*
    Métodos de strings:
    - trim() => Elimina los espacios vacios delante y detras de un string. ("    Ejemplo  ") => ("Ejemplo")
    - toLowerCase() => Convierte todos los carácteres en minúsculas. ("EjemPLO") => ("ejemplo")
    - replace(string ó expresión regular, nuevo string o función) => Devuelve un string nuevo después de reemplazar los caracteres por otros
    - split() => Divide un string en un array de substrings. En nuestro caso hemos dividido un string en un array de letras. ("Ejemplo") => ["E", "j", "e", "m", "p", "l", "o"]

    Métodos de arrays:
    - reverse() => Da la vuelta a un array. ["1", "2", "3", "4"] => ["4", "3", "2", "1"]
    - join() => Une todos los elementos de un array en un string. ["E", "j", "e", "m", "p", "l", "o"] => ("E,j,e,m,p,l,o") !OJO, las comas también aparecen en el string :-(

    Expresiónes regulares:
    \W => Cualquier caracter que no es una palabra. En nuestro caso un , (coma)
    \s => Espacio vacio
    /g => Analizar todo el array
*/