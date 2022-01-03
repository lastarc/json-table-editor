function TableHead(fdata: any) {
  const head: HTMLElement = document.createElement('thead');
  head.innerHTML = `
    <tr>
      <th colspan="100" style="text-align: center">
        <button class="btn btn-warning text-nowrap mx-3" type="button" onclick="functions.editTableName()">
          ✎
        </button>
        ${fdata.name}
      </th>
    </tr>`;
  const columnsWrapper: HTMLElement = document.createElement('tr')
  const hashtag: HTMLElement = document.createElement('th');
  hashtag.textContent = '#';
  columnsWrapper.appendChild(hashtag);
  fdata.head && fdata.head.forEach(function (column: string, i: number) {
    if (column === 'index') return;
    let th: HTMLElement = document.createElement('th');
    th.textContent = column;
    columnsWrapper.appendChild(th);
  });
  head.appendChild(columnsWrapper);
  return head;
}

export default TableHead;