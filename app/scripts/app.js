'use strict';

console.log(localStorage['games']);

if (!localStorage['games']) {
  console.log('Storing initial collection');
  var games = [
    {id: 1, name: "Legends"},
    {id: 2, name: "Grand Blackjack"}
  ];
  localStorage['games'] = JSON.stringify(games);
}

angular.module('backofficeApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ngResource'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/games', {
        templateUrl: 'views/games.html',
        controller: 'GamesCtrl'
      })
      .when('/games/edit/:gameId', {
        templateUrl: 'views/games/edit.html',
        controller: 'GamesEditCtrl'
      })
      .otherwise({
        redirectTo: '/games'
      });
  });
