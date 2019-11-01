/*----- constants -----*/
let player1 = "X";
let player2 = "O";

winPlayer = false;

let player1Turns =[] 
let player2Turns = []
const MAX_BOX_CLICKED = 8;
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

    let box = evt.target.innerHTML;

    if(currentTurn % 2 == 0) {
        if(box != 'X' && box != 'O') {
            evt.target.innerHTML = player1;
            evt.target.style.color = "purple";
            currentTurn++;
        } else {
            alert('Choose another space');
        }
    } else{
        if(box != "X" && box != "O") {
            evt.target.innerHTML = player2;
            evt.target.style.color = "green";
            currentTurn++;
        } else {
            alert('Choose another space');
        }
    }
};

function checkForCombination() {
   let currentPlayer = (currentTurn % 2 == 0) ? player1Turns : player2Turns

   //here is where you would loop through currentPlayer and winnignCombinations
   for (move of currentPlayer ) {
       // also need to loop throught the winning cobinations
       for (combo of winCombination) {

       }
   }
}


function replayBtnClick(evt) {
    for (let i = 0; i <= 9; i++) {
        document.getElementById(i).innerHTML = "";
    }
};

function checkForWinner() {
if (winner === 'X' || winner === 'O' && winner === winCombination)
alert(winner+'You Won')
};


