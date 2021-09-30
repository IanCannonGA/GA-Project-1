**GENERAL ASSEMBLY PROJECT 1 : Slot Machine**\
\
*"The One-Armed Bandit"*\
\
[Wireframe: Imgur Hosting](https://i.imgur.com/rhhANqR.jpg)\
\
[Game: GitHub](https://iancannonga.github.io/GA-Project-1/)
\
*1. Technologies Used*\
\
    1.1. HTML: Construction of basic layout, with each element separately ID'd for CSS, including top title line & reset, reels & lever, credit & betting readouts & controls, and payout info image.\
\
    1.2. CSS: Styling applied to ID tagged elements, including CSS-Grid layout technique, bordering, and background & text colors.\
\
    1.3 JS: Creation of virtual "reel" for CONSTANTS (random/final readouts of each reel-window, payout values for each reel element), STATE Variables (credits, wager, reel array), CACHED Elements (controls, displays, and SFX), EVENT Listeners (reset, lever, bet buttons), and FUNCTIONS (bet 1, bet max, reset, and lever-pull (which in turn passes reel-array to win-logic function)).\
\
*2. Getting Started*\
\
    2.1. Upon loading, the screen will display the game: Three value reels, a lever to commit a bet, a readout of 10 starting credits and 0 wagered (with "Bet 1" and "Bet Maximum" buttons), and a reset switch.\
\
    2.2. To begin play, one can either click the "Bet 1 Credit" button, which will incrementally transfer 1 Credit per click from "Credits" to "Wager", up to a maximum value of 3 Credits; alternatively, one can click the "Bet Maximum" button to transfer 3 Credits in one action. A quiet "clinking" sound effect will accompany "Bet 1", and a louder "clattering" will accompany "Bet Maximum".\
\
    2.3. Until at least 1 Credit is wagered, the lever will not function, and a "slash-circle" cursor will appear when moused over. Once at least 1 Credit is wagered, the "slash-circle" changes to an "open-hand" cursor, signifying the lever is ready to be pulled.\
\
    2.4. Pulling the lever will activate another handling function in the JS, which uses an animated GIF to simulate spinning reels, as well as playing a "lever" sound effect; a "ticking" sound will follow as the reels time out with a final randomized value, which is both temporarily displayed in each reel window and stored in a temporary array.\
\
    2.5 The array is then compared using a set of payout constants and a reward is offered. (Both are displayed below the controls as is traditional.)\
\
    2.6 To restart the game from initiation, the page can be refreshed, or the RESET button can be clicked; doing so will reset the credits to 10, void any wagers, and reset the reel displays back to their starting attract display of "7-7-7".\
\
*3. Next Steps*\
\
    3.1. Expanded tracking options: Counters for "rounds played" and/or "amount won".\
\
    3.1.1. Digit-by-digit counting-out of winnings adding to credits.\
\
    3.1. More realistically "animated" reel gif (vertical slide effect?); animated wager payout?\
\
    3.2. Flashing lights "behind" the reels, or other simple visuals to decorate the page (similar to realspace or online slot machines of various types).\
\
    3.4. BIG TICKET: Expanded control options i.e. "nudge" switches for each reel (spending extra wager for each), multiple paylines (horizontal/diagonal).\
    