import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
// Dashboard logic (fetch data, render view)
});

router.get('/transactions', (req, res) => {
// Transaction history logic (fetch data, render view)
});

module.exports = router;