myApp.controller("StudentController", function($scope, StudentDataFactory, TeacherDataFactory, viewFactory) {

    // $scope.students = UserDataFactory.getUsersByType("student");
    // $scope.teachers = UserDataFactory.getUsersByType("teacher");
    $scope.students = [];
    $scope.teachers = [];
    var studentKey =  ["phone", "address"];
    var teacherkey = ["age", "gender", "phone", "address"];

    if (localStorage.getItem("studentData")) {
        $scope.studentData = JSON.parse(localStorage.getItem("studentData"));
        $scope.students = viewFactory.getView($scope.studentData, studentKey);
    } else {
        StudentDataFactory.getStudentData().then(function(response) {
            $scope.studentData = response.data;
            var strData = JSON.stringify($scope.studentData);
            localStorage.setItem("studentData", strData);
            $scope.students = viewFactory.getView($scope.studentData, studentKey);
        });
    }

    if (localStorage.getItem("teacherData")) {
        $scope.teacherData = JSON.parse(localStorage.getItem("teacherData"));
        $scope.teachers = viewFactory.getView($scope.teacherData, teacherkey);
    } else {
        TeacherDataFactory.getTeacherData().then(function(response) {
            $scope.teacherData = response.data;
            var strData = JSON.stringify($scope.teacherData);
            localStorage.setItem("teacherData", strData);
            $scope.teachers = viewFactory.getView($scope.teacherData, teacherkey);
        });
    }

});
