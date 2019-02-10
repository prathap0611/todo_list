import React from "react";

const Todo = ({ clickHandler, completed, text }) => {
  return (
    <li onClick={clickHandler} className={completed ? "completedTodo" : ""}>
      {text}
    </li>
  );
};

export default Todo;
