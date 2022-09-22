
  var y = Math.floor(Math.random()* 10 + 1);
// counting the number of guesses
var x = document.getElementById("guessField").ariavalue;
// made for correct Guess

  
// function for number guessed by user     
function submit()
{

}


if(x == y){
alert("CONGRATULATIONS !!!"+ playername+"YOU GUESSED IT RIGHT IN " 
+ Guess + "GUESS");
guess=1;


} 

else
{
  guess++;
  alert("OOPS SORRU!! TRY A GREATER NUMBER")
}

function playeAgain(){
  y =Math.floor(Math.random()*10 + 1);
}