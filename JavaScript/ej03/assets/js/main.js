(function(){
    /*
        Comprobar si es par o impar el número entero que nos pasan.
    */
    var esPar = function(numero) {
        var respuesta = false;
        if (typeof numero === 'number') {
            respuesta = numero%2 === 0;
        }
        return respuesta;
    };

    // Pruebas
    console.log(esPar(0) === true);
    console.log(esPar(1) === false);
    console.log(esPar(2) === true);
    console.log(esPar(3) === false);
    console.log(esPar(4) === true);
    console.log(esPar(5) === false);
    console.log(esPar(-5) === false);
    console.log(esPar("aaa") === false);
    console.log(esPar() === false); // Lo mismo que undefined
    console.log(esPar({}) === false);
    
})();