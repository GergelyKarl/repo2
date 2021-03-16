
import './App.css';
import {Heading} from "@chakra-ui/react"
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import {  VStack,IconButton } from "@chakra-ui/react"
import {FaSun,FaMoon} from "react-icons/fa"


function App() {
  return (
<VStack p={4}>
  <IconButton icon={<FaSun />} isRound="true" size="lg" alignSelf="flex-end" />
<Heading mb="8" fontWeight="extrabold" size="2xl" bgGradient="linear(to-r, pink.500,pink.300,blue.500)" bgClip="text" >Todo Application</Heading>
<TodoList />
<AddTodo />
</VStack>
  );
}

export default App;
