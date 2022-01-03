import { FDATA, loadTable } from "../index";

export default function deleteRowData(rowID: any) {
  if (!confirm(`Are you sure that you want to delete row #${rowID + 1}?`)) return;
  FDATA.rows.splice(rowID, 1);
  loadTable(FDATA);
}