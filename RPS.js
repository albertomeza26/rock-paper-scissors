let c = 0;
let p = 0;
function game() { 
let choice = prompt('Rock, Paper or Scissors?');   
const playerSelection = choice.toUpperCase();

function getComputerChoice() {
	const RpS = ['Rock','Paper','Scissors'];
	const randomElement = RpS[Math.floor(Math.random() * RpS.length)];
	return randomElement.toUpperCase(); }
const computerSelection = getComputerChoice();
function playRound(playerSelection, computerSelection)
	{ if ( playerSelection === 'ROCK' && computerSelection === 'SCISSORS') {
		alert("You win, Rock beats Scissors");
		(p++);}
		else if ( playerSelection === 'ROCK' && computerSelection === 'ROCK') {
		alert("No winner, you both chose Rock");}
		else if ( playerSelection === 'ROCK' && computerSelection === 'PAPER') {
		alert("You Lose, Paper beats Rock");
		(c++);}
		else if ( playerSelection === 'PAPER' && computerSelection === 'PAPER') {
		alert("No winner, you both chose Paper");}
		else if ( playerSelection === 'PAPER' && computerSelection === 'SCISSORS') {
		alert("You lose, Scissors beats Paper");
		(c++);}
		else if ( playerSelection === 'PAPER' && computerSelection === 'ROCK') {
		alert("You win, Paper beats Rock");
		(p++);}
		else if ( playerSelection === 'SCISSORS' && computerSelection === 'SCISSORS') {
		alert("No winner, you both chose Scissors");}
		else if ( playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
		alert("You win, Scissors beats Paper");
		(p++);}
		else if ( playerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
		alert("You lose, Rock beats Scissors");
		(c++);}
		else {alert("Something went wrong, refresh page");}
}
console.log(playRound(playerSelection, computerSelection));
}
console.log(game());
console.log(game());
console.log(game());
console.log(game());
console.log(game());
function results(p, c) {
	if ( p > c ) {
	alert ("Congratulations, you have defeated the Computer!");}
	else if ( p < c ) {
	alert("You have been defeated by the Computer!");}
	else if ( p === c ) {
	alert("You both tie");}
	else {
	alert("Something went wrong, refresh to begin the battle");}
}
console.log(results(p, c));