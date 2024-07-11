import { Todo } from "../../modules/todo";
import { storage } from "../../modules/storage";

// displays the todolist on the dom...
// index through all the todos and display to dom

// displays button to add new todoitem to the app.
// FORM HERE!
// todo name
// todo description
// due Date
// Priority

//all the above should be centered with flex..

function projectToDOM(project){
  const todoSection = document.getElementById('todo-section');
  todoSection.innerHTML = '';
  const todoUl = document.createElement('ul');
  let todoArray = project.todos
  for(let i = 0; i < todoArray.length; i++) {
    let item = todoArray[i];
    let todoObj = new Todo(item.title, item.description, item.dueDate, item.dueTime, item.priority);
    // write code to insert todo obj to dom maybe call todo/show?
    const todoLi = document.createElement('li');
    todoLi.innerText = todoObj.title
    todoUl.append(todoLi);
  }
  todoSection.append(todoUl);
}

function projectButtonListener(){
  const elements = document.getElementsByClassName('project-button');
  
  for(let i = 0; i < elements.length; i++){
    elements[i].addEventListener('click', ()=>{
      let projectID = (elements[i].dataset.id);
      // on click clear todo section
      // insert projects todos
      // show(storage().retrieve()[5]);
      console.log(storage().retrieve()[projectID]);
      projectToDOM(storage().retrieve()[projectID])    
    })
  }
}


export { projectButtonListener };

// need to add todos to test if show works.