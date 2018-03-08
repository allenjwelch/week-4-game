// VARIABLES
var userScore = 0; 
var userPlayer; 
var mechaGodzilla; 
var megaZord; 
var ironGiant; 
var optimusPrime; 

// attribute variables
var hp = []; 
var ap = []; 
var cap = []; 

for (i = 0; i < 4; i++) {
  hp[i] = (Math.floor(Math.random() * 100)+1); 
  ap[i] = (Math.floor(Math.random() * 100)+1); 
  cap[i] = (Math.floor(Math.random() * 100)+1);  //---- MAY NEED TO LOWER #s
} 
  console.log('hp:', hp); 
  console.log('ap:', ap); 
  console.log('cap:', cap);//------------Checks random hp, ap, & cap assignments


// Each character in the game has 3 attributes: Health Points, Attack Power and Counter Attack Power.


// FUNCTIONS



// GAME PLAY FUNCTION

// ----------- randomally create values for hp, ap, & cap



// -----------user chooses a player from the available characters 
// -----------userPlay moves to #defenderArea
// -----------other characters turn red
// -----------user chooses from available characters to bring down to #defenderArea
// -----------user clicks #attackBtn to fight defender
// -----------user's attack strength++ and defender hitpoints - attack
// -----------defender counter attacks and user hitpoint - counter attack
// -----------IF defender's hitpoints <= 0, defender disappers and user selects another character to fight again
// -----------IF no other characters remain, user wins
// -----------





// CALL FUNCTIONS