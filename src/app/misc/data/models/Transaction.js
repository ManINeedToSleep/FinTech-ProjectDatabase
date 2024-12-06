import { DataTypes } from 'sequelize';
import sequelize from '../database.js';
import Account from './Account'; // Import the Account model

// Define the Transaction model
const Transaction = sequelize.define('Transaction', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  transactionType: {
    type: DataTypes.ENUM('deposit', 'withdrawal', 'transfer'),
    allowNull: false,
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  accountId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Account, // Link to the Account model
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

export default Transaction;
