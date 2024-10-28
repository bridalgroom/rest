const { Model, Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../../config/database');
module.exports = sequelize.define('deviceUpdates', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  timestamp: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  responseId: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  deviceId: {
    type: Sequelize.STRING,
    allowNull: false,
  },
   
  errorCode: {
    type: Sequelize.ENUM('0', '1'),
    allowNull: false,
  },
  userId: {
    type: Sequelize.INTEGER,
   
    references: {
      model: 'user', // Name of the target table
      key: 'id', // Key in the target table
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
  createdBy: {
    type: Sequelize.INTEGER,
    allowNull: true,
    references: {
      model: 'user',
      key: 'id',
    },
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE,
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE,
  },
  deletedAt: {
    type: Sequelize.DATE,
  },
  
  
},
{
  paranoid: true, 
  freezeTableName: true,
  modelName: 'deviceUpdates',
}
);