let form = document.querySelector("form");


let usernameError = "";

function handleSubmit(event) {
    event.preventDefault();
    console.dir(event.target);

    let usernameElm = event.target.elements.username;

    if (usernameElm.value === "") {
        usernameError = "Can't be empty!";
    }
    usernameElm.nextElementSibling.innerText = usernameError;
    
}

form.addEventListener("submit", handleSubmit);



// Rules for form validation:

// Username can't be less than 4 characters
// Name can't be numbers
// Email must contain the symbol @
// Email must be at least 6 characters
// Phone numbers can only be a number
// Length of phone number can't be less than 7
// Password and confirm password must be same.
// Messages for error:

// __ can't be less than __ characters (replace __ with field name)
// You can't use number in the name field
// Not a valid email
// Phone number can only contain numbers
// Once the form is valid it should alert User Added Successfully!


