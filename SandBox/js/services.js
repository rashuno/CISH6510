'use strict';

/* Services */

function ESPNTeamsFeed ($scope, $http) {

  /*
    JSON Data Arrays
    "sports"  => "leagues" => "teams"
 
 http://api.espn.com/v1/sports/football/nfl/teams/?apikey=6w3k6rxsnm4a8g6sn9k9rq8s

  var requestPromise  = $http.get()
 */
  

	/*
  $http.get('http://api.espn.com/v1/sports/football/nfl/teams/?apikey=6w3k6rxsnm4a8g6sn9k9rq8s').success(
    function (data) {
      $scope.Sports  =  data;

    });
		*/

  /*
    var EspnDataFeed = {
      getCast: function() {
        var promise = $http.get('http://api.espn.com/v1/sports/football/nfl/teams/?apikey=6w3k6rxsnm4a8g6sn9k9rq8s')
          .then(function (response) {
            return response.data;
          });
          return promise;
      }
    };

    return EspnDataFeed;
    */
}

 






// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1');
