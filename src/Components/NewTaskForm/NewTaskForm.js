import React, { useState } from "react";
import "./styles.css";
import addIcon from "../../img/add-icon-png-2486.png";

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
          <img className="addIcon" src={addIcon} alt="add"></img>
        </button>
      </form>
    </>
  );
}
