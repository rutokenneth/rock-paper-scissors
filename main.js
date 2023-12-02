let playerScore = 0;
let computerScore = 0;
let drawedGames = 0;
// First function to get the Computer's choice
function getComputerChoice() {
    const randomNumber = Math.random();

    let computerMove = '';
    if (randomNumber >=0 && randomNumber < 1/3) {
        computerMove = 'Scissors';
    } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
        computerMove = 'Paper';
    } else if (randomNumber >= 2/3 && randomNumber < 1) {
        computerMove = 'Rock';
    } 
    return(computerMove)
}

// Function to play a single round of the game
function playGame(playerSelection) {
    const computerSelection = getComputerChoice();
    getComputerChoice();

    let result = '';
    if (playerSelection === 'Scissors') {
        if (computerSelection === 'Rock') {
            result = 'You lose!';
            computerScore++;
        }else if (computerSelection === 'Paper') {
            result = 'You win!'
            playerScore++;
        }else if (computerSelection === 'Scissors') {
            result = 'It\'s a tie!';
            drawedGames++;
        }
    } else if(playerSelection === 'Paper') {
        if (computerSelection === 'Rock') {
            result = 'You WIn!';
            playerScore++;
        }else if (computerSelection === 'Paper') {
            result = 'It\s a Tie!!';
            drawedGames++;
        }else if (computerSelection === 'Scissors') {
            result = 'You lose!';
            computerScore++;
        }
    } else if(playerSelection === 'Rock') {
        if (computerSelection === 'Rock') {
            result = 'It\s a Tie!';
            drawedGames++;
        }else if (computerSelection === 'Paper') {
            result = 'You Lose!!';
            computerScore++;
        }else if (computerSelection === 'Scissors') {
            result = 'You Win!';
            playerScore++;
        }
    }    
    // alert(`You move was ${playerSelection}. The computer picked ${computerSelection}. ${result}`)
    // alert(`Your score is ${playerScore}. The Machine's Score is ${computerScore}`)
}
// showing results 

const userScore = document.querySelector('.player-score');
const compScore = document.querySelector('.comp-score');
const draws = document.querySelector('.draws');

// userScore.textContent = `Your score is ${playerScore}`;
// compScore.textContent = `The machine's score is ${computerScore}`;
// draws.textContent = `${drawedGames} Draws`;

// Making the buttons interactive

const rockBtn = document.querySelector('#rock');
rockBtn.addEventListener('click', () => {
    playGame("Rock");
});

const paperBtn = document.querySelector('#paper');
paperBtn.addEventListener('click', () => {
    playGame("Paper");
});

const scissorsBtn = document.querySelector('#scissors');
scissorsBtn.addEventListener('click', () => {
    playGame("Scissors");
});
