import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function Form({ validateForm }) {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    if (!todo) {
      e.preventDefault();
      return alert("Add errand");
    }
    e.preventDefault();
    validateForm(todo);
    setTodo("");
  };

  const handleChange = (event) => {
    console.log("handleChange", event.target.value, event.target.name);
    setTodo(event.target.value);
  };

  return (
    <>
      <Link to="/">
        <button className="home">
          <i className="fas fa-plus-square ">Home</i>
        </button>
      </Link>

      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          className="todoInput"
          placeholder="Get to it.."
          value={todo}
        ></input>
        <button className="todoButton" type="submit">
          <i className="fas fa-plus-square">To Do</i>
        </button>
      </form>
    </>
  );
}

export default Form;
