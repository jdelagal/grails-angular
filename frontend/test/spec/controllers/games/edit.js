'use strict';

describe('Controller: GamesEditCtrl', function () {

  // load the controller's module
  beforeEach(module('backofficeApp'));

  var GamesEditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GamesEditCtrl = $controller('GamesEditCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
