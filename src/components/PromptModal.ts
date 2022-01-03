import inputGroup from "./_inputGroup";

function PromptModal(fdata: any, title: string = 'Prompt', warning: string = '', inputList: any[]) {
  let inputGroups: any = ``;
  inputList.forEach(function (item: any, i: number) {
    inputGroups += inputGroup(`${item.id}`, item.label, item.value);
  });

  const modal_raw: string = `
  <div class="modal fade show" role="dialog" tabindex="-1" style="display: block;">
    <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">${title}</h4><button type="button" class="close" onclick="document.getElementById('promptModal').remove()" aria-label="Close"><span aria-hidden="true">×</span></button></div>
        <div class="modal-body">
          <p class="text-warning">${warning}</p>
          <form action="javascript:void(0);">
            ${inputGroups}
          </form>
        </div>
        <div class="modal-footer justify-content-between">
          <div>
            <button class="btn btn-light" type="button" onclick="document.getElementById('promptModal').remove()">Close</button>
          </div>
          <div>
            <button class="btn btn-primary" type="button" style="margin-left: 20px;" onclick="functions.savePromptData(${title}, ${inputList});document.getElementById('promptModal').remove()">Save</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="modal-backdrop fade show"></div>
  `;
  const modalWrapper = document.createElement('div');
  modalWrapper.id = 'promptModal';
  modalWrapper.innerHTML = modal_raw;
  const existing = document.getElementById('promptModal');
  if (existing) existing.remove();
  document.body.appendChild(modalWrapper);
}

export default PromptModal;
