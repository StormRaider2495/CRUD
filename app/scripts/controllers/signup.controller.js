'use strict';
myApp.controller('SignupController', function($scope, $state, UserDataFactory) {
    "ngInject";
    var register = {
        "username": "",
        "usertype": "",
        "password": "",
        "confirmPassword": ""
    };
    $scope.isadminTaken = false;
    $scope.adminCount = 2;
    $scope.noofAdmin = UserDataFactory.getAdminNo();
    $scope.register = register;
    $scope.invalidChannelSelection = false;
    $scope.passNotMatched = false;
    // console.log(angular.element('#username'));
    if ($scope.register.usertype !== "") {
        $scope.invalidChannelSelection = false;
    }
    $scope.signup = function() {
        if (!$scope.register.usertype) {
            $scope.invalidChannelSelection = true;
        } else if ($scope.register.confirmPassword !== $scope.register.password) {
            $scope.passNotMatched = true;
        } else {
            if ($scope.register.usertype === "admin") {
                $scope.noofAdmin++;
                UserDataFactory.setAdminNo($scope.noofAdmin);
                if ($scope.noofAdmin > $scope.adminCount - 1) {
                    $scope.isadminTaken = true;
                }

            }

            UserDataFactory.setUsers($scope.register);
            console.log("You are registered");
            $scope.register = {};
            $scope.signupForm.$setPristine();
            $scope.invalidChannelSelection = false;
            // $state.go("app");
        }
    }

});
