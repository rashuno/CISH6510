'use strict';

/* Controllers */

var app = angular.module('myApp', []);




angular.module('myApp.controllers', []).
  controller('HomeCtrl', [function() {
  	

  	
	/*
	Example Team Data Get URI
	http://api.espn.com/v1/sports/football/nfl/teams/1?rostertype=full&apikey=6w3k6rxsnm4a8g6sn9k9rq8s
	http://api.espn.com/v1/sports/football/nfl/teams/11?rostertype=full&apikey=6w3k6rxsnm4a8g6sn9k9rq8s
	
	KEYS ex:
	"abbreviation" :"IND"
	"nickname" :"Indy"
	"name" :"Colts"
	"location" :"Indianapolis"

	*/




  }])


  .controller('DraftCtrl', [function($scope) {

  	 

  }])

  .controller('GetESPNTeamFeedData', [function($scope) {

  		/*
			http://api.espn.com/v1/sports/baseball/mlb/teams/?apikey=6w3k6rxsnm4a8g6sn9k9rq8s
  		*/

  		 myService.async().then(function() {
    		$scope.data = GetAllNFLTeamSrvc.data();
  			});


 
  }])


.controller('STUB', [function() {
  	
  }])

  ;