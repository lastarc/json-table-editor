import './styles/style.scss';

import Table from "./components/Table";

let FDATA: { name: string; head: string[]; rows: any[] };

// Get the table wrapper
const tableWrapper: HTMLElement = document.getElementById('table');

function loadTable(fdata: any) {
  if (!fdata) {
    // @ts-ignore
    fdata = window.functions.FDATA;
  }

  // Clear contents of the wrapper
  tableWrapper.innerHTML = '';
  // Load the table
  tableWrapper.appendChild(Table(fdata));
}

export { FDATA, loadTable };
export * from "./functions";
