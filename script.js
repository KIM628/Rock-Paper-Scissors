const computerChoiceDisplay = document.getElementById('computer-choice');
const UserChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');

let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id;
  UserChoiceDisplay.innerHTML = userChoice;
  generateComputerChoice();
  getResult();
}));

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1; // best practice
  // const randomNumber = Math.random() * 3 +1
  // (3 is the numbers we want to random with ) +1 becuase it will start from 0
  // . and we want start form 1

  if (randomNumber === 1) {
    computerChoice = 'rock';
  }

  if (randomNumber === 2) {
    computerChoice = 'paper';
  }

  if (randomNumber === 3) {
    computerChoice = 'scissors';
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === userChoice) {
    result = 'DRAW';
  } else if (computerChoice === 'scissors' && userChoice === 'paper') {
    result = 'You Lost';
  } else if (computerChoice === 'paper' && userChoice === 'rock') {
    result = 'You Lost';
  } else if (computerChoice === 'rock' && userChoice === 'scissors') {
    result = 'You Lost';
  } else {
    result = 'You WIN';
  }
  resultDisplay.innerHTML = result;
}