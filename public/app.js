// main.js
var app = angular.module('nablerApp', ['ngRoute', 'appControllers', 'appServices']);

var appControllers = angular.module('appControllers', []);
var appServices    = angular.module('appServices', []);
// var appDirectives  = angular.module('appDirectives', []);


var options = {};
options.api = {};
options.api.base_url = "http://localhost:8081";

app.config(function($locationProvider, $routeProvider) {

$routeProvider.
        when('/', {
            templateUrl: 'index.html',
            access: { requiredLogin: false }
        }).
        when('/admin/login', {
            templateUrl: 'index.html',
            access: { requiredLogin: false }
        }).
        when('/main', {
            templateUrl: 'main.html',
            access: { requiredLogin: true }
        }).
        otherwise({
            redirectTo: '/'
        });

});

// app.config(function ($httpProvider) {
//     $httpProvider.interceptors.push('TokenInterceptor');
// });


// // Now, we have to configure our routes to let AngularJS knows when a
// // specific route needs an authentication, and when it’s the case, we 
// // have to check the user is authenticated by checking the isLogged value of
// // the AuthenticationService:
// app.run(function($rootScope, $location, AuthenticationService) {
//     $rootScope.$on("$routeChangeStart", function(event, nextRoute, currentRoute) {
//         if (nextRoute.access.requiredLogin && !AuthenticationService.isLogged) {
//             $location.path("/admin/login");
//         }
//     });
// });