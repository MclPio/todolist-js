function commands() {
  // ask user for their todo list input, this is for testing in console
  function getInput(){
    const title = prompt("Enter the title of the todo:");
    const description = prompt("Enter the description of the todo (optional):");
    const dueDate = prompt("Enter the due date of the todo (optional, format: YYYY-MM-DD):");
    const dueTime = prompt("Enter the due time of the todo (optional, format: HH:MM):")
    const priority = prompt("Enter the priority of the todo (optional, 1-4):");
    return {title, description, dueDate, dueTime, priority};
  }

  return { getInput };
}

export { commands }