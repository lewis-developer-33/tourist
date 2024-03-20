const {DataTypes} = require('sequelize')
const {sequelize} = require('../connect')

const Accomodation = sequelize.define("Accomodation",{
  name:{
    type:DataTypes.STRING,
    allowNull:false,
  },  
  image:{
    type:DataTypes.STRING,
    allowNull:false,
  },
  location:{
    type:DataTypes.STRING,
    allowNull:false,
  },
  description:{
    type:DataTypes.STRING,
    allowNull:false,
  }
  
})

module.exports = Accomodation