/*----- constants -----*/
const slotsReel = ['C', 'C', 'C', 'C', '$', '$', '$', '7', '7', 'JP'];
const winConditions = {};

/*----- app's state (variables) -----*/
let credits, wager, reel1, reel2, reel3;

/*----- cached element references -----*/
const reelDisp1 = document.getElementById('r1');
const reelDisp2 = document.getElementById('r2');
const reelDisp3 = document.getElementById('r3');
const credDisp = document.getElementById('c-amount');
const betDisp = document.getElementById('w-amount');

/*----- event listeners -----*/
const bUpLis = document.getElementById('betup').addEventListener('click', betUp);
const bDnLis = document.getElementById('betdown').addEventListener('click', betDown);
const leverLis = document.getElementById('lever').addEventListener('click', leverPull);
const resetLis = document.getElementById('reset').addEventListener('click', reset);

/*----- functions -----*/
init();

function init() {
    credits = 10;
    wager = 0;
    reel1 = null;
    reel2 = null;
    reel3 = null;
    render();
}

function render() {
    reelDisp1.innerHTML = `${Math.floor(Math.random()*slotsReel.length)}`;
    reelDisp2.innerHTML = `${Math.floor(Math.random()*slotsReel.length)}`;
    reelDisp3.innerHTML = `${Math.floor(Math.random()*slotsReel.length)}`;
    credDisp.innerHTML = `${credits}`;
    betDisp.innerHTML = `${wager}`;
}

function betUp() { // subtract from credits, add to wager
    console.log('betUp clicked!');
}

function betDown() { // subtract from wager, add to credits
    console.log('betDown clicked!');
}

function leverPull() {
    console.log('leverPull clicked!');
    reelDisp1.innerHTML = `${Math.floor(Math.random()*slotsReel.length)}`;
    reelDisp2.innerHTML = `${Math.floor(Math.random()*slotsReel.length)}`;
    reelDisp3.innerHTML = `${Math.floor(Math.random()*slotsReel.length)}`;
}

function reset() {
    console.log('reset clicked!');
}