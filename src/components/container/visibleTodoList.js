import React from "react";
import { connect } from "react-redux";
import TodoList from "../presentational/todoList";

function getVisibleTodos(todoList, filter) {
  switch (filter) {
    case "SHOW_ALL":
      return todoList;
    case "SHOW_COMPLETED":
      return todoList.filter(obj => obj.completed);
    case "SHOW_ACTIVE":
      return todoList.filter(obj => !obj.completed);
  }
}

const mapStateToProps = ({ todoList, visibilityFilter }) => {
  return { todos: getVisibleTodos(todoList, visibilityFilter) };
};

const mapDispatchToProps = dispatch => {
  return {
    clickHandler: id => {
      return () => {
        dispatch({ type: "TOGGLE_TODO", id: id });
      };
    }
  };
};

const VisibleTodoList = ({ todos, clickHandler }) => {
  return <TodoList todoList={todos} todoClickHandler={clickHandler} />;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VisibleTodoList);
