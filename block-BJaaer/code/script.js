let form = document.querySelector('form');
// let inputName = document.querySelector('#name');
// let inputEmail = document.querySelector('#email')
// let selectGender = document.querySelector('#gender');

let userInfo = {};

function handleSubmit(event) {
    event.preventDefault();
    // userInfo.name = form.elements.name;
    // userInfo.email = form.elements.email;
    // userInfo.movie = form.elements.choice;

    userInfo.name = form.elements.text.value;
    userInfo.email = form.elements.email.value;
    userInfo.movies = form.elements.movies.value;
    userInfo.color = form.elements.color.value;
    userInfo.range = form.elements.range.value;
    userInfo.drone = form.elements.drone;
    userInfo.terms = form.elements.terms.checked;
    console.log(userInfo);
    console.dir(form);
}

form.addEventListener("submit",handleSubmit);


