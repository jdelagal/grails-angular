'use strict';

angular.module('backofficeApp')
  .controller('GamesCtrl', function ($scope) {
    $scope.games = [
      {id: 1, name: "Legends"},
      {id: 2, name: "Grand Blackjack"}
    ];

    $scope.openModal = function() {
      $('#myModal').modal('show');
      $scope.name = "";
    }

    $scope.addGame = function() {
      $scope.games.push({id: _.max($scope.games, 'id').id + 1, name: $scope.name});
      $('#myModal').modal('hide');
    }


  });
