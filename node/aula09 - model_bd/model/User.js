const { DataTypes } = require('sequelize')
const db = require('../db/conn')


const User = db.define('User', {
  nome: {
    type: DataTypes.STRING,
    required: true
  },
  idade: {
    type: DataTypes.INTEGER,
    required: true
  },
})

module.exports = User