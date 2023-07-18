import React, { useState } from "react";
import { Task } from "../models/task";

export default function TaskForm(props) {
  let [description, setDescription] = useState("");

  function onTaskFormSubmit(e) {
    e.preventDefault();

    if (!isValid()) {
      return;
    }

    let task = new Task(description);
    props.onTaskCreated(task);

    clearInputs();
  }

  function isValid() {
    return description !== "";
  }

  function clearInputs(){
    setDescription('');
  }

  return (
    <div>
      <h1>Task List</h1>
      <hr />
      <p>Our firebase task list</p>
      <div>
        <form id="form" onSubmit={onTaskFormSubmit}>
          <input
            id="task"
            type="text"
            className="form-control"
            placeholder="Task"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></input>
          <button
            id="add-button"
            className="btn btn-outline-secondary"
            type="submit"
          >
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
}
