

function getComputerChoice () {
   const rpsChoice =['Rock', 'Paper', 'Scissors'] 
   const randomNumber = Math.floor(Math.random() * 3)
   return rpsChoice[randomNumber]
}

function getResult () {
    
    let winner;
    if (playerChoice == computerChoice) {
        winner = tie;
    } else if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
        winner = 'player';
    } else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
        winner = 'player';
    } else if (playerChoice == 'Scissors' && computerChoice == 'Paper') {
        winner = 'player';
    } else {
        winner = 'computer';
    }
    return winner;
}

let result = getResult(playerChoice, computerChoice);
if (result == 'player') {
    playerScore++;
    document.getElementById('player-score').textContent = playerScore;
} else if (result == 'computer') {
    computerScore++;
    document.getElementById('computer-score').textContent = computerScore;
}

function showResult () {

}

function onClickRPS(PlayerChoice) {

}

function playGame () {

}




