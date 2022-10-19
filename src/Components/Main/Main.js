import React, { useState, useEffect } from "react";
import { doRequest, URL } from "../../ServiceUtils.js";
import { useNavigate } from "react-router-dom";
import NewTaskForm from "../NewTaskForm/NewTaskForm.js";
import TodoList from "../TodoList/TodoList.js";
import "../../App.css";

export default function Main() {
  const [todos, setTodos] = useState([]);
  let navigate = useNavigate();
  const token = localStorage.getItem("token");

  const getAllTodos = async () => {
    doRequest("get", URL).then((result) => {
      const todoList = result?.data.data || [];
      todoList.sort((a, b) => (a.id > b.id ? 1 : -1));
      setTodos([...todoList]);
    });
  };

  const addTodo = async (title) => {
    const response = await doRequest("post", URL, { todo: title });
    const id = response.data.data.id;
    const newTodo = { todo: title, id };
    setTodos([...todos, newTodo]);
  };

  const logOut = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  useEffect(() => {
    getAllTodos();
  }, []);

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
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

      <button
        onClick={() => {
          logOut();
        }}
        className="inputLogin"
        type="submit"
      >
        Logout
      </button>

      <i className="license">
        icons by fontawesome -{" "}
        <a href="https://fontawesome.com/license">license</a>
      </i>
    </div>
  );
}
