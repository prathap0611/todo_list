import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import todoAppReducer from "./reducers/index.reducer";
import VisibleTodoList from "./components/container/visibleTodoList";
import AddTodo from "./components/container/addTodo";
import Footer from "./components/presentational/footer";
import "./styles.css";

function App({ store }) {
  return (
    <div>
      <AddTodo store={store} />
      <VisibleTodoList store={store} />
      <Footer store={store} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App store={createStore(todoAppReducer)} />, rootElement);
