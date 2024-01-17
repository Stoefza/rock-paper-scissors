// To compare rock paper scissors i will Need to assign an int to 
// rock = 1
// paper = 2
// sciccors = 3
let scoreUser = 0
let scoreComputer = 0



// This Function returns the text based on a randomly generated number
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3 ) + 1;;
    if (computerChoice === 1) {
        return "Rock";
    } else if ( computerChoice === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection == computerSelection){
        console.log("Its a tie! Please try again.");
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        scoreComputer++;
        return "You Lose! Paper beats Rock"
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        scoreUser++;
        return "You Win! Rock beats Paper"
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        scoreUser++;
        return "You Win! Paper beats Rock"
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        scoreComputer++;
        return "You Lose! Scissors beats Paper"
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        scoreUser++;
        return "You Win! Scissors beats Paper"
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        scoreComputer++;
        return "You lose! Rock beats Scissors"
    }
}

function game() {
    for (let index = 0; index < 5; index++) {
        const playerSelection = prompt("Enter your disired weapon.. Rock,Paper or Scissors:");
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection,computerSelection))
        console.log("Scores: ".concat("You: ", scoreUser, " - ", "Computer: ", scoreComputer));
        
    }
    if (scoreUser === scoreComputer){
        console.log("Its a tie! ".concat("You: ", scoreUser, " - ", "Computer: ", scoreComputer));
    } else if (scoreUser > scoreComputer) {
        console.log("Scores: ".concat("Nice You have Won! You: ", scoreUser, " - ", "Computer: ", scoreComputer));
        } else {
        console.log("Scores: ".concat("Ah you lost! You: ", scoreUser, " - ", "Computer: ", scoreComputer));
       }
    let playAgain = confirm("Do you want to play again?");
    if (playAgain){
        game();
        } else {
        alert("Thank you for playing!")
        }
    scoreUser = 0;
    scoreComputer = 0;
    }