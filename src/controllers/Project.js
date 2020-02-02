import { getProjects } from '../models/Project.js';

export const index = (request, response) => response.json(getProjects());

export default { index };
