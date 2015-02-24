var App = App || { Model : {} };
App.Model.Circle = (function(){
    // Variables privadas
    var _radius;

    // Constructor
    function Circle(x, y, radius) {
        /*
            Para elegir el contexto de donde se va a ejecutar la función

            call (this, param1, param 2)
            apply (this, ["param1", "param2"])
            bind (this)("param1", "param2")
        */
        App.Model.Shape.call(x, y);
        _radius = (typeof radius === 'number') ? radius : 0;
    }

    // El circulo pertenece al shape
    Circle.prototype = Object.create(App.Model.Shape.prototype);
    Circle.prototype.Constructor = Circle;

    Circle.prototype.getRadius = function() {
        return _radius;
    };

    Circle.prototype.setRadius = function(radius) {
        _radius = (typeof radius === 'number') ? radius : 0;
    };

    Circle.prototype.getArea = function() {
        // Calcular la area de un circulo => Pi * radius*radius
        // Para calcular el cuadrado => Math.pow() => _radius al cuadrado = Math.pow(_radius, 2)
        //return Math.PI * (_radius * _radius);
        return Math.PI * Math.pow(_radius, 2);
    };



    return Circle;

})();