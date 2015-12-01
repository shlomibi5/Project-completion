var app = angular.module('collagezone', []);

app.controller('shlomiController', function($scope) {
	$scope.setImage = function(x) {
		$scope.imageName = x;
	};
});

