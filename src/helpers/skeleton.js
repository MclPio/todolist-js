
function skeleton() {
  const content = document.getElementById('content');

  const container = document.createElement('div');
  container.id = 'container';

  const projectsSection = document.createElement('section');
  projectsSection.id = 'projects-section';

  const todoSection = document.createElement('section');
  todoSection.id = 'todo-section';

  function projectsSectionChildren() {
    function projectHeaderContainer() {
      const projectHeaderContainer = document.createElement('div');
      projectHeaderContainer.classList = 'project-header-container';
    
      const myProjectsHeader = document.createElement('p');
      myProjectsHeader.innerText = 'My Projects';
    
      const addProjectButton = document.createElement('button');
      addProjectButton.id = 'new-project';
      addProjectButton.textContent = 'New Project';

      projectHeaderContainer.append(myProjectsHeader, addProjectButton);
      return projectHeaderContainer;
    }

    const projectList = document.createElement('div');
    projectList.id = 'projects';
  }
  
  function todoSectionChildren() {
    const newTodoButton = document.createElement('button');
    newTodoButton.innerText = 'New Todo';
    newTodoButton.id = 'new-todo-button';
  
    const todoList = document.createElement('div');
    todoList.id = 'todo-list';
  }
}

export { skeleton };