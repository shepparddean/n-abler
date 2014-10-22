appControllers.controller('AdminUserCtrl', function($scope, $location, $window, UserService, AuthenticationService) {


	//Attributes
	$scope.error = false;
	$scope.errormessage = '';


	$scope.submitForm = function(isValid) {
		if(isValid) {
			logIn($scope.login.email, $scope.login.password);
		}
	}


	//Admin User Controller (login, logout)
	logIn = function logIn(email, password) {


		if (email !== undefined && password !== undefined) {

			UserService.logIn(email, password)

			.success(function(data) {
				AuthenticationService.isLogged = true;
				$scope.login.error = false;
				$window.sessionStorage.token = data.token;
				$location.path("/home");

			}).error(function(data, status) {
				AuthenticationService.isLogged = true;
				$scope.login.errormessage = 'Invalid account information. Please try again.';
				$scope.login.error = true;
				$location.path("/home");
			});
		}
	}
	

	$scope.logout = function logout() {
		if (AuthenticationService.isLogged) {
			AuthenticationService.isLogged = false;
			delete $window.sessionStorage.token;
			$location.path("/");
		}
	}

});