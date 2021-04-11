var readlineSync = require("readline-sync");
var score = 0;


//console.log("LEADERBOARD")
var highScores = [
  {
    name: "Va Ni",
    score: 5,
  },

  {
    name: "Akansha",
    score: 6,
  },

   {
    name: "Sharmeen",
    score: 8,
  },
]


var userName = readlineSync.question("Whats your Name? ");
console.log("Welcome " + userName + " Do You Know Shraddha? 🧐 ");

// play function

function play(question, answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer === answer){
    console.log("Right!!");
    score = score + 1;
    
  }else{
    console.log("Wrong!!");
  }
  console.log("Current score: " , score);
    console.log("-------------------------");
}

var questions = [{
  question: "Where do I Live? (State)🌍 ",
  answer: "Maharashtra"
}, {
  question: "My Favourite Color is?🖤 ",
  answer: "Black"
}, {
  question:"My Favourite Dish?🍕 ",
  answer:"Pizza"
}, {
  question:"My Favourite Actress is ?👸 "  ,
  answer:"Deepika"
}, {
  question:"My Favourite Movie?💃 ",
  answer:"Om Shanti Om"
}, {
  question:"I Love Tea or Coffee?☕ ",
  answer:"Coffee"
}, {
  question:"My Favourite Carootn Character?🎃 ",
  answer:"Doraemon"
}
];

//loop

for(var i=0; i<questions.length; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

console.log("YAY!! 😍   " + userName + " You scored:     🥰" , score)

console.log("Check out the high scores, Send Me Screenshot of Your Score 😍");

 highScores.map(score => console.log(score.name, " : ", score.score))
