var submitButtonEl = document.getElementById("btnSubmit")
var titleEl = document.getElementById("title")
var homeStatment = document.getElementById("instructions")
var buttonsEl = document.getElementById("btnSubmit")
var questions = document.querySelector("quizQuestions");


// -------Quiz Array of questions, possible answers and correct answer --------
var questions1 = 
    {question: "Commonly used data types DO Not Include:",
        possibleAnswers: ["1. string", "2. booleans", "3. alerts", "4. numbers"],
        answer: "alerts"};
var questions2 = 
        {
        question: "The condition in an if/else statement is enclosed with _____________.",
        possibleAnswers: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
};
var questions3 = 
{
        question: "Arrays in JavaScript can be used to store _____________.",
        possibleAnswers: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
};
var questions4 = 
{
        question: "String values must be enclosed within __________ when being assigned to variables.",
        possibleAnswers: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: "quotes"    
};
var questions5 =
{
        question: "A very useful tool used during development and debugging for printing content to the debugger is",
        possibleAnswers: ["JavaScript", "terminal/bash", "for loop", "console.log"],
        answer: "console.log"
};

function quizQuestions(){   
    question1 = document.createElement("p");
    question1.textContent = questions1.question;
    question1.className = "quizQuestions";
    document.getElementById("quizQuestions").appendChild(question1);
    
}

function createAnswerBtns1(){
    var answer = questions1.possibleAnswers;
    for (var i = 0; i <answer.length; i++) {
        var answerBtnsEl = document.createElement("button");
    answerBtnsEl.textContent = answer[i];
    answerBtnsEl.className = "answerBtns";
    document.getElementById("quizAnswers").appendChild(answerBtnsEl);
    }
}




submitButtonEl.addEventListener('click', startQuiz)

function startQuiz() {
    titleEl.style.display = "none";
    homeStatment.style.display = "none";
    submitButtonEl.style.display = "none";

    quizQuestions();
    createAnswerBtns1();
}




