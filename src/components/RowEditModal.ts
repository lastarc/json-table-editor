import inputGroup from "./_inputGroup";

function RowEditModal(fdata: any, rowID: number) {
  let inputGroups: any = ``;
  fdata.head.forEach(function (column: string) {
    if (column === 'index') return;
    inputGroups += inputGroup(`${rowID}_${column}`, column, fdata.rows[rowID][column]);
  });
  const modal_raw: string = `
  <div class="modal fade show" role="dialog" tabindex="-1" style="display: block;">
    <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Edit row #${rowID + 1}</h4>
          <button type="button" class="close" onclick="document.getElementById('rowEditModal').remove()" aria-label="Close"><span aria-hidden="true">×</span></button>
        </div>
        <div class="modal-body">
          <form action="javascript:void(0);">
            ${inputGroups}
          </form>
        </div>
        <div class="modal-footer justify-content-between">
          <div>
            <button class="btn btn-light" type="button" onclick="document.getElementById('rowEditModal').remove()">Close</button>
          </div>
          <div>
            <button class="btn btn-danger bg-danger" type="button" onclick="functions.deleteRowData(${rowID});document.getElementById('rowEditModal').remove()">Delete</button>
            <button class="btn btn-primary" type="button" style="margin-left: 20px;" onclick="functions.saveRowData();document.getElementById('rowEditModal').remove()">Save</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="modal-backdrop fade show"></div>
  `;
  const modalWrapper = document.createElement('div');
  modalWrapper.id = 'rowEditModal';
  modalWrapper.innerHTML = modal_raw;
  const existing = document.getElementById('rowEditModal');
  if (existing) existing.remove();
  document.body.appendChild(modalWrapper);
}

export default RowEditModal;