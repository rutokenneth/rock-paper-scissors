function getComputerChoice() {
    // This is the computer's choice. It will be randomly generated from an array of choices:
    const computerChoices = ["Rock", "Paper", "Scissors"];
    const randomChoice = Math.floor(Math.random() * computerChoices.length);
    return computerChoices[randomChoice];
}
let computerSelection = getComputerChoice();
console.log(computerSelection)
// The play function

function play(playerSelection, computerSelection) {
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
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

let round1 = play("rock", computerSelection)
console.log(round1);
