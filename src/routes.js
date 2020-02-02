import express from 'express';
import projectController from './controllers/Project.js';

const router = express.Router();

router.get('/projects', projectController.index);

export default router;
