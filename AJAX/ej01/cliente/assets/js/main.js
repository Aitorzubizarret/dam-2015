$(function() {
    // Obtener elementos
    var $ticker = $('#ticker');
    var $detener = $('#detener');

    var peticionAJAX = function() {
        // Hacemos una llamada AJAX al documento
        $.ajax('../servidor/generaContenidos.php', {
            success : function(data, status, jqXHR) {
            /*
            console.log(data);
            console.log(status);
            console.log(jqXHR);
            */
                $ticker.text(data);
            }        
        });
        /*
            Otra manera de hacerlo:

            $.get('url', null, function(data) {
                $ticker.text(data);
            });
        */
    };

    var interval = setInterval(peticionAJAX, 1000);
    $detener.on('click', function() {
        clearInterval(interval);
    });
    

    /*
        Intervalos de tiempo :
        setTimeout
        setInterval
    */
});