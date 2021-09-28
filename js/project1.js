/*----- constants -----*/
const virtualReel = ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', '$1', '$1', '$1', '$1', '$1', '$1', '$1', '$1', '$1', '$1', '$2', '$2', '$2', '$2', '$2', '$2', '$2', '$3', '$3', '$3', '$3', 'L7', 'L7', 'L7', 'GB', 'GB', 'JP'];
const X = '<img src="https://i.imgur.com/q7sXusy.png">'
const C = '<img src="https://i.imgur.com/HmbaFJQ.png">'
const $1 = '<img src="https://i.imgur.com/7bwFIT5.png">'
const $2 = '<img src="https://i.imgur.com/QAvBOuo.png">'
const $3 = '<img src="https://i.imgur.com/N1H3Y4E.png">'
const L7 = '<img src="https://i.imgur.com/pSF0crI.png">'
const GB = '<img src="https://i.imgur.com/0ch4BUf.png">'
const JP = '<img src="https://i.imgur.com/VD410p1.png">'
const winConditions = {};

/*----- app's state (variables) -----*/
let credits, wager, reelArray;

/*----- cached element references -----*/
const reelDisp1 = document.getElementById('r1');
const reelDisp2 = document.getElementById('r2');
const reelDisp3 = document.getElementById('r3');
const credDisp = document.getElementById('c-amount');
const betDisp = document.getElementById('w-amount');


/*----- event listeners -----*/
const bUpLis = document.getElementById('betup').addEventListener('click', betUp);
const bDnLis = document.getElementById('betmax').addEventListener('click', betMax);
const leverLis = document.getElementById('lever').addEventListener('click', leverPull);
const resetLis = document.getElementById('reset').addEventListener('click', init);

/*----- functions -----*/
init();

function init() {
    credits = 10;
    credDisp.innerHTML = `${credits}`;
    wager = 0;
    betDisp.innerHTML = `${wager}`;
    reelDisp1.innerHTML = `${Math.floor(Math.random()*virtualReel.length)}`;
    reelDisp2.innerHTML = `${Math.floor(Math.random()*virtualReel.length)}`;
    reelDisp3.innerHTML = `${Math.floor(Math.random()*virtualReel.length)}`;
    reelArray = [];
    render();
}

function render() {
    reelDisp1.innerHTML; = reelDisp2.innerHTML;
    reelDisp3.innerHTML;
    credDisp.innerHTML = `${credits}`;
    betDisp.innerHTML = `${wager}`;
}

function betUp() { // Add 1 Credit wager (to 3 max)
    if (wager < 3) {
        credits--;
        wager++;
    } else { return };
    render();
}

function betMax() { // Bet maximum 3 Credits
    while (wager < 3) {
        credits--;
        wager++;
    }
    render();
}

function leverPull() {
    if (credits > 0 && wager === 0) {
        credits--;
        wager++;
    };
    reelDisp1.innerHTML = '<img src="https://i.imgur.com/Botj2B8.gif">';
    reelDisp2.innerHTML = '<img src="https://i.imgur.com/Botj2B8.gif">';
    reelDisp3.innerHTML = '<img src="https://i.imgur.com/Botj2B8.gif">';
    setTimeout(function() { reelDisp1.innerHTML = `${Math.floor(Math.random()*virtualReel.length)}`; }, 1000);
    setTimeout(function() { reelDisp2.innerHTML = `${Math.floor(Math.random()*virtualReel.length)}`; }, 2000);
    setTimeout(function() { reelDisp3.innerHTML = `${Math.floor(Math.random()*virtualReel.length)}`; }, 3000);
    setTimeout(function() {
        reelArray.push(virtualReel[reelDisp1.innerHTML], virtualReel[reelDisp2.innerHTML], virtualReel[reelDisp3.innerHTML]);
    }, 3001);
    checkReels();
    wager = 0;
    render();
    if (credits === 0) { alert("GAME OVER"); }
}

function checkReels() {
    console.log(reelArray);
}