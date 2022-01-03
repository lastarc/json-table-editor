import { FDATA, loadTable } from "../index";

export default function editTableName() {
  // @ts-ignore
  let name: string = document.getElementById('EditName').value;
  if (name === '') return;
  FDATA.name = name;
  loadTable(FDATA);
}