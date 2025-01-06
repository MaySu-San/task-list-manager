import { addTaskBtnHandler, delAllBtnHandler, doneAllBtnHandler, listGroupHandler, taskInputHandler } from "./handlers.js";
import { addTaskBtn, delAllBtn, doneAllBtn, listGroup, taskInput } from "./selectors.js";

// _____________LISTENER________________________
const listener=()=>{
    addTaskBtn.addEventListener("click", addTaskBtnHandler);
    listGroup.addEventListener("click", listGroupHandler);
    taskInput.addEventListener("keyup",taskInputHandler);
    delAllBtn.addEventListener("click",delAllBtnHandler);
    doneAllBtn.addEventListener("click",doneAllBtnHandler)
}

export default listener;