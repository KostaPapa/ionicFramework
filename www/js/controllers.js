angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope) {})

.controller('PinchesCtrl', function($scope, Pinches) {
	$scope.pinches = Pinches.all();
  	$scope.remove = function(pinch) {
  		Pinches.remove(pinch);
  	}
})

.controller('PinchDetailCtrl', function($scope, $stateParams, Pinches) {
	$scope.pinch = Pinches.get($stateParams.pinchId);
})

.controller('AddCtrl', function($scope, $stateParams, Pinches) {
	$scope.addPinch = function(form) {
        var newPinch = {};
        
        newPinch.message = form.message.$modelValue;
        $scope.pinches.push(newPinch);
        Pinches.setPinch($scope.pinches);
        
        newPinch.userId = form.userId.$modelValue;
        $scope.pinches.push(newPinch);
        Pinches.setPinch($scope.pinches);
        
        newPinch.face = form.face.$modelValue;
        $scope.pinches.push(newPinch);
        Pinches.setPinch($scope.pinches);
      };
});
