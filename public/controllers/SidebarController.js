appControllers.controller('SidebarController', function($scope, $location, $window, UserService, AuthenticationService) {

	console.log('Authenticated ', AuthenticationService.isLogged);
	

	$scope.isAuthenticated = function() {
		// console.log('Returning ', AuthenticationService.isLogged);
		return AuthenticationService.isLogged;
	}


	// $scope.$watch(AuthenticationService.isLogged, function(a,b,c) {
	// 	console.log('What now, ', a , b,  c);
	// })
	

});