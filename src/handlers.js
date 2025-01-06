import { addList, deleteList, doneList, editList } from "./list.js";
import { listGroup } from "./selectors.js";

//_________________HANDLER_______________________
export const listGroupHandler = (event) => {
    const list = event.target.closest(".list");
  
    // console.log(event.target);
    if (event.target.classList.contains("list-edit-btn")) {
      editList(list.id);
      // editList(event.target.classList.closest(".list").id)
    }
    if (event.target.classList.contains("list-delete-btn")) {
     deleteList(list.id);
    }
    if (event.target.classList.contains("list-done-check")) {
     doneList(list.id);
    }
  };
  

  
export const addTaskBtnHandler=()=>{
  
    // console.log(taskInput.value.trim() ? true: false);
    if(taskInput.value.trim())
    {
      addList(taskInput.value);
    }else{
      alert("Enter the value")
    }
  }
export const taskInputHandler=(event)=>{
    if(event.key==="Enter"){
      if(taskInput.value.trim())
        {
          addList(taskInput.value);
        }else{
          alert("Enter the value")
        }
    }
  }
export const delAllBtnHandler=()=>{
    if(confirm("Are you sure to delete all lists")){
      const allLists=listGroup.querySelectorAll(".list");
      allLists.forEach((list)=>{
        list.remove();
      });
    }
  }
  export const doneAllBtnHandler=()=>{
    if(confirm("Are you sure to done all lists")){
      const allLists=listGroup.querySelectorAll(".list");
      allLists.forEach((list)=>{
        list.querySelector(".list-done-check").checked=true;
        doneList(list.id);
      });
    }
  }
  