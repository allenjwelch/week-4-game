//variables
var userScore = 0; 
var counter = 0; 
var goalNum; 
var gemNum = []; 
var orangeValue =''; 
var gemImages = $('#gems'); 
var gameActive = true; 

function resetGame() {
    gameActive = true; 
    counter = 0; 
    goalNum = 0; 
    gemNum = []; 
    gemValue = 0; 
    gemImages.unbind('click');
    console.log('GAME RESET'); 
    gamePlay(); 
}; 

function gamePlay() {
  //START
  // if (gameActive === true) {
    //select and display random # goalNum (btn 19-120)
  
  goalNum = (Math.floor(Math.random() * 100)+19); 
    console.log('goalNum', goalNum);
  
    //generate random # for crystals (1-12)
  for (i = 0; i < 4; i++) {
    gemNum[i] = (Math.floor(Math.random() * 12)+1); 
  } console.log('gemNum', gemNum); //------------Checks for gemNum
  
    //assign gemNum to crystals
    $('#orangeGem').attr("value", gemNum[0]);
      // orangeValue = $('#orangeGem').attr("value", gemNum[0]);
    $('#blueGem').attr("value", gemNum[1]);
    $('#redGem').attr("value", gemNum[2]);
    $('#purpleGem').attr("value", gemNum[3]);
    // console.log('Img Value Check: ', orangeGem, blueGem, redGem,purpleGem); //---Checks Img Vals
  
    //when clicked, add gemNums to userNum
    gemImages.on('click', '.gemImgs', function() {
      gemValue = ($(this).attr("value"));
      gemValue = parseInt(gemValue);
      console.log('gemValue: ', gemValue);
  
      counter += gemValue; 
      console.log('counter', counter);
  
      if (counter === goalNum) {
        userScore++; 
        alert('You WIN!'); 
        // gameActive = false; 
        resetGame(); 
  
      } else if (counter > goalNum) {
        alert('You SUCK!'); 
        // gameActive = false; 
        resetGame(); 
      }
    }); 
    





}; 

gamePlay(); 