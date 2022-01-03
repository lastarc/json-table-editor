import { FDATA, loadTable } from "../index";
import log from "./log";

export default function savePromptData(title: string, inputList: any[]) {
  title = title.toLowerCase();
  if (title === 'new name') log(inputList);
}