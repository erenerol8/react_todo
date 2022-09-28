import react from "react";

const TodoList = ({todo}) => {
  return (
    <div>
      <div className="todo-container">
        {todo.map((todos, index) => (
          <div key={index} className="todo-items">
            <p>{todos}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
