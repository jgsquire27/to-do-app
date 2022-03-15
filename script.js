
//declares function createNewList
function createNewList () {
  //assigns element .list-container to listContainer\/ 
  const listContainer = document.getElementById("list-container");
  //assigns element .list-text-input value to listTextInput\/
  const listTextInput = document.getElementById("list-text-input").value;
  //creates a div element and assings it to listDiv const
  const listDiv = document.createElement("div");
  //creates a dvi element and assigns it to listTaskContainer variable
  const listTaskContainer = document.createElement("div");
  //creates a h3 element and assigns it to listTitle variable
  const listTitle = document.createElement("h3");
  //creates an input element and assigns it to listTaskInput variable
  const listTaskInput = document.createElement("input");
  //creates a button element and assigns it to listTaskInput variable
  const listTaskInputButton = document.createElement("button");
  //creates a button element and assigns it to listTaskInputButton variable
  listTitle.innerHTML = listTextInput;
  //assigns listTextInput value to the innerHTML of listTitle
  listTaskInputButton.innerHTML = "Add Task";
  //assigns "add task" value to listTaskInputButton
  listTaskInputButton.addEventListener('click', () => createNewTask(listTaskInput, listTaskContainer));
  //when listTaskInputButton is clicked(event listener) it runs the function createNewTask
  listDiv.appendChild(listTitle);
  //adds child listTitle to parent listDiv
  listDiv.appendChild(listTaskInput);
  //adds child listTaskInput to parent listDiv
  listDiv.appendChild(listTaskInputButton);
  //adds child listTaskInputButton to parent listDiv
  listDiv.appendChild(listTaskContainer);
  //adds child listTaskContainer to parent listDiv
  listContainer.appendChild(listDiv);
  //adds child listDiv to parent listContainer

  localStorage.setItem(listTitle, listTitle.innerHTML);
  const storageTest = localStorage.getItem(listTitle);
  console.log(storageTest);
}


function createNewTask (listTaskInput, taskContainer) {
  let taskValue = listTaskInput.value;
  const taskTitle = document.createElement("h4");
  const taskDelete = document.createElement("button");
  const taskEditInput = document.createElement("input");
  taskTitle.innerHTML = taskValue;
  taskDelete.innerHTML = "X";
  taskEditInput.placeholder = "Edit Task";
  taskContainer.appendChild(taskTitle);
  taskContainer.appendChild(taskDelete);
  taskContainer.appendChild(taskEditInput);
  taskContainer.setAttribute("id", "task-container-delete")
  taskDelete.setAttribute("id", "task-delete-id");
  taskTitle.setAttribute('id', 'values');
  taskEditInput.setAttribute('id', 'task-edit-input');
  taskDelete.addEventListener('click', deleteParent);
  taskTitle.addEventListener('click', strikeThrough);
  taskEditInput.addEventListener('input', updateTask);

  localStorage.setItem(taskTitle, taskTitle.innerHTML);
  const storageTest = localStorage.getItem(taskTitle);
  console.log(storageTest);
}


function strikeThrough (event) {
  if (event.target.classList.contains("strike-through-class")  ) {
    event.target.classList.remove('strike-through-class');
  } else {
  event.target.classList.add("strike-through-class");}
  
}


function deleteParent() {
  document.getElementById('task-delete-id').remove();
  document.getElementById('task-edit-input').remove();
  document.getElementById('values').remove();

}


function updateTask(e) {
  const log = document.getElementById('values');
  log.textContent = e.target.value;
}



