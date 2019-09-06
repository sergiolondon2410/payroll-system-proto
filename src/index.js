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

// CORS
// https://auth0.com/blog/cors-tutorial-a-guide-to-cross-origin-resource-sharing/
// https://medium.com/@dtkatz/3-ways-to-fix-the-cors-error-and-how-access-control-allow-origin-works-d97d55946d9


// Routes
app.use(require('./routes/employees'));

app.listen(app.get('port'), () => {
    console.log('Server runing on port', app.get('port'));
});