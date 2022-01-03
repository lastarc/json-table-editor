import { FDATA } from "../index";
import RowEditModal from "../components/RowEditModal";

export default function editRowData(rowID: number) {
  RowEditModal(FDATA, rowID);
}