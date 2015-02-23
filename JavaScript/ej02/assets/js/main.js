(function(){
    /*
        Calcular el factorial de un número.
        5! = 5 * 4 * 3 * 2 * 1
    */

    var calcularFactorial = function(numero){
        var resultado = 1;

        // Comprobar que recibimos algo, y que lo que recibimos es un número
        /*
            Comprobar que:
            - Recibimos algo
            - Que lo que recibimos es un número
            - Y que el número es positivo
        */
        if ((typeof numero === 'number')&&(numero >= 0)) {
            for (var i = numero; i > 0; i--) {
                resultado = resultado * i;
            }
        } else {
            console.log("Error");
            resultado = false;
        }
        
        return resultado;
    };

    console.log(calcularFactorial(0) === true);
    console.log(calcularFactorial(1));
    console.log(calcularFactorial(2));
    console.log(calcularFactorial(3));
    console.log(calcularFactorial(4));
    console.log(calcularFactorial(5));
    console.log(calcularFactorial(-5));
    console.log(calcularFactorial({}));
    console.log(calcularFactorial());
    console.log(calcularFactorial(function(){}));
})();