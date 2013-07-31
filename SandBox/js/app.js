'use strict';
 
/* --allow-file-access-from-files    */
/* --disable-web-security  */



angular.module('myApp', [ 'myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers'  ])
  .config( ['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/Home', {templateUrl: 'partials/HomeTab.html', controller:  'HomeCtrl' });
    $routeProvider.when('/MyDraft', {templateUrl: 'partials/MyDraftTab.html', controller: 'DraftCtrl' });
    $routeProvider.when('/ResearchPlayers', {templateUrl: 'partials/ResearchPlayersTab.html', controller: 'ResearchCtrl'});
    $routeProvider.otherwise({redirectTo: '/Home' });
  }]);