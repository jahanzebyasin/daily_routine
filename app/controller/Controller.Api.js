//required models
const Todo = require('../model/Model.Todo.js');



//exported methods
exports.my_all = (req, res, next) => {
    Todo.find({},function(err,collection){
        if(err){
            return next(err);
        }
        res.status(200).json(collection);
    })
};


exports.todo_create =  (req, res, next) => {
    console.log('create request',req.body)
    let todo_item = new Todo ({
         title : req.body.title,
         description : req.body.description,
         time : req.body.time
        }
    );

    todo_item.save((err) => {
        if(err) {
            return next(err);
        }
        res.status(200).json({status:1});
    });
};


exports.todo_update = (req, res, next) => {
    let todo_id = req.body.id;
    Todo.findById(todo_id,(err,todo) => {
        if(err) {
            return res.status(500).json(next);
        } else {
            todo.title = req.body.title;
            todo.description = req.body.description;

            todo.save((err,todo) => {
                if (err) {
                    res.status(400).send('Unable to update todo');
                  } else {
                    res.status(200).json(todo);
                  }
            })

        }
    });
};


exports.todo_delete = (req, res, next) => {
    let todo_id = req.body.id;
    Todo.findByIdAndRemove(todo_id,(err,todo) => {
        if(err) {
            return next(err);
        } else {
            res.status(200).json("{status:1}");
        }
    });
};
