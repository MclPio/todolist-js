import { ProjectController } from "../../controllers/project";

function projectEdit() {
  const container = document.getElementById("container");
  const optionButtons = document.getElementsByClassName(
    "project-option-button"
  );
  const dialog = document.createElement("dialog");
  dialog.id = "project-options";

  const modalTitle = document.createElement("p");
  modalTitle.innerText = "EDIT PROJECT";

  const cancel = (function () {
    let cancelButton = document.createElement("button");
    cancelButton.innerText = "CANCEL";
    cancelButton.id = "cancel-project-update";
    return cancelButton;
  })();

  cancel.addEventListener("click", () => {
    dialog.close();
  });

  const submitButton = (function () {
    let submitButton = document.createElement("button");
    submitButton.innerText = "SUBMIT";
    submitButton.id = "submit-project-update";
    return submitButton;
  })();

  const destroyButton = (function () {
    let destroyButton = document.createElement("button");
    destroyButton.innerText = "DESTROY";
    destroyButton.id = "delete-project";
    return destroyButton;
  })();

  const projectNameLabel = document.createElement("label");
  projectNameLabel.textContent = "NAME";
  projectNameLabel.htmlFor = "edited-project-name";

  const projectNameInput = document.createElement("input");
  projectNameInput.id = "edited-project-name";
  projectNameInput.type = "text";

  const dialogContent = document.createElement("div");
  dialogContent.classList = "dialog-content";
  dialogContent.append(
    modalTitle,
    projectNameLabel,
    projectNameInput,
    submitButton,
    cancel,
    destroyButton
  );
  dialog.append(dialogContent);
  container.append(dialog);

  // modal show click event
  for (let i = 0; i < optionButtons.length; i++) {
    let optButton = optionButtons[i];
    optButton.addEventListener("click", () => {
      console.log(
        `optButton for ${optButton.previousSibling.innerText} is clicked!`
      );
      projectNameInput.setAttribute(
        "data-id",
        `${optButton.previousSibling.dataset.id}`
      );
      projectNameInput.value = optButton.previousSibling.innerText;
      dialog.showModal();
    });
  }

  // when user clicks submit
  submitButton.addEventListener("click", () => {
    ProjectController.update(
      projectNameInput.dataset.id,
      projectNameInput.value
    );
  });

  // when user clicks delete
  destroyButton.addEventListener("click", () => {
    if (confirm(`Are you sure you want to delete your project?`)) {
      ProjectController.destroy(projectNameInput.dataset.id);
    }
  });
}

export { projectEdit };
