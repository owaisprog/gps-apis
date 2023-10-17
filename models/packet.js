const {DataTypes} = require('sequelize');
const db = require('../config/dbconnection');

const Packet = db.define('packet', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    packetHeader: {
        type: DataTypes.INTEGER,
        allowNull : true
    },
    dataType: {
        type: DataTypes.STRING,
        allowNull: true
    },
    packetLength: {
        type: DataTypes.STRING,
        allowNull: true
    },
    deviceId: {
        type: DataTypes.STRING,
        allowNull: true
    },
    dateTime: {
        type: DataTypes.DATE,
        allowNull: true
    
    },
    latitude: {
        type: DataTypes.STRING,
        allowNull: true
    
    },
    longitude: {
        type: DataTypes.STRING,
        allowNull: true
    
    },
    speed: {
        type: DataTypes.STRING,
        allowNull: true
    
    },
    angle: {
        type: DataTypes.STRING,
        allowNull: true
    
    },
    gpsStatus: {
        type: DataTypes.STRING,
        allowNull: true
    
    },
    digitalInput: {
        type: DataTypes.STRING,
        allowNull: true
    
    },
    ignitionStatus: {
        type: DataTypes.STRING,
        allowNull: true
    
    },
    analogInput: {
        type: DataTypes.STRING,
        allowNull: true
    
    },
    mileage: {
        type: DataTypes.STRING,
        allowNull: true
    
    },
    carTemperature: {
        type: DataTypes.STRING,
        allowNull: true
    
    },
    reservedBytes: {
        type: DataTypes.STRING,
        allowNull: true
    
    },
    harshAlarm: {
        type: DataTypes.STRING,
        allowNull: true
    
    },
    subSignal: {
        type: DataTypes.STRING,
        allowNull: true
    
    },
    extendDataPacketLength: {
        type: DataTypes.STRING,
        allowNull: true
    
    },
    temperatureIsPositive: {
        type: DataTypes.STRING,
        allowNull: true
    
    },
    sensorTemperature: {
        type: DataTypes.STRING,
        allowNull: true
    
    },
    sensorHumidity: {
        type: DataTypes.STRING,
        allowNull: true
    
    },
    calibrator: {
        type: DataTypes.STRING,
        allowNull: true
    
    },
    packetEnd: {
        type: DataTypes.STRING,
        allowNull: true
    
    },
    hexString: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

module.exports = Packet;