import { addList, deleteList, doneList, editList } from "./list.js";
import { listGroup } from "./selectors.js";
import Swal from "sweetalert2";

export const listGroupHandler = (event) => {
  if (event.target.classList.contains("list-del-btn")) {
    deleteList(event.target.closest(".list").id);
  }
  if (event.target.classList.contains("list-edit-btn")) {
    editList(event.target.closest(".list").id);
  }

  if (event.target.classList.contains("list-done-check")) {
    doneList(event.target.closest(".list").id);
  }
};

export const addTaskBtnHandler = () => {
  if (taskInput.value.trim()) {
    addList(taskInput.value);
  }
};

export const taskInputHandler = (event) => {
  if (event.key === "Enter") {
    if (taskInput.value.trim()) {
      addList(taskInput.value);
    }
  }
};

export const deleteAllHandler = () => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      const allList = listGroup.querySelectorAll(".list");
      allList.forEach((list) => list.remove());
    }
  });
};

export const doneAllHandler = () => {
  Swal.fire({
    title: "Are you sure to done all?",
    icon: "question",
    showCancelButton: true,
    confirmButtonText: "Yes, done all!",
  }).then((result) => {
    if (result.isConfirmed) {
      const allList = listGroup.querySelectorAll(".list");
      // console.log(allList);
      allList.forEach((list) => {
        list.querySelector(".list-done-check").checked = true;
        doneList(list.id);
      });
    }
  });
};
