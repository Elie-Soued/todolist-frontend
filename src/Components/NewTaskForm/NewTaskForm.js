import React, { useState } from "react";
import "./styles.css";

export default function NewTaskForm({ addTodoHandler }) {
  let [newTaskTitle, setNewTaskTitle] = useState("");

  return (
    <>
      <form
        className="inputArea inputAreaContainer"
        onSubmit={(e) => {
          e.preventDefault();

          if (`${newTaskTitle}`.replace(/\s/g, "") === "") {
            alert("Please enter a task");
          } else {
            addTodoHandler(newTaskTitle);
            setNewTaskTitle("");
          }
        }}
      >
        <input
          type="text"
          value={newTaskTitle}
          maxlength="40"
          onChange={(e) => setNewTaskTitle(e.target.value)}
          placeholder="Things to do"
        />

        <button type="submit" disabled={newTaskTitle === ""}>
          Add
        </button>
      </form>
    </>
  );
}
