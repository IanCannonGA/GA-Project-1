**#GA-SEI-Project-1-Slot-Machine**\
* General Assembly * Software Engineering Immersive * Project 1 *\
\
**SLOT MACHINE - PSEUDOCODE**\
\
_1. Define required constants:_\
  1.1. An object for the reel, with lowest-value items as most populated (e.g. 5x spaces, 4x Cherry, 3x $, 2x 7, 1x JACKPOT).\
  1.2. A set of winning conditions. (n.b. 3x10 slots = 1000 outcomes... avoid brute-forcing here and in the win logic; values-per-reel and multipliers are much more optimal.)\
\
_2. Define variables to track the game state:_\
  2.1. The player credits/current amount remaining.\
  2.2. The amount wagered from credits.\
  2.3. The readouts of the slot machine reels.\
  
  2.4 ICEBOX ITEMS: Number of rounds played.
\
_3. Create cache elements:_\
  3.1. All three reels.\
  3.2. Display of credits remaining. \
  3.3. Amount being bet from credits.\

  3.4 ICEBOX ITEMS: Number of rounds played; audio cues.)
\
_4. When loaded, the app should:_\
  4.1 Initialize state variables:\
    4.1.1. Render/reset the wheels. \
    4.1.2. Fill the player wallet with credits.\
    4.1.3. Set the starting minimum bet.\
\ 
  4.1.5. Handle player interaction:\
    4.1.5.1  The BET 1 button, which adds money incrementally to a betting pool (up to 3 credits).\
    4.1.5.2. The BET MAX button, which adds the maximum bet of 3 credits to the pool in one click.\
    4.1.5.3. Display the amount the player has chosen to bet vs the remaining wallet amount.\
    4.1.5.4. The LEVER commits the wager and randomizes the reels, each timing out after the previous.\
    4.1.5.5. The RESET works to reinitiate the game without having to hard-reload the page.\
\  
  4.2 ICEBOX ITEMS: Audio feedback for using controls or earning winnings; audio toggle-switch; Rounds-Played counter (resettable).\
\
_5. Determine outcome:_\
  5.1 Compare the reels' values against winning conditions from 1.2.\
  5.1.1. Erase the amount wagered if 5.1 determines the player lost (e.g. x|$|x = Lose).\
  5.1.2. Add money to the wallet if they won, based on outcome (e.g. C|C|C = Win Wager; $|$|$ = Big Money; 7|7|7 = JACKPOT).\
  5.1.3. Allow player to either continue as desired, or end the game if the wallet is empty.

  5.2 ICEBOX ITEMS: Expand the reels' sizes to 3x3 array; add play/win lines to multiple horizontal and diagonal readings; include increased wagers and payouts to match)