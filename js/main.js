/*----- constants -----*/
let player1 = "X";
let player2 = "O";

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
    evt.target.style.color = "blue";
    currentTurn++;
}else {
    evt.target.innerHTML = player2;
    evt.target.style.color = "green";
    currentTurn++;
}
};

function replayBtnClick(evt) {
    var i;
    for (i = 0; i < 9; i++) {
        document.getElementById(i).innerHTML = "";
    }
};


