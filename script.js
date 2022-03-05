function createNewList () {
  const listContainer = document.getElementById("list-container");
  const div = document.createElement("div");
  const list = document.createElement("ul");
  const listChild = document.createElement("li");
  div.appendChild(list);
  list.appendChild(listChild);
  listContainer.appendChild(div)

}


