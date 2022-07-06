var indexQ = 0;
var choicesEl = document.getElementById("Choices")
var sunshineEL= document.getElementById("Sunshine");
var questions = [ {

    question: "How much sleep do you get per night?",
    answers: ["a: 0-3 Hours","b: 4-7 Hours", "c: 8-11 Hours", "d: 12-15 Hours"],
    answerValues: ["a:1", "b:2", "c:3", "d:4"]
} ,

{

    question: "How long does it take you to fall asleep every night?",
    answers: ["a: 15 minutes or less", "b: At least 30 minutes", "c: At least 45 minutes", "d: At least 60 minutes",],
    answerValues: ["a:1", 'b:2', 'c:3', 'd:4'] 

} ,

{

    question: "How much has your standard weight changed?",
    answers: ["a: My weight hasnt changed", "b: Ive gained some weight", "c: Ive gained much weight", "d: Ive lost some weight",],
    answerValues: ["a:1", 'b:2', 'c:3', 'd:4'] 
} ,

{

    question: "Has your appetite changed?",
    answers: ["a: I often loose my appetite", "b: Im eating way too much", "c: There isnt much change to my appetite", "d: I have a good and healthy appetite"],
    answerValues: ["a:1", 'b:2', 'c:3', 'd:4'] 
} ,

{

    question: "How often do you experience tightness in your chest?",
    answers: ["a: Daily", "b: Weekly", "c: Monthly", "d: Never"],
    answerValues: ["a:1", 'b:2', 'c:3', 'd:4'] 
} ,

{

    question: "How often do you wake up with exhaustion after a night's rest?", 
    answers: ["a: Daily", "b: Weekly", "c: Monthly", "d: Never"],
    answerValues: ["a:1", 'b:2', 'c:3', 'd:4'] 

} ,

{

    question: "How do you value yourself relative to society?",
    answers: ["a: Im just as important to society as everyone", "b: Im somewhat important to society as everyone", "c: Im not important to society", "d: I bring no value to the world"],
    answerValues: ["a:1", 'b:2', 'c:3', 'd:4'] 
} ,

{

    question: "How is your energy daily?",
    answers: ["a: My energy is the same it's always been", "b: Im more fatigued than usual", "c: It takes a surplus of energy to complete daily tasks (work, eat, school, cooking)", "d: I dont have the energy to complete my daily tasks"],
    answerValues: ["a:1", 'b:2', 'c:3', 'd:4'] 
} ,

{

    question: "How often are you sad?",
    answers: ["a: 1% - 20% of the time", "b: 21% - 40% of the time", "c: 41% - 80% of the time", "d: 81% - 100% of the time"],
    answerValues: ["a:1", 'b:2', 'c:3', 'd:4'] 
} ,


{
    question: "How is your general interest in life?",
    answers: [ "a: Theres not much change of how interested I am in people and activities", "b: ive noticed im somewhat less interested in people and activities", "c: Ive noticed im drastically less interested in people and activities I formerly pursued", "d: I have no interest in people and activities I once had interest in before"],
    answerValues: ["a:1", 'b:2', 'c:3', 'd:4'] 

} ,

]


console.log(questions[0].question)

function questionPlease(){


var pikachu = questions[indexQ] ;

sunshineEL.textContent = "";

sunshineEL.textContent = pikachu.question

pikachu.answers.forEach(function(choice) {

    var choicePattern = document.createElement("Button"); 
    choicePattern.setAttribute("value",choice);
    choicePattern.textContent = choice;
    choicesEl.append(choicePattern); 
    choicePattern.addEventListener("click", "nextQuestion")

})


}

function nextQuestion() {
    var clickButton = event.target.textContent;
    indexQ++;
    questionPlease();
}

questionPlease();




