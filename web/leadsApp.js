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
			$scope.profile = response.data;
		}, function errorCallback(response) {
		});
  }]
)
.controller('editProfileController', [
  '$element',
  '$http',
  '$scope',
  function($element, $http, $scope){
    $scope.profile = {};
    $scope.editing = false;
    var els = $element.find("meta");
		var id = els[0].dataset['userid'];
		$http({
			method: 'GET',
			url: '/api/profileForUser/'+id,
		}).then(function successCallback(response) {
			$scope.profile = response.data;
		}, function errorCallback(response) {
		});

    $scope.saveProfile = function(){
      $http.post('/api/profile', $scope.profile)
      .then(function successCallback(response) {
        // $scope.profileSaved = true;
      }, function errorCallback(response) {
      });
    }
  }]
)
.controller('allProfilesController', [
  '$http',
  '$scope',
  function($http, $scope){
		$http({
			method: 'GET',
			url: '/api/profiles',
		}).then(function successCallback(response) {
			$scope.profiles = response.data;
		}, function errorCallback(response) {
		});
  }]
)
