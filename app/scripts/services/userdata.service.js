myApp.service("UserDataFactory", function($http) {
    this.getUsers = function() {
        // return $http.get("scripts/userdata.json");
        var userData = localStorage.getItem("userData");
        var dataObj = JSON.parse(userData);
        return dataObj;
    };

    this.setUsers = function(obj) {
        // return $http.post("scripts/userdata.json");
        var dataStr;
        var dataArr = [];
        var userData = localStorage.getItem("userData");
        if (userData) {
            dataArr = JSON.parse(userData);
        }
        dataArr.push(obj);
        dataStr = JSON.stringify(dataArr);
        localStorage.setItem("userData", dataStr);
    };

    this.getUsersByType = function(type) {
        var users = this.getUsers();
        var usersByType = []
        for (var i in users) {
            if (users[i].usertype === type) {
                usersByType.push(users[i]);
            }
        }
        return usersByType;
    };
    this.getAdminNo = function() {
        var admin = localStorage.getItem("adminCount");
        if (admin) {
            return admin;
        } else {
            return 0;
        }
    };
    this.setAdminNo = function(num) {
        localStorage.setItem("adminCount", num)
    };

});
