// let total = document.querySelector('.total');

// let button = document.querySelectorAll(".button");



// let initialValue = 0;

// total.innerText = initialValue;

// console.log(total.innerText);

// console.dir(total);



let boxOne = document.querySelector('.one');
let boxTwo = document.querySelector('.two');
let btn1 = document.querySelector('.btn-one');
let btn2 = document.querySelector('.btn-two');


btn1.addEventListener('click', function () {
    boxOne.style.backgroundColor = "red";
});

btn2.addEventListener('mousemove', function () {
    boxTwo.style.backgroundColor = "pink";
})
