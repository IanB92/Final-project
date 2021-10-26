import React, { useEffect } from "react";

const TodoList = ({ todoList, removeTodo }) => {
  useEffect(() => {
    document.title = `Things to do: ${todoList.length}`;
  }, [todoList]);
  return (
    <div className="todoContainer">
      <ol className="list-group">
        {todoList.map((todo, index) => {
          return (
            <li
              className="list-group-item list-group-item-action"
              onClick={() => removeTodo(index)}
            >
              {todo}
            </li>
          );
        })}
      </ol>
    </div>
  );
};
export default TodoList;
