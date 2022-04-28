/*Create array that the computerPlay function will randomly choose a value from*/
let computerChoices = [
    "rock",
    "paper",
    "scissors"
]

/*Randomly choose a value from computerChoices to decide what the computer picks and store the value*/
function computerPlay () {
    return computerChoices[Math.floor(Math.random()*computerChoices.length)];
}

/*Take user input to determine which choice the player has made and store the value*/
function playerPlay() {
    let playerChoice = window.prompt("Which do you pick? Rock, Paper, or Scissors?").toLowerCase();

    while(computerChoices.includes(playerChoice) === false) {
        playerChoice = window.prompt("That wasn't an option! Which do you pick? Rock, Paper, or Scissors?").toLowerCase();
    }

    return playerChoice;
}