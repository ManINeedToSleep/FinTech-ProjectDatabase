import express from 'express';
import apiRoutes from './apiRoutes';
import userRoutes from './userRoutes';

const router = express.Router();

// Use defined routes
router.use('/api', apiRoutes);
router.use('/users', userRoutes);

export default router;
