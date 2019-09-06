const express = require('express');
const path = require('path');
const Sequelize = require('sequelize');

const db = require('./config/database');
const cors = require('cors');

//Test DB
db.authenticate()
    .then(() => console.log('Database connected'))
    .catch(err => console.log('Error:' + err));

const app = express();

// Settings
app.set('port', process.env.port || 3000);
// const db = require('database');

// Middlewares
app.use(cors());
app.use(express.json());

// Static files
// app.use(express.static(__dirname + '/public'));

// Routes
app.use('/employees', require('./routes/employees'));

app.listen(app.get('port'), () => {
    console.log('Server runing on port', app.get('port'));
});