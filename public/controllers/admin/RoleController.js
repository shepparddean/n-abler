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

	function($scope, RoleService) {

		RoleService.getRoles().success(function(data) {
			$scope.roles = data;

		});
	}

);