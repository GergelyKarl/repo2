const Todo = require("../models/Todo");

const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.status(200).json({ todos });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createTodos = async (req, res) => {
  try {
    const todo = await Todo.create(req.body);
    res.status(201).json({ todo });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const getTodo = async (req, res) => {
  try {
    const { id: todoID } = req.params;
    const todo = await Todo.findOne({ _id: todoID });
    if (!todo) {
      return res.status(404).json({ msg: `No todo found at ${todoID} id` });
    }

    res.status(200).json({ todo });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const updateTodo = async (req, res) => {
  try {
    const todoID = req.params.id;
    const todo = await Todo.findByIdAndUpdate({ _id: todoID }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!todo) {
      return res.status(404).json({ msg: `todo doesnt exist at ${todoID}` });
    }

    res.status(200).json({ todo });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const deleteTodo = async (req, res) => {
  try {
    const todoID = req.params.id;
    const todo = await Todo.findOneAndDelete({ _id: todoID });
    if (!todo) {
      return res.status(404).json({ msg: `No existing id with ${todoID}` });
    }
    res.status(200).json({ todo });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllTodos,
  createTodos,
  getTodo,
  deleteTodo,
  updateTodo,
};
