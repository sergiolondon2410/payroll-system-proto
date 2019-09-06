const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Employee = require('../models/Employee');

// Get employees list console
router.get('/', (req, res) => 
    Employee.findAll()
    .then(employees => {
        console.log(employees);
        res.sendStatus(200);
    })
    .catch(err => {console.log('Error: ', err)})
);

// Get employees list
router.get('/employees', (req, res) =>
    Employee.findAll()
    .then((employees) => {
        res.json(employees);
        res.sendStatus(200);
    })
    .catch(err => { console.log('Error:', err) })
);

// Get an employee
router.get('/employees/:id', (req, res) => {
    const { id } = req.params;
    Employee.findByPk(id)
    .then((employee) => {
        res.json(employee);
        let name = employee.get('name');
        console.log(name);
    })
    .catch(err => { console.log('Error:', err) })
});

router.post('/employee', (req, res) => {
    const { name } = req.body;
    Employee.create({
        name: name,
        last_name: last_name,
        document: document,
        salary: salary,
        account_id: 1,
        email: email
    })
    .then((employee) => {
        res.json({Status: 'Employee saved'});
        console.log(name);
    })
    .catch(err => { console.log('Error:', err) })
});

// Update employee
router.put('/employee/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const { last_name } = req.body;
    const { document } = req.body;
    const { salary } = req.body;
    const { email } = req.body;
    Employee.findByPk(id)
    .then((employee) => {
        employee.name = name;
        employee.last_name = last_name;
        employee.document = document;
        employee.salary = salary;
        employee.email = email;
        employee.save()
        .then((employee) => {
            res.json({Status: 'Employee updated'})
        });
    })
    .catch(err => { console.log('Error:', err) })
});

// Delete employtee
router.delete('/employee/:id', (req, res) => {
    const { id } = req.params;
    Employee.findByPk(id)
    .then((employee) => {
        employee.destroy()
        .then((employee) => {
            res.json({Status: 'Employee deleted'})
        });
    })
    .catch(err => { console.log('Error:', err) })
});

//Add a employee
// router.get('/add', (req, res) => {
//     const data = {
//         name: 'Elon',
//         last_name: 'Musk',
//         document: '1045998123',
//         salary: 827400,
//         account_id: 1,
//         email: 'elon.musk@mail.com'
//     };

//     let { name, last_name, document, salary, account_id, email } = data;
    
//     //insert into table
//     Employee.create({
//         name,
//         last_name,
//         document,
//         salary,
//         account_id,
//         email
//     })
//     .then(employee => res.redirect('/'))
//     .catch(err => console.log(err));
// });
module.exports = router;