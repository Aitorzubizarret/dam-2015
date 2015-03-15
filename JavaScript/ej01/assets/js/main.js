(function() {

    var validarDNI = function(dni) {
        var respuesta;
        var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
        /*
            Comprovamos si :
            - Recibimos algo o no ({}, undefined, ...)
            - Si el tipo de dato que recibimos es un string
            - Si el string tiene 9 carácteres, ya que el formato del DNI tiene 8 números y una letra.
        */
        if ((typeof dni === 'string') && (dni.length == 9)) {
            // 1 - Almacenar el número y la letra en variables separadas
            var numero;
            var letra;
            if (/^[0-9]{8}[a-zA-Z]$/.test(dni)) {
                numero = dni.slice(0, 8);
                letra = dni.slice(8, 9);
                //console.log("Número: " + numero + " Letra: " + letra);
            } else {
                respuesta = false;
            }
            
            // 3 - Calcular letra (Dividir el número del DNI entre 23 y obtener el resto)
            var resto;
            if (numero) {
                resto = numero % 23;
                //console.log("Resto : " + resto);
            }
            
            // 4 - Comprobar si la letra es la misma
            if (resto >= 0) {
                if (letras[resto] === letra.toUpperCase()) {
                    respuesta = true;
                } else {
                    respuesta = false;
                }
            }
        } else {
            respuesta = false;
            /*
            if (!dni) {
                console.log ("La función no ha recibido ningún valor.");
            } else if ((typeof dni) !== 'string') {
                console.log ("No se ha recibido un string, se ha recibido un " + typeof dni);
            } else {
                console.log ("La longitud de la cadena recibida no tiene 9 caracteres, tiene " + dni.length);
            }
            */
        }
        return respuesta;
    };

    // Pruebas

    // Sin datos
    console.log(validarDNI() === false);
    console.log(validarDNI({}) === false);
    console.log(validarDNI(undefined) === false);

    // Typeof distinto de string
    console.log(validarDNI(true) === false);

    // String con tamaño diferente de 9
    console.log(validarDNI("") === false);
    console.log(validarDNI("1") === false);
    console.log(validarDNI("22") === false);
    console.log(validarDNI("333") === false);
    console.log(validarDNI("4444") === false);
    console.log(validarDNI("55555") === false);
    console.log(validarDNI("666666") === false);
    console.log(validarDNI("7777777") === false);
    console.log(validarDNI("88888888") === false);
    console.log(validarDNI("0000000000") === false);

    // String con tamaño 9 pero incorrecto (formato distinto de 8 números y una letra)
    console.log(validarDNI("9999999AA") === false); // 2 letras
    console.log(validarDNI("A99999999") === false); // El DNI empieza con una letra en vez de un número.

    // Datos correcto
    console.log(validarDNI("00000000T") === true);
    console.log(validarDNI("00000001R") === true);
    console.log(validarDNI("00000002w") === true);
    console.log(validarDNI("00000003a") === true);
    console.log(validarDNI("00000004g") === true);
    console.log(validarDNI("00000005m") === true);
    console.log(validarDNI("00000006y") === true);
    console.log(validarDNI("00000007f") === true);
    console.log(validarDNI("00000008p") === true);
    console.log(validarDNI("00000009d") === true);
    console.log(validarDNI("00000010x") === true);
    console.log(validarDNI("12345678z") === true);
})();
