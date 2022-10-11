import react from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch.js";
import { TodoList } from "./TodoList.js";
import { TodoItem } from "./TodoItem.js";
import { CreateTodoButton } from "./CreateTodoButton.js";
// import './App.css';
const todos=[
  {text: 'Curso Avanzado Java SE', completed: false},
  {text: 'Curso Introduccion a REACT', completed: false},
  {text: 'Curso Git && GITHUB', completed: false},
  {text: 'Curso de Agular de Cero a Experto', completed: false},
];
function App() {
  return (
   <react.Fragment>
      <TodoCounter />    
      <TodoSearch />
      <TodoList>
        {todos.map(todo =>(<TodoItem key={todo.text} text={todo.text} />))}
      </TodoList>
      <CreateTodoButton />      
   </react.Fragment>
  );
}

export default App;
