/*
  Tasks: 
    - Adding a task when click to Add button
      - check if there is a no value alert message You must add a value
      - check if there is a value then create list item and add that list item to ul 
      
    - clear input after adding a new task
    - onClick to circle let task to be checked/unchecked
    - onClick to x icon remove a task
    
    - Add functionality when click enter it will add a new task
    
    - Save tasks in the local storage 

*/

const inputTask = document.getElementById("input-task");
const taskList = document.getElementById("task-list");
const btn = document.querySelector(".btn");

// Add new task to the list
function addTask() {
  let taskValue = inputTask.value;

  if (!taskValue) {
    alert("You must add a value");
  } else {
    let li = document.createElement("li");
    let span = document.createElement("span");

    li.innerHTML = taskValue;
    taskList.appendChild(li);

    span.innerHTML = "&times;";
    li.appendChild(span);
  }

  // clear input after adding a new task
  inputTask.value = "";
  setTask();
}

// Add task when click to Add button
btn.addEventListener("click", addTask);

taskList.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    setTask();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    setTask();
  }
});

// Add functionality when click enter it will add a new task
inputTask.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

// Save list data to local storage
function setTask() {
  localStorage.setItem("lists", taskList.innerHTML);
}

// Load the saved tasks from local storage
function loadTasks() {
  taskList.innerHTML = localStorage.getItem("lists");
}

loadTasks();
