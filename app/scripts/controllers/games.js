'use strict';

angular.module('backofficeApp')
  .controller('GamesCtrl', function ($scope, $rootScope, $timeout) {
    $scope.games = JSON.parse(localStorage['games']);

    $scope.$watchCollection('games', function(newValue, oldValue) {
      var games = _.transform(newValue, function(result, game) {
        result.push({id:game.id, name:game.name});
      });
      localStorage['games'] = JSON.stringify(games);
    });

    $scope.openModal = function() {
      $('#myModal').modal('show');
      $scope.name = "";
    }

    $scope.addGame = function() {
      $scope.games.push({id: _.max($scope.games, 'id').id + 1, name: $scope.name});
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

      $rootScope.message = "Game deleted";

      $timeout(function(){
        $rootScope.message = "";
      },2000);

    }


    $timeout(function(){
      $rootScope.message = "";
    },2000);


  });
