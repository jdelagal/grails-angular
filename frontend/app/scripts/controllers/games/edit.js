'use strict';

angular.module('backofficeApp')
  .controller('GamesEditCtrl', function ($scope, $routeParams, $location, $rootScope, $resource) {

      var Game = $resource('http://localhost:8080/game/:id', {id:'@id'});

      $scope.game = Game.get({id: $routeParams.gameId});

      $scope.saveGame = function() {

        console.log($routeParams.gameId);

        var game = Game.get({id: $routeParams.gameId}, function(){
          game.name = $scope.game.name;
          game.$save(function(obj, headers){
            $rootScope.message = "Game edited";
            $location.path('/');
          });
        });


      }

  });
