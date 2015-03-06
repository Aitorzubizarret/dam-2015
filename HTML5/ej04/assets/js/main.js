(function() {
    var tweets = {
        id : "89",
        text : "Texto largo de un tweet escrito por alguien aburrido",
        author : "Alguien aburrido",
        createdAt : "Hoy, 10:00 AM"
    };

    var success = function() {
        console.log(datos);
    };

    //App.DB.insert(tweets);
    App.DB.getAll(success);
})();