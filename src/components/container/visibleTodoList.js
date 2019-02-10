import React from "react";
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

class VisibleTodoList extends React.Component {
  componentDidMount() {
    this.unsubscriber = this.props.store.subscribe(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    this.unsubscriber();
  }

  render() {
    let { todoList, visibilityFilter } = this.props.store.getState();
    let visibleTodos = getVisibleTodos(todoList, visibilityFilter);
    return (
      <TodoList
        todoList={visibleTodos}
        todoClickHandler={id => {
          return () => {
            this.props.store.dispatch({ type: "TOGGLE_TODO", id: id });
          };
        }}
      />
    );
  }
}

export default VisibleTodoList;
