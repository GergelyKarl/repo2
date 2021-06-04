import React, { useEffect, useState } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";
function App() {
  const [todoItems, setTodoItems] = useState(null);

  useEffect(() => {
    if (!todoItems) {
      fetch("http://localhost:8080/api/todoitems")
        .then((res) => res.json())
        .then((data) => {
          setTodoItems(data);
        });
    }
  }, [todoItems]);

  const addNewTodoItem = () => {
    fetch("http://localhost:8080/api/todoitems", {
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => setTodoItems([...todoItems, data]));
  };

  const handleDeleteItem = (id) => {
    const updatedTodoItems = todoItems.filter((index) => index.id !== id);
    setTodoItems([...updatedTodoItems]);
  };

  return (
    <>
      <div>
        <button onClick={addNewTodoItem}>Add new Item:</button>
      </div>

      <div className="App">
        {todoItems
          ? todoItems.map((item) => (
              <TodoItem
                key={item.id}
                item={item}
                emitDeleteTodoItem={handleDeleteItem}
              />
            ))
          : "loading"}
      </div>
    </>
  );
}

export default App;
