'use strict';
angular.module('crudApp')
    .config(['$stateProvider', '$urlRouterProvider',

        function config($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/');

            $stateProvider
                // state route for home page
                .state('app', {
                    url: '/',
                    views: {
                        'content': {
                            templateUrl: 'partials/login.html',
                            controller: 'LoginController'
                        }
                    }
                })
                .state('app.signup', {
                    url: 'signup',
                    views: {
                        'content@': {
                            templateUrl: 'partials/signup.html',
                            controller: 'SignupController'
                        }
                    }
                })
                .state('app.admin', {
                    url: 'admin',
                    views: {
                        'content@': {
                            templateUrl: 'partials/admin.html',
                        }
                    }
                })
                .state('app.teacher', {
                    url: 'teacher',
                    views: {
                        'content@': {
                            templateUrl: 'partials/teacher.html',
                        }
                    }
                })
                .state('app.student', {
                    url: 'student',
                    views: {
                        'content@': {
                            templateUrl: 'partials/student.html',
                        }
                    }
                })

        }
    ]);
