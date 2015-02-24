var App = App || { Model : {} };
App.Model.Square = (function(){
    // Variables privadas
    var _width;

    // Constructor
    function Square(x, y, lado) {
        // Super
        App.Model.Shape.call(this, x, y);
        // Asignar el valor que nos dan de la variable longitud
        _width = (typeof lado === 'number') ? lado : 0;
    }

    // Padre (El cuadrado pertenece al shape)
    Square.prototype = Object.create(App.Model.Shape.prototype);
    Square.prototype.constructor = Square;

    // Métodos
    Square.prototype.getWidth = function() {
        return _width;
    };
    Square.prototype.setWidth = function(lado) {
        _width = (typeof lado === 'number') ? lado : 0;
    };
    Square.prototype.getArea = function() {
        return (_width * _width);
    };

    return Square;
})();