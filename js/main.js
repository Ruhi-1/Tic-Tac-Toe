/*----- constants -----*/

const MAX_BOX_CLICKED = 8;
const wincombination = [
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

let player1 = "X";
let player2 = "O";

let currentTurn = [];
let movesMade = [];

let bx = document.getElementsByClassName(".box");



/*----- cached element references -----*/





/*----- event listeners -----*/




document.querySelector('tbody')
    .addEventListener('click', handleBoxClick);

// document.getElementById('replay')
//     .addEventListener('click', handleButtonClick);








/*----- functions -----*/

function handleBoxClick(evt) {

    if(currentTurn === 1) {
        event.target.innerHTML = player1;
        event.target.style.color = "blue";
        curentTurn++;
    }else {
        event.target.innerHTML = player2;
        event.target.style.color = "black";
        curentTurn--;
    }

}
