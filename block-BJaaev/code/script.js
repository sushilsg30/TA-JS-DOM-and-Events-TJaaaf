let inputText = document.querySelector(`input[type= "text"]`);
let rootElm = document.querySelector("ul");


let allTodos = [];

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
    }
}


function createUI() {
    rootElm.innerHTML = "";
    allTodos.forEach((todo,index) => {
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
}

function handleToggle(event) {
    let id = event.target.dataset.id;
    allTodos[id].isDone = !allTodos[id].isDone;
    createUI();
}

createUI();

inputText.addEventListener("keyup",handleInput);