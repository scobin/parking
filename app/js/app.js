(function() {
  var app = angular.module('parkingList', []);

  app.controller('ListController', ['$http', function($http) {
    var list = this;
    list.parkings = [];
    $http.get('https://script.google.com/macros/s/AKfycbyjEeqbJ5GaaPAJ6w6oIXSi1SCggsJ45v7iUGOCB14wFYhGcsPA/exec?action=retrieve')
         .success(function(data) {
           list.parkings = data.values;
         });
  }]);

})();
