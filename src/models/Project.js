/* eslint no-param-reassign: ["error", { "props": false }] */
const projects = [];

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
    throw new Error('Id and title cannot be empty');
  }

  projects.forEach((project) => {
    if (project.id === id) {
      project.title = title;
      updatedProject = project;
    }
  });

  return updatedProject;
};


export default { getProjects, createProject, updateProject };
