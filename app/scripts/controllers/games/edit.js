'use strict';

angular.module('backofficeApp')
  .controller('GamesEditCtrl', function ($scope, $routeParams, $location, $rootScope) {

      $scope.games = JSON.parse(localStorage['games']);

      $scope.$watchCollection('games', function(newValue, oldValue) {
        console.log('Games edited!');
        var games = _.transform(newValue, function(result, game) {
          result.push({id:game.id, name:game.name});
        });
        localStorage['games'] = JSON.stringify(games);
      });

      $scope.game = _.find($scope.games, function(game){
        return game.id == $routeParams.gameId;
      });

      $scope.saveGame = function() {

        _.remove($scope.games, function(game){
          return game.id == $scope.game.id;
        });


        $scope.games.push($scope.game);

        $rootScope.message = "Game edited";

        $location.path('/');

      }

  });
