import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import sequelize from './app/config/database.js';
import User from './app/models/User.js';
import Account from './app/models/Account.js';
import Transaction from './app/models/Transaction.js';

const app = express();

// Apply CORS middleware
app.use(cors({
  origin: 'http://example.com',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}));

// Apply Helmet middleware
app.use(helmet());

// Parse JSON bodies
app.use(express.json());

// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));
async function initializeDatabase() {
  try {
    // Test the database connection
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');

    // Sync all models with the database
    await sequelize.sync({ alter: true });
    console.log('All models were synchronized successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

// Initialize database before starting the server
initializeDatabase().then(() => {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

// Your routes and other middleware go here
app.get('/', (req, res) => {
  res.send('FinTech Project Database is running!');
});

export default app;

