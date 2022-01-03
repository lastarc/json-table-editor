import editRowData from "../functions/editRowData";

function CellDataMiddleware(column: string, row: string) {
  if (column === 'coauthors' && !row.includes('<br>')) {
    return row.split(', ').join(', <br> ');
  }
  return row || '';
}


function TableBody(fdata: any) {
  const body: HTMLElement = document.createElement('tbody');
  fdata.rows && fdata.rows.forEach(function (row: any, row_id: number) {
    const tr: HTMLElement = document.createElement('tr');
    let td: HTMLElement = document.createElement('td');
    td.innerHTML = `<button class="btn btn-warning text-nowrap" type="button" onclick="functions.editRowData(${row_id})">✎ ${row_id + 1}</button>`;
    tr.appendChild(td);
    fdata.head && fdata.head.forEach(function (column: string) {
      if (column === 'index') return;
      td = document.createElement('td');
      td.innerHTML = CellDataMiddleware(column, row[column] || '');
      tr.appendChild(td);
    })
    body.appendChild(tr);
  });
  return body;
}

export default TableBody;