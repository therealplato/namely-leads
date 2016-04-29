angular.module('LeadsApp', ['ngMaterial'])
.controller('oneProfileController', [
  '$element',
  '$http',
  '$scope',
  function($element, $http, $scope){
    var els = $element.find("meta");
		var id = els[0].dataset['profileid'];
		$http({
			method: 'GET',
			url: '/api/profile/'+id,
		}).then(function successCallback(response) {
			console.log(response)
			$scope.profile = response.data;
		}, function errorCallback(response) {
		});
  }]
)
