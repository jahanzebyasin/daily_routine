const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const api_routes = require('./app/routes/api-routes'); // Imports routes for the products

app.use(cors());

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://localhost:27017/daily-routine';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB,{ useNewUrlParser: true });
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/api', api_routes);


let port = 2000;
app.listen(port, () => {
    console.log("listening on "+port);
})