import "./App.css";
import { Heading } from "@chakra-ui/react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import { VStack, IconButton } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useState, useEffect } from "react";

function App() {

  const initialTodos = [
    { id: 1, body: "qweqwe" },
    { id: 2, body: "bbbbb" },
    { id: 3, body: "vvvvv" },
  ];

  const [todos, setTodos] = useState(initialTodos)

  return (
    <VStack p={4}>
      <IconButton
        icon={<FaSun />}
        isRound="true"
        size="lg"
        alignSelf="flex-end"
      />
      <Heading
        mb="8"
        fontWeight="extrabold"
        size="2xl"
        bgGradient="linear(to-r, pink.500,pink.300,blue.500)"
        bgClip="text"
      >
        Todo Application
      </Heading>
      <TodoList todos={todos} />
      <AddTodo setTodos={()=>setTodos()} todos={todos} />
    </VStack>
  );
}

export default App;
