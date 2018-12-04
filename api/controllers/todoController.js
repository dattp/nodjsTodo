var Todo = require("../models/todoModel");

function getTodos(res) {
    Todo.find((err, todos)=>{
        if (err) {
            res.send(err);
        } else {
            res.json(todos);
        }
    });
}

module.exports = function(app) {
    app.get("/api/todos", (req, res) => {
        getTodos(res);
    });

    app.get("/api/todos/:id", (req, res)=>{
        Todo.findById({_id:req.params.id}, (err, todo) => {
            if (err) {
                throw err;
            } else {
                res.json(todo);
            }
        });
    });

    /**
     * create todo
     *  */
    app.post("/api/todo", (req, res)=>{
        var todo = {
            text : req.body.text,
            isDone : req.body.isDone
        }

        Todo.create(todo, (err, todo)=>{
            if (err) throw err;
            getTodos(res)
        });
    });

    /**
     * Update
     */

     app.put("/api/todo", (req,res)=>{
        if (!req.body._id) {
            return res.status(500).send("ID is required");
        } else {
            Todo.update({
                _id:req.body._id,
            },{
                text : req.body.text,
                isDone : req.body.isDone
            }, (err, todo) => {
                if (err) {
                    return res.status(500).json(err);
                } else {
                    getTodos(res);
                }
            });
        }
     });

     /**
      * delete
      */
     app.delete("/api/todo/:id",(req, res) => {
        Todo.remove({
            _id : req.params.id
        }, (err, todo) =>{
            if (err) {
                return res.status(500).json(err);
            } else {
                getTodos(res);
            }
        })
     });
}