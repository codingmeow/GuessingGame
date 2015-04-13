$(document).ready(function(){
  var randomNum = Math.floor((Math.random()*100)+1);
  var guesses = [];
  var value;
  var hot = "You are hot - ";
  var cold = "You are cold - ";
  var veryHot = "You are very hot - ";
  var veryCold = "You are very cold - ";
  var higher = "higher";
  var lower = "lower";
  function answerIs(){
    return randomNum;
  }
  function isRepeat(lastNum){
      for (var i=0; i<guesses.length-1;i++){
        if (lastNum === guesses[i]){
          return true;
        }
        return false;
      }
  }
  function count(){
    return guesses.length;
  }
  $('#newGame').on('click', function(){
    location.reload();
  });

  $('#giveAnswer').on('click', function(){
      // $('.hint').text("The number is " + answerIs() + ". Please play again!");
      guesses = [];
        $('.message').empty();
        $('.winner').text("The number is " + answerIs() + ". Please play again!");
        $('.winner').append('<img id="winner" src="http://s2.quickmeme.com/img/5c/5c1b310391c769df809686c4849681672cea459f33c501c1435ed1cb0e060961.jpg" />');
  });

  $('#submitGuess').on('click', function(){
    value = +$('#numberGuess').val();
    guesses.push(value);
    var lastNum = guesses[guesses.length-1];
    
    if (count() == 5) {
        guesses = [];
        $('.hint').removeClass();
        $('.message').addClass('gameOver').text("Game over! No More Guesses. Please press new game to play again.");
    }
    else if (isNaN(value) || value>100 || value<0){
      guesses.pop();
      alert("Please enter a valid number from 1-100.");
    }
    else if (isRepeat(lastNum)){
      guesses.pop();
      alert("Don't repeat yourself!");
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
  $("#numberGuess").keypress(function (e) {
    if (e.which == 13) {
      $('#submitGuess').trigger('click');
      $("#numberGuess").val('').removeAttr('checked').removeAttr('selected');
      e.preventDefault();
    }
  });
});