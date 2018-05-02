myApp.service("viewFactory", function($http) {
    this.getView = function(dataArr, xcludeKeys) {
        var arrofObj = dataArr;
        var arr = [];
        for (var key in xcludeKeys) {
            arr=[];
            for (var obj in arrofObj) {
                var newObj = arrofObj[obj];
                delete newObj[xcludeKeys[key]];
                arr.push(newObj);
            }
            arrofObj = arr;          
        }
        return arr;
    };
});
