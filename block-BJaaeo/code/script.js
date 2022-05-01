let total = document.querySelector('.total');
let operations = document.querySelector('.operations');
let numbers = document.querySelector('.numbers');
let isEqualTo = document.querySelector('.equalto');



function add(a,b) {
    a = numbers.innerText;
    b = numbers.innerText;
    let c = total.innerText; 
    c = a+b;
    return c;
};

function handleClick(event) {
  console.log(event.innerText);
}

numbers.addEventListener("click", handleClick);


isEqualTo.addEventListener("click", handleClick)


// isEqualTo.addEventListener("click", function (event) {
//     console.log(event);
// })