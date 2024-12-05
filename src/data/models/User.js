import { DataTypes } from 'sequelize';
import sequelize from '../database'; // Import the database connection

// Define the User model
const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  balance: {
    type: DataTypes.FLOAT,
    defaultValue: 0.0,
  },
});

export default User; // Export the model



