function AddListItem(Text) {
  const id = CreateNewRandomID()
  const ToDoList = document.getElementById("to-do-list");
  const newListItem = document.createElement("li")
  const textnode = document.createTextNode(Text);
  newListItem.appendChild(textnode);
  const button = document.createElement("button")
  button.addEventListener("click", () => {
    document.getElementById(id).remove()
  })
  button.innerText = "Delete"

  newListItem.appendChild(button)
  newListItem.id = id;
  
  ToDoList.appendChild(newListItem);
  return;

}

function CreateNewRandomID() {
  return Date.now() 
}