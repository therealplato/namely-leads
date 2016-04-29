angular.module('LeadsApp', ['ngMaterial'])
.controller('oneProfileController', [
  '$scope',
  '$element',
  function($scope, $element){
    els = $element.find("meta");
    console.log(els[0])
    $scope.profile = {id: els[0].dataset['profileid']};
  }]
)
