import React, { useState } from "react";
import TodoTask from "../TodoTask/TodoTask";
import NewTaskForm from "../NewTaskForm/NewTaskForm";
import { doRequest, URL } from "../../ServiceUtils";
import "./styles.css";

export function TodoList({ todos }) {
  const [todoList, setTodoList] = useState(todos);

  const deleteTodo = async (id) => {
    await doRequest("delete", `${URL}/${id}`);
    const index = todoList.findIndex((todo) => todo.id === id);
    todoList.splice(index, 1);
    setTodoList([...todoList]);
  };

  const editTodo = async (id, newTitle) => {
    await doRequest("put", `${URL}/${id}`, { todo: newTitle });
    todoList.filter((todo) => todo.id === id)[0].todo = newTitle;
    setTodoList([...todoList]);
  };

  const addTodo = async (title) => {
    await doRequest("post", URL, { todo: title });
    const newTodo = { todo: title };
    setTodoList([...todoList, newTodo]);
  };

  const checkTask = (id) => {
    const index = todoList.findIndex((task) => task.id === id);
    todoList[index].checked = !todoList[index].checked;
    setTodoList([...todoList]);
  };

  return (
    <div>
      <NewTaskForm addTodoHandler={addTodo} />
      <ul id="task-list">
        {todoList.map((todo) => (
          <TodoTask
            key={todo.id}
            id={todo.id}
            title={todo.todo}
            checked={todo.checked}
            deleteTodoHandler={() => {
              deleteTodo(todo.id);
            }}
            editTodoHandler={(title) => {
              editTodo(todo.id, title);
            }}
            checkTaskHandler={() => {
              checkTask(todo.id);
            }}
          />
        ))}
      </ul>
    </div>
  );
}
