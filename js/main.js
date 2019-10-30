/*----- constants -----*/
let player1 = "X";
let player2 = "O";

winPlayer = false;
// recomend making a player1 turns array and players2 
let player1Turns =[] 
let player2Turns = []
const MAX_BOX_CLICKED = 8;
// you cant compare arrays so youll need to loop to check
const winCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2],
];
    

/*----- app's state (variables) -----*/
// checkForWinner, winPlayer, player1, player2

/*----- cached element references -----*/
var currentTurn = document.getElementById('turn');
const movesMade = document.getElementById('moves');
const replayBtn = document.getElementById('replay');

/*----- event listeners -----*/

document.querySelector('tbody')
    .addEventListener('click', handleBoxClick); 

document.getElementById('replay')
    .addEventListener('click', replayBtnClick);


/*----- functions -----*/

function handleBoxClick(evt) {

if(currentTurn % 2 == 0) {
    evt.target.innerHTML = player1;
    evt.target.style.color = "purple";
    // here is where you need to do some checking of the winner
    currentTurn++;
}else {
    evt.target.innerHTML = player2;
    evt.target.style.color = "green";
    // also run the check here
    currentTurn++;
}
};

function checkForCombination() {
    //set either player1 or player2 based on whose turn it is
   let currentPlayer = (currentTurn % 2 == 0) ? player1Turns : player2Turns

   //here is where you would loop through currentPlayer and winnignCombinations
   for (move of currentPlayer ) {
       // also need to loop throught the winning cobinations
       for (combo of winCombination) {

       }
   }
}

function replayBtnClick(evt) {
    for (let i = 0; i < 9; i++) {
        document.getElementById(i).innerHTML = "";
    }
};

function checkForWinner() {
if (winner === 'X' || winner === 'O' && winner === winCombination)
alert(winner+'You Won')
};

