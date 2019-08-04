const Sequelize = require('sequelize');
const db = require('../config/database');

const User = db.define('user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    },
    last_name: {
        type: Sequelize.STRING
    },
    document: {
        type: Sequelize.STRING
    },
    salary: {
        type: Sequelize.INTEGER
    },
    account_id: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
});

module.exports = User;