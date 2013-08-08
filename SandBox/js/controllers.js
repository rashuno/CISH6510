'use strict';

/* Controllers  */
var myApp = angular.module('myApp.controllers', []);


var initGlobals = myApp.controller('initGlobals', [function ($scope){

	$scope.IsFilterSelected(false);

}]);


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

  
var researchPlayersCtrl = myApp.controller('ResearchPlayersCtrl', ['$scope', '$rootScope', '$http', 
	function($scope, $rootScope, $http) {

	/* $scope.url = "http://api.espn.com/v1/sports/football/nfl/teams/?apikey=6w3k6rxsnm4a8g6sn9k9rq8s";  
		http://api.espn.com/v1/sports/football/nfl/athletes/?offset=0&apikey=6w3k6rxsnm4a8g6sn9k9rq8s   OFFSET
		data/teams.json


		nfldata.com
		api key = 44d7bd92-a369-4a22-b188-3c12303890c2
		GET TEAMS
		http://api.nfldata.apiphany.com/trial/JSON/Teams/2013REG?key=44d7bd92-a369-4a22-b188-3c12303890c2
		"City":"Arizona","Conference":"NFC","Division":"West","FullName":"Arizona Cardinals","Key":"ARI","Name":"Cardinals"

		GET TEAM ROSTER n DEPTH CHART
		http://api.nfldata.apiphany.com/trial/{format}/Players/{team}?key=<Your developer key>

		GET PLAYER STATS and NEWS
		http://api.nfldata.apiphany.com/trial/{format}/Player/{playerid}?key=<Your developer key>
	*/
	
	


	/* Get Teams Data JSON From ESPN Dev API  */
	
	
	 var sports = {};
	 var leagues = {};
	$scope.teams = {};
	$scope.athletes = {};
	$scope.IsTeamSelected = 'false';
	
	$scope.addNFLTeams = function() {
		$http.defaults.useXDomain = true;
		$scope.url = 'http://api.espn.com/v1/sports/football/nfl/teams/?apikey=6w3k6rxsnm4a8g6sn9k9rq8s';
		$http.get($scope.url).then(function(response) {
		
			
				sports = response.data.sports;
				leagues = sports[0].leagues;
			
				$scope.teams = leagues[0].teams; 
				
					
		});
	};



	
	
		


}]);


 


var myDraftCtrl = myApp.controller('MyDraftCtrl', ['$scope', '$rootScope', '$http', '$location', 
	function($scope, $rootScope, $http, $location) { 
	 
	$scope.drafts = [];
	$rootScope.currentDraft = {};
		 var sports = {};
	 var leagues = {};

		$scope.changeView = function(view){
            	$location.path(view);  

        	} 

    $scope.addNFLPlayers = function() {


		//Need to iterate over Max Players



		$http.defaults.useXDomain = true;
		$scope.url = 'http://api.espn.com/v1/sports/football/nfl/athletes/?apikey=6w3k6rxsnm4a8g6sn9k9rq8s';
		$http.get($scope.url).then(function(response){

			sports = response.data.sports;
			leagues = sports[0].leagues;

			$rootScope.athletes = leagues[0].athletes;

		});
	};

	$scope.addDrafts = function() {


		$http.defaults.useXDomain = true;
		$scope.url = 'http://localhost:3000/drafts';
		$http.get($scope.url).then(function(response){

			$scope.drafts = response.data; 
			console.log($scope.drafts);
		});
	};

	$scope.initCurrentDraft = function() {


	

	};
  

	$scope.onCreateNewDraftButtonClick = function(){
  
		var d = new Date();
		var drafts = [{

			name: $scope.newDraft.Name,
			dateCreated:  d,
			leagueName: $scope.newDraft.LeagueName,
			leagueGuid: $scope.newDraft.OwnerName + "-" +  d,
			ownerId: $scope.newDraft.OwnerName

		}];

		$scope.drafts.push({
			name: $scope.newDraft.Name,
			dateCreated:  d,
			leagueName: $scope.newDraft.LeagueName,
			leagueGuid: $scope.newDraft.OwnerName + "-" +  d,
			ownerId: $scope.newDraft.OwnerName
		});

		$scope.url = 'http://localhost:3000/drafts'; 
		$http.defaults.headers.post["Content-Type"] = "aapplication/json";
		$http.defaults.useXDomain = true;
		
		$http({
			method : 'POST',
			url : 'http://localhost:3000/drafts/addDraft',
			headers: {'Content-Type': 'application/json; charset=utf-8'},
			data : drafts
			}).success(function () {

			});
  
	};

	
	$scope.onClickDraftSelection = function(item){
 			
 		 
		var id = item._id;

		$http.defaults.useXDomain = true;
		$scope.url = 'http://localhost:3000/drafts/' + id;
		$http.get($scope.url).then(function(response){

			$rootScope.currentDraft = response.data; 
			console.log($rootScope.currentDraft);
		});

  
	};
	
 
 }]);



var sortableTableCtrl = myApp.controller('SortableTableCtrl', ['$scope', function ( $scope ) {
    	 

 		var scope = this;
	    // data
	    $scope.PlayerDataHead = {
	        a: "ADD",
	        b: "NAME",
	        c: "TEAM",
	        d: "POS",
	        e: "AGE",
	        f: "HEIGHT",
	        g: "WEIGHT",
	        h: "EXP",
	        i: "COL"
	    };
    
 	$scope.column = 'b';
 	$scope.descending = false;
    
    /*
    $scope.sort = {
        column: 'b',
        descending: false
    };
	*/

    $scope.selectedCls = function(column) {
        $scope.column == $scope.column && 'sort-' + $scope.descending;
    };
    
    /*
    $scope.changeSorting = function(column) {
        var sortLocal = $scope.sort;
        if (sortLocal.column == $scope.column) {
            sortLocal.descending = !sortLocal.descending;
        } else {
            sortLocal.column = $scope.column;
            sortLocal.descending = false;
        }
    };
	  */   









	}]);


