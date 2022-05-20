let inputText = document.querySelector(`input[type= "text"]`);
let rootElm = document.querySelector("ul");


let all = document.querySelector(".all");
let active = document.querySelector(".active");
let completed = document.querySelector(".completed");
let clear = document.querySelector(".clear");

let activeButton = all;

let allTodos = localStorage.getItem("allTodos") 
? JSON.parse(localStorage.getItem("allTodos"))
:  [];

function handleInput(event) {
    let value = event.target.value;
    if(event.keyCode === 13 && value !== "") {
        let todo = {
            name: value,
            isDone: false,
        };
        allTodos.push(todo);
        event.target.value = "";
        createUI();
        localStorage.setItem("allTodos",JSON.stringify(allTodos));
    }
}


function createUI(data = allTodos) {
    rootElm.innerHTML = "";
    data.forEach((todo,index) => {
        let li = document.createElement("li");
        let input = document.createElement("input");
        input.type = "checkbox";
        input.addEventListener("input",handleToggle);
        input.setAttribute("data-id",index);
        input.checked = todo.isDone;
        
        let p = document.createElement("p");
        p.innerText=todo.name;

        let span = document.createElement("span");
        span.innerText = "X";
        span.setAttribute("data-id",index)
        span.addEventListener("click",handleDelete);

        // let span1 = document.createElement("span");
        // span1.innerText = "All"
        // span1.setAttribute("data-all");
        // span1.addEventListener("click",allTasks)
        // // let span2 = document.createElement("span");
        // // let span3 = document.createElement("span");

        li.append(input,p,span);
        rootElm.append(li);
    })
}


function allTasks(event) {
console.log(event.target)
}


function handleDelete(event) {
    let id = event.target.dataset.id;
    allTodos.splice(id,1);
    createUI();
    localStorage.setItem("allTodos",JSON.stringify(allTodos));
}

function handleToggle(event) {
    let id = event.target.dataset.id;
    allTodos[id].isDone = !allTodos[id].isDone;
    createUI();
    localStorage.setItem("allTodos",JSON.stringify(allTodos));
}

createUI();



clear.addEventListener("click", () => {
    allTodos = allTodos.filter((todo) => !todo.isDone);
    createUI();
    localStorage.setItem("allTodos",JSON.stringify(allTodos));
    activeButton = clear;
    updateActiveButton();
});

active.addEventListener("click", () => {
    let notCompleted = allTodos.filter((todo) => !todo.isDone);
    createUI(notCompleted);
    activeButton = active;
    updateActiveButton();

});

completed.addEventListener("click", () => {
    let CompletedTodos = allTodos.filter((todo) => todo.isDone);
    createUI(CompletedTodos);
    activeButton = completed;
    updateActiveButton();

});

all.addEventListener("click", () => {
    createUI();
    activeButton = all;
    updateActiveButton();

});


function updateActiveButton(btn = activeButton) {
    all.classList.remove("selected");
    active.classList.remove("selected");
    completed.classList.remove("selected");

    if(btn === all) {
        all.classList.add("selected");
    }

    if(btn === active) {
        active.classList.add("selected")
    }
    if(btn === completed) {
        completed.classList.add("selected")
    }

}



activeButton.classList.add("selected");

inputText.addEventListener("keyup",handleInput);