import "./App.css";
import { TodoList } from "./Components/TodoList/TodoList.js";
import React, { useState, useEffect } from "react";
import { doRequest, URL } from "./ServiceUtils";

export default function App() {
  const [initialTodos, setInitialTodos] = useState([]);

  const getAllTodos = async () => {
    doRequest("get", URL).then((result) => {
      const todoList = result?.data.data || [];
      todoList.sort((a, b) => (a.id > b.id ? 1 : -1));
      setInitialTodos([...todoList]);
    });
  };

  useEffect(() => {
    getAllTodos();
  }, []);

  return (
    <div className="main">
      <h1>
        <span>My</span>
        <span>todo</span>
        <span>LIST</span>
      </h1>

      {initialTodos.length ? (
        <>
          <TodoList todos={initialTodos}></TodoList>
        </>
      ) : (
        ""
      )}
      <i className="license">
        icons by fontawesome -{" "}
        <a href="https://fontawesome.com/license">license</a>
      </i>
    </div>
  );
}
