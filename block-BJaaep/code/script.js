let smallBoxes1 = document.querySelectorAll('.first li');
let smallBoxes2 = document.querySelector  ('.second');



smallBoxes1.forEach((box, index) => {
    box.addEventListener('click', (event) => {
        event.target.innerText = index +1 ;

        setTimeout (() => {
            event.target.innerText = "";
        }, 5000);
    });
});




smallBoxes2.addEventListener("click" , (event) => {
    let text = event.target.dataset.text;
    event.target.innerText = text;
    

    setTimeout (() => {
        event.target.innerText = "";
    }, 5000);

} );



