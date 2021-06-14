const Todo = require("../models/Todo");

const getAllTodos = (req, res) => {
  res.send("get todos");
};

const createTodos = async (req, res) => {
  const todo = await Todo.create(req.body);
  res.status(201).json({ todo });
};
const getTodo = (req, res) => {
  res.json({ id: req.params.id });
};
const updateTodo = (req, res) => {
  res.send("update todos");
};
const deleteTodo = (req, res) => {
  res.send("delete todos");
};

module.exports = {
  getAllTodos,
  createTodos,
  getTodo,
  deleteTodo,
  updateTodo,
};
