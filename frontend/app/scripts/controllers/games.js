'use strict';

angular.module('backofficeApp')
  .controller('GamesCtrl', function ($scope, $rootScope, $timeout, $resource) {

    var Game = $resource('http://localhost:8080/game/:id', {id:'@id'});
    $scope.games = Game.query();

    $scope.openModal = function() {
      $('#myModal').modal('show');
      $scope.name = "";
    }

    $scope.addGame = function() {
      var game = new Game({name: $scope.name});
      game.$save();
      $scope.games.push(game);

      $('#myModal').modal('hide');
      $rootScope.message = "Game created";

      $timeout(function(){
        $rootScope.message = "";
      },2000);
    }

    $scope.removeGame = function(id) {
      _.remove($scope.games, function(game){
        return game.id == id;
      });

      var game = Game.get({id:id}, function() {
        game.$delete();
      });

      $rootScope.message = "Game deleted";

      $timeout(function(){
        $rootScope.message = "";
      },2000);

    }


    $timeout(function(){
      $rootScope.message = "";
    },2000);


  });
