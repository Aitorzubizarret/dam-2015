window.onload = function() {
    // Número de enlaces que hay en la página
    var enlaces = document.getElementsByTagName('a');
    console.log("Números de enlaces en la página => " + enlaces.length);

    var enlaces2 = document.querySelectorAll('a');
    console.log("Números de enlaces en la página => " + enlaces2.length);

    // Dirección a la que enlaza la penúltimo enlace
    var direccion = enlaces[enlaces.length-2].href;
    console.log("Dirección del penúltimo enlace => " + direccion);

    // Número de enlaces que enlazan a http://prueba
    enlaces = document.querySelectorAll('a[href="http://prueba"]');
    console.log("Números de enlaces que enlazan a http://prueba => " + enlaces.length);
    
    var  count = 0;
    for (var i = enlaces.length - 1; i >= 0; i--) {
        if (enlaces.item(i).href === "http://prueba") {
            count++;
        }
    }
    console.log("Números de enlaces que enlazan a http://prueba => " + count);

    // Número de enlaces del tercer párrafo
    var parrafos = document.querySelectorAll('p');
    if (parrafos.length > 2) {
        enlaces = parrafos[2].querySelectorAll('a');
    }
    console.log("Número de enlaces del tercer párrafo => " + enlaces.length);
    
    parrafos = document.querySelectorAll('body > p:nth-child(3) a');
    console.log("Número de enlaces del tercer párrafo => " + parrafos.length);

};