function EditNameModal(fdata: any) {
  const modal_raw: string = `
  <div class="modal fade show" role="dialog" tabindex="-1" style="display: block;">
    <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Edit Name</h4><button type="button" class="close" onclick="document.getElementById('editNameModal').remove()" aria-label="Close"><span aria-hidden="true">×</span></button></div>
        <div class="modal-body">
          <form action="javascript:void(0);">
            <div class="form-group">
              <label>New name</label>
              <textarea id="EditName" class="EditInput form-control">${fdata.name || ''}</textarea>
              <small class="form-text text-danger">Please do not leave this field empty.</small>
            </div>
          </form>
        </div>
        <div class="modal-footer justify-content-between">
          <div>
            <button class="btn btn-light" type="button" onclick="document.getElementById('editNameModal').remove()">Close</button>
          </div>
          <div>
            <button class="btn btn-primary" type="button" style="margin-left: 20px;" onclick="functions.saveTableName();document.getElementById('editNameModal').remove()">Save</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="modal-backdrop fade show"></div>
  `;
  const modalWrapper = document.createElement('div');
  modalWrapper.id = 'editNameModal';
  modalWrapper.innerHTML = modal_raw;
  const existing = document.getElementById('editNameModal');
  if (existing) existing.remove();
  document.body.appendChild(modalWrapper);
}

export default EditNameModal;
