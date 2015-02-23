(function(){
    /*
        Comprobar si la cadena de texto se le pasa esta formada por:
        - Sólo mayúsculas
        - Sólo minúsculas
        - Una combinación de ambas
    */
    var comprobarCadena = function(cadena){        
        var respuesta = "";
        if (typeof cadena === 'string') {
            if (cadena === cadena.toUpperCase()) {
                respuesta = "Mayúsculas";
            } else if (cadena === cadena.toLowerCase()) {
                respuesta = "Minúsculas";
            } else {
                respuesta = "Mix";
            }
        } else {
            throw Error("No es un string");
        }
        return respuesta;
    };

    // Pruebas
    try {
        console.log(comprobarCadena("Hola") === "Mix");
    } catch (e) {
        console.log("Error : No se ha introducido una cadena.");
    }
    try {
        console.log(comprobarCadena("HOLA") === "Mayúsculas");
    } catch (e) {
        console.log("Error : No se ha introducido una cadena.");
    }
    try {
        console.log(comprobarCadena("hola") === "Minúsculas");
    } catch (e) {
        console.log("Error : No se ha introducido una cadena.");
    }
    try {
        console.log(comprobarCadena());
    } catch (e) {
        console.log("Error : No se ha introducido una cadena.");
    }
    try {
        console.log(comprobarCadena(4));
    } catch (e) {   
        console.log("Error : No se ha introducido una cadena.");
    }
    try {
        console.log(comprobarCadena(function(){}));
    } catch (e) {
        console.log("Error : No se ha introducido una cadena.");
    }
})();