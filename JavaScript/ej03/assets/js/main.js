(function(){
    /*
        Comprobar si es par o impar el número entero que nos pasan.
    */
    var comprobarParImpar = function(numero) {
        var respuesta = "";
        if (typeof numero === 'number') {
            if (numero%2 === 0) {
                respuesta = "El número introducido es par";
            } else {
                respuesta = "El número introducido es impar";
            }
        } else {
            console.log("ERROR : El valor introducido no es un número");
        }

        return respuesta;
    };

    console.log(comprobarParImpar(1));
    console.log(comprobarParImpar(2));
    console.log(comprobarParImpar(3));
    console.log(comprobarParImpar(4));
    console.log(comprobarParImpar(5));
    console.log(comprobarParImpar(-5));
    console.log(comprobarParImpar("aaa"));
    console.log(comprobarParImpar()); // Lo mismo que undefined
    console.log(comprobarParImpar({}));
    
})();

/*
 hacer la funcion esPar y devolver siempre valores booleanos
*/