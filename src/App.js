import "./App.css";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState([]);
  return (
    <div>
      <TodoForm setTodo={setTodo} todo={todo} />
      <TodoList todo={todo} />
    </div>
  );
}

export default App;
