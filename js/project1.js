/*----- constants -----*/
const virtualReel = ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', '$1', '$1', '$1', '$1', '$1', '$1', '$1', '$1', '$1', '$1', '$2', '$2', '$2', '$2', '$2', '$2', '$2', '$3', '$3', '$3', '$3', 'L7', 'L7', 'L7', 'GB', 'GB', 'JP'];
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


/*----- event listeners -----*/
const bUpLis = document.getElementById('betup').addEventListener('click', betUp);
const bDnLis = document.getElementById('betmax').addEventListener('click', betMax);
const leverLis = document.getElementById('lever').addEventListener('click', leverPull);
const resetLis = document.getElementById('reset').addEventListener('click', init);

/*----- functions -----*/
init();

function init() {
    credits = 10;
    wager = 0;
    reelArray = ["L7", "L7", "L7"];
    render();
}

function render() {
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
    if (wager === 0) return;
    reelArray = [];
    reelDisp1.innerHTML = '<img src="https://i.imgur.com/Botj2B8.gif">';
    reelDisp2.innerHTML = '<img src="https://i.imgur.com/Botj2B8.gif">';
    reelDisp3.innerHTML = '<img src="https://i.imgur.com/Botj2B8.gif">';
    setTimeout(function() { reelDisp1.innerHTML = `${Math.floor(Math.random()*virtualReel.length)}`; }, 500);
    setTimeout(function() { reelDisp2.innerHTML = `${Math.floor(Math.random()*virtualReel.length)}`; }, 1000);
    setTimeout(function() { reelDisp3.innerHTML = `${Math.floor(Math.random()*virtualReel.length)}`; }, 1500);
    setTimeout(function() {
        reelArray.push(virtualReel[reelDisp1.innerHTML], virtualReel[reelDisp2.innerHTML], virtualReel[reelDisp3.innerHTML]);
        checkReels();
        wager = 0;
        if (credits === 0) alert("GAME OVER");
        render();
    }, 1501);
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
        } else {
            credits += wager + wager * 2;
        }
    }
}