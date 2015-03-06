(function(){
    // Variables
    //var storage = sessionStorage;
    var storage = localStorage;
    var prefix = "ej03_"; // Lo utilizaremos para que no tengamos problemas con otros formularios de nuestro mismo dominio.

    // Capturamos los inputs y textarea
    var camposFormulario = document.querySelectorAll('input, textarea');

    var campoNombre = document.getElementById("nombre");
    var campoEmail = document.getElementById("email");
    var campoComentario = document.getElementById("comentario");
    
    var guardarInfo = function() {
        storage.setItem(prefix + this.name, this.value);
    };
    /*
    var guardarNombre = function() {
        sessionStorage.setItem("nombre", campoNombre.value);
        localStorage.setItem("nombre", campoNombre.value);
    };
    var guardarEmail = function() {
        sessionStorage.setItem("email", campoEmail.value);
        localStorage.setItem("email", campoEmail.value);
    };
    var guardarComentario = function() {
        sessionStorage.setItem("comentario", campoComentario.value);
        localStorage.setItem("comentario", campoComentario.value);
    };
    */
    var getData = function() {
        for (var i = camposFormulario.length; i >= 0; i--) {
            console.log(camposFormulario[i]);
        }
        campoNombre.value = storage.getItem(prefix + "nombre");
        campoEmail.value = storage.getItem(prefix + "email");
        campoComentario.value = storage.getItem(prefix + "comentario");
    };
    function handleStorage(event) {
        event = event || window.event;
        if (event.newValue) {
            getData();
        }
    }
    var cargarWeb = function() {
        getData();
    };

    // Listeners
    campoNombre.addEventListener('keyup', guardarInfo, false);
    campoEmail.addEventListener('keyup', guardarInfo, false);
    campoComentario.addEventListener('keyup', guardarInfo, false);

    window.addEventListener('storage', handleStorage, false); // Se ejecutará cuando se grabe algo en localStorage
    window.addEventListener('load', cargarWeb, false); // Se ejecutará cuando se cargue la web

})();