const {DataTypes} = require('sequelize')
const {sequelize} = require('../connect')

const User = sequelize.define("User",{
  name:{
    type:DataTypes.STRING,
    allowNull:false
  },  
  profile:{
    type:DataTypes.STRING,
  },  
  email:{
    type:DataTypes.STRING,
    allowNull:false,
    unique:true
  },  
  phone:{
    type:DataTypes.STRING,
    allowNull:false,
    unique:true
  },  
  password:{
    type:DataTypes.STRING,
    allowNull:false
  },
  role:{
    type: DataTypes.ENUM,
    values: ['admin','guide','tourist','official'],
    defaultValue:'tourist'
  }  
})

module.exports = User