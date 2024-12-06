import { DataTypes } from 'sequelize';
import sequelize from '../database.js';
import User from './User'; // Import the User model

// Define the Account model
const Account = sequelize.define('Account', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  accountNumber: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  accountType: {
    type: DataTypes.ENUM('savings', 'checking', 'credit'),
    allowNull: false,
  },
  balance: {
    type: DataTypes.FLOAT,
    allowNull: false,
    defaultValue: 0.0,
  },
  currency: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'USD',
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User, // Link to the User model
      key: 'id',
    },
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

export default Account;
