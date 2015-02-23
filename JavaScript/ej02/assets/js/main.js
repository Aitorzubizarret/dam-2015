(function(){
    /*
        Calcular el factorial de un número.
        5! = 5 * 4 * 3 * 2 * 1
    */
    var calcularFactorial = function(numero){
        var resultado = 1;
        /*
            Comprobar que:
            - Recibimos algo <= Si no recibimos nada y miramo de que tipo es, no dará error
            - Que lo que recibimos es un número
            - Y que el número es positivo
        */
        if ((typeof numero === 'number')&&(numero >= 0)) {
            for (var i = numero; i > 0; i--) {
                resultado = resultado * i;
            }
        } else {
            resultado = false;
        }
        /*
            Comprobar si resultado es distinto de false,
            de esta manera mostramos su valor en la consola
            y cambiamos su valor por TRUE para las pruebas.
        */
        if (resultado) {
            console.log(resultado);
            resultado = true;
        }
        return resultado;
    };
    var calcularFactorialRecursivo = function(numero){
        var resultado = 1;
        if (numero > 0) {
            resultado = numero * calcularFactorialRecursivo(numero-1);
        }
        return resultado;
    };

    // Pruebas
    console.log(calcularFactorial(0) === true);
    console.log(calcularFactorial(1) === true);
    console.log(calcularFactorial(2) === true);
    console.log(calcularFactorial(3) === true);
    console.log(calcularFactorial(4) === true);
    console.log(calcularFactorial(5) === true);
    console.log(calcularFactorial(-5) === false);
    console.log(calcularFactorial({}) === false);
    console.log(calcularFactorial() === false);
    console.log(calcularFactorial(function(){}) === false);
    console.log(calcularFactorial(170) === true);

    console.log(calcularFactorialRecursivo(170));

})();