import express from 'express';
import sequelize from './app/config/database.js';
import { User, Account, Transaction } from './app/models/index.js';

const app = express();

// Test database connection and synchronize models
async function initializeDatabase() {
  try {
    await sequelize.authenticate();
    console.log('Database connected successfully!');

    // Sync all models with the database
    await sequelize.sync({ force: true }); // This will drop and recreate all tables
    console.log('Models synchronized successfully!');
  } catch (error) {
    console.error('Database initialization error:', error);
    process.exit(1);
  }
}


// Initialize database before starting the server
initializeDatabase().then(() => {
  // Example route to fetch all users
  app.get('/users', async (req, res) => {
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // Start the server
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
});