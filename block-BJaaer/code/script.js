let form = document.querySelector('form');
let modal = document.querySelector('.modal_overlay');
let modalInfo = document.querySelector('.modal_info')

let userInfo = {};

function handleSubmit(event) {
    event.preventDefault();
    let elements = event.target.elements;
    userInfo.name = elements.name.value;
    userInfo.email = elements.email.value;
    userInfo.choice = elements.choice.value;
    userInfo.color = elements.color.value;
    userInfo.range = elements.range.value;
    userInfo.drone = elements.drone.value;
    userInfo.terms = elements.terms.checked;

    modal.classList.add("open");

    let close = document.querySelector(".modal_close");
    close.addEventListener("click", () => {
        modal.classList.remove("open");
    });

    displayInfo(userInfo);
}

form.addEventListener("submit",handleSubmit);

function displayInfo(data = {}) {
    modalInfo.innerHTML = "";
    let h1 = document.createElement("h1");
    h1.innerText = `Hello ${data.name}`;

    let email = document.createElement("p");
    email.innerText = `Email: ${data.email}`;

    let choice = document.createElement("p");
    choice.innerText = `You Love: ${data.choice}`;

    let color = document.createElement("p");
    color.innerText = `Color: ${data.color}`;

    let range = document.createElement("p");
    range.innerText = `Rating: ${data.range}`;

    let drone = document.createElement("p");
    drone.innerText = `Book Genre: ${data.drone}`;

    let terms = document.createElement("p");
    terms.innerText = `->: ${
        data.terms
        ? "You have accepted the terms and condition"
        : "You have not accepted the terms and condition"
    }`

    modalInfo.append(h1,email,choice,color,range,drone,terms);
}