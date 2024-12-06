import express from 'express';

const app = express();

// Example middleware
app.use(express.json());

// Example route
app.get('/api/hello', (req, res) => {
  res.status(200).json({ message: 'Hello from Express!' });
});

export default (req, res) => {
  app(req, res);
};
