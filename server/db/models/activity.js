const {DataTypes} = require('sequelize')
const {sequelize} = require('../connect')

const Activity = sequelize.define("Activity",{
  name:{
    type:DataTypes.STRING,
    allowNull:false,
    unique:true
  },  
  location:{
    type:DataTypes.STRING,
    allowNull:false,
  },
  description:{
    type:DataTypes.STRING,
    allowNull:false,
  },
  
})

module.exports = Activity