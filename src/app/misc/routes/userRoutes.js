import express from 'express';

const router = express.Router();

// Example route
router.get('/users', (req, res) => {
  res.json([{ id: 1, name: 'John Doe' }]);
});

export default router;

