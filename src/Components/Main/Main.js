import React, { useState, useEffect } from "react";
import { doRequest, URL } from "../../ServiceUtils.js";
import NewTaskForm from "../NewTaskForm/NewTaskForm.js";
import TodoList from "../TodoList/TodoList.js";
import "../../App.css";

export default function Main() {
  const [todos, setTodos] = useState([]);

  const getAllTodos = async () => {
    doRequest("get", URL).then((result) => {
      const todoList = result?.data.data || [];
      todoList.sort((a, b) => (a.id > b.id ? 1 : -1));
      setTodos([...todoList]);
    });
  };

  const addTodo = async (title) => {
    await doRequest("post", URL, { todo: title });
    const newTodo = { todo: title };
    setTodos([...todos, newTodo]);
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

      <NewTaskForm addTodoHandler={addTodo} />

      <TodoList todos={todos} setTodos={setTodos}></TodoList>

      <i className="license">
        icons by fontawesome -{" "}
        <a href="https://fontawesome.com/license">license</a>
      </i>
    </div>
  );
}
