var App  = App || {};
App.DB = (function(){
    var db;
    var config = {
        name : 'Twitter.db',
        version : '1.0',
        description : 'Twitter Database',
        size : 1 * 1024 * 1024
    };
    var createTable = 'CREATE TABLE IF NOT EXISTS tweets (id TEXT CONSTRAINT pk_tweet PRIMARY KEY, text TEXT, author TEXT, created_at INTEGER);';

    try {
        db = openDatabase(config.name, config.version, config.description, config.size);
    } catch(e) {
        console.log(e);
    }

    console.log(db);
    if (db) {
        var createSchema = function(tx) {
            tx.executeSql(createTable, [], function(tx, results) {
                console.log("Database created!");
                console.log(results);
            }, function(tx, error) {
                console.log("Error " + error);
            });
        };
        db.transaction(createSchema);
        /*
        db.transaction(function(tx){});
        */
    }
    var insert = function(tweet) {
        var sql = "INSERT INTO tweets VALUES(?,?,?,?);";
        db.transaction(function(tx) {
            tx.executeSql(sql, [tweet.id, tweet.text, tweet.author, tweet.createdAt], function() {
                console.log("OK");
            }, function(tx, error) {
                console.log("ERROR");
            });
        });
    };
    var getAll = function(success) {
        db.transaction(function(tx) {
            var sql = "SELECT * FROM tweets ORDER BY created_at;";
            tx.executeSql(sql, [], function(tx, results) {
                console.log(results.rows);
                var datos = [];
                for (var i = results.rows.length - 1; i >= 0; i--) {
                    console.log(results.rows.item(i));
                    datos.push(results.rows.item(i));
                }
                success(datos);
            }, function() {
                console.log("Error");
            });
        });
    };

    return {
        "insert" : insert,
        "getAll" : getAll
    };

})();