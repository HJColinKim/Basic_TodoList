'use strict';

const addButton = document.getElementById("addButton");
const inputField = document.getElementById("todoInput");
let arrayOfTasks = [];
const taskBox = document.querySelector('.task-box');
let score = 0;


//Music handler 
let audio = document.getElementById("music");

function musicControl(){
    if (audio.paused){
        audio.play();
    } else {
        audio.pause();
    }
}

    

//Error popup 
function toastPopup(){
    const toast = document.getElementById('toast');
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);


}

function createNewButton(){
    let newButton = document.createElement("button");

    newButton.id = `button-${arrayOfTasks.length}`;
    newButton.textContent = "完了"
    newButton.classList.add('btn-styling'); 



    taskBox.appendChild(newButton);

    newButton.addEventListener("click", function(){
        let taskId = newButton.id.replace("button-", "task-");

        document.getElementById(newButton.id).remove();
        document.getElementById(taskId).remove();

        arrayOfTasks.pop(); //Removes task from array. 
        score++; 

        document.querySelector(".scoreboard").textContent = `Streaks: ${score} ${score>10 ? "🔥" : ""}`;
    })
    
}

function createTask(){
    const newTask = inputField.value;
    arrayOfTasks.push(newTask); 

    inputField.value = "";
    let newElement = document.createElement("p");


    newElement.id = `task-${arrayOfTasks.length}`;
    newElement.textContent = newTask;

    if (newTask.trim() === ""){
        toastPopup();
        return;
    }

    taskBox.appendChild(newElement);

    createNewButton();
}

addButton.addEventListener("click", createTask);
//Both clicking and pressing enter will work 
document.addEventListener("keypress", function(event){
    if (event.key ==="Enter"){
        createTask();
    }
})





