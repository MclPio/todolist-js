/**
 * Creates page boilerplate/skeleton elements
 */
function skeleton() {
  const content = document.getElementById('content');

  const container = document.createElement('div');
  container.id = 'container';

  const projectsSection = document.createElement('section');
  projectsSection.id = 'projects-section';

  const todoSection = document.createElement('section');
  todoSection.id = 'todo-section';

  projectsSectionChildren();
  todoSectionChildren();

  container.append(projectsSection, todoSection);
  content.append(container);

  function projectsSectionChildren() {
    // return projects-header-container div with children
    function initProjectHeaderContainer() {
      const projectHeaderContainer = document.createElement('div');
      projectHeaderContainer.classList = 'project-header-container';

      const myProjectsHeader = document.createElement('h1');
      myProjectsHeader.innerText = 'PROJECTS';

      const addProjectButton = document.createElement('button');
      addProjectButton.id = 'new-project';
      addProjectButton.textContent = 'New Project';

      projectHeaderContainer.append(myProjectsHeader, addProjectButton);

      return projectHeaderContainer;
    }

    const projectList = document.createElement('div');
    projectList.id = 'projects';

    projectsSection.append(initProjectHeaderContainer(), projectList);
  }

  function todoSectionChildren() {
    const projectName = document.createElement('p');
    projectName.id = 'project-name-display';

    const newTodoButton = document.createElement('button');
    newTodoButton.innerText = 'New Todo';
    newTodoButton.id = 'new-todo-button';

    const todoList = document.createElement('div');
    todoList.id = 'todo-list';

    todoSection.append(projectName, newTodoButton, todoList);
  }
}

export { skeleton };