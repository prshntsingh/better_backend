// app.js

const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes/routes'); // Imports routes for the products
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://prashant:prashant1@ds349065.mlab.com:49065/productstutorial';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/api', routes);

let port = process.env.PORT || 1235;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});