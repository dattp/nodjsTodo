var Todo = require("../models/todoModel");
module.exports = function(app){
    app.get("/api/setupTodo", (req, res)=>{
        var seedTodo = [
            {
                text : "Cong viec 1",
                isDone: false
            },
            {
                text : "Cong viec 2",
                isDone : false
            },
            {
                text : "Cong viec 3",
                isDone: false
            }
        ];
        Todo.create(seedTodo, (err,result) => {
            if (err) throw err;
            res.send(result);
        });
    });
};