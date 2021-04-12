const { Sequelize } = require('sequelize');
const Sequeleze = require('sequelize')

const sequeleze = require('../util/database')

const Order = sequeleze.define('order', {
  id:{
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  }
});

module.exports = Order