const { Sequelize } = require('sequelize');
const Sequeleze = require('sequelize')

const sequeleze = require('../util/database')

const CartItem = sequeleze.define('cartItem', {
  id:{
    type: Sequelize.INTEGER,
    autoincrement: true,
    allowNull: false,
    primaryKey: true
  },
  quantity: Sequelize.INTEGER
});

module.exports = CartItem