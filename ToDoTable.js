import TableRowItem from "./TableRowItem";
import React from "react";

function ToDoTable(props) {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col"> Description</th>
          <th scope="col"> Assigned to</th>
        </tr>
      </thead>
      <tbody>
        {props.toDos.map((todo) => (
          <TableRowItem
            // key={todo.rowNumber} sa ovim si rekao reactu da je svaki red za sebe nesto kao ID
            //odvaja ih u tabeli
            key={todo.rowNumber}
            rowNumber={todo.rowNumber}
            rowDescription={todo.description}
            rowAssigned={todo.rowAssigned}
            deleteToDos={props.deleteToDos}
          />
        ))}
      </tbody>
    </table>
  );
}

export default ToDoTable;
