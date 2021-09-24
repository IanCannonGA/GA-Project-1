#GA-SEI-Project-1-Slot-Machine
- General Assembly - Software Engineering Immersive - Project 1 -

**SLOT MACHINE - PSEUDOCODE**

_1. Define required constants:_\
  1.1. An object for the reel, with lowest-value items as most populated (e.g. 4x Cherry, 3x $, 2x 7, 1x JACKPOT).\
  1.2. A set of winning conditions. (n.b. 3x10 slots = 1000 outcomes... brute force is inadvisable; a total-value-of-reels may be needed.)

_2. Define variables to track the game state:_\
  2.1. The player "wallet."\
  2.2. The readouts of the slot machine reels.\
  2.3. The amount wagered from the wallet.\
  (ICEBOX 2.4. The number of rounds played.)

_3. Create cache elements:_\
  3.1. All three reels.\
  3.2. Wallet display of credits remaining. \
  3.3. Amount being bet from the Wallet.\
  (ICEBOX 3.4. Total number of rounds played.)

_4. When loaded, the app should:_\
  4.1 Initialize state variables:\
    4.1.1. Render/reset the wheels. \
    4.1.2. Fill the player wallet with credits.\
    4.1.3. Set the starting minimum bet.\
    (ICEBOX 4.1.4. Reset number of rounds played.)
    
  4.1.5. Handle player interaction:\
    4.1.5.1  The BET UP button, which adds money incrementally to a betting pool (up to current wallet value).\
    4.1.5.2. The BET DOWN button, which decrements from the betting pool (and back into the wallet).\
    4.1.5.3. Display the amount the player has chosen to bet vs the remaining wallet amount.\
    4.1.5.4. The LEVER commits the wager and randomizes the reels, each timing out after the previous.\
    (ICEBOX 4.1.5.5. Update number of rounds played so far.)\
    (ICEBOX 4.1.5.6. Play sounds and/or visual flash effects until reels time out.)
    
_5. Determine outcome:_\
  5.1 Compare the reels' values against winning conditions from 1.2.\
  5.1.1. Erase the amount wagered if 5.1 determines the player lost (e.g. C|x|x = Lose).\
  5.1.2. Add money to the wallet if they won, based on outcome (e.g. C|C|C = Win Wager; $|$|$ = Big Money; 7|7|7 = JACKPOT).\
  5.1.3. Allow player to either continue as desired, or end the game if the wallet is empty.
