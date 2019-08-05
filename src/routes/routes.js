const express = require('express');
const router = express.Router();
const db = require('../config/database');
const User = require('../models/User');

// Get user list
router.get('/', (req, res) => 
    User.findAll()
    .then(users => {
        console.log(users);
        res.sendStatus(200);
    })
    .catch(err => {console.log('Error: ', err)})
);

//Add a user
router.get('/add', (req, res) => {
    const data = {
        name: 'Elon',
        last_name: 'Musk',
        document: '1045998123',
        salary: 827400,
        account_id: 1,
        email: 'elon.musk@mail.com'
    };

    let { name, last_name, document, salary, account_id, email } = data;
    
    //insert into table
    User.create({
        name,
        last_name,
        document,
        salary,
        account_id,
        email
    })
    .then(user => res.redirect('/'))
    .catch(err => console.log(err));
});
module.exports = router;