import React, { useState } from "react";

function NewTodoForm(props) {
  const [currentDescription, newDescription] = useState("");
  const [currentAssigned, newAssign] = useState("");

  const submitToDoForm = () => {
    if (currentAssigned !== "" && currentDescription !== "") {
      props.addTodos(currentAssigned, currentDescription);
      newDescription("");
      newAssign("");
    }
  };

  return (
    <div className="mt-5 ">
      <form>
        <div className="mb-3 ">
          <label className="form-label">Assigned</label>
          <input
            className="form-control"
            type="text"
            placeholder="Assigned"
            onChange={(event) => newAssign(event.target.value)}
            value={currentAssigned}
          ></input>
        </div>
      </form>
      <div className="mb-3">
        <label className="form-label">Description</label>
        <textarea
          className="form-control"
          rows={3}
          required
          placeholder="Add something here"
          onChange={(event) => newDescription(event.target.value)}
          value={currentDescription}
        ></textarea>
      </div>
      <button
        className="btn btn-primary"
        type="button"
        onClick={submitToDoForm}
      >
        Add ToDo
      </button>
      <button
        className="btn btn-danger mr-5"
        type="button"
        onClick={props.deleteToDos}
      >
        Delete ToDos
      </button>
    </div>
  );
}

export default NewTodoForm;
