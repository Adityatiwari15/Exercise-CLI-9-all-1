var readlineSync = require ('readline-sync');
// Data base
var score = 0;
var highScores = [
  {
    name: "ADI",
    score: 3,
  },
  {
    name: "abhi",
    score: 2,
  }
] 


// array of questions 
var question=[
  {
    question:"What is the capital of India?",
    answer:"new delhi"},

  { question:"What is the capital of punjab?",
    answer:"chandigarh"},

  { question:"What is the capital of bihar?",
    answer:"patna"}
  
]

// Logic Backend
function welcome(){
  var userName = readlineSync.question("May I know your name please? ")
  console.log("-----------------")
  console.log("-----------------")

  console.log("Welcome "+userName+ ", Nice to have you here! ")
  
  console.log("-----------------")
  console.log("-----------------")

}

console.log("_________________")
console.log("_________________")


function quiz(question,answer){
//  asking question
  userAnswer=readlineSync.question(question)
// verify answer
if (userAnswer.toUpperCase() === answer.toUpperCase()){
  score = score+1;
  console.log("your answer is correct")
}
else {
  console.log("your answer is incorrect")
}
console.log("your score: "+ score)
console.log("_________________")
console.log("_________________")

}

function play(){
  for (var i=0; i<question.length; i++){
    var currentQuestion=question[i];
    quiz(currentQuestion.question,currentQuestion.answer)
  }

}

function finalScores(){
  console.log("Your final score is "+ score);
  console.log(highScores);
}
// frontend
welcome();
play();
finalScores();