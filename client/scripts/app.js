var reveApp = angular.module('reveApp',['ngRoute', 'chart.js', 'appControllers', 'ngAnimate']);

reveApp.directive('sameAs', function () {
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, ctrl) {
            var modelToMatch = attrs.sameAs;

            scope.$watch(attrs.sameAs, function() {
                ctrl.$validate();
            });

            ctrl.$validators.match = function(modelValue, viewValue) {
                return viewValue === scope.$eval(modelToMatch);
            };
        }
    };
});

var appControllers = angular.module('appControllers', []);


reveApp.config(['$routeProvider', function($routeProvider, $scope) {
    $routeProvider.
        when('/admin', {
            controller: 'AdminController',
            templateUrl: 'assets/views/admin.html',
            activetab: 'admin'
        }).
        when('/teachers', {
            controller: 'TeacherController',
            templateUrl: 'assets/views/teachers.html',
            activetab: 'teachers'
        }).
        when('/login', {
            controller: 'LoginController',
            templateUrl: 'assets/views/login.html',
            activetab: 'login'
        }).
        when('/register', {
            controller: 'RegisterController',
            templateUrl: 'assets/views/register.html',
            activetab: 'register'
        }).
        when('/schools', {
            controller: 'SchoolController',
            templateUrl: 'assets/views/schools.html',
            activetab: 'schools'
        }).
        when('/admin-teachers', {
            controller: 'AdminTeachersController',
            templateUrl: 'assets/views/admin-teachers.html',
            activetab: 'admin-teachers'
        }).
        when('/admin-classes', {
            controller: 'AdminClassesController',
            templateUrl: 'assets/views/admin-classes.html',
            activetab: 'admin-classes'
        }).
        when('/admin-assignments', {
            controller: 'AdminAssignmentsController',
            templateUrl: 'assets/views/admin-assignments.html',
            activetab: 'admin-assignments'
        }).
        when('/admin-students', {
            controller: 'AdminStudentsController',
            templateUrl: 'assets/views/admin-students.html',
            activetab: 'admin-students'
        }).
        when('/teacher-classes', {
            controller: 'TeacherClassesController',
            templateUrl: 'assets/views/teacher-classes.html',
            activetab: 'teacher-classes'
        }).
        when('/teacher-students', {
            controller: 'TeacherStudentsController',
            templateUrl: 'assets/views/teacher-students.html',
            activetab: 'teacher-students'
        }).
        when('/unauthorized', {
            templateUrl: 'assets/views/unauthorized.html'
        }).
        when('/charts', {
            controller: 'ChartsController',
            templateUrl: 'assets/views/charts.html',
            activetab: 'charts'
        }).
        otherwise({redirectTo: '/login'});



}]);