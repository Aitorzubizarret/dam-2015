/*
var todoApp = angular.module('todoApp', []);
todoApp.controller (...);

angular.module('todoApp', [])
    .controller ...

*/

// Creamos un módulo, que en nuestro caso también hace de app
var todoApp = angular.module('todoApp', []);

// $scope => El que hace el bind con el controlador y la vista
todoApp.controller('TodoController', ['$scope', function($scope){
    //console.log($scope);

    // Creamos un array de toDos como si fuera nuestra BD
    var todos = [];

    // Añadir unas tareas al array
    todos.push({done: false, task: 'Aprender AngularJS'});
    todos.push({done: false, task: 'Aprender Ionic'});
    todos.push({done: true, task: 'Aprender JavaScript'});

    // Para poder compartir la información de dentro de nuestra funcion/modulo
    $scope.todos = todos;

    $scope.addTodo = function() {
        /*
            En el html (input) hemos creado una etiqueta ng-model y el nombre de esa variable será la encargada
            de tener comunicación bi-direccional entre el html y el js :-)
        */
        todos.push({done: false, task: $scope.inputText});
        $scope.inputText = '';
        console.log($scope.todos);
    };

}]);