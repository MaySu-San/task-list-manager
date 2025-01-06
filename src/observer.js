import { updateDoneTaskTotal } from "./list.js";
import { listGroup } from "./selectors.js";

const observer=()=>{
    // console.log("I am observer");
    const job=()=>{
        // console.log("U changed that");
        updateDoneTaskTotal();
        updateDoneTaskTotal();
    }
    const observerOptions = {
        attributes: true,
        childList: true,
        subtree: true,
      };
    const listGpObserver=new MutationObserver(job);
    listGpObserver.observe(listGroup,observerOptions);
}
export default observer;