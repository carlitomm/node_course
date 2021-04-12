const { Sequelize } = require('sequelize');
const Sequeleze = require('sequelize')

const sequeleze = require('../util/database')

const OrderItem = sequeleze.define('orderItem', {
  id:{
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  quantity: Sequelize.INTEGER
});

module.exports = OrderItem