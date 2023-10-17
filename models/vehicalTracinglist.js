const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbconnection'); // Import your Sequelize configuration
const TrackingList = sequelize.define('VehicalTrakingList', {
  plateNumber: {
    type: DataTypes.STRING,
    allowNull: false,
    unique:true
  },
  trackerModel: {
    type: DataTypes.STRING,
  },
  mobileNumber: {
    type: DataTypes.STRING,
    allowNull: true,
    unique:true
  },
  vehicleType: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  trackerNumber: {
    type: DataTypes.STRING, // Use JSON data type to store an object
    allowNull: true, // You can set allowNull to true if the field can be null
    unique: true
  },
  filename:{
    type:DataTypes.STRING,
    allowNull:true
  },
  status:{
    type:DataTypes.BOOLEAN,
    allowNull:true
  }
 

});





module.exports = TrackingList;




