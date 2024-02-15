import "./App.css";
import ToDoTable from "./components/ToDoTable";
import NewTodoForm from "./components/NewTodoForm";
import React, { useState } from "react";

function App() {
  const [currentForm, showNewForm] = useState(false);

  const [toDos, newToDoState] = useState([
    { rowNumber: 1, description: "kurac1", rowAssigned: "DzoniBravo1" },
    { rowNumber: 2, description: "kurac2", rowAssigned: "DzoniBravo2" },
    { rowNumber: 3, description: "kurac3", rowAssigned: "DzoniBravo3" },
    { rowNumber: 4, description: "kurac4", rowAssigned: "DzoniBravo4" },
  ]);

  const addTodos = (newDescription, newAssign) => {
    //samo tacni identifikator za listu u tabeli
    let rowNumber = 0;
    //ako ima nesto u listi usranoj
    if (toDos.length > 0) {
      //dodji do zadnjeg i dodaj
      rowNumber = toDos[toDos.length - 1].rowNumber + 1;
    } else {
      //ako nema nista krenuce od 1
      //npr ako budes brisao neke kurceve kompoenenete
      rowNumber = 1;
    }

    const newToDo = {
      rowNumber: rowNumber,
      description: newDescription,
      rowAssigned: newAssign,
    };
    //To novo stanje nebitno je ((qwe)) sto pise samo funkcija koja kaze
    //destcture tu listu sa novim newToDo koji to dodje u tu listu
    //pozvao si newToDoState iz useState posto ce to biti novo stanje a to novo stanje je
    // da si dodao novi objekat u listu toDos
    //i to se sve desava kada dodas na ADD dugme
    newToDoState((qwe) => [...qwe, newToDo]);
  };

  const deleteToDos = (deleteToDoRow) => {
    let filtered = toDos.filter(function (value) {
      return value.rowNumber !== deleteToDoRow;
    });
    newToDoState(filtered);
  };

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your To dos</div>
        <div className="card-body">
          <ToDoTable toDos={toDos} deleteToDos={deleteToDos} />
          <button
            className="btn btn-primary"
            onClick={() => showNewForm(!currentForm)}
          >
            {currentForm ? "Close" : "Add"}
          </button>
          {currentForm && <NewTodoForm addTodos={addTodos} />}
        </div>
      </div>
    </div>
  );
}

export default App;
