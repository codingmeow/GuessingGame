$(document).ready(function(){
  var randomNum = Math.floor((Math.random()*100)+1);
  console.log(randomNum);
  var guesses = [];
  var value;
  var hot = "You are hot - ";
  var cold = "You are cold - ";
  var veryHot = "You are very hot - ";
  var veryCold = "You are very cold - ";
  var higher = "higher";
  var lower = "lower";
  
  

  $('#submitGuess').click(function(){
    value = +$('#numberGuess').val();
    guesses.push(value);
    console.log(guesses);
    if (guesses.length == 5) {
        $('.hint').removeClass();
        $('.message').addClass('gameOver').text("Game over! Please press new game to play again.");
    }
    else if (isNaN(value) || value>100 || value<0){
      alert("Please enter a valid number from 1-100.");
    }
    for (var i=0; i<5;i++){
      var diff = guesses[i]-randomNum;
      if (diff === 0){
        guesses = [];
        $('.message').empty();
        $('.winner').text("You won! Please press new game to play again.");
        $('.winner').append('<img id="winner" src="http://www.inarascott.com/wp-content/uploads/2013/11/w.png" />');
      }
      else if (Math.abs(diff) <= 10){
        if (guesses[i]>randomNum){
          $('.hint').text(veryHot + lower);
        }
        else {
          $('.hint').text(veryHot + higher);
        }
      }
      else if (Math.abs(diff)>10 && Math.abs(diff)<= 30){
        if (guesses[i]>randomNum){
          $('.hint').text(hot + lower);
        }
        else {
          $('.hint').text(hot + higher);
        }
      }
      else if (Math.abs(diff)>30 && Math.abs(diff)<=50){
        if (guesses[i]>randomNum){
          $('.hint').text(cold + lower);
        }
        else {
          $('.hint').text(cold + higher);
        }
      }
      else if (Math.abs(diff)>50){
        if (guesses[i]>randomNum){
          $('.hint').text(veryCold + lower);
        }
        else {
          $('.hint').text(veryCold + higher);
        }
      }
    }
  });

  

  
  // $('#newGame').click(function(){
  //   guesses = [];
  //   randomNum = Math.floor((Math.random()*100)+1);
  //   console.log("reloaded!");
  // });
  

});