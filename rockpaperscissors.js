let scoreUser = 0;
let scoreComputer = 0;
let rounds = 0;
let ties = 0;
const playButtons = document.querySelectorAll("button");
const values = ["rock", "paper", "scissors"];
const modal = document.getElementById("modal");
const playAgain = document.getElementById("play-again");
const dontPlayAgain = document.getElementById("dont-play-again");

console.log(playButtons);
let result;

// This Function returns the text based on a randomly generated number
function getComputerChoice() {
	let computerChoice = Math.floor(Math.random() * 3) + 1;
	if (computerChoice === 1) {
		return "Rock";
	} else if (computerChoice === 2) {
		return "Paper";
	} else {
		return "Scissors";
	}
}

//This function allows for 2 parameters and the then compare them to one another
// Adjusting the score each time
function playRound(playerSelection, computerSelection) {
	rounds++;
	playerSelection = playerSelection.toLowerCase();
	computerSelection = computerSelection.toLowerCase();

	if (playerSelection == computerSelection) {
		ties++;
		setResult(`Its a tie!`);
	} else if (
		(playerSelection == "rock" && computerSelection == "paper") ||
		(playerSelection == "paper" && computerSelection == "scissors") ||
		(playerSelection == "scissors" && computerSelection == "rock")
	) {
		scoreComputer++;
		setResult(`Lose: You: ${playerSelection} VS. Computer: ${computerSelection}`);
	} else if (
		(playerSelection == "rock" && computerSelection == "scissors") ||
		(playerSelection == "paper" && computerSelection == "rock") ||
		(playerSelection == "scissors" && computerSelection == "paper")
	) {
		scoreUser++;
		setResult(`Win:  You: ${playerSelection} VS. Computer: ${computerSelection}`);
	}
}

function game() {
	let playerChoice;
	playButtons.forEach((button, index) => {
		button.addEventListener("click", function () {
			playerChoice = values[index];
			playRound(playerChoice, getComputerChoice());
			updateHtml();
			scoreCheck(scoreUser, scoreComputer);
		});
	});
}

function setResult(roundResult) {
	document.getElementById("result").innerText = roundResult;
}

function scoreCheck(scoreUser, scoreComputer) {
	if (scoreUser == 5 || scoreComputer == 5) {
			modal.classList.add("open");
			if (scoreUser > scoreComputer) {
				document.getElementById('game-result').innerText = `Congrats you won! You beat the computer` 
				
			} else {      
				document.getElementById('game-result').innerText = `Sorry you lost....`
			  
			}
		  
		}
		}
	



function resetGame() {
	scoreUser = 0;
	scoreComputer = 0;
	rounds = 0;
	ties = 0;
	// setResult("");
	updateHtml();
}

function updateHtml() {
	document.querySelector("#player-score").innerText = scoreUser;
	document.querySelector("#computer-score").innerText = scoreComputer;
	// document.querySelector("#rounds-tied").innerText = ties;
	document.querySelector("#total-rounds").innerText = rounds;
}

game();
resetGame();
