import inputGroup from "./_inputGroup";

function AddRowModal(fdata: any) {
  const rowID: number = fdata.rows.length;
  let inputGroups: any = ``;
  fdata.head.forEach(function (column: string) {
    if (column === 'index') return;
    inputGroups += inputGroup(`${rowID}_${column}`, column, '');
  });
  const modal_raw: string = `
  <div class="modal fade show" role="dialog" tabindex="-1" style="display: block;">
    <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Add row #${rowID + 1}</h4>
          <button type="button" class="close" onclick="document.getElementById('addRowModal').remove()" aria-label="Close"><span aria-hidden="true">×</span></button>
        </div>
        <div class="modal-body">
          <form action="javascript:void(0);">
            ${inputGroups}
          </form>
        </div>
        <div class="modal-footer justify-content-between">
          <div>
            <button class="btn btn-light" type="button" onclick="document.getElementById('addRowModal').remove()">Close</button>
          </div>
          <div>
            <button class="btn btn-primary" type="button" style="margin-left: 20px;" onclick="functions.addRowData();document.getElementById('addRowModal').remove()">Add</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="modal-backdrop fade show"></div>
  `;
  const modalWrapper = document.createElement('div');
  modalWrapper.id = 'addRowModal';
  modalWrapper.innerHTML = modal_raw;
  const existing = document.getElementById('addRowModal');
  if (existing) existing.remove();
  document.body.appendChild(modalWrapper);
}

export default AddRowModal;