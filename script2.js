 alert("Welcome To the Guessing number game!");

 let secretnumber=5;

let guess=prompt( "Guess the number between 1 to 10");

 while (guess != secretnumber){
    if(guess>secretnumber){
    alert("Too High");
 }
 else{
  alert ("Too low") ;
 }
 
 guess=prompt("Try again! guess a number between 1 to 10");}
  
 
   alert("congratualtion!, You guess the correct number.");
 console.log("secretnumber:",secretnumber);
 console.log("guess:",guess );
