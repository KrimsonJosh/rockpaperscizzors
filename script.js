
const possibleChoices = ['rock', 'paper', 'scissors'];


const getComputerChoice = () => {
    const index = Math.floor(Math.random() * possibleChoices.length);
    return possibleChoices[index];
};


const getUserChoice = () => {
    console.log("0. for rock");
    console.log("1. for paper");
    console.log("2. for scissors");

    const userMove = parseInt(prompt("Please enter a value"), 10);
    if (userMove >= 0 && userMove < possibleChoices.length) {
        return possibleChoices[userMove];
    } else {
        console.log("Error: Invalid choice. Please enter 0, 1, or 2.");
        return null;
    }
};

let computerScore = 0;
let humanScore = 0;



function whoWon(pc, user) {
    if (pc === user) {
        console.log("Tie");
    } else if (
        (pc === 'rock' && user === 'scissors') ||
        (pc === 'scissors' && user === 'paper') ||
        (pc === 'paper' && user === 'rock')
    ) {
        console.log("Computer won");
        computerScore++;
    } else {
        console.log("User won");
        humanScore++;
    }
}