var app = angular.module("app.todos", ["xeditable"]); //kiem soat ben view
app.controller("todoController", ['$scope', 'svTodos', function ($scope, svTodos) { ///ten controller muon chi toi ben view, danh sach cac service cua angular
    $scope.appName = "Node todos !!!"; //ket noi vao view
    $scope.formData = {};

    $scope.todos = [];

    $scope.loading = true;

    //load data from server
    svTodos.get().then(function (data) {
        console.log(data);
        $scope.todos = data.data;
        $scope.loading = false;
    });

    $scope.createTodo = function () {
        $scope.loading = true;
        var todo = {
            text: $scope.formData.text,
            isDone: false
        }
        // $scope.todos.push(todo);
        // $scope.formData.text = "";
        svTodos.create(todo).then((data)=>{
            $scope.todos = data.data;
            $scope.formData.text = "";
            $scope.loading = false;
        })
    }

    $scope.updateTodo = function (todo) {
        $scope.loading = true;
        svTodos.update(todo).then((data)=>{
            $scope.todos = data.data;
            $scope.loading = false;
        })
    }

    $scope.deleteTodo = function (todo) {
        $scope.loading = true;
        svTodos.delete(todo._id).then((data)=>{
            $scope.todos = data.data;
            $scope.loading= false;
        })
    }
}]); 