$(document).ready(function(){
  var randomNum = Math.floor((Math.random()*100)+1);
  console.log(randomNum);
  var guesses = [];
  var value;
  

  $('#submitGuess').click(function(){
    value = +$('#numberGuess').val();
    guesses.push(value);
    console.log(guesses);
    if (guesses.length == 5) {
        $('.hint').removeClass();
        $('.message').addClass('gameOver').text("Game over! Please press new game to play again.");
    }
    for (var i=0; i<guesses.length;i++){
      if (guesses[i] === randomNum){
        guesses = [];
        $('.message').empty();
        $('.winner').text("You won! Please press new game to play again.");
        $('.winner').append('<img id="winner" src="http://www.inarascott.com/wp-content/uploads/2013/11/w.png" />');


      }
      else if (guesses[i] > randomNum){
          $('.hint').text("Guess lower");
      }
      else if (guesses[i] < randomNum){
        $('.hint').text("Guess higher");
      }
    }
  });

  

  
  // $('#newGame').click(function(){
  //   guesses = [];
  //   randomNum = Math.floor((Math.random()*100)+1);
  //   console.log("reloaded!");
  // });
  

});
