var startQuizBtnEl = document.getElementById("btnSubmit");
var titleEl = document.getElementById("title");
var homeStatment = document.getElementById("instructions");
var buttonsEl = document.getElementById("btnSubmit");
//var questionsEl = document.querySelector("quizQuestions");

var displayedQuestion = 0;

// -------Quiz object of questions, possible answers and correct answer --------
var questionsArray = [
    {question: "Commonly used data types DO Not Include:",
        possibleAnswers: ["1. string", "2. booleans", "3. alerts", "4. numbers"],
        answer: "alerts",
},
        {
        question: "The condition in an if/else statement is enclosed with _____________.",
        possibleAnswers: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
        answer: "parentheses",
},

{
        question: "Arrays in JavaScript can be used to store _____________.",
        possibleAnswers: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        answer: "all of the above",
},

{
        question: "String values must be enclosed within __________ when being assigned to variables.",
        possibleAnswers: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
        answer: "quotes", 
},

{
        question: "A very useful tool used during development and debugging for printing content to the debugger is",
        possibleAnswers: ["1. JavaScript", "2. terminal/bash", "3. for loop", "4. console.log"],
        answer: "console.log",
},
]


function quizQuestions()
{
    //add question
    var questionEl = document.createElement("p");
    questionEl.textContent = questionsArray[displayedQuestion].question;
    questionEl.className = "quizQuestions";
    document.getElementById("quizQuestions").appendChild(questionEl);
    
    for (var i = 0; i< questionsArray[displayedQuestion].possibleAnswers.length; i++) {
        var answerBtnsEl = document.createElement("button");
    answerBtnsEl.textContent = questionsArray[displayedQuestion].possibleAnswers[i];
    answerBtnsEl.className = "answerBtns";
    answerBtnsEl.setAttribute('id', [i]);
    document.getElementById("quizAnswers").appendChild(answerBtnsEl);
    }
    
    document.getElementById("0").addEventListener('click', function(){
        document.getElementById("answer").innerHTML = "Wrong Answer"
    })
    
    document.getElementById("1").addEventListener('click', function(){
        
        document.getElementById("answer").innerHTML = "Wrong Answer"
        
    })

    document.getElementById("2").addEventListener('click', function(){
        
        document.getElementById("answer").innerHTML = "Correct Answer"
        
    })

    document.getElementById("3").addEventListener('click', function(){
        document.getElementById("answer").innerHTML = "Wrong Answer"
        
    })
    
}         


startQuizBtnEl.addEventListener('click', startQuiz)

function startQuiz() {
    titleEl.style.display = "none";
    homeStatment.style.display = "none";
    startQuizBtnEl.style.display = "none";

    quizQuestions();
}