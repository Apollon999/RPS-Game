// Declaring the variables playerScore and computerScore

let playerScore = 0;
let computerScore = 0;

// Computer generates a random choice and returns it

function getComputerChoice () {
   const rpsChoice =['Rock', 'Paper', 'Scissors'];
   const randomNumber = Math.floor(Math.random() * 3);
   return rpsChoice[randomNumber];
}

// Decides the winner of the game and adds one point to the winner or does nothning in the event of a tie.

function getResult (playerChoice, computerChoice) {
    
    let winner;

    if (playerChoice == computerChoice) {
        winner = 'tie';
    } else if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
        winner = 'player';
    } else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
        winner = 'player';
    } else if (playerChoice == 'Scissors' && computerChoice == 'Paper') {
        winner = 'player';
    } else {
        winner = 'computer';
    }

    if (winner == 'player') {
        playerScore++;
        document.getElementById('player-score').textContent = playerScore;
    } else if (winner == 'computer') {
        computerScore++;
        document.getElementById('computer-score').textContent = computerScore;
}
    return winner;
}

function displayWinner (winner, playerChoice, computerChoice) {

    const choiceDiv = document.getElementsByClassName ('choice') [0];

    if (winner == 'player') {
        choiceDiv.innerText = 'You Win!';
    }
    else if (winner == 'computer') {
        choiceDiv.innerText = 'Computer Win!';
    }
    else {
        choiceDiv.innerText = 'Tie!'
    }
}

function onClickRPS(playerChoice) {
console.log({playerChoice});
const computerChoice = getComputerChoice();
console.log({computerChoice})
const winner = getResult (playerChoice, computerChoice);
console.log({winner})
displayWinner(winner, playerChoice, computerChoice)
}

function playGame () {
     const buttons = document.querySelectorAll('.selection');
     console.log(buttons);

     buttons.forEach(button => {
        button.onclick = () => onClickRPS(button.value);
     })
}

playGame()