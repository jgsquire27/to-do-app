function createNewList () {
  const listContainer = document.getElementById("list-container");
  const listTextInput = document.getElementById("list-text-input").value;
  const listDiv = document.createElement("div");
  const listTaskContainer = document.createElement("div");
  const listTitle = document.createElement("h3");
  const listTaskInput = document.createElement("input");
  const listTaskInputButton = document.createElement("button");
  listTitle.innerHTML = listTextInput;
  listTaskInputButton.innerHTML = "Add Task";
  listTaskInputButton.addEventListener('click', createNewTask)
  listDiv.appendChild(listTitle);
  listDiv.appendChild(listTaskInput);
  listDiv.appendChild(listTaskInputButton);
  listDiv.appendChild(listTaskContainer);
  // list.appendChild(listChild);
  listContainer.appendChild(listDiv);

}



function createNewTask (taskTitleString) {


  const taskTitle = document.createElement("h4");
//I need to 2 things in this function
// 1: give the task the title value  ie ketchup or bread etc...
// 2: I need to put that in the actual task list (listTaskContainer)
}


