const express = require("express");
const ListItem = require("./ListItem")
const app = express();

let MAX_ID = 1

let ListItems = [
  new ListItem("hello", 1)
]

// middlewear 
app.use(express.json())


// get all 
app.get("/api/items" , (req, res) => {
  res.send(ListItems)
  console.log(ListItems)
})

//get item 
app.get("/api/items/:id", (req,res) => {
  const id = parseInt(req.params.id) 
  const item = ListItems.find(i => i.id === id)
  if (!item) 
  return res.status(404).send("Invalid id parameter")
  res.send(item)
})


// put item
app.put("/api/items/:id", (req, res) => {
  console.log("putting")
  const id = parseInt(req.params.id)
  const newItem = req.body 
  
  const item = ListItems.findIndex(x => x.id === id)

  if (!item) 
    return res.status(404).send("Invalid id parameter")

  const OldItem = ListItems[item]
  ListItems[item] = new ListItem(req.body.text, OldItem.id)
  res.send(ListItems[item])
  console.log(ListItems)
})


// post item 
app.post("/api/items/", (req, res) => {
  const newItem = new ListItem(req.body.text, MAX_ID++)
  res.send(newItem)
  ListItems.push(newItem)
  console.log(ListItems)
})

// delete item 
app.delete("/api/items/:id", (req,res) => {
  const id = parseInt(req.params.id);
  const indexOfItem = ListItems.findIndex(i => i.id === id);
  const item = ListItems[indexOfItem]
  if (!item) 
    return res.status(400).send("invalid id")
  res.send(item)
  ListItems.splice(indexOfItem,1);
})


const PORT = process.env.PORT || 3000;
app.listen(PORT, (req, res) => {console.log("Listening on " + PORT)})


