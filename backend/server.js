const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Temporary storage (instead of MongoDB)
let todos = [];

// Get all todos
app.get("/todos", (req, res) => {
  res.json(todos);
});

// Add a todo
app.post("/todos", (req, res) => {
  const newTodo = {
    id: Date.now(),
    text: req.body.text,
  };

  todos.push(newTodo);
  res.json(newTodo);
});

// Delete a todo
app.delete("/todos/:id", (req, res) => {
  todos = todos.filter(todo => todo.id != req.params.id);
  res.json({ message: "Todo deleted" });
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});