import React, { useState } from "react";
import "./styles.css";

export default function TodoTask({
  title,
  id,
  checked,
  deleteTodoHandler,
  editTodoHandler,
  checkTaskHandler,
}) {
  const [inputValue, setInputValue] = useState(title);
  const [editMode, setEditMode] = useState(false);

  return (
    <li
      id={id}
      className={`task ${checked ? "checked" : ""} ${
        editMode ? "editMode" : ""
      }`}
      onClick={(e) => {
        if (!editMode && !e.target.classList.contains("bttn")) {
          checkTaskHandler(id);
        }
      }}
    >
      {!editMode ? (
        <>
          <span className="text">{title}</span>
          <button
            className="bttn edit"
            onClick={() => setEditMode(true)}
          ></button>
          <button
            className="bttn delete"
            onClick={() => {
              deleteTodoHandler(id);
            }}
          ></button>
        </>
      ) : (
        <>
          <input
            className="text"
            value={inputValue}
            autoFocus
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            className="bttn confirm"
            onClick={() => {
              editTodoHandler(id, inputValue);
              setEditMode(false);
            }}
          ></button>
          <button
            className="bttn abort"
            onClick={() => setEditMode(false)}
          ></button>
        </>
      )}
    </li>
  );
}
