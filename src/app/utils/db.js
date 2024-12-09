import sequelize from '../config/database.js';

const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    await sequelize.sync(); // This will create the tables if they don't exist
    console.log('Models synchronized with database.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

export default connectToDatabase;