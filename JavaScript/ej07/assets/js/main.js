(function(){

    var validarEmail = function(email) {
        if(typeof email === "string") {
            return  /^\w([\w.\-]*\w+)?@[a-zA-Z0-9]([\w.\-]*\w+)/.test(email);
        }
        return false;
    };

    // Pruebas
    console.log(validarEmail() === false);
    console.log(validarEmail("") === false);
    console.log(validarEmail("a@a.com") === true); // Letra Arroba Letra Punto Dominio
    console.log(validarEmail("aaaaaaa@aaaaaaaa.com") === true);
    console.log(validarEmail(".") === false);
    console.log(validarEmail(".@") === false); // Comenzando con un punto
    console.log(validarEmail(".@.") === false); // 
    console.log(validarEmail("@") === false); // Solo una arroba
    console.log(validarEmail("@aaaaaaa") === false); // Comenzando con una arroba
    console.log(validarEmail("aaaa@") === false); // Finalizando con un arroba
    console.log(validarEmail("email") === false); // Sin arroba
    console.log(validarEmail("aaa@@aaaa") === false); // Con más de una arroba

    /*
        letra 
    */


})();