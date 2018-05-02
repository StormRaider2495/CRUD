

myApp.service("updateFactory", function() {
    var index;

    this.setCurrentEditId = function(id) {
        index = id;
    };

    this.getStudentDataModel = function(){
      var model = {
              "name": "",
              "age": "",
              "gender": "",
              "email": "",
              "phone": "",
              "address": "",
              "cgpa": ""
          };
      return model;
    }

    this.getTeacherDataModel = function(){
      var model = {
              "name": "",
              "age": "",
              "gender": "",
              "email": "",            
              "phone": "",
              "address":"",
              "subject": ""
          };
      return model;
    }

    this.updateDataEntry = function(action, detail, storage) {

        var data = JSON.parse(localStorage.getItem(storage));

        switch (action) {
            case "update":
                for (var i in data[index]) {
                    data[index][i] = detail[i];
                }
                break;
            case "add":
                data.push(detail);
                break;
            case "delete":
                data.splice(index, 1);
                break;
        }
        localStorage.setItem(storage, JSON.stringify(data));
        return data;
    };

    this.deleteDataEntry = function(id, storage) {
        var data = JSON.parse(localStorage.getItem(storage));
        var removed = data.splice(id, 1);
        localStorage.setItem(storage, JSON.stringify(data));
    };

    this.addDetail = function(detail, storage) {
        var data = JSON.parse(localStorage.getItem(storage));
        data.push(detail);
        localStorage.setItem(storage, JSON.stringify(data));
    };

});
