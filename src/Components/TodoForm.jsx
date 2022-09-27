import react from "react";
import { useState, useEffect } from "react";

const TodoForm = () => {
  const [todo, setTodo] = useState([]);
  const [todoValue, setTodoValue] = useState("");
  return (
    <form action="" id="todo-form">
      <input
        type="text"
        id="form-input"
        placeholder="please enter your todo"
        onChange={(e) => setTodoValue(e.target.value)}
      />
      <button>
        <i class="fas fa-plus">+</i>
      </button>
    </form>
  );
};

export default TodoForm;
