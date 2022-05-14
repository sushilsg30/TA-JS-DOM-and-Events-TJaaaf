let userRoot = document.querySelector('.user-icons');
let computerRoot = document.querySelector('.computer-icons');
let result = document.querySelector('.result')
let reset = document.querySelector('button');
let score = document.querySelector('.score');



let dataSet = [
    {
        name: "rock",
        beats: "scissors",
    },
    {
        name: "paper",
        beats: "rock",
    },
    {
        name: "scissors",
        beats: "paper",
    },

   
];

let userSelected = {}, computerSelected = {};



function getWinner(user, computer) {
    if(user.name === computer.name) {
        result.innerText = "It's a Tie"
    } else if(user.beats === computer.name) {
        result.innerText = "User Wins";
        score.innerText = Number(score.innerText) + 1;


    } else {
        result.innerText = "Computer Wins";
    }


}

function getRandomNumber(max = 3) {
    return Math.floor(Math.random() * max);
}


function createUserLayout() {
    userRoot.innerHTML = "";
    dataSet.forEach((icon) => {
        let li = document.createElement("li");
        let i = document.createElement("i");
        if(userSelected.name === icon.name) {
            li.classList.add("selected");
        }
        i.className = `fa fa-hand-${icon.name}-o`;

        li.addEventListener("click", () => {
            userSelected = icon;

            computerSelected = dataSet[getRandomNumber()];


            getWinner(userSelected,computerSelected);
            rerender();

        });
        li.append(i);
        userRoot.append(li);
    });
}

createUserLayout();

function createComputerLayout() {
    computerRoot.innerHTML = "";
    dataSet.forEach((icon) => {
        let li = document.createElement("li");
        let i = document.createElement("i");
        if(computerSelected.name === icon.name) {
            li.classList.add("selected");
        }

        i.className = `fa fa-hand-${icon.name}-o`;
        li.append(i);

        computerRoot.append(li);
    });
}

createComputerLayout();


reset.addEventListener("click", () => {
    userSelected = {};
    computerSelected = {};
    createComputerLayout();
    createUserLayout();
});

function rerender() {
    createUserLayout();
    createComputerLayout();
}



