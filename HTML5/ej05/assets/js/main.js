(function() {
    var tweet = {
        id : "89",
        text : "Texto largo de un tweet escrito por alguien aburrido",
        author : "Alguien aburrido",
        createdAt : "Hoy, 10:00 AM"
    };

    var success = function() {
        console.log(datos);
    };

    App.DB.insert(tweet);
    App.DB.get(tweet.id, function(datos) {
        console.log(datos);
    });
    //App.DB.getAll(success);
})();