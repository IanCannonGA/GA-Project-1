**GENERAL ASSEMBLY PROJECT 1 : Slot Machine**\
\
*"The One-Armed Bandit"*\
\
![Screenshot](https://TheIanCannon.github.io/GA-Project1-SlotMachine/visual/screenshot.png)\
\
    So-named after the traditional moniker for a slot machine, this game recreates the same action of the basic gambling device—only without any risk to your bank accounts. You make a bet in a game of chance, and just like the real thing, you even pull the lever to get the action going.\
\
*1. Technologies Used*\
\
![Wireframe](https://TheIanCannon.github.io/GA-Project1-SlotMachine/visual/wireframe.png)\
\
    1.1. HTML: Construction of basic layout, with each element separately ID'd for CSS, including top title line & reset, reels & lever, credit & betting readouts & controls, and payout info image.\
\
    1.2. CSS: Styling applied to ID tagged elements, including CSS-Grid layout technique, bordering, and background & text colors.\
\
    1.3 JS: Creation of virtual "reel" for CONSTANTS (random/final readouts of each reel-window, payout values for each reel element), STATE Variables (credits, wager, reel array), CACHED Elements (controls, displays, and SFX), EVENT Listeners (reset, lever, bet buttons), and FUNCTIONS (bet 1, bet max, reset, and lever-pull (which in turn passes reel-array to win-logic function)).\
\
    1.4 OTHERS: Images - free clip art and/or created/modified by me using Photoshop; Audio - samples from freesound.org\
\
*2. Getting Started*\
\
[Game: GitHub](https://TheIanCannon.github.io/GA-Project1-SlotMachine/)\
\
    2.1. Upon loading, the screen will display the game: Three value reels, a lever to commit a bet, a readout of 3 starting credits and 0 wagered (with "Bet 1" and "Bet Maximum" buttons), and a reset switch.\
\
    2.2. To begin play, one can either click the "Bet 1 Credit" button, which will incrementally transfer 1 Credit per click from "Credits" to "Wager", up to a maximum value of 3 Credits; alternatively, one can click the "Bet Maximum" button to transfer 3 Credits in one action. A quiet "clinking" sound effect will accompany "Bet 1", and a louder "clattering" will accompany "Bet Maximum".\
\
    2.3. Until at least 1 Credit is wagered, the lever will not function, and a "slash-circle" cursor will appear when moused over. Once at least 1 Credit is wagered, the "slash-circle" changes to an "open-hand" cursor, signifying the lever is ready to be pulled.\
\
    2.4. Pulling the lever will set the reels to "spinning," as well as playing a "lever" sound effect; a "ticking" sound will follow as the reels time out with a final value; if the values match any of the winning lines, the payout is added to credits, along with the wager. (Both are displayed below the controls as is traditional.) Running out of credits gives you a game-over message, blanks the reels, and halts the game until restarted, as you're out of money and out of wagers.\
\
    2.6 To restart the game, the page can be refreshed, or the RESET button can be clicked; doing so will reset the credits, void any wagers, and reset the reel displays back to their starting attract display of "7-7-7".\
\
*3. Next Steps*\
\
    3.1. Expanded tracking options: Counters for "rounds played" and/or "amount won".\
\
    3.1.1. Digit-by-digit counting-out of winnings adding to credits.\
\
    3.1. More realistically "animated" reel gif (vertical slide effect?) or animated lever movement; animated wager payout?\
\
    3.2. Flashing lights "behind" the reels, or other simple visuals to decorate the page (similar to realspace or online slot machines of various types).\
\
    3.4. BIG TICKET: Expanded control options i.e. "nudge" switches for each reel (spending extra wager for each), multiple paylines (horizontal/diagonal).
    
