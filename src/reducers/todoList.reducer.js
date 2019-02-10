import todo from "./todo.reducer";

const todoList = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, todo(undefined, action)];
    case "TOGGLE_TODO":
      return state.map(obj => {
        if (obj.id !== action.id) {
          return obj;
        } else {
          return todo(obj, action);
        }
      });
    default:
      return state;
  }
};

export default todoList;
