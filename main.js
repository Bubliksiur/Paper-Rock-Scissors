const warning = document.querySelector('#warning');
const paper = document.querySelector('#paper');
const rock = document.querySelector('#rock');
const scissors = document.querySelector('#scissors');

function main(playerChoice) {
    const choices = ['paper', 'rock', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = '';

    if (playerChoice === computerChoice) {
        warning.style.color = 'yellow';
        result = 'You draw';
    }
    else if (
        playerChoice === 'paper' && computerChoice === 'rock' ||
        playerChoice === 'rock' && computerChoice === 'scissors' ||
        playerChoice === 'scissors' && computerChoice === 'rock'
    ) {
        warning.style.color = 'green';
        result = 'You win!!';
    } else {
        warning.style.color = 'red';
        result = 'You lose :(';
    }

    warning.textContent = `Your choice is ${playerChoice}, computer choice is ${computerChoice} so ${result}`;
}