angular.module('todo', ['ionic'])

.controller('TodoCtrl', function($scope, $ionicModal) {
  $scope.tasks = [
    {title: 'Tarea 1'},
    {title: 'Tarea 2'},
    {title: 'Tarea 3'},
    {title: 'Tarea 4'}
  ];

  // Crea una pantalla modal, define su plantilla, su animación, y la añade al $scope para poder llamarla desde cualquier lado
  $ionicModal.fromTemplateUrl('new-task.html', function(modal) {
    $scope.taskModal = modal; // Añade la pantalla modal al $scope
  }, {
    scope: $scope,
    animation: 'slide-in-up'
  });

  // Se ejecuta cuando pulsa el botón para crear una nueva tarea
  $scope.newTask = function() {
    $scope.taskModal.show(); // Muestra la pantalla modal
  };
  // Se ejecuta cuando pulsa el botón "Cancel"
  $scope.exitModal = function() {
    $scope.taskModal.hide(); // Oculta la pantalla modal
  };
  $scope.createTask = function(task) {
    // Añade una nueva tarea al array, y como título pondrá el que se ha escrito en el input del formulario
    $scope.tasks.push({
      title: task.title
    });
    $scope.exitModal(); // Oculta la pantalla modal
    task.title = ''; // Vacia el input para poder crear otra tarea
  };
});