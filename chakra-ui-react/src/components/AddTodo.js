import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { HStack } from "@chakra-ui/layout";
import React from "react";

const AddTodo = ({ setTodos, todos }) => {
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, ...todos]);
  }
  return (
    <form onSubmit={handleSubmit}>
      <HStack mt="8">
        <Input variant="filled" placeholder="Add items to the list.." />
        <Button colorScheme="pink" px="8" type="submit">
          Add todo
        </Button>
      </HStack>
    </form>
  );
};

export default AddTodo;
