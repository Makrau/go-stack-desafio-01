import express from 'express';
import projectMiddlewares from './middlewares/Project.js';
import projectController from './controllers/Project.js';

const router = express.Router();

router.get('/projects', projectController.index);
router.post('/projects', projectController.create);
router.put('/projects/:id', projectMiddlewares, projectController.update);

export default router;
