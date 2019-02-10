import { combineReducers } from "redux";
import todoList from "./todoList.reducer";
import visibilityFilter from "./visibilityFilter.reducer";

const todoApp = combineReducers({
  todoList,
  visibilityFilter
});

export default todoApp;
