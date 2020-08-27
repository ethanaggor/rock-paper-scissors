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

//Determine who won the round
function playRound(computerPlay, playerSelection){
    //Determine draw conditions
   if (computerPlay === playerSelection)
   {
       return "Draw!";
   }
   else
   //Determine losing conditions
   if (computerPlay === 'Rock' && playerSelection === 'Scissors' || computerPlay === 'Paper' && playerSelection === 'Rock' || computerPlay === 'Scissors' && playerSelection === 'Paper'){
       return "You lose! " + computerPlay + " beats " + playerSelection;
   }
   //Default to winning conditions
   else
    return "You win! " + playerSelection + " beats " + computerPlay;
}

//Set return values of computerPlay() and playerSelection() to a variable for playRound() parameters
computerPlay = computerPlay();
playerSelection = playerSelection();

//Print result of match
console.log(playRound(computerPlay, playerSelection));
console.log("Computer: " + computerPlay);
console.log("Player: " + playerSelection);