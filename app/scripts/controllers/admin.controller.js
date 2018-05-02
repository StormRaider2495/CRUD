myApp.controller("AdminController", function($scope, $state, StudentDataFactory, TeacherDataFactory, viewFactory, updateFactory) {

    $scope.students = [];
    $scope.teachers = [];
    $scope.dataModel = {};
    $scope.isEditable = false;
    $scope.action = "";
    $scope.storage = "";
    $scope.pointer = {
        "cursor": "pointer"
    };
    var studentKey = [""];
    var teacherkey = [""];

    // $scope.dataModel = updateFactory.getStudentDataModel();


//fetching student data from the json at first and storing it in local storage
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
//fetching teacher data from the json at first and storing it in local storage
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


    $scope.modalHide = function() {
        $scope.isEditable = false;
        $scope.dataModel = [];
    };

    $scope.editStudentDetails = function(id) {
        console.log(id);
        $scope.storage = 'studentData';
        $scope.isEditable = true;
        $scope.action = "update";
        $scope.detail = $scope.students[id];
        updateFactory.setCurrentEditId(id);
        for (var i in $scope.detail) {
            if (i != "$$hashKey") {
                $scope.dataModel[i] = $scope.detail[i];
            }
        }
    };

    $scope.addStudentDetails = function() {
        $scope.storage = 'studentData';
        $scope.isEditable = true;
        $scope.action = "add";
        $scope.dataModel = updateFactory.getStudentDataModel();
        $scope.detail = $scope.dataModel;
    };

    $scope.editTeacherDetails = function(id) {
        console.log(id);
        $scope.storage = 'teacherData';
        $scope.isEditable = true;
        $scope.action = "update";
        $scope.detail = $scope.teachers[id];
        updateFactory.setCurrentEditId(id);
        for (var i in $scope.detail) {
            if (i != "$$hashKey") {
                $scope.dataModel[i] = $scope.detail[i];
            }
        }
    };

    $scope.addTeacherDetails = function() {
        $scope.storage = 'teacherData';
        $scope.isEditable = true;
        $scope.action = "add";
        $scope.dataModel = updateFactory.getTeacherDataModel();
        $scope.detail = $scope.dataModel;
    };

    $scope.delete = function(id, storage) {
        updateFactory.setCurrentEditId(id);
        $scope.action = "delete";
        updateFactory.updateDataEntry($scope.action,"",storage);
        $state.reload();
    };

    $scope.submitChange = function() {
        if($scope.storage === "studentData"){
              $scope.students = updateFactory.updateDataEntry($scope.action, $scope.dataModel, $scope.storage);
        }
        if($scope.storage === "teacherData"){
              $scope.teachers = updateFactory.updateDataEntry($scope.action, $scope.dataModel, $scope.storage);
        }
        $scope.isEditable = false;
    };

    



});
