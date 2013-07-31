'use strict';

/* Controllers  */
var myApp = angular.module('myApp.controllers', []);


var homeCtrl = myApp.controller('HomeCtrl', [function($scope) { 


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

 }]);

  
var researchCtrl = myApp.controller('ResearchCtrl', ['$scope', '$http', function($scope, $http) {

	/* $scope.url = "http://api.espn.com/v1/sports/football/nfl/teams/?apikey=6w3k6rxsnm4a8g6sn9k9rq8s";  
		data/teams.json

	*/
	$scope.url = 'data/teams.json';
	$scope.newMessage = "";
	
	 var sports = {};
	 var leagues = {};
	$scope.teams = {};
	
	$scope.add = function() {
		$http.get($scope.url).then(function(response) {
		
				sports = response.data.sports;
				leagues = sports[0].leagues;
				
				$scope.teams = leagues[0].teams;
				$scope.newMessage = $scope.teams[1].nickname;
				
					
		});
	};
	



}]);

var draftCtrl = myApp.controller('DraftCtrl', ['$scope', '$http', function($scope, $http) { 
	

	
  
/*
   var dataObj =
  GetESPNTeamFeedData($scope);
  */
  

 }]);