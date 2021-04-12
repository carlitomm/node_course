const { Sequelize } = require('sequelize')
const Sequeleze = require('sequelize')

const sequeleze = require('../util/database')

const Cart = sequeleze.define('cart', {
  id:{
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  }

});

module.exports = Cart