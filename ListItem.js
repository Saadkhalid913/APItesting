class ListItem {
  constructor(obj, id) {
    let {name, author, body} = obj
    this.name = name 
    this.body = body 
    this.author = author
    this.id = id 
  }
}

module.exports = ListItem