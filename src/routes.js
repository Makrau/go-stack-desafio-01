import express from 'express';

const router = express.Router();

router.get('/projects', (request, response) => response.send('Mock Function'));

export default router;
