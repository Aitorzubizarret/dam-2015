var App = App || { Model : {} };
App.Model.Rectangle = (function(){
    // Variables privadas
    var _heigth;

    // Constructor
    function Rectangle(x, y, ladoA, ladoB)  {
        // Super
        App.Model.Square.call(this, x, y, ladoA);
        // Asignar los valores que nos dan
        _heigth = (typeof ladoB === 'number') ? ladoB : 0;
    }

    // Padre (El rectangulo pertenece al cuadrado)
    Rectangle.prototype = Object.create(App.Model.Square.prototype);
    Rectangle.prototype.constructor = Rectangle;

    // Métodos
    Rectangle.prototype.getHeight = function() {
        return _heigth;
    };
    Rectangle.prototype.setHeigth = function(ladoA, ladoB) {
        _heigth = (typeof ladoB === 'number') ? ladoB : 0;
        this.setWidth(ladoA);
    };
    Rectangle.prototype.getArea = function() {
        return _heigth * this.getWidth();
    };

    return Rectangle;
})();