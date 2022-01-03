import TableHead from "./TableHead";
import TableBody from "./TableBody";

function Table(fdata: any) {
  const table = document.createElement('table');
  table.classList.add('table', 'table-striped', 'table-hover', 'table-bordered')
  table.appendChild(TableHead(fdata));
  table.appendChild(TableBody(fdata));
  return table;
}

export default Table;