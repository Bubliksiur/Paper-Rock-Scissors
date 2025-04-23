const warning = document.querySelector('#warning');
const paper = document.querySelector('#paper');
const rock = document.querySelector('#rock');
const scissors = document.querySelector('#scissors');

function main(playerChoice) {
    const choices = ['paper', 'rock', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = '';

    if (playerChoice === computerChoice) result = 'draw';
    else if (
        playerChoice === 'paper' && computerChoice === 'rock' ||
        playerChoice === 'rock' && computerChoice === 'scissors' ||
        playerChoice === 'scissors' && computerChoice === 'rock'
    ) {
        result = 'You win!!';
    } else {
        result = 'You lose :(';
    }

    warning.textContent = `Your choice is ${playerChoice}, computer choice is ${computerChoice} so ${result}`;
}