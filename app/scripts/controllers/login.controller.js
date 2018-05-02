'use strict';
myApp.controller('LoginController', function($scope, $state, UserDataFactory) {
    "ngInject";
    var user = {
        "username": "",
        "password": ""
    };
    $scope.user = user;
    $scope.notUser = false;
    $scope.invalidCredentials = false;
    $scope.userData = [];


    // console.log(angular.element('#username'));
    $scope.login = function() {
        $scope.userData = UserDataFactory.getUsers();
        // console.log($scope.userData);
        $scope.notUser = false;
        $scope.invalidCredentials = false;
        var userType = "",
            validUser = false;
        for (var i in $scope.userData) {
            if ($scope.user.username === $scope.userData[i].username) {
                if ($scope.user.password === $scope.userData[i].password) {
                    validUser = true;
                    userType = $scope.userData[i].usertype;
                    break;
                } else if ($scope.user.username === $scope.userData[i].username || $scope.user.password === $scope.userData[i].password) {
                    $scope.invalidCredentials = true;
                    break;
                }
            }
        }
        if (validUser) {
            console.log($scope.user + " You are IN");
            $scope.notUser = false;
            switch (userType) {
                case "admin":
                    console.log("admin");
                    $state.go('app.admin');
                    break;
                case "teacher":
                    console.log("teacher");
                    $state.go('app.teacher');
                    break;
                case "student":
                    console.log("student");
                    $state.go('app.student');
                    break;
            }

        } else if ($scope.invalidCredentials === false) {
            console.log($scope.user + " You are not a user");
            $scope.notUser = true;
        }
    }

});
