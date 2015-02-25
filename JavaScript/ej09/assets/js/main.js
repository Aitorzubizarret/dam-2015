window.onload = function() {
    // Seleccionamos los elementos
    var enlace = document.querySelectorAll('.enlace');
    var span = document.querySelectorAll('.adicional.oculto');

    // Función a ejecutar para mostrar el texto y ocultar el link
    var muestra = function(e) {
        e.preventDefault(); // Prevenimos el comportamiento por defecto de un enlace. Ya no va a la dirección

        if (span.length) {
            span[0].classList.remove('oculto');
        }
        if (enlace.length) {
            enlace[0].classList.add('oculto');
        }
    };

    // Añadiremos un listener al enlace, y de esta manera, al hacer click en el enlace este ejecutará la función.
    if (enlace.length) {
        enlace[0].addEventListener('click', muestra, false);
    }
};