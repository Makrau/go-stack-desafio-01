import express from 'express';
import projectController from './controllers/Project.js';

const router = express.Router();

router.get('/projects', projectController.index);
router.post('/projects', projectController.create);

export default router;
