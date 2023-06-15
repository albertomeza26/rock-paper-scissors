let choice = prompt('Rock, Paper or Scissors?');
const selection = choice.toUpperCase();
if (selection === 'ROCK' || selection === 'PAPER' || selection === 'SCISSORS') {
	playRound();
}
else {
	alert("Invalid Entry, please try again!");
}

function getComputerChoice() {
	const RpS = ['Rock', 'Paper', 'Scissors'];
	const randomElement = RpS[Math.floor(Math.random() * RpS.length)];
	return randomElement.toUpperCase();
}
const computerSelection = getComputerChoice();
const playerSelection = selection
function playRound(playerSelection, computerSelection) { 
	if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') {alert("You win, Rock beats Scissors"); }
		else if (playerSelection === 'SCISSORS' && computerSelection === 'SCISSORS') { alert("Tie, you both picked Scissors"); }
	if (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') { alert("You lose, Scissors beats Paper"); }
		else if (playerSelection === 'PAPER' && computerSelection === 'ROCK') { alert("You win, Paper beats Rock"); }
	if (playerSelection === 'PAPER' && computerSelection === 'PAPER') { alert("You tie, both chose Paper"); }
		else if (playerSelection === 'ROCK' && computerSelection === 'ROCK') { alert("You tie, both chose Rock"); }
	else { alert("Refresh the page ya bish"); }
}
