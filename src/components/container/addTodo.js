import React from "react";

let nextTodoId = 0;
class AddTodo extends React.Component {
  componentDidMount() {
    this.unsubscriber = this.props.store.subscribe(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    this.unsubscriber();
  }

  render() {
    return (
      <div>
        <input
          type="text"
          ref={node => {
            this.inputEle = node;
          }}
        />
        <button
          onClick={() => {
            this.props.store.dispatch({
              type: "ADD_TODO",
              text: this.inputEle.value,
              id: nextTodoId++
            });
            this.inputEle.value = "";
          }}
        >
          Add Todo
        </button>
      </div>
    );
  }
}

export default AddTodo;
