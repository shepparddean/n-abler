/**
 * This is the controller for managing the Role Administration Screen;
 *
 *
 * @param  {[type]} $scope                [description]
 * @param  {[type]} $location             [description]
 * @param  {[type]} $window               [description]
 * @param  {[type]} UserService           [description]
 * @param  {[type]} AuthenticationService [description]
 * @return {[type]}                       [description]
 */
appControllers.controller('RoleController',

	function($scope, RoleService, $location, $window) {

		//$scope.roles = {};

		RoleService.getRoles().success(
			function(data) {
				$scope.roles = data;
			}
		);


		$scope.submitForm = function(isValid) {
			if (isValid) {
				save();
			}
		}



		save = function() {
			
			var role         = {};
			role.name        = $scope.name;
			role.description = $scope.description;
			role.code        = $scope.code;

			RoleService.saveRole(role)
				.success(function(data) {
					$scope.name        = '';
					$scope.description = '';
					$scope.code        = '';

					RoleService.getRoles()
						.success(
							function(data) {
								// debugger;
								$scope.roles = data;
							}
					);
				});
		}




	}

);