(function(){
    /*
        Comprobar si la cadena de texto se le pasa esta formada por:
        - Sólo mayusculas
        - Sólo minusculas
        - Una combinación de ambas
    */

    var comprobarCadena = function(cadena){        
        var respuesta = "";

        if (typeof cadena === 'string') {

            if (cadena === cadena.toUpperCase()) {
                respuesta = "La cadena esta sólo en mayúsculas";
            } else if (cadena === cadena.toLowerCase()) {
                respuesta = "La cadea esta sólo en minúsculas";
            } else {
                respuesta = "La cadena tiene letras mayúsculas y minúsculas";
                throw Error("No es un string");
            }
        }

        return respuesta;
    };

    console.log(comprobarCadena("Hola"));
    console.log(comprobarCadena("HOLA"));
    console.log(comprobarCadena("hola"));
    console.log(comprobarCadena());
    console.log(comprobarCadena(4));
    console.log(comprobarCadena(function(){}));

})();

/*
usar try catch
*/