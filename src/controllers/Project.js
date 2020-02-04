import { getProjects, createProject, updateProject } from '../models/Project.js';

const index = (request, response) => {
  try {
    return response.json(getProjects());
  } catch (error) {
    return response.status(400).send({ error: 'Error retrieving the projects list' });
  }
};

const create = (request, response) => {
  try {
    const { id, title } = request.body;
    const createdProject = createProject(id, title);

    return response.json(createdProject);
  } catch (error) {
    return response.status(400).json(error.message);
  }
};

const update = (request, response) => {
  try {
    const { title } = request.body;
    const { id } = request.params;
    const updatedProject = updateProject(id, title);

    return response.json(updatedProject);
  } catch (error) {
    return response.status(400).json(error.message);
  }
};

export default { index, create, update };
