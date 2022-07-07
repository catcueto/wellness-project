var healthOrgApi = 'https://health.gov/myhealthfinder/api/v3/topicsearch.json?TopicId=30560';
var dogBtnEl = document.querySelector('#dogBtn')
var indexQ = 0;
var questionEL= document.getElementById("question");
var choicesEl = document.getElementById("options");
var scoreBox = document.getElementById("scores");
var score = 0;

var lastTookQuiz = moment().format("MMM Do hh:mm:ss");
$("#3a").text(lastTookQuiz);
var questions = [ {
  // happiness = bigger score sadness unending is 0

  question: "How much sleep do you get per night?",
  answers: ["a: 0-3 Hours","b: 4-7 Hours", "c: 8-11 Hours", "d: 12-15 Hours"],
  answerValues: [1, 3, 4, 2]
} ,

{

  question: "How long does it take you to fall asleep every night?",
  answers: ["a: 15 minutes or less", "b: At least 30 minutes", "c: At least 45 minutes", "d: At least 60 minutes",],
  answerValues: [4, 3, 2, 1] 

} ,

{

  question: "How often do you experience tightness in your chest?",
  answers: ["a: All the time", "b: Some of the time", "c: Very rarely", "d: Never"],
  answerValues: [1, 2, 3, 4]  
} ,

{

  question: "How frequently do you wake up with exhaustion after a night's rest?", 
  answers:  ["a: All the time", "b: Some of the time", "c: Very rarely", "d: Never"],
  answerValues: [1, 2, 3, 4]  

} ,

{

  question: "How do you value yourself relative to society?",
  answers: ["a: Im just as important to society as everyone else", "b: Im somewhat important to society", "c: Im not important to society", "d: I bring no value to the world"],
  answerValues: [4, 3, 2, 1]  
} ,

{

  question: "How is your energy daily?",
  answers: ["a: I have the energy to complete daily tasks well", "b: I can accomplish most daily tasks with effort", "c: I complete some of my daily tasks and that is challenging", "d: I cannot complete any of my daily tasks"],
  answerValues: [4, 3, 2, 1]  
} ,


{
  question: "How is your general interest in life?",
  answers: [ "a: I am excited about my life", "b: I am content with my life", "c: I am dispassionate about my daily life", "d: I am disappointed with my daily life"],
  answerValues: [4, 3, 2, 1]  

} ,

{
  question: "How is your general interest in life?",
  answers: [ "a: I am excited about my life", "b: I am content with my life", "c: I am dispassionate about my daily life", "d: I am disappointed with my daily life"],
  answerValues: [4, 3, 2, 1]  

}

]

function randoDogAPI() {
    var requestUrl = 'https://dog.ceo/api/breeds/image/random';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data.message);
      var url = data.message
      var fillDogImg = document.querySelector('#dogImg').setAttribute('src', url);
      return fillDogImg;
    });
}


function questionPlease(){

  var pikachu = questions[indexQ] ;
  
  questionEL.innerHTML = pikachu.question
  choicesEl.innerHTML ='';
  i = 0;
  pikachu.answers.forEach(function(choice) {
  
      var choicePattern = document.createElement("Button"); 
      choicePattern.setAttribute("value",choice);
      choicePattern.setAttribute('id-number', pikachu.answerValues[i])
      choicePattern.textContent = choice;
      choicesEl.append(choicePattern); 
      choicePattern.addEventListener("click", nextQuestion)
      i++;
  })
  
  }
  

  function nextQuestion(event) {
      var clickButton = event.target.getAttribute('id-number');
      var numVal = parseInt(clickButton);
      score = score + numVal; // sums number values to scored answers on click
      indexQ++;
      if (indexQ == 7) {
        choicesEl.innerHTML = "";
        questionEL.innerHTML = "Your Current Wellness score is: " + score + " out of 28.";
        scoreScreen();
    }
    if (indexQ < 6) {
        questionPlease();
    }
  }
  

  function allStorage() {
    var archive = [],
        keys = Object.keys(localStorage),
        i = 0, key;
    for (; key = keys[i+1]; i++) {
        archive.push(localStorage.getItem(key));
    }
    return archive;
}


function scoreScreen() {
    localStorage.setItem(lastTookQuiz, score);
    var highscore = allStorage();
    var highscoreArr = JSON.stringify(highscore).split(",");
    var highscoreUL = document.createElement("ul");
    highscoreArr.forEach((highscore) => {
        // console.log(highscore);
        var highscoreLI = document.createElement("li");
        highscoreUL.append(highscoreLI);
        scoreBox.append(highscoreUL);
        var highscoreClean = highscore.replace(/[\[\]\"\']+/g,'');
        highscoreLI.textContent = "Previous score: " + highscoreClean; 
    });
}


  dogBtnEl.addEventListener('click', randoDogAPI);
  randoDogAPI();
  questionPlease();