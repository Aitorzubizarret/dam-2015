// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('ToDoApp', ['ionic', 'ToDoApp.controllers', 'ToDoApp.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider) {
  $stateProvider.state('todos', {
    url: '/todos',
    controller: 'TodoListController',
    templateUrl: 'views/todos.html'
  }).state('createTodo', {
    url: '/todo/new',
    controller: 'TodoCreationController',
    templateUrl: 'views/create-todo.html'
  }).state('editTodo', {
    url: '/todo/edit/:id/:content',
    controller: 'TodoEditController',
    templateUrl: 'views/edit-todo.html'
  });
});

angular.module('ToDoApp.controllers', []).controller('TodoListController', ['$scope', 'Todo', function($scope, Todo) {
  Todo.getAll().success(function(data) {
    $scope.items = data.results;
  });

  $scope.onItemDelete = function(item) {
    Todo.delete(item.objectId);
    $scope.items.splice($scope.items.indexOf(item), 1);
  };
}]);