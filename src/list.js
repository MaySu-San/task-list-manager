import Swal from "sweetalert2";
import { listGroup } from "./selectors.js";
import { v4 as uuidv4 } from 'uuid';

export const tasks=["Learn JS", "Sleep Early", "Meditation"];
export const updateTaskTotal = () => {
  const lists = document.querySelectorAll(".list");
  totalTask.innerText = lists.length;
};
export const updateDoneTaskTotal = () => {
  const doneLists = document.querySelectorAll(".list input:checked");
  doneTask.innerText = doneLists.length;
};
export const createNewList = (currentTask) => {
  const list = listTemplate.content.cloneNode(true);
  // console.log(list);
  list.querySelector(".list").id="list"+uuidv4();
  list.querySelector(".list-task").innerText=currentTask;
  return list;
};

//___________________________ACTIONS(business logic)__________________________________
export const doneList=(listId)=>{
  const currentList=document.querySelector(`#${listId}`);

   // console.log("U done");
   const listDoneCheck = currentList.querySelector(".list-done-check");
   const listTask = currentList.querySelector(".list-task");
   const listEditBtn = currentList.querySelector(".list-edit-btn");
   listTask.classList.toggle("line-through");
   listTask.classList.add("duration-200");
   currentList.classList.toggle("opacity-20");
   currentList.classList.toggle("scale-90");
   if (listDoneCheck.checked) {
     listEditBtn.setAttribute("disabled", true);
   }
   listEditBtn.removeAttribute("disabled");
   updateDoneTaskTotal();

}
export const editList=(listId)=>{
  const currentList=document.querySelector(`#${listId}`);

  // console.log("U edit");
  const listDoneCheck = currentList.querySelector(".list-done-check");
  const listTask = currentList.querySelector(".list-task");
  const listEditBtn = currentList.querySelector(".list-edit-btn");
  listEditBtn.setAttribute("disabled", true);
  listDoneCheck.setAttribute("disabled", true);

  const newTaskInput = document.createElement("input");
  newTaskInput.className = "border font-mono border-blue-950 p-2 text-sm";
  listTask.after(newTaskInput);
  newTaskInput.focus();
  listTask.classList.add("hidden");
  newTaskInput.value = listTask.innerText;

  newTaskInput.addEventListener("blur", () => {
    listEditBtn.removeAttribute("disabled");
    listDoneCheck.removeAttribute("disabled");
    listTask.innerText = newTaskInput.value;
    listTask.classList.remove("hidden");
    newTaskInput.remove();
  });
  newTaskInput.addEventListener("keyup", (event) => {
    if(event.key==="Enter"){
      console.log("U edit");
      listEditBtn.removeAttribute("disabled");
      listDoneCheck.removeAttribute("disabled");
      listTask.innerText = newTaskInput.value;
      listTask.classList.remove("hidden");
      newTaskInput.remove();
    }
    
  });
}

export const deleteList=(listId)=>{
  //  console.log("U delete");
  const currentList=document.querySelector(`#${listId}`);
  //  if (window.confirm("Did you finish the job?")) {
  //   // console.log(currentList);
  // currentList.classList.add("animate__animated","animate__zoomOutDown");
  //   currentList.addEventListener("animationend",()=>{
  //     currentList.remove();
  //   updateDoneTaskTotal();
  //   updateTaskTotal();
  //   })
  // }
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      currentList.classList.add("animate__animated","animate__zoomOutDown");
        currentList.addEventListener("animationend",()=>{
          currentList.remove();
        updateDoneTaskTotal();
        updateTaskTotal();
        })
      Swal.fire({
       
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });
    }
  });
}

//______________application logic________________
export const addList = (text) => {
  listGroup.append(createNewList(text));
  taskInput.value = null;

  // count
  updateTaskTotal();
};

// console.log(delAllBtn.childNodes[2]);
// delAllBtn.childNodes[2].nodeValues="Ha Ha";
