import express from 'express';
import sequelize from '../data/database'; // Import the Sequelize instance
import User from '../data/models/User';  // Import the User model

const app = express();

// Test database connection and synchronize models
(async () => {
  try {
    await sequelize.authenticate(); // Test database connection
    console.log('Database connected successfully!');
    await sequelize.sync(); // Sync all models with the database
    console.log('Models synchronized successfully!');
  } catch (error) {
    console.error('Database connection error:', error);
  }
})();

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
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
