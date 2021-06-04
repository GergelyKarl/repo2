import React, { useState, useEffect } from "react";

const TodoItem = ({ item, emitDeleteTodoItem }) => {
  const [todoItem, setTodoItem] = useState(item);
  const [isModified, setIsModified] = useState(false);

  const updateCheckBox = () => {
    setIsModified(true);
    setTodoItem({ ...todoItem, done: !todoItem.done });
  };

  const updateTask = (e) => {
    setIsModified(true);
    setTodoItem({ ...todoItem, task: e.target.value });
  };

  const deleteItem = () => {
    fetch(`http://localhost:8080/api/todoitems/${todoItem.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => emitDeleteTodoItem(todoItem));
  };

  useEffect(() => {
    if (isModified) {
      fetch(`http://localhost:8080/api/todoitems/${todoItem.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todoItem),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setIsModified(false);
          setTodoItem(data);
        });
    }
  }, [todoItem, isModified]);

  return (
    <div>
      <input
        type="checkbox"
        checked={todoItem.done}
        onChange={updateCheckBox}
      />
      {todoItem.done ? (
        <span style={{ textDecoration: "line-through" }}>{todoItem.task}</span>
      ) : (
        <input type="text" value={todoItem.task} onChange={updateTask} />
      )}
      {<span onClick={deleteItem}>🗑️</span>}
    </div>
  );
};

export default TodoItem;
