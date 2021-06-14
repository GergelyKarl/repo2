const getAllTodos = (req, res) => {
  res.send("get todos");
};

const createTodos = (req, res) => {
  res.json(req.body);
};
const getTodo = (req, res) => {
  res.json({id:req.params.id});
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
