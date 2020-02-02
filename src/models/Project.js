const projects = [];

export const getProjects = () => projects;

const findProject = (id) => projects.find((element) => element.id === id);

export const createProject = (id, title) => {
  if (!id || !title) {
    throw new Error('Project ID and Title cannot be empty');
  }

  if (findProject(id)) {
    throw new Error(`There is already a project with ID=${id}`);
  }

  const tasks = [];
  const newProject = { id, title, tasks };

  projects.push(newProject);

  return newProject;
};


export default { getProjects, createProject };
