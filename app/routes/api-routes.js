const express = require('express');
const api_router = express.Router();

//routing api controller
const api_controller = require('../controller/Controller.Api.js');


//routes
api_router.get('/my-all',api_controller.my_all);

api_router.post('/all',api_controller.my_all);

api_router.post('/create',api_controller.todo_create);

api_router.put('/',api_controller.todo_create);

api_router.patch('/',api_controller.todo_update);

api_router.delete('/', api_controller.todo_delete);


module.exports = api_router;