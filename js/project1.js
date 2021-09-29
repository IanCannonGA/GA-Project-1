/*----- constants -----*/
const virtualReel = ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', '$1', '$1', '$1', '$1', '$1', '$1', '$1', '$1', '$1', '$1', '$2', '$2', '$2', '$2', '$2', '$2', '$2', '$3', '$3', '$3', '$3', 'L7', 'L7', 'L7', 'GB', 'GB', 'JP'];
const imgLookup = {
    X: '<img src="https://i.imgur.com/q7sXusy.png">',
    C: '<img src="https://i.imgur.com/HmbaFJQ.png">',
    $1: '<img src="https://i.imgur.com/7bwFIT5.png">',
    $2: '<img src="https://i.imgur.com/QAvBOuo.png">',
    $3: '<img src="https://i.imgur.com/N1H3Y4E.png">',
    L7: '<img src="https://i.imgur.com/pSF0crI.png">',
    GB: '<img src="https://i.imgur.com/0ch4BUf.png">',
    JP: '<img src="https://i.imgur.com/VD410p1.png">',
}
const payouts = {
    'JP': 1000,
    'GB': 500,
    'L7': 250,
    '$3': 50,
    '$2': 25,
    '$1': 10,
    'C': 10,
    'X': 0,
};

/*----- app's state (variables) -----*/
let credits, wager, reelArray;

/*----- cached element references -----*/
const reelDisp1 = document.getElementById('r1');
const reelDisp2 = document.getElementById('r2');
const reelDisp3 = document.getElementById('r3');
const credDisp = document.getElementById('c-amount');
const betDisp = document.getElementById('w-amount');
const leverCtrl = document.getElementById('lever');
const rFlash = `${'<img src="https://i.imgur.com/zBUj2q0.gif">'}`;
const betSnd = new Audio('audio/Bet1.mp3');
const betAll = new Audio('audio/BetMax.mp3');
const leverSnd = new Audio('audio/leverPull.mp3');
const reelSnd = new Audio('audio/reelSpin.mp3');

/*----- event listeners -----*/
const bUpLis = document.getElementById('betup').addEventListener('click', betUp);
const bMaxLis = document.getElementById('betmax').addEventListener('click', betMax);
const leverLis = document.getElementById('lever').addEventListener('click', leverPull);
const resetLis = document.getElementById('reset').addEventListener('click', init);

/*----- functions -----*/
init();

function init() { //Only initiate tracked variables here
    credits = 10;
    wager = 0;
    reelArray = ["L7", "L7", "L7"];
    render();
}

function render() { //Anything that goes on the PAGE goes here instead
    reelDisp1.innerHTML = imgLookup[reelArray[0]];
    reelDisp2.innerHTML = imgLookup[reelArray[1]];
    reelDisp3.innerHTML = imgLookup[reelArray[2]];
    credDisp.innerHTML = `${credits}`;
    betDisp.innerHTML = `${wager}`;
    leverCtrl.style.cursor = wager ? 'grab' : 'not-allowed';
}

function betUp() { // Add 1 Credit wager (to 3 max)
    if (wager < 3) {
        credits--;
        wager++;
        betSnd.play();
    } else { return };
    render();
}

function betMax() { // Bet maximum 3 Credits
    while (wager < 3) {
        credits--;
        wager++;
        betAll.play();
    }
    render();
}

function leverPull() {
    if (wager === 0) return;
    reelArray = [];
    leverSnd.play();
    reelDisp1.innerHTML = rFlash;
    reelDisp2.innerHTML = rFlash;
    reelDisp3.innerHTML = rFlash;
    setTimeout(function() {
        reelDisp1.innerHTML = `${Math.floor(Math.random()*virtualReel.length)}`;
    }, 750);
    setTimeout(function() {
        reelDisp2.innerHTML = `${Math.floor(Math.random()*virtualReel.length)}`;
    }, 1500);
    setTimeout(function() {
        reelDisp3.innerHTML = `${Math.floor(Math.random()*virtualReel.length)}`;
    }, 2250);
    setTimeout(function() {
        reelSnd.play();
        reelArray.push(virtualReel[reelDisp1.innerHTML], virtualReel[reelDisp2.innerHTML], virtualReel[reelDisp3.innerHTML]);
        checkReels();
        wager = 0;
        if (credits === 0) alert("GAME OVER");
        render();
    }, 2251);
}

function checkReels() {
    let reelCount = reelArray.reduce(function(total, sym) {
        total[sym] = total[sym] ? ++total[sym] : 1;
        return total;
    }, {});
    let foundWinner = false;
    for (let sym in reelCount) {
        if (reelCount[sym] === 3) {
            credits += wager + wager * payouts[sym];
            foundWinner = true;
            break;
        }
    }
    if (!foundWinner && reelCount.C === 1) {
        if (Object.keys(reelCount).length === 2) {
            credits += wager + wager * 5;
            foundWinner = true;
        } else {
            credits += wager + wager * 2;
            foundWinner = true;
        }
    }
    if (!foundWinner &&
        ((reelCount.$1 === 1 && reelCount.$2 === 2) ||
            (reelCount.$1 === 2 && reelCount.$2 === 1) ||
            (reelCount.$1 === 1 && reelCount.$3 === 2) ||
            (reelCount.$1 === 2 && reelCount.$3 === 1) ||
            (reelCount.$2 === 1 && reelCount.$3 === 2) ||
            (reelCount.$2 === 2 && reelCount.$3 === 1) ||
            (reelCount.$1 === 1 && reelCount.$2 === 1 && reelCount.$3 === 1)
        )) {
        credits += wager + wager * 100;
        foundWinner = true;
    }
}