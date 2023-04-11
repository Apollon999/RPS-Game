let playerScore = 0;
let computerScore = 0;

function getComputerChoice () {
   const rpsChoice =['Rock', 'Paper', 'Scissors'];
   const randomNumber = Math.floor(Math.random() * 3);
   return rpsChoice[randomNumber];
}

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

function showResult () {

}

function onClickRPS(PlayerChoice) {

}

function playGame () {

}




