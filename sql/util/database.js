// const mysql = require('mysql2')

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'node-complete',
//     password: 'cmm'
// });

const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'cmm', {
    dialect: 'mysql', host:'localhost'
});

// module.exports = pool.promise();
module.exports = sequelize