let form = document.querySelector("form");


let userInfo = {};

let errorMessage = {};

function displayError(name) {
    form.elements[name].nextElementSibling.innerText = errorMessage[name]
    form.elements[name].parentElement.classList.add("error");
}


function displaySuccess(name) {
    form.elements[name].nextElementSibling.innerText = "";
    errorMessage[name] = "";
    form.elements[name].parentElement.classList.remove("error");
    form.elements[name].parentElement.classList.add("success");
}

function handleSubmit(event) {
    event.preventDefault();

    let elements = event.target.elements;

    const username = elements.username.value;
    const name = elements.name.value;
    const email = elements.email.value;
    const phone = elements.phone.value;
    const password = elements.password.value;
    const passwordCheck = elements["password-check"].value;
    // console.log(username,name,email,phone,password,passwordCheck);

    if(username.length < 4 ) {
        errorMessage.username = "Username can't be less than 4 characters"
        displayError("username");
    } else {
        displaySuccess("username");
    }

    if(!isNaN(name)) {
        errorMessage.name = "Name can't be numbers";
        displayError("name");
    } else {
        displaySuccess("name");
    }

    if(!email.includes('@')) {
        errorMessage.email = " Email must contain the symbol @";
        displayError("email");
    } else if(email.length < 6 ) {
        errorMessage.email = "Email must be at least 6 characters";
        displayError("email");
    } else {
        displaySuccess("email");
    }

    if(isNaN(phone)) {
        errorMessage.phone = "Phone numbers can only be a number";
        displayError("phone");
    } else if(phone.length < 7) {
        errorMessage.phone = "Length of phone number can't be less than 7";
        displayError("phone");
    } else {
        displaySuccess("phone");
    }

    if(password !== passwordCheck) {
        errorMessage.password = "Password and confirm password must be same.";
        displayError("password");
        displayError("password-check");
    } else {
        displaySuccess("password");
        displaySuccess("password-check");
    }
    
}

form.addEventListener("submit", handleSubmit);


