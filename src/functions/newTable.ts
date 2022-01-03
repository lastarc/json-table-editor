import { FDATA, loadTable } from "../index";

function newTable() {
    if (FDATA && (FDATA.name || FDATA.head || FDATA.rows) && !confirm(
          'There might be some data which will be deleted if you create new table.\n' +
          'Are you sure that you want to continue?'
        )) {
        return;
    }
    // @ts-ignore
    FDATA = {
        name: 'My Table',
        head: ['Column 1', 'Column 2'],
        rows: []
    };
    loadTable(FDATA);
}

export default newTable;