angular.module('todo', ['ionic'])

.controller('TodoCtrl', function($scope) {
  $scope.tasks = [
    {title: 'Tarea 1'},
    {title: 'Tarea 2'},
    {title: 'Tarea 3'},
    {title: 'Tarea 4'}
  ];
});