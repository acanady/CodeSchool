/*console.log("Hello World");
console.log("Alfonso");

//declaring variable x, setting it to 20
var x; //variable declaration
x = 20;//varaible assignment

console.log(x); //Prints out the value stored in x

var myName = "Christopher";
console.log(myName);

var my_age = 52;

var userAge = prompt("How old are you?");
console.log(userAge);

*/

/*var sleepy = false;
var hungry = false;

console.log(!sleepy);

if(sleepy||hungry){
  alert("Eat and get some rest");
}*/

function writeName(){
  var userName = prompt("What is your name?");
  //document.write();
  document.getElementsById("welcome").innerHTML=("Welcome " + userName + "!");
}

function getUserAge(){
  var userAge = prompt("What is your age?");
  if (userAge >= 21){
    writeName();
  }
  else if(userAge >= 13){
    writeName();
  }
  else{
    alert("You need parental permission");
  }
}

//A return statement returns a value and leaves the function immediately once it does

function checkWord(guessedWord){
  if(guessedWord == 5){
    return true;
  }
  else{
    return false;
  }
}

function guessingGame(){
  var word = prompt("Guess a number between 1 and 10");
  var guessedCorrectly = checkWord(word);
    if(guessedCorrectly){
      alert("Correct number guessed");
      return true;
    }
    else{
      alert("Incorrect number guessed");
      return false;
    }
}

//guessingGame();
//console.log(checkNumber());


//console.log(hungry);



/*for(let i = 0; i < 10; i++){
  if(guessingGame() == true){
    break;
  }
}

var sleepy = true;
var question;

while(sleepy == true){
  question = prompt("are you sleepy?, yes or no?")
  if(question == "no"){
    sleepy = false;
  }
}

let quest = prompt("what is your name")
  if(quest == null){
    alert("incorrect");
  }*/

//Operators in Use

//+,-,*,/,%

//multiplication uses the * (asterisk) symbol
//division uses the / (forward slash) symbol

/*console.log(3 * 8);
console.log(4 / 2);
console.log(2/4);
console.log(3 + 8);
console.log(3-8);*/

//modulo returns the remainder of a division operation

//console.log(3 % 4);

//The comparison operators
// <,>,<=,>=,==,!=,===,!==

//var userAge = prompt("Enter your age");

//console.log(userAge < 15);

/*if (userAge < 15){
  alert("You need parental permission to use this site!");
}*/

/*if (userAge > 15){
  alert("You are allowed to use this site!");
}*/

/*if (userAge >= 15){
  alert("You are allowed to use this site!");
}*/

/*if (userAge == 15){
  alert("You are 15 yeard old");
}*/

/*if (userAge != 15){
  alert("You are not 15 yeard old");
}*/

/*console.log(3==="3");

console.log(3 !== "3");

console.log(3 != "3");

//if the user types in 17 for their age, what will the output be?
var userAge = 12;

if(userAge < 12 && userAge > 5){
  alert("You are older than 6 and less than 11 inclusively");
} 
else{
    alert("You are younger than 12 and younger than 6");
}*/

/*else if(userAge > 15){
   alert("You are older than 15"); 
}
else{
  alert("You are between 12 and 15");
}*/

//Logical operators
// && (and) || (or) !(not)

//The && returns true if both operands are true otherwise returns false
//The || operator returns true if one operand is true otherwise returns false
//The ! operator returns true if the operand is false otherwise returns false

var sleepy = true;
var hungry = false;
//var x = 15;

/*if(sleepy&&hungry){
  alert("You are sleepy and hungry!");
}

if(sleepy||hungry){
  alert("You are sleepy or hungry!");
}

if(!sleepy){
  alert("You are not sleepy");
}

if(!hungry){
  alert("You are not hungry");
}
*/

//var starCount = prompt("How many stars?");

/*for(let i = 1; i <= starCount; i++){
  console.log(i);
}*/

let x = 5;
console.log(--x);
console.log("my value for x is: " + x);

//I want a function that takes in a value and multiplies it by 2 and then returns that value

function multiply(x){
  document.write(x*2);
  let mult = x*2;
  return mult;
}

//Prompt the user to enter paper, if they don't enter paper, continue asking until they do
//Put this inside of a function, it does not need a paramter or a return value
//multiply(10);

/*
function paper(){
  let question = prompt("What is something rectangular that you write on?");
  while(question != "paper"){
    for(let i = 0; i < 5; i++){
      question = prompt("What is something rectangular that you write on?");

    }
    alert("Please enter paper");
  }
}

paper();*/

//Ask the user to enter a number between 1 and 10 and then tell the user if they guessed
//too low or too high and correctly

function guessNumber() {
  var number = prompt("Guess a number between 1 and 10");
  var correctNum = 9;

  if (correctNum == number) { //then
    alert("You guessed correctly");
    return true;
  }

  if (correctNum < number) { //then
    alert("You are incorrect your number is too high");
    return false;
  }

  if (correctNum > number) { //then
    alert("You are incorrect your number is too low");
    return false;
  }
}

//Loop the game until they guess the right number, it may be useful to store the
//guessing portion inside of a function

//we create a variable called stop guessing
let stopGuessing = false;
//stopGuessing is false


//If stopGuessing is equal to false, we actually continue guessing
//Once stopGuessing is true, we will stop guessing

while(stopGuessing == false){
  stopGuessing = guessNumber();
}

//Here we prompt the user for a number and then loop that many times
var amount = prompt("Enter a number");
for(let i = 0; i < amount; i++){
  console.log(i); 
}
