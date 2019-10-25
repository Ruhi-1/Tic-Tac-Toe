/*----- constants -----*/
const o = -1;
const x = 1;
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





/*----- event listeners -----*/
document.querySelectorAll('td')
    .addEventListener('click', handleBoxClick);

document.getElementById('replay')
    .addEventListener('click', handleButtonClick);

document.getElementsByTagName('table')
    .addEventListener('click', handleBoxClicked);







/*----- functions -----*/

function handleBoxClicked(evt)

   
