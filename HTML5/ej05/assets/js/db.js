var App  = App || {};
App.DB = (function(){
    var db;
    var config = {
        name : 'Twitter.db',
        version : 2,
        description : 'Twitter Database',
        size : 1 * 1024 * 1024
    };

    /*
        Cada vez que queremos hacer algo con la DB, llamaremos al INIT
        De esta manera si la BD no existe la abrirá y después se ejecutará
        la función que nosotros queramos, en forma de callback.
        De esta manera nos aseguramos que la BD esta disponible antes de ejecutar
        nuestra función.
    */
    var init = function(success) {
        if (!db) {
            // Abrimos la DB
            var request = indexedDB.open(config.name, config.version);

            // Listener a la DB para saber si se abre correctamente
            request.addEventListener("success", function(e) {
                console.log("DB '" + config.name + "' Opened");

                // Guardamos el acceso a la BD en una variable
                db = e.target.result;

                // Ejecutamos el callback
                success();
            });

            // Listener a la DB para saber si necesita actualizar la versión
            request.addEventListener("upgradeneeded", function(e) {
                console.log("Upgrading database...");

                // Guardamos el acceso a la BD en una variable
                db = e.target.result;

                // Creamos en la DB un almacen de objetos
                var tweets = db.createObjectStore('tweets', {
                    keyPath: 'id',
                    autoIncrement: false
                });
            });

            // Listener a la DB para saber si da error
            request.addEventListener("error", function() {
                    console.log("Error DB Opening");
            });
        } else {
            // Ejecutamos el callback
            success();
        }
    };
    var insert = function(tweet) {
        init(function() {
            // Creamos una transacción
            var transaction = db.transaction(['tweets'], "readwrite");
            var store = transaction.objectStore('tweets');

            var request = store.add(tweet);
        });
    };
    var get = function(id, success) {
        init(function() {
            // Creamos una transacción
            var transaction = db.transaction(['tweets'], "readonly");
            var store = transaction.objectStore('tweets');

            var getRequest = store.get(id);

            getRequest.addEventListener("success", function(e) {
                success(e.target.result);
            });
        });
    };

    return {
        "insert" : insert,
        "get" : get
        //"getAll" : getAll
    };

})();