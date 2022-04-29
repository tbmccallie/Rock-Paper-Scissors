/*Create array that the computerPlay function will randomly choose a value from*/
let computerChoices = [
    "rock",
    "paper",
    "scissors"
]

/*Randomly choose a value from computerChoices to decide what the computer picks and store the value*/
function computerPlay () {
    let computerChoice = computerChoices[Math.floor(Math.random()*computerChoices.length)];
    return computerChoice;
}

/*Take user input to determine which choice the player has made and store the value*/
function playerPlay() {
    let playerChoice = window.prompt("Which do you pick? Rock, Paper, or Scissors?").toLowerCase();

    /*Continuously asks the user for input if they don't enter rock, paper, or scissors into the prompt*/
    while(computerChoices.includes(playerChoice) === false) {
        playerChoice = window.prompt("That wasn't an option! Which do you pick? Rock, Paper, or Scissors?").toLowerCase();
    }

    return playerChoice;
}

/*Plays one round of Rock Paper Scissors and returns the result of the game, which is a string*/
function playRound(playerChoice, computerChoice) {

    /*Checks playerChoice against the computer if the computer chose rock*/
    if(computerChoice === "rock") {
        if(playerChoice === "paper") {
            result = "You win! Paper beats rock!";
        } else if(playerChoice === "rock") {
            result = "It's a tie!";
        } else {
            result = "You lose. Rock beats scissors";
        }

    /*Checks playerchoice against the computer if the computer chose paper*/
    } else if(computerChoice === "paper") {
        if(playerChoice === "scissors") {
            result = "You win! Scissors beats paper!";
        } else if(playerChoice === "paper") {
            result = "It's a tie!";
        } else {
            result = "You lose. Paper beats rock.";
        }

    /*Checks playerChoice against the computer if the computer chose scissors*/
    } else {
        if(playerChoice === "rock") {
            result = "You win! Rock beats scissors!";
        } else if(playerChoice === "scissors") {
            result = "It's a tie!";
        } else {
            result = "You lose. Scissors beats paper.";
        }
    }

    return result;
}

let playerChoice = playerPlay();

let computerChoice = computerPlay();

console.log("The computer picked " + computerChoice);

console.log(playRound(playerChoice, computerChoice));