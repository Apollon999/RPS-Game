// Declaring the variables playerScore and computerScore to make sure the game starts at 0-0.

let playerScore = 0;
let computerScore = 0;

// Computer generates a random choice and returns it, thanks for help https://css-tricks.com/lots-of-ways-to-use-math-random-in-javascript/ and code institute slack forum.

function getComputerChoice () {
   var cChoice =['Rock', 'Paper', 'Scissors'];
   const randomNumber = Math.floor(Math.random() * 3);
   return cChoice[randomNumber];
}

// Decides the winner of the game and updates the score. Thanks to stackoverflow community https://stackoverflow.com/questions/75124589/javascript-rock-paper-scissors-game-issue-with-the-score . 

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

// Displays the outcome of the game including the coices made by player and computer and the winner of the game.

function displayWinner (winner, playerChoice, computerChoice) {
    const winnerDiv = document.getElementsByClassName ('winner') [0];
    const choicesDiv = document.getElementById ('choices');

    // emoji code found at https://unicode.org/emoji/charts/full-emoji-list.html and learn how to use emojis at https://hollybourneville.medium.com/how-to-use-emojis-in-html-b3c671e21b92 

    choicesDiv.innerHTML = ` &#x1f471; : ${playerChoice}<br> &#x1f916; : ${computerChoice}`;

    //thanks to https://plainenglish.io/blog/how-to-replace-text-inside-a-div-element-with-javascript for teaching out how to properly use innerText.
    
    if (winner == 'player') {
        winnerDiv.innerText = 'You Win!';
    } else if (winner == 'computer') {
        winnerDiv.innerText = 'Computer Win!';
    } else {
        winnerDiv.innerText = 'Tie!'
    }
}

// This function sets up the game by adding onclick event listeners to the buttons of the page. 

function onClickRPS(playerChoice) {
    console.log({playerChoice});
    const computerChoice = getComputerChoice();
    console.log({computerChoice})
    const winner = getResult (playerChoice, computerChoice);
    console.log({winner})
    displayWinner(winner, playerChoice, computerChoice)
}

// this function triggers the onClick function with the right value when a button is clicked.

function playGame () {
     const buttons = document.querySelectorAll('.selection');
     console.log(buttons);

     buttons.forEach(button => {
        button.onclick = () => onClickRPS(button.value);
     })
}

playGame();