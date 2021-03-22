import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { HStack } from "@chakra-ui/layout";
import React, { useState } from "react";
import { nanoid } from "nanoid";
import { useToast } from "@chakra-ui/toast";

const AddTodo = ({ addTodos }) => {
  const toast = useToast();

  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!input) {
      toast({
        title: "No todos.",
        description: "Type Something",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    } else {
      const todoEl = {
        id: nanoid(),
        body: input,
      };
      addTodos(todoEl);
      setInput("");
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <HStack mt="8">
        <Input
          value={input}
          variant="filled"
          placeholder="Add items to the list.."
          onChange={(e) => setInput(e.target.value)}
        />
        <Button colorScheme="pink" px="8" type="submit">
          Add todo
        </Button>
      </HStack>
    </form>
  );
};

export default AddTodo;
