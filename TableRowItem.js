/**
 * React make sure you pass only one element so you can name it where you wanted
 * For example props ( stands for property really doeasnet matter)
 * props.rowNumber ,props.rowDescription,props.rowAssigned
 * ove 3 si tako nazvao kada si dohvatio iz toDo liste i prosledio mu u ovu komponentu
 * a u ovoj komponenti si samo izvukao to iz liste i nakacio ga nista vise
 */

function TableRowItem(props) {
  return (
    <tr onClick={() => props.deleteToDos(props.rowNumber)}>
      <th scope="row">{props.rowNumber}</th>
      <td>{props.rowDescription}</td>
      <td>{props.rowAssigned} </td>
    </tr>
  );
}

export default TableRowItem;
