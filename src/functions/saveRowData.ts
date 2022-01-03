import { FDATA, loadTable } from "../index";


export default function saveRowData() {
  const inputs: HTMLCollectionOf<any> = document.getElementsByClassName('EditInput');
  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    let a: any, rowID: number, column: string, value: string;
    a = input.id.slice('EditInput_'.length).split('_');
    rowID = a[0];
    column = a[1];
    value = input.value.trim();
    // @ts-ignore
    FDATA.rows[rowID][column] = value;
  }
  loadTable(FDATA);
}