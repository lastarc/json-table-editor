export default function inputGroup(id: string, label: string, value: string, required: boolean = false) {
  let requiredText: string = `<small class="form-text text-danger">Please do not leave this field empty.</small>`;
  if (!required) requiredText = ``;
  return `
      <div class="form-group">
        <label>${label}</label>
        <textarea id="EditInput_${id}" class="EditInput form-control">${value || ''}</textarea>
        ${requiredText}
      </div>
    `
}
