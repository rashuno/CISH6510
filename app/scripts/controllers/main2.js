'use strict';

/*   --allow-file-access-from-files    */

/* Controllers */

var myApp = angular.module('myApp', []);


myApp.config(function($routeProvider){
    $routeProvider
        .when('/Home', {
            templateUrl: 'partials/HomeTab.html', 
            controller:  'HomeCtrl' 
        })
        .when('/MyDraft', {
            templateUrl: 'partials/MyDraftTab.html', 
            controller: 'DraftCtrl' 
        })
        .otherwise({
            redirectTo: '/Main'

        });
});

myApp.factory('Teams', function(){

    return [
        {text: "TEST"},
        {text: "Item 2"}
    ];
});
/*********************************
CONTROLLERS
**********************************/

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

  

var draftCtrl = myApp.controller('DraftCtrl', ['$scope', 'Teams', function($scope, teams) { 

   var dataObj =
  GetESPNTeamFeedData($scope);
  
  

 }]);

/*********************************
FUNCTIONS
**********************************/

function GetESPNTeamFeedData($scope, $http) {

  var obj = {content:null};

  $http(url : 'http://api.espn.com/v1/sports/football/nfl/teams/?apikey=6w3k6rxsnm4a8g6sn9k9rq8s',
  )
    .success(function(data){
      console.log("success", data);
      obj.teams = data;
    });

    return obj;
    
 
}

function TestCtrl($scope) {

  $scope.teams =
  [
    { text : "test1"},
    { text : "test2"}
  ];

}
 
 