function getComputerChoice() {
    // This is the computer's choice. It will be randomly generated from an array of choices:
    const computerChoices = ["Rock", "Paper", "Scissors"];
    const randomChoice = Math.floor(Math.random() * computerChoices.length);
    return computerChoices[randomChoice];
}
let computerSelection = getComputerChoice();
console.log(computerSelection);
