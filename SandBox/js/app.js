'use strict';
 
/* --allow-file-access-from-files    */
/* --disable-web-security  */
 
angular.module('myApp', [ 'myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers'  ])
  .config( ['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider, $rootScope) {
    $routeProvider.when('/Home', {templateUrl: 'partials/HomeTab.html', controller:  'HomeCtrl' });
    $routeProvider.when('/MyDraft', {templateUrl: 'partials/MyDraftTab.html', controller: 'MyDraftCtrl' });
    $routeProvider.when('/Players', {templateUrl: 'partials/ResearchPlayersTab.html', controller: 'ResearchPlayersCtrl'});
    $routeProvider.otherwise({redirectTo: '/Home' });
	
    $httpProvider.defaults.useXDomain = true;
	  delete $httpProvider.defaults.headers.common['X-Requested-With'];


	

  }]
   
  )
  .run(function($rootScope) {
  		$rootScope.hello = function() {
    		console.log('hello');
  		}

  		$rootScope.IsFilterSelected =  function(value)
  		{
  			this.IsFilterSelected = value;

  		}


  		
 
	});




  
   