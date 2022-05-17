let form = document.querySelector("form");


function handleSubmit(event) {
    event.preventDefault();
    
    event.target.elements.movie.nextElementSibling.innerText = event.target.elements.movie.value;
}




form.addEventListener("submit", handleSubmit);