function ColumnsEditModal(fdata: any) {
  fdata.head.forEach(function (item: string, i: number) {
    if (item === 'index') {
      fdata.head.splice(i, 1);
    }
  })

  const modal_raw: string = `
  <div class="modal fade show" role="dialog" tabindex="-1" style="display: block;">
          
    <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Edit Columns</h4><button type="button" class="close" onclick="document.getElementById('columnsEditModal').remove()" aria-label="Close"><span aria-hidden="true">×</span></button></div>
        <div class="modal-body">
          <p class="text-warning"><strong>Warning:&nbsp;</strong>Removing columns may lead to data loss. Create backup file and be careful if you do not know how this works.</p>
          <form action="javascript:void(0);">
            <div class="form-group"><label>Columns separated by comma:</label>
              <div class="input-group">
                <div class="input-group-prepend"></div>
                <input id="columnsEditModal_input" class="form-control" type="text" placeholder="column1, column2, column3..."
                  value="${fdata.head.join(', ')}">
                <div class="input-group-append"></div>
              </div>
              <small class="form-text text-danger">Please do not leave this field empty.</small>
            </div>
          </form>
        </div>
        <div class="modal-footer justify-content-between">
          <div>
            <button class="btn btn-light" type="button" onclick="document.getElementById('columnsEditModal').remove()">Close</button>
          </div>
          <div>
            <button class="btn btn-primary" type="button" style="margin-left: 20px;" onclick="functions.saveColumnsData(document.getElementById('columnsEditModal_input').value);document.getElementById('columnsEditModal').remove()">Save</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="modal-backdrop fade show"></div>
  `;
  const modalWrapper = document.createElement('div');
  modalWrapper.id = 'columnsEditModal';
  modalWrapper.innerHTML = modal_raw;
  const existing = document.getElementById('columnsEditModal');
  if (existing) existing.remove();
  document.body.appendChild(modalWrapper);
}

export default ColumnsEditModal;
