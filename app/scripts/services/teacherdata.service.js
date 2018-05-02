myApp.service("TeacherDataFactory", function($http) {
    this.getTeacherData = function() {
        return $http.get("scripts/teacher.json");
    };
});
