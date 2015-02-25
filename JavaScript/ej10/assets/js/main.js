window.onload = function() {
    /*
        Seleccionar los elementos que necesitamos:
        - El botón será el encargado de ejecutar la función
        - La lista, tendrá nuevos nodos
    */
    //var boton = document.querySelectorAll("input");
    var btn = document.getElementById('boton');
    var ul = document.getElementById('lista');
    var lis = ul.querySelectorAll('li');

    // Función que se va a ejecutar
    var add = function(e) {
        e.stopPropagation(); // Detiene que el evento suba arriba
        if ((btn)&&(ul)) {
            var elementoNuevo = document.createElement('li');
            elementoNuevo.innerText = "Hola Mundo!";
            ul.appendChild(elementoNuevo);
        }
    };

    // e => argumento que siempre se envia en una función
    var remove = function(e) {
        if (confirm('¿Seguro que desea eliminar este elemento?')) {
            this.removeChild(e.target);
        }
    };

    // Listener para que se ejecute la función
    if (btn) {
        boton.addEventListener('click', add, false);
    }

    // Remove le manda el estado de manera interna. Es como remove(lis[i])
    /*
    if (lis) {
        for (var i = lis.length - 1; i >= 0; i--) {
            lis[i].addEventListener('click', remove, false);
        }
    }
    */
    if (ul) {
        ul.addEventListener('click', remove, false);
    }
    var log = function(e){
        console.log("Click on " + e.target);
    };
    document.addEventListener('click', log, false);
};