import { findProject } from '../models/Project.js';

const checkProjectId = (request, response, next) => {
  const { id } = request.params;

  if (!id) {
    return response.status(400).json({ error: 'Project ID not found on params' });
  }

  const project = findProject(id);

  if (!project) {
    return response.status(400).json({ error: 'Project not found' });
  }

  request.project = project;

  return next();
};

export default checkProjectId;
