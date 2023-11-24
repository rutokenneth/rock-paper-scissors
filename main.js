// let playerScore = 0;
// let computerScore = 0;
// const computerSelection = getComputerChoice();
// getComputerChoice();
// let playerSelection = getPlayerChoice();


// //Get player selection
// function getPlayerChoice() {
//     let playerSelection = prompt("Do you choose rock, paper or scissors?");
//     return playerSelection.toLowerCase();
// }

// // The play function

// function playRound(playerSelection, computerSelection) {
    
//     let playerSelection1 = playerSelection.toLowerCase();
//     let computerSelection1 = computerSelection.toLowerCase();

//     let result;
//     if (playerSelection1 === computerSelection1) {
//         result = "It is a tie!";
//     } else if (
//         (playerSelection1 === "rock" && computerSelection1 === "scissors") ||
//         (playerSelection1 === "paper" && computerSelection1 === "rock") ||
//         (playerSelection1 === "scissors" && computerSelection1 === "paper")
//     ) {
//         result = `You win! ${playerSelection1} beats ${computerSelection1}`;
//         playerScore++;
//     } else {
//         result = `You lose! ${computerSelection1} beats ${playerSelection1}`;
//         computerScore++;
//     }
//     console.log(`You won ${playerScore} times, the computer won ${computerScore} times`)
//     return {
//         Machine: computerScore,
//         You: playerScore,
//     }
// }

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
console.log(getComputerChoice());
