class ListItem {
  constructor(text, id) {
    this.id = id 
    this.text = text
  }
}

function AddListItem(Text, id) {
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

function UploadListItem(text) {
  const newItem = new ListItem(text)
  console.log("Uploading...")
  return CreateNewRandomID()
}


document.getElementById("submit").addEventListener("click", () => {
  const text = document.getElementById("main-text").value
  document.getElementById("main-text").value = ""

  id = UploadListItem(text)
  AddListItem(text, id)

})

function CreateNewRandomID() {
  return Date.now() 
}


// under development 

// function GetItem(id) {
//   fetch("https://google.ca", {
//     headers: {
//       "Access-Control-Allow-Origin": "*"
//     }
//   })

//   .then(res => res.json())
//   .then(js => console.log(js))
//   .catch(err => console.log(new Error("error")))
// }