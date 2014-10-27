// main.js
var app = angular.module('nablerApp', 
    [
    'ngRoute', 
    'ui.bootstrap',
    'trNgGrid',
    'appControllers',
    'appServices'
    ]);

var appControllers = angular.module('appControllers', []);
var appServices    = angular.module('appServices', []);
// var appDirectives  = angular.module('appDirectives', []);


var options = {};
options.api = {};
// options.api.base_url = "http://localhost:8081";

app.config(function($locationProvider, $routeProvider) {

$routeProvider.
        when('/', {
            templateUrl: 'views/login.html',
            access: { requiredLogin: false }
        }).
        when('/login', {
            templateUrl: 'views/login.html',
            access: {requiredLogin: false }
        }).
        when('/home', {
            templateUrl: 'views/main.html',
            access: { requiredLogin: false}
        }).
        when('/admin/roles', {
            templateUrl: 'views/admin/roles.html',
            access: { requiredLogin: true}
        }).
        when('/admin/companies', {
            templateUrl: 'views/admin/companies.html',
            access: { requiredLogin: true}
        }).
        when('/admin/users', {
            templateUrl: 'views/admin/users.html',
            access: { requiredLogin: true}
        }).
        when('/application/ondeck', {
            templateUrl: 'views/application/ondeck-main.html',
            access: { requiredLogin: false}
        }).
        when('/test/test', {
            templateUrl: 'views/test/tester.html',
            access: { requiredLogin: false}
        }).
        otherwise({
            redirectTo: '/home',
            access: { requiredLogin: true}
        });

});

// app.config(function ($httpProvider) {
//     $httpProvider.interceptors.push('TokenInterceptor');
// });


// Now, we have to configure our routes to let AngularJS knows when a
// specific route needs an authentication, and when it’s the case, we 
// have to check the user is authenticated by checking the isLogged value of
// the AuthenticationService:
app.run(function($rootScope, $location, AuthenticationService) {
    $rootScope.$on("$routeChangeStart", function(event, nextRoute, currentRoute) {
        console.log('Intercepting the route change');
        console.log('Going to ', nextRoute);
        console.log('Access Required ', nextRoute.access ? nextRoute.access.requiredLogin : 'unknown');
        console.log('Authenticated ', AuthenticationService.isLogged );
        
        if (nextRoute.access.requiredLogin && !AuthenticationService.isLogged) {
            $location.path("/login");
        }
    });
});