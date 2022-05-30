let input = document.querySelector(`input[type= "text"]`);
let rootElm = document.querySelector(".rootElm");



let allMovie =[];


function handleSubmit(event) {
   if(event.keyCode === 13) {
       allMovie.push({
           name:event.target.value,
           watched: false,
       });
       event.target.value = "";
       createMovieUI();
   }
}

input.addEventListener("keyup", handleSubmit);

function createMovieUI() {
    rootElm.innerHTML = "";
    allMovie.forEach((movie, i) => {
        let li = document.createElement("li");
        li.classList.add("checkbox-item");
        let input = document.createElement("input");
        input.classList.add("styled-checkbox");
        input.type = "checkbox";
        input.id = i;
        input.checked = movie.watched;
        
        input.addEventListener('change', (event) => {
            let id = event.target.id;

            allMovie[id].watched = !allMovie[id].watched;
        });
        let label = document.createElement("label");
        label.for = "i";
        label.innerText = movie.name;
        let span = document.createElement("span");
        span.innerText = "X";
        span.setAttribute("data-id",i);
        span.addEventListener("click", (event) => {
            // event.target.parentElement.remove();
            let id = event.target.dataset.id;
            allMovie.splice(id,1);
            createMovieUI();
        })

        li.append(label,input,span)
        rootElm.append(li);
    });

}
createMovieUI();