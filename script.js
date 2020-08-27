//Create three choices for Rock Paper Scissors
let rock = 'Rock';
let paper = 'Paper';
let scissors = 'Scissors'

//Store choices in an array
let choices = [rock, paper, scissors];

//Let computer randomly make a choice and return its value as a string
function computerPlay() {
    return choices[Math.floor(Math.random() * 3)];
}

//Ask player for a choice and return their value as a string
function playerSelection() {
    //Prompt user
    let choice = prompt("Choose: Rock, Paper, Scissors").length

    //Convert choice to an integer at the index of choices[] array
    switch(choice){
        case 4:
            conversion = 0;
            break;
        case 5:
            conversion = 1;
            break;
        case 8:
            conversion = 2;
            break
        default:
            alert("You did not input Rock, Paper, or Scissors. Please try again.");
            return playerSelection();
        }
        return choices[conversion];
    }

//Create variables for points and round #
let computerPoints = 0;
let playerPoints = 0;
let roundNum = 0;

//Determine who won the round
function playRound(computerPlay, playerSelection){
    //Determine draw conditions
   if (computerPlay === playerSelection)
   {
       roundNum++;
       return console.log("Draw!");
   }
   else
   //Determine losing conditions
   if (computerPlay === 'Rock' && playerSelection === 'Scissors' || computerPlay === 'Paper' && playerSelection === 'Rock' || computerPlay === 'Scissors' && playerSelection === 'Paper'){
        computerPoints++;
        roundNum++;
        return console.log("You lose! " + computerPlay + " beats " + playerSelection);
   }
   //Default to winning conditions
   else
    playerPoints++;
    roundNum++;
    return console.log("You win! " + playerSelection + " beats " + computerPlay);
}

//Plays 5 rounds of Rock Paper Scissors and determines winner
function game(){
    //Call playRound function 5x and update points & round # after each round
    for (let i = 0; i < 5; i++){
        playRound(computerPlay(), playerSelection());
        console.log("Round: " + roundNum);
        console.log("Computer: " + computerPoints);
        console.log("Player: " + playerPoints);
    }
    //Computer winning condition
    if (computerPoints > playerPoints){
        return console.log("Computer wins!");
    }
    else
    //Player winning coniditon
    if (playerPoints > computerPoints){
        return console.log("Player wins!");
    }
    else
    //Draw condition
    return console.log("Match has been declared a draw!");
}

//Play ball!
game();