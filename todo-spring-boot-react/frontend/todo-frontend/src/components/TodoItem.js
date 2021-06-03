import React, { useState, useEffect } from "react";

const TodoItem = ({ item }) => {
  const [todoItem, setTodoItem] = useState(item);
  const [isModified, setIsModified] = useState(false);

  const updateCheckBox = () => {
    setIsModified(true);
    setTodoItem({ ...todoItem, done: !todoItem.done });
  };

  const updateTask = (e) => {
    setIsModified(true)
    setTodoItem({ ...todoItem, task: e.target.value });
    
  };

  useEffect(() => {
    if (isModified) {
      fetch(`http://localhost:8080/api/todoitems/${todoItem.id}`, {
        method: "PUT",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
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
      <input type="text" value={todoItem.task} onChange={updateTask} />
    </div>
  );
};

export default TodoItem;
