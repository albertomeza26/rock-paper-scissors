function getComputerChoice() {
	const RpS = ['Rock','Paper','Scissors'];
	const randomElement = RpS[Math.floor(Math.random() * RpS.length)];
	return randomElement; }