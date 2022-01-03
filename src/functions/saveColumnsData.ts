import { FDATA, loadTable } from "../index";

export default function saveColumnsData(newData: any) {
  newData = newData.trim();
  if (newData === '') return;
  FDATA.head = [];
  newData = newData.replace(/\s\s+/g, ' ').split(',');
  newData.forEach(function (item: string, i: number) {
    newData[i] = item.trim();
    if (newData[i] !== '') FDATA.head.push(newData[i]);
  });
  loadTable(FDATA);
}
