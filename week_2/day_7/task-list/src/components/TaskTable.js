import React from "react";

export default function TaskTable(props) {
  return (
    <div>
      <hr />
      <table className="table">
        <thead>
          <tr className="text-center">
            <th scope="col">Task</th>
            <th scope="col">Complete</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody id="table-body">
          {props.tasks.map((task) => {
            return (
              <tr key={task.description}>
                <td>{task.description}</td>
                <td>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  ></input>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick = {() => props.onTaskDelete(task)}
                  ></button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
