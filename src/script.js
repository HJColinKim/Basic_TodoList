'use strict';

const addButton = document.getElementById("addButton");
const inputField = document.getElementById("todoInput");
let arrayOfTasks = [];
const taskBox = document.querySelector('.task-box');

function toastPopup(){
    const toast = document.getElementById('toast');
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);


}

function createNewButton(){
    const newButton = document.createElement("button");

    newButton.textContent = "Completed Task "
    newButton.classList.add('btn-styling')  

    taskBox.appendChild(newButton);
    
}

addButton.addEventListener("click", function(){
    const newTask = inputField.value;
    arrayOfTasks += newTask; 

    inputField.value = "";
    let newElement = document.createElement("p");
    
    newElement.textContent = newTask;

    if (newTask.trim() === ""){
        toastPopup();
        return;
    }

    taskBox.appendChild(newElement);

    createNewButton();

});
