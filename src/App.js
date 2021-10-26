import "./styles.css";
import React from "react-dom";
import { useState } from "react";
import Form from "./form";
import List from "./list";
import { Route, Redirect } from "react-router-dom";
import Home from "./Home";

export default function App() {
  const [todoList, setTodoList] = useState([]);

  const removeTodo = (index) => {
    setTodoList(todoList.filter((todo, i) => i !== index));
  };

  const validateForm = (errand) => {
    if (errand) {
      setTodoList([...todoList, errand]);
    }
    console.log("app - validationform - errand", errand);
  };

  return (
    <div className="App">
      <Route exact path="/" component={Home} />

      <Route exact path="/form">
        <Form validateForm={validateForm} />
      </Route>
      <Route exact path="/form">
        <List todoList={todoList} removeTodo={removeTodo} />
      </Route>
      <Redirect to="/" />
    </div>
  );
}
