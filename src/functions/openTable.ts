import { FDATA, loadTable } from "../index";

function openTable() {
    const openFile: HTMLElement = document.getElementById('openFile');
    // @ts-ignore
    openFile.value = '';
    openFile.addEventListener('change', function (event :Event) {
        const input: EventTarget = event.target;
        let reader: FileReader = new FileReader();
        reader.onload = function () {
            if (typeof reader.result === "string") {
                // @ts-ignore
                FDATA = JSON.parse(reader.result);
                loadTable(FDATA);
            }
        }
        // @ts-ignore
        reader.readAsText(input.files[0]);
    })
    openFile.click();
}

export default openTable;