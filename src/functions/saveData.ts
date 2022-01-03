import { FDATA } from "../index";

export default function saveData() {
  confirm('Please confirm that you want to save JSON file.') && downloadJSONFile(FDATA);
}

function downloadJSONFile(JSONData: any) {
  let JSONFile: string = null,
    makeJSONFile = function (json: BlobPart) {
      const data = new Blob([json], {type: 'application/json'});
      if (JSONFile !== null) {
        window.URL.revokeObjectURL(JSONFile);
      }
      JSONFile = window.URL.createObjectURL(data);
      return JSONFile;
    };

  const downloadAnchor = document.createElement('a');

  downloadAnchor.addEventListener('click', function () {
    const link = downloadAnchor;
    link.href = makeJSONFile(JSON.stringify(JSONData, null, 2));
    link.style.display = 'none';
    link.setAttribute('download', JSONData['name'] + '.json')
  }, false);

  downloadAnchor.click();
}
