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
    $('#gemCounterDisplay').text('--'); //-----Displays on screen
    $("#win").delay("slow").animate({ opacity: "0"});
    $("#lose").delay("slow").animate({ opacity: "0"});
    console.log('GAME RESET'); 
    gamePlay(); 
}; 

function playAudio() {
  var audio = document.getElementById('audio'); 
  // if (audio.paused) {
  //   audio.play(); 
  //   audio.delay('slow').currentTime = 0; 
  // } else {
  //   audio.currentTime = 0; 
  // }
  
  // audio.currentTime = 0; 
  audio.play(); 
  // audio.delay('slow').pause(); 


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
  $('#goalNumberDisplay').text(goalNum); //-----Displays on screen


    //assign gemNum to crystals
    $('#orangeGem').attr("value", gemNum[0]);
      // orangeValue = $('#orangeGem').attr("value", gemNum[0]);
    $('#blueGem').attr("value", gemNum[1]);
    $('#redGem').attr("value", gemNum[2]);
    $('#purpleGem').attr("value", gemNum[3]);
    // console.log('Img Value Check: ', orangeGem, blueGem, redGem,purpleGem); //---Checks Img Vals
  
    //when clicked, add gemNums to userNum
    gemImages.on('click', '.gemImgs', function() {
      playAudio(); 
      // document.getElementById('audio').play(); 
      gemValue = ($(this).attr("value"));
      gemValue = parseInt(gemValue);
      console.log('gemValue: ', gemValue);
      
      counter += gemValue; 
      console.log('counter', counter);
      $('#gemCounterDisplay').text(counter); //-----Displays on screen
      
      if (counter === goalNum) {
        userScore++; 
        // alert('You WIN!'); 
        $("#win").animate({ opacity: "1" });


        $('#userScoreDisplay').text(userScore); //-----Displays on screen
        resetGame(); 
  
      } else if (counter > goalNum) {
        userScore--; 
        // alert('You SUCK!'); 
        $("#lose").animate({ opacity: "1"});

        $('#userScoreDisplay').text(userScore); //-----Displays on screen
        resetGame(); 
      }
    }); 
    





}; 

gamePlay(); 


// $(".vis-button").on("click", function() {
//   $(".captain-planet").animate({ opacity: "1" });
// });

        // // Create an audio element with JavaScript
        // var audioElement = document.createElement("audio");

        // // Set it's source to the location
        // // of our Captain Planet theme song file.
        // audioElement.setAttribute("src", "Assets/captainplanet24.mp3");

        // // Theme Button
        // $(".theme-button").on("click", function() {
        //   audioElement.play();
        // });

        // // Pause Button
        // $(".pause-button").on("click", function() {
        //   audioElement.pause();
        // });