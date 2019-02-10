import React from "react";
import Todo from "./todo";

const TodoList = ({ todoList, todoClickHandler }) => {
  return (
    <ul>
      {todoList.map(item => {
        return (
          <Todo
            key={item.id}
            clickHandler={todoClickHandler(item.id)}
            completed={item.completed}
            text={item.text}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
