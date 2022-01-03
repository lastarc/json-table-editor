import { FDATA, loadTable } from "../index";


export default function addRow() {
  const rowID: number = FDATA.rows.length;
  const inputs: HTMLCollectionOf<any> = document.getElementsByClassName('EditInput');
  let row: Record<string, string> = {};
  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    let a: any, column: string, value: string;
    a = input.id.slice('EditInput_'.length).split('_');
    column = a[1];
    value = input.value.trim();
    console.log(column, value);
    if (value !== '') {
      row[column] = value;
    }
  }
  console.log(row);
  if (row === {}) return;
  FDATA.rows[rowID] = row;
  loadTable(FDATA);
}
