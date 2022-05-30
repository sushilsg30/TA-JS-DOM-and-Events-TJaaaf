// Card data
const cardsArray = [
    {
      name: 'banana',
      img: 'img/banana.png',
    },
    {
      name: 'bomb',
      img: 'img/bomb.png',
    },
    {
      name: 'box',
      img: 'img/box.png',
    },
    {
      name: 'super-mario',
      img: 'img/super-mario.png',
    },
    {
      name: 'carnivorous-plant',
      img: 'img/carnivorous-plant.png',
    },
    {
      name: 'flag',
      img: 'img/flag.png',
    },
    {
      name: 'shell',
      img: 'img/shell.png',
    },
    {
      name: 'star',
      img: 'img/star.png',
    },
    {
      name: 'tiger',
      img: 'img/tiger.png',
    },
    {
      name: 'mushroom',
      img: 'img/mushroom.png',
    },
    {
      name: 'peac',
      img: 'img/peach.png',
    },
    {
      name: 'wolf',
      img: 'img/wolf.png',
    },
  ]





  // Grab the div with an id of root
const game = document.getElementById('game')

// Create a section with a class of grid
const grid = document.createElement('section')
grid.setAttribute('class', 'grid')

// Append the grid section to the game div
game.appendChild(grid)


// For each item in the cardsArray array...
// cardsArray.forEach((item) => {
//     // Create a div
//     const card = document.createElement('div')
  
//     // Apply a card class to that div
//     card.classList.add('card')
  
//     // Set the data-name attribute of the div to the cardsArray name
//     card.dataset.name = item.name
  
//     // Apply the background image of the div to the cardsArray image
//     card.style.backgroundImage = `url(${item.img})`
  
//     // Append the div to the grid section
//     grid.appendChild(card)
//   })

  // Duplicate array to create a match for each card
let gameGrid = cardsArray.concat(cardsArray);

// Randomize game grid on each load
gameGrid.sort(() => 0.5 - Math.random())

// For each item in the gameGrid array...
gameGrid.forEach(item => {
      // Create a div
  const card = document.createElement('div')

  // Apply a card class to that div
  card.classList.add('card')

  // Set the data-name attribute of the div to the cardsArray name
  card.dataset.name = item.name

  // Apply the background image of the div to the cardsArray image
  card.style.backgroundImage = `url(${item.img})`

  // Append the div to the grid section
  grid.appendChild(card)
})


// Add event listener to grid
grid.addEventListener('click', function (event) {
    
    // The event target is our clicked item
    let clicked = event.target;


    let firstGuess = ''
    let secondGuess = ''
    let count = 0

    if (count < 2) {
        count++
        clicked.classList.add('selected')
      }
 
  })



 // Add match CSS
const match = () => {
    var selected = document.querySelectorAll('.selected')
    selected.forEach((card) => {
      card.classList.add('match')
    })
  }

  grid.addEventListener('click', function (event) {
    //...
    if (count < 2) {
      count++
      if (count === 1) {
        // Assign first guess
        firstGuess = clicked.dataset.name
        clicked.classList.add('selected')
      } else {
        // Assign second guess
        secondGuess = clicked.dataset.name
        clicked.classList.add('selected')
      }
      // If both guesses are not empty...
      if (firstGuess !== '' && secondGuess !== '') {
        // and the first guess matches the second match...
        if (firstGuess === secondGuess) {
          // run the match function
          match()
        }
      }
    }
  })