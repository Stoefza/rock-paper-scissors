// To compare rock paper scissors i will Need to assign an int to 
// rock = 1
// paper = 2
// sciccors = 3
let scoreUser = 0;
let scoreComputer = 0;



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

//This function allows for 2 parameters and the then compare them to one another
// Adjusting the score each time 
function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection == computerSelection){
        console.log("Its a tie! Please try again.");
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        scoreComputer++;
        return "You Lose! Paper beats Rock";
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        scoreUser++;
        return "You Win! Rock beats Paper";
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        scoreUser++;
        return "You Win! Paper beats Rock";
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        scoreComputer++;
        return "You Lose! Scissors beats Paper";
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        scoreUser++;
        return "You Win! Scissors beats Paper";
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        scoreComputer++;
        return "You lose! Rock beats Scissors";
    }
}

// This is the main entry point of the game - it will loop over the playRound() funtion 5 times and define the winner at the end of the game
// It will also ask the user if they would like to play again and restart the game
function game() {
    for (let roundCount = 0; roundCount < 5; roundCount++) {
        const playerSelection = prompt("Enter your disired weapon.. Rock,Paper or Scissors:");
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection,computerSelection));
        console.log("Scores: ".concat("You: ", scoreUser, " - ", "Computer: ", scoreComputer));
        
    }
    if (scoreUser === scoreComputer){
        console.log("Its a tie! ".concat("You: ", scoreUser, " - ", "Computer: ", scoreComputer));
    } else if (scoreUser > scoreComputer) {
        console.log("Scores: ".concat("Nice You have Won! You: ", scoreUser, " - ", "Computer: ", scoreComputer));
        } else {
        console.log("Scores: ".concat("Ah you lost! You: ", scoreUser, " - ", "Computer: ", scoreComputer));
       }
    scoreUser = 0;
    scoreComputer = 0;
    let playAgain = confirm("Do you want to play again?");
    if (playAgain){
        game();
        } else {
        alert("Thank you for playing!");
        }

    }