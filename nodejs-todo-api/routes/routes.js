const express = require("express");
const router = express.Router();
const {
  getAllTodos,
  getTodo,
  createTodos,
  deleteTodo,
  updateTodo,
} = require("../controllers/controller");

router.route("/").get(getAllTodos).post(createTodos);
router.route("/:id").get(getTodo).patch(updateTodo).delete(deleteTodo);

module.exports = router;
