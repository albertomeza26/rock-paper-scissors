let computer = 0;
let player = 0;

const buttons = document.querySelector('.buttons');
const restart = document.querySelector('.restart');

	buttons.addEventListener ("click", () => {
		document.getElementById("pscore").innerHTML = `You: ${player}`;
		document.getElementById("cscore").innerHTML = `Computer : ${computer}`;
	});

	const rock = document.querySelector('.rock');
	rock.addEventListener ('click',() => {
		let computerSelection = getComputerChoice();
		function getComputerChoice() {
		const RpS = ['Rock','Paper','Scissors'];
		const randomElement = RpS[Math.floor(Math.random() * RpS.length)];
		return randomElement.toUpperCase(); };
	playRound('ROCK', computerSelection);
	});

	const paper = document.querySelector('.paper');
	paper.addEventListener ('click',() => {
		let computerSelection = getComputerChoice();
		function getComputerChoice() {
		const RpS = ['Rock','Paper','Scissors'];
		const randomElement = RpS[Math.floor(Math.random() * RpS.length)];
		return randomElement.toUpperCase(); };
	playRound('PAPER', computerSelection);
	});

	const scissors = document.querySelector('.scissors');
	scissors.addEventListener ('click',() => {
		let computerSelection = getComputerChoice();
		function getComputerChoice() {
		const RpS = ['Rock','Paper','Scissors'];
		const randomElement = RpS[Math.floor(Math.random() * RpS.length)];
		return randomElement.toUpperCase(); };
	playRound('SCISSORS', computerSelection);
	});

	function playRound(playerSelection, computerSelection)
	{ if ( playerSelection === 'ROCK' && computerSelection === 'SCISSORS') {
		(player++);
		document.getElementById("complete").innerHTML = `You WIN. The Computer chose SCISSORS`;
		{ if
		(player === 5 || computer === 5) {
			results(player, computer);
		}};
	}
		else if ( playerSelection === 'ROCK' && computerSelection === 'ROCK') {
		document.getElementById("complete").innerHTML = `You BOTH chose ROCK`;
		{ if
			(player === 5 || computer === 5) {
				results(player, computer);
			}};
		}
		else if ( playerSelection === 'ROCK' && computerSelection === 'PAPER') {
		(computer++);
		document.getElementById("complete").innerHTML = `You LOSE. The Computer chose PAPER`;{ if
			(player === 5 || computer === 5) {
				results(player, computer);
			}};
		}
		else if ( playerSelection === 'PAPER' && computerSelection === 'PAPER') {
				document.getElementById("complete").innerHTML = `You BOTH chose PAPER`;
		{ if
			(player === 5 || computer === 5) {
				results(player, computer);
			}};
		}
		else if ( playerSelection === 'PAPER' && computerSelection === 'SCISSORS') {
		(computer++);
		document.getElementById("complete").innerHTML = `You LOSE. The Computer chose SCISSORS`;
		{ if
			(player === 5 || computer === 5) {
				results(player, computer);
			}};
		}
		else if ( playerSelection === 'PAPER' && computerSelection === 'ROCK') {
		(player++);
		document.getElementById("complete").innerHTML = `You WIN. The Computer chose ROCK`;{ if
			(player === 5 || computer === 5) {
				results(player, computer);
			}};
		}
		else if ( playerSelection === 'SCISSORS' && computerSelection === 'SCISSORS') {
			document.getElementById("complete").innerHTML = `You BOTH chose SCISSORS`; 
			{ if
			(player === 5 || computer === 5) {
				results(player, computer);
			}};
		}
		else if ( playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
		(player++);
		document.getElementById("complete").innerHTML = `You WIN. The computer chose PAPER`;
		{ if
			(player === 5 || computer === 5) {
				results(player, computer);
			}};
		}
		else if ( playerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
		(computer++);
		document.getElementById("complete").innerHTML = `You LOSE. The Computer chose ROCK`;
		{ if
			(player === 5 || computer === 5) {
				results(player, computer);
			}};
		}
		else {alert("Something went wrong, refresh page");
		location.reload();}
};


function results(player, computer) {
	if ( player > computer ) {
		document.getElementById("complete").innerHTML = "<p style='color: yellow';>YOU HAVE DEFEATED THE COMPUTER</p>";
		restart.classList.remove('restart');
		restart.classList.add('renovar');
	}
	else if ( player < computer ) {
		document.getElementById("complete").innerHTML = "<p style='color: red';>YOU HAVE BEEN DEFEATED BY THE COMPUTER</p>";
		restart.classList.remove('restart');
		restart.classList.add('renovar');
	}
	else if ( player === computer ) {
	alert("You both tie");
	location.reload();}
	else {
	alert("Something went wrong, refresh to begin the battle");
	location.reload();}
} 


	