import { Sequelize } from 'sequelize';
import dotenv from './app/data/.env'; 


console.log("DEUGG::", process.env.DB_NAME)
const sequelize = new Sequelize(
 process.env.DB_NAME,
 process.env.DB_USER,
 process.env.DB_PASSWORD,
 {
   host: process.env.DB_HOST,
   dialect: "mysql",
 }
);

console.log("sequelize instance:", sequelize.config.username, sequelize.config.password);

module.exports = sequelize;