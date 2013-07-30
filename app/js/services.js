'use strict';

/* Services */

app.factory('GetAllNFLTeamSrvc', function($http, $q) {
  var deffered = $q.defer();
  var data = [];  
  var myService = {};

  myService.async = function() {
    $http.get(url: 'http://api.espn.com/v1/sports/baseball/mlb/teams/?apikey=6w3k6rxsnm4a8g6sn9k9rq8s', method: "GET")
    .success(function (d) {
      data = d;
      console.log(d);
      deffered.resolve();
    });
    return deffered.promise;
  };
  myService.data = function() { return data; };

  return myService;
});


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1');
