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

  
var researchPlayersCtrl = myApp.controller('ResearchPlayersCtrl', ['$scope', '$http', function($scope, $http) {

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



	$scope.addNFLPlayers = function() {


		//Need to iterate over Max Players



		$http.defaults.useXDomain = true;
		$scope.url = 'http://api.espn.com/v1/sports/football/nfl/athletes/?apikey=6w3k6rxsnm4a8g6sn9k9rq8s';
		$http.get($scope.url).then(function(response){

			sports = response.data.sports;
			leagues = sports[0].leagues;

			$scope.athletes = leagues[0].athletes;

		});
	};
	
		


}]);


var myDraftCtrl = myApp.controller('MyDraftCtrl', ['$scope', '$http', function($scope, $http) { 
	

	$scope.addDrafts = function() {


		$http.defaults.useXDomain = true;
		$scope.url = 'http://localhost:3000/drafts';
		$http.get($scope.url).then(function(response){

			$scope.drafts = response.data; 

		});
	};
  

	$scope.onCreateNewDraftButtonClick = function(){

		$scope.newDraft = {};

		$scope.newDraft._id = "5063114bd386d8fadbd6b004";
		$scope.newDraft.ownerId = 'rashuno';
		$scope.newDraft.leagueGuid = 'rashuno something';
		$scope.newDraft.dateCreated = '891261';
		$scope.newDraft.name = 'nothing';
		$scope.newDraft.leagueName = 'none';

		$scope.url = 'http://localhost:3000/drafts';

/*
		$http.post( $scope.url, $scope.newDraft, {

			}).success(function(responseData){

			});

*/
		$http.defaults.useXDomain = true;
		
		$http({
			method : 'POST',
			url : 'http://localhost:3000/drafts',
			data : $scope.newDraft
		})




	};



/*
   var dataObj =
  GetESPNTeamFeedData($scope);
  */
  

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