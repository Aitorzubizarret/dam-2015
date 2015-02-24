(function(){
    // Figura
    console.log("Figura");
    var s1 = new App.Model.Shape();
    s1.move(5,5);
    console.log("La x vale => " + s1.getX());
    console.log("La y vale => " + s1.getY());

    // Figura
    console.log("\nFigura");
    var s2 = new App.Model.Shape();
    s2.move(15,15);
    console.log("La x vale => " + s2.getX());
    console.log("La y vale => " + s2.getY());

    // Circulo
    console.log("\nCirculo");
    var s3 = new App.Model.Circle();
    s3.move(7,7);
    s3.setRadius(5);
    console.log("La x vale => " + s3.getX());
    console.log("La y vale => " + s3.getY());
    console.log("El radio del circulo es => " + s3.getRadius());
    console.log("El area del circulo es => " + s3.getArea());

    // Cuadrado
    console.log("\nCuadrado");
    var s4 = new App.Model.Square(4, 4, 2);
    //s4.move(4, 4);
    console.log("La x vale => " + s4.getX());
    console.log("La y vale => " + s4.getY());
    s4.setWidth(5);
    console.log("La longitud es => " + s4.getWidth());
    console.log("El área del cuadrado es => " + s4.getArea());

    // Rectangular
    console.log("\nRectangular");
    var s5 = new App.Model.Rectangle(4, 4, 2, 5);
    console.log("La x vale => " + s5.getX());
    console.log("La y vale => " + s5.getY());
    s5.setHeigth(5);
    console.log("La altura es => " + s5.getHeigth());
    console.log("El área del cuadrado es => " + s5.getArea());
})();