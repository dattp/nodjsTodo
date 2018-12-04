var app = angular.module("app.todos");
app.factory("svTodos",["$http", function($http){
    return {
        get: function() {
            // console.log($http.get("/api/todos"));
            console.log("data1:" + $http.get("/api/todos"));
            return $http.get("/api/todos");
        },
        create: function(todo) {
            return $http.post("/api/todo",todo);
        },
        update: function (todo)  {
            return $http.put("/api/todo/", todo);
        },
        delete: function(id){
            return $http.delete("/api/todo/" + id);
        }

    }
}]);