(function() {

    var validarDNI = function(dni) {
        /*
            Primero miramos si recibimos algo
            Primero miramos si lo que recibimos es un string y
            si el string que nos dan tiene 9 carácteres.
            El formato del DNI debe ser: 8 números y 1 letra
        */
        if (dni && ((typeof dni) === 'string') && (dni.length == 9)) {
            console.log("Es un string y tiene 9 caracteres");
            for (var i = 0; i <= dni.length; i++) {
                console.log(dni.charAt(i));
                if (true) {

                }
            }
        } else {
            console.log("Error");
            console.log("Tipo => " + typeof dni);
            //console.log("Longitud de la cadena DNI => " + dni.length);
        }

        // 1 - Almacenar el número y la letra en variables separadas
        //var numero = ;
        //var letra = dni.substring(dni.length - 1);
        //console.log(letra);

        // 2 - Número < 0 ó Número > 99999999
        /*
        if () {
            // 3 - Calcular letra (Dividir el número del DNI entre 23 y obtener el resto)

            // 4 - Comprobar si la letra es la misma
        };
        */


        
        console.log("Número que hay en el string => ");
        console.log("Es un NoNúmero => " + isNaN(dni));


        var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
        return true;
    };

    // Pruebas
    console.log(validarDNI());
    console.log(validarDNI("44341427A"));
    console.log(validarDNI("123456789A") === false); // DNI Correcto
    console.log(validarDNI("999999999A") === false); // DNI Incorrecto
    console.log(validarDNI("99999999AA") === false); // 2 letras
    console.log(validarDNI("A999999999") === false); // El DNI empieza con una letra en vez de un número.
    console.log(validarDNI("A") === false); // Sin números y longitud de la cadena menor
    console.log(validarDNI("9999999999999A") === false); // Longitud de la cadena mayor
    console.log(validarDNI({}) === false);
    console.log(validarDNI(undefined) === false);
})();
