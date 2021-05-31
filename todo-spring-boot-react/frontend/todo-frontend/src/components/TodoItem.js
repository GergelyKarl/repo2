import React, { useState, useEffect } from "react";

const TodoItem = ({ item }) => {
  const [todoItem, setTodoItem] = useState(item);
  const [isModified, setIsModified] = useState(false);
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
            setTodoItem(data);
            setIsModified(false);
          
        });
        
    }
  }, [todoItem, isModified]);

//   const updateCheckBox = () => {
//     setIsModified(true);
//     setTodoItem({ ...todoItem, done: !todoItem.done });
//   };


  return (
    <>
      {" "}
      <input
        type="checkbox"
        checked={todoItem.done}
        onChange={() => {
          setIsModified(true);
          setTodoItem({ ...todoItem, done: !todoItem.done });
        }}
      />{" "}
      <span>{item.task}</span>
    </>
  );
};

export default TodoItem;
