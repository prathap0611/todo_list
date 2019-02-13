import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import todoAppReducer from "./reducers/index.reducer";
import VisibleTodoList from "./components/container/visibleTodoList";
import AddTodo from "./components/container/addTodo";
import Footer from "./components/presentational/footer";
import "./styles.css";

function App({ store }) {
  return (
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={createStore(todoAppReducer)}>
    <App />
  </Provider>,
  rootElement
);
