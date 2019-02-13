import React from "react";
import { connect } from "react-redux";

let nextTodoId = 0;
const AddTodo = ({ dispatch }) => {
  let inputEle;
  return (
    <div>
      <input
        type="text"
        ref={node => {
          inputEle = node;
        }}
      />
      <button
        onClick={() => {
          dispatch({
            type: "ADD_TODO",
            text: inputEle.value,
            id: nextTodoId++
          });
          inputEle.value = "";
        }}
      >
        Add Todo
      </button>
    </div>
  );
};

export default connect()(AddTodo);
