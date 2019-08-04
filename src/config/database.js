// const mysql = require('mysql2');
const Sequelize = require('sequelize');

module.exports = new Sequelize('payroll', 'active', 'r3c0rd', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
});