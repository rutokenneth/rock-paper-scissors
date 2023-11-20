function getComputerChoice() {
    // This is the computer's choice. It will be randomly generated from an array of choices:
    const computerChoices = ["Rock", "Paper", "Scissors"];
    const randomChoice = Math.floor(Math.random() * computerChoices.length);
    return computerChoices[randomChoice];
}
let computerSelection = getComputerChoice();
//console.log(computerSelection)

let playerScore = 0;
let computerScore = 0;

// The play function

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "It is a tie!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return `You win! ${playerSelection} beats ${computerSelection}`;
        playerScore++;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
        computerScore++;
    }
}

//Get player selection
function getPlayerChoice() {
    let playerSelection = prompt("Do you choose rock, paper or scissors?");
    return playerSelection.toLowerCase();
}
