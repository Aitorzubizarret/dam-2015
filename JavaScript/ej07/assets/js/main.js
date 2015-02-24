(function(){

    var validarEmail = function(email) {
        if(typeof email === "string") {
            return  /^\w([\w.\-]*\w+)?@[a-zA-Z0-9]([\w.\-]*\w+)/.test(email);
        }
        return false;
    };

    // Pruebas
    console.log(validarEmail() === false);
    console.log(validarEmail("a@a.com") === true); // Letra Arroba Letra Punto Dominio
    console.log(validarEmail("aaaaaaa@aaaaaaaa.com") === true);

    /*
        letra 
    */


})();