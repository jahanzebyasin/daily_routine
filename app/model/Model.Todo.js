const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TodoSchema = new Schema(
    {
    title: {type: String, required: true, max: 100},
    description: {type: String, required: true},
    time: {type: String, required: true},
    }, {
        timestamps: true
    }
);


// Export the model
module.exports = mongoose.model('Todo', TodoSchema);