(function(){
    /*
        Detectar si la cadena que se le pasa es palindromo o no
    */

    var esPalindromo = function(texto){
        var respuesta = "";

        
        if ((texto)&&(typeof texto === 'string')) {
            var textoGirado = texto.split("", texto.length).reverse();
            textoGirado.toString();

            console.log(texto + " -> " + textoGirado.toString());

            if (texto === textoGirado){
                respuesta = "El texto es palindromo";
            } else {
                respuesta = "El texto NO es palindromo";
            }
        }

        return respuesta;
    };

    console.log(esPalindromo("Hola mundo"));
    console.log(esPalindromo("la ruta nos aporto otro paso natural"));
    console.log(esPalindromo("a"));
    console.log(esPalindromo("aiooia"));
})();

/*
    str.trim().toLowerCase().replace(/\s/g, '').split('').reverse().join()
*/