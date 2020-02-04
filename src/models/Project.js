/* eslint no-param-reassign: ["error", { "props": false }] */
let projects = [];

export const getProjects = () => projects;

export const findProject = (id) => projects.find((project) => project.id === id);

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

export const updateProject = (id, title) => {
  let updatedProject = null;

  if (!id || !title) {
    throw new Error('ID and title cannot be empty');
  }

  projects.forEach((project) => {
    if (project.id === id) {
      project.title = title;
      updatedProject = project;
    }
  });

  return updatedProject;
};

export const deleteProject = (id) => {
  const initialLength = projects.length;
  if (!id) {
    throw new Error('ID cannot be empty');
  }

  projects = projects.filter((project) => project.id !== id);

  return initialLength !== projects.length;
};


export default { getProjects, createProject, updateProject };
