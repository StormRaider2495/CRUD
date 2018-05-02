myApp.service("StudentDataFactory", function($http) {
    this.getStudentData = function() {
        return $http.get("scripts/student.json");
    };
});
