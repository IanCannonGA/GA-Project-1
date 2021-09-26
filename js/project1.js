/*----- constants -----*/
const slotsReel = ['C', 'C', 'C', 'C', '$', '$', '$', '7', '7', 'JP'];
const winConditions = {};

/*----- app's state (variables) -----*/
let credits, betpool, reel1, reel2, reel3;

/*----- cached element references -----*/
const reelDisp1 = document.getElementById('reel1');
const reelDisp2 = document.getElementById('reel2');
const reelDisp3 = document.getElementById('reel3');
const credDisp = document.getElementById('credits');
const betDisp = document.getElementById('betpool');

/*----- event listeners -----*/
document.getElementById('betup').addEventListener('click', betUp());
document.getElementById('betdown').addEventListener('click', betDown());
document.getElementById('lever').addEventListener('click', leverPull());
document.getElementById('reset').addEventListener('click', reset());



/*----- functions -----*/
init();

function init() {

}

function betUp() {
    console.log('betUp clicked!');
}

function betDown() {
    console.log('betDown clicked!');
}

function leverPull() {
    console.log('leverPull clicked!');
}

function reset() {
    console.log('reset clicked!');
}