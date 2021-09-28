/*----- constants -----*/
const vReel = ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', '$1', '$1', '$1', '$1', '$1', '$1', '$1', '$1', '$1', '$1', '$2', '$2', '$2', '$2', '$2', '$2', '$2', '$3', '$3', '$3', '$3', 'L7', 'L7', 'L7', 'GB', 'GB', 'JP'];
// const vReel = [X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, X, C, C, C, C, C, C, C, C, C, C, C, C, C, C, $1, $1, $1, $1, $1, $1, $1, $1, $1, $1, $2, $2, $2, $2, $2, $2, $2, $3, $3, $3, $3, L7, L7, L7, GB, GB, JP];
const winConditions = {};

/*----- app's state (variables) -----*/
let credits, wager, reelArray;

/*----- cached element references -----*/
const rDisp1 = document.getElementById('r1');
const rDisp2 = document.getElementById('r2');
const rDisp3 = document.getElementById('r3');
const credDisp = document.getElementById('c-amount');
const betDisp = document.getElementById('w-amount');
const rFlash = `${'<img src="https://i.imgur.com/Botj2B8.gif">'}`;

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
    reelArray = [];
    wager = 0;
    betDisp.innerHTML = `${wager}`;
    rDisp1.innerHTML = `${vReel[Math.floor(Math.random()*vReel.length)]}`;
    rDisp2.innerHTML = `${vReel[Math.floor(Math.random()*vReel.length)]}`;
    rDisp3.innerHTML = `${vReel[Math.floor(Math.random()*vReel.length)]}`;
    render();
}

function render() {
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

function leverPull() { // Bet 1 credit if none wagered yet
    if (credits > 0 && wager === 0) {
        credits--;
        wager++;
    };
    reelArray = [];
    rDisp1.innerHTML = rFlash;
    rDisp2.innerHTML = rFlash;
    rDisp3.innerHTML = rFlash;
    setTimeout(function() {
        rDisp1.innerHTML = `${vReel[Math.floor(Math.random()*vReel.length)]}`;
        reelArray.push(rDisp1.innerHTML);
    }, 1000);
    setTimeout(function() {
        rDisp2.innerHTML = `${vReel[Math.floor(Math.random()*vReel.length)]}`;
        reelArray.push(rDisp2.innerHTML);
    }, 2000);
    setTimeout(function() {
        rDisp3.innerHTML = `${vReel[Math.floor(Math.random()*vReel.length)]}`;
        reelArray.push(rDisp3.innerHTML);
    }, 3000);
    render();
    wager = 0;
    if (credits === 0) { alert("GAME OVER"); return; };
}

function checkReelArray() {
    console.log(reelArray);
    return reelArray.reduce(function(total, char) {
        total[char] = total[char] ? ++total[char] : 1;
        return total;
    }, {});
}