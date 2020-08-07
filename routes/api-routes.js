// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************
//import models

const db = require("../models");
// Dependencies
// Routes
// =============================================================
module.exports = function (app) {

  // GET route for getting all of the todos
  // making it async 
  app.get("/api/todos", async function (req, res) {
    const data = await db.Todo.findAll()
    res.json(data);
  });

  // POST route for saving a new todo. We can create a todo using the data on req.body
  app.post("/api/todos", function (req, res) {
    db.Todo.create(req.body).then(() => {
      res.json(data)
    });
    res.end()
  });

  // DELETE route for deleting todos. We can access the ID of the todo to delete in
  // req.params.id
  app.delete("/api/todos/:id", function (req, res) {
    const id = req.params.id
    db.Todo.destroy({
      where: { id: id }
    }).then(data => res.json(data))
      .catch(err => { throw err })
    res.end()
  });

  // PUT route for updating todos. We can access the updated todo in req.body
  app.put("/api/todos", async function (req, res) {
    const { id.text, complete } = req.body
    const data = await db.Todo.update(
      { text: text, complete: complete },
      // you can also keep it as id to shorten it
      { where: { id: id } }
    )
    res.json(data);
  });
};
