'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]).
  directive('myModule', function() {
  return {
    restrict: 'A',
    scope : {
      title : '@'
    },
    templateUrl : 'partials/ModalContent.html',
    transclude : true
  };
});


 


/*

angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);




module.directive('myModule', function() {
  return {
    restrict: 'A',
    scope : {
      title : '@'
    },
    templateUrl : '/partial/module.html',
    transclude : true
  };
});

*/