let userScore = 0;
let computerScore = 0;

//dom variables are indicated by the underscore 
//caching the dom:
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const lance_img = document.getElementById('lance');
const sword_img = document.getElementById('sword');
const axe_img = document.getElementById('axe');
const restartButton_button = document.getElementById('restart-btn');

function main() {
    lance_img.addEventListener('click', lanceGame = () => playRound('lance', computerPlay));
    sword_img.addEventListener('click', swordGame = () => playRound('sword', computerPlay));
    axe_img.addEventListener('click', axeGame = () => playRound('axe', computerPlay));
}
//The functions have to be named (lanceGame etc), otherwise removing the EventListener later will fail
//You'll need to be able to referene the functions

function computerPlay() {
    const gameOptions = ['lance', 'sword', 'axe'];
    const randomNum = Math.floor(Math.random() * gameOptions.length);
    return gameOptions[randomNum];
}

function playRound(userSelection, computerSelection) {
    computerSelection = computerPlay();    

    if (userSelection == computerSelection) {
        draw(userSelection);
    } else if (
        (userSelection == 'lance' && computerSelection == 'sword') ||
        (userSelection == 'sword' && computerSelection == 'axe') ||
        (userSelection == 'axe' && computerSelection == 'lance')
    ) {
        win(userSelection, computerSelection); //we have to pass those arguments in the win(), lose() and draw() functions so they can use them
    } else if (
        (userSelection == 'lance' && computerSelection == 'axe') ||
        (userSelection == 'sword' && computerSelection == 'lance') ||
        (userSelection == 'axe' && computerSelection == 'sword')
    ) {
        lose(userSelection, computerSelection);    
    }
}

//the names of the parameters don't matter
//the function gets userSelection and computerSelection passed as arguments
function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.textContent = userScore;
    computerScore_span.textContent = computerScore;
    result_p.innerHTML = `The Warrior\'s ${userChoice} beats the Opponent\'s ${computerChoice}!<br>
    You have won this fight, warrior!`;
    const userChoice_img = document.getElementById(userChoice);
    userChoice_img.classList.add('win-glow');
    setTimeout(() => userChoice_img.classList.remove('win-glow'), 350); 
    if (userScore === 5 || computerScore === 5) declareWinner(); 
}

function lose(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.textContent = computerScore;
    userScore_span.textContent = userScore;
    result_p.innerHTML = `The Warrior\'s ${userChoice} loses to the Opponent\'s ${computerChoice}!<br>
    You have lost this fight, warrior!`;
    const userChoice_img = document.getElementById(userChoice);
    userChoice_img.classList.add('lose-glow');
    setTimeout(() => userChoice_img.classList.remove('lose-glow'), 350);
    if (userScore === 5 || computerScore === 5) declareWinner();
}

function draw(userChoice) {
    result_p.innerHTML = `Both, Warrior and Opponent, have picked ${userChoice}!<br>
    The fight is undecided!`;
    const userChoice_img = document.getElementById(userChoice);
    userChoice_img.classList.add('draw-glow');
    setTimeout(() => userChoice_img.classList.remove('draw-glow'), 350);
}

function stopGame() {
    lance_img.removeEventListener('click', lanceGame);
    sword_img.removeEventListener('click', swordGame);
    axe_img.removeEventListener('click', axeGame);
    setTimeout(() => lance_img.classList.add('stopGame'), 300);
    setTimeout(() => sword_img.classList.add('stopGame'), 300);
    setTimeout(() => axe_img.classList.add('stopGame'), 300);
}

function declareWinner() {   
    stopGame();
    (userScore > computerScore) ? result_p.textContent = 'You have won this tournament!' : result_p.textContent = 'You have lost this tournament!';
    restartButton_button.classList.remove('hide-btn');
    restartButton_button.classList.add('show-btn');
    restartButton_button.addEventListener('click', resetGame);
}

//window.location.reload() would also work 
function resetGame() {
    userScore = 0; 
    computerScore = 0;
    userScore_span.textContent = userScore;
    computerScore_span.textContent = computerScore;
    restartButton_button.classList.remove('show-btn');
    restartButton_button.classList.add('hide-btn');
    result_p.textContent = '';
    lance_img.classList.remove('stopGame');
    sword_img.classList.remove('stopGame');
    axe_img.classList.remove('stopGame');
    main();
}

main();