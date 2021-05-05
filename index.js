const express = require("express");
const ListItem = require("./ListItem")
const app = express();

let MAX_ID = 10

let ListItems = [
  
]

// middlewear 
app.use(express.json())


app.get("/api/items" , (req, res) => {
  res.send(ListItems)
  console.log(ListItems)
})

app.get("/api/items/:id", (req,res) => {
  const id = parseInt(req.params.id) 
  const item = ListItems.find(i => i.id === id)
  if (!item) 
  return res.status(404).send("Invalid id parameter")
  res.send(item)
})

app.put("/api/items/:id", (req, res) => {
  console.log("putting")
  const id = parseInt(req.params.id)
  const newItem = req.body 
  
  const item = ListItems.findIndex(x => x.id === id)

  if (!item) 
    return res.status(404).send("Invalid id parameter")

  ListItems[item] = new ListItem(req.body, MAX_ID + 1)
  res.send(ListItems[item])
  console.log(ListItems)
})

app.post("/api/items/", (req, res) => {
  const newItem = new ListItem(req.body, MAX_ID++)
  res.send(newItem)
  ListItems.push(newItem)
  console.log(ListItems)
})


const PORT = process.env.PORT || 3000;
app.listen(PORT, (req, res) => {console.log("Listening on " + PORT)})

