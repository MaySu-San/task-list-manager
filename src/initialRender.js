import { addList, tasks } from "./list.js";

const render=()=>{
    tasks.forEach((task)=>{
        addList(task);
    });
}

export default render;