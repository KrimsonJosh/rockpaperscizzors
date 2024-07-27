
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