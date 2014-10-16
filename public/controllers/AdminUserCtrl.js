appControllers.controller('AdminUserCtrl', function($scope, $location, $window, $state ) {
	// UserService, AuthenticationService) {


	//Attributes
	$scope.error = false;
	$scope.errormessage = '';

	//Admin User Controller (login, logout)
	$scope.logIn = function logIn(email, password) {


		if (email !== undefined && password !== undefined) {

			// UserService.logIn(email, password)

			// 	.success(function(data) {
			// 		AuthenticationService.isLogged = true;
			// 		$scope.login.error = false;
			// 		$window.sessionStorage.token = data.token;
			// 		// $location.path("/admin");

			// }).error(function(data, status) {
			// 		$scope.login.errormessage = 'Got it wrong bud';
			// 		$scope.login.error = true;
			// });
		}
	}

	$scope.logout = function logout() {
		// if (AuthenticationService.isLogged) {
		// 	AuthenticationService.isLogged = false;
		// 	delete $window.sessionStorage.token;
		// 	$location.path("/");
		// }
	}

});