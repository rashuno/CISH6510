'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', []).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider
    	.when('/Home', {
    		templateUrl: 'partials/HomeTab.html', 
    		controller: 'HomeCtrl'
    	});
    $routeProvider
    	.when('/MyDraft', {
    		templateUrl: 'partials/MyDraftTab.html', 
    		controller: 'DraftCtrl'

 
    	});
    $routeProvider
    	.otherwise({
    		redirectTo: '/Main'
    	});
  }]) 
  ;
