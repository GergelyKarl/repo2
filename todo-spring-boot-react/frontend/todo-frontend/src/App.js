import React, { useEffect, useState } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem"
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

  console.log(todoItems);



  return (
    <div className="App">
      {todoItems
        ? todoItems.map((item) => (
           <TodoItem key={item.id} item={item} />
          ))
        : "loading"}
    </div>
  );
}

export default App;
