var App = App || { Model : {} };

/*
if (App === undefined) {
    var model 
}
*/

// Tenemos que guardar lo que se devuelve en uns variable.
App.Model.Shape = (function(){
    // Variables privadas de clase
    var _x, _y;

    // Crear el constructor de la clase
    function Shape(x, y) {
        _x = (typeof x === 'number') ? x : 0;
        _y = (typeof y === 'number') ? y : 0;

        // Se copiaria en cada uno de los objetos
        /*
        this.move = function(x, y) {
            this.x += x;
        };
        */
    }

    // Añadimos un método a su prototipo para que lo tengan todos, en vez de crearlo en el constructor.
    Shape.prototype.move = function(x, y) {
        _x += (typeof x === 'number') ? x : 0;
        _y += (typeof y === 'number') ? y : 0;
    };

    Shape.prototype.getX = function() {
        return _x;
    };

    Shape.prototype.getY = function() {
        return _y;
    };

    Shape.prototype.setX = function(x) {
        _x += (typeof x === 'number') ? x : 0;
    };

    Shape.prototype.setY = function(y) {
        _y += (typeof y === 'number') ? y : 0;
    };

    // Como la clase es privada tenemos que utilizar un return para devolver la clase
    return Shape;

})();
/*
    If ternario

    this.x = (typeof x === 'number') ? x : 0;

    if (typeof x === 'number') {
        this.x = x;
    } else {
        this.x = 0;
    }

*/