(function() {
    console.log("Hi");

    // Creamos un worker
    var worker = new Worker('assets/js/calcularPrimo.js');

    var calcularPrimo = function(e)  {
        e.preventDefault();
        worker.postMessage(numeroACalcular.value);
    };

    // Capturar el input
    var numeroACalcular = document.getElementById("number");
    var calcularBtn = document.getElementById("calcular");

    // Listener
    calcularBtn.addEventListener("click", calcularPrimo, false);

    // Tendremos que añadirle un listener al worker para recibir los mensajes de vuelta
    worker.addEventListener("message", function(e) {
        console.log(e.data);
    });

})();