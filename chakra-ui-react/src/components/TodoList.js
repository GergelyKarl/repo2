import React from "react";
import {
  Stack,
  HStack,
  VStack,
  Text,
  IconButton,
  StackDivider,
  Spacer,
  Badge,
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const TodoList = ({ todos, deleteTodo }) => {
  if (!todos.length) {
    return (
      <Badge ml="1" p="3" fontSize="1.2em" colorScheme="green">
        No todos
      </Badge>
    );
  } else
    return (
      <VStack
        divider={<StackDivider />}
        borderColor="gray.100"
        borderWidth="2px"
        p="4"
        borderRadius="lg"
        w="100%"
        maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "40vw" }}
        alignItems="stretch"
      >
        {todos.map((todo) => (
          <HStack key={todo.id}>
            <Text>{todo.body}</Text>
            <Spacer />
            <IconButton
              icon={<FaTrash />}
              isRound="true"
              onClick={() => deleteTodo(todo.id)}
            />
          </HStack>
        ))}
      </VStack>
    );
};

export default TodoList;
