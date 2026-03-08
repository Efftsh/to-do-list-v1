"use strict";
const addButton = document.querySelector(".add-task");
const taskInput = document.getElementById("task-input");
const ul = document.getElementById("list");

// function
const addTask = function () {
  const text = taskInput.value;

  if (text === " ") {
    alert("Enter a task to add into list");
    return;
  } else {
    const li = document.createElement("li");
    li.textContent = text;
    ul.appendChild(li);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    li.appendChild(deleteButton);
    deleteButton.addEventListener("click", function () {
      li.remove();
    });

    const markAsRead = document.createElement("button");
    markAsRead.textContent = "Mark As Read";
    markAsRead.addEventListener("click", function () {
      li.classList.toggle("completed");
    });
    li.appendChild(markAsRead);

    taskInput.value = " ";
    taskInput.placeholder = "Enter task";
  }
};
``
addButton.addEventListener("click", addTask);
