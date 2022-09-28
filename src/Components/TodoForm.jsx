import react from "react";
import { useState, useEffect } from "react";

const TodoForm = ({ setTodo, todo }) => {
  const [todoValue, setTodoValue] = useState("");
  const handleSubmit = (e) => {
    setTodo([...todo, todoValue]);
  };
  return (
    <form action="" id="todo-form">
      <input
        type="text"
        id="form-input"
        placeholder="please enter your todo"
        onChange={(e) => setTodoValue(e.target.value)}
        value={todoValue}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          handleSubmit();
          setTodoValue("");
        }}
      >
        <i className="fas fa-plus">+</i>
      </button>
    </form>
  );
};

export default TodoForm;
