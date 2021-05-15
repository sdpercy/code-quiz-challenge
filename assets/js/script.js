var startQuizBtnEl = document.getElementById("btnSubmit");
var titleEl = document.getElementById("title");
var homeStatment = document.getElementById("instructions");
var buttonsEl = document.getElementById("btnSubmit");
var timeInterval;
var secondsEl = document.getElementById("timespan").innerText;



//Declared variables
var displayedQuestion1 = 0;
var displayedQuestion2 = 1;
var displayedQuestion3 = 2;
var displayedQuestion4 = 3;
var displayedQuestion5 = 4;



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


function quizQuestion1()
{
    //add question
    var questionEl = document.createElement("span");
    questionEl.textContent = questionsArray[displayedQuestion1].question;
    questionEl.className = "quizQuestions";
    questionEl.setAttribute("id", "quizQuestion");
    document.getElementById("quizQuestions").appendChild(questionEl);
    //answer buttons
    for (var i = 0; i< questionsArray[displayedQuestion1].possibleAnswers.length; i++) {
        var answerBtnsEl = document.createElement("button");
    answerBtnsEl.textContent = questionsArray[displayedQuestion1].possibleAnswers[i];
    answerBtnsEl.className = "answerBtns";
    answerBtnsEl.setAttribute('id', [i]);
    document.getElementById("quizAnswers").appendChild(answerBtnsEl);
    }
    //Display if selection was right or wrong
    document.getElementById("0").addEventListener('click', function(){
        document.getElementById("answer").innerHTML = "Wrong Answer"
        removeEl();
        quizQuestion2();
    })
    document.getElementById("1").addEventListener('click', function(){ 
        document.getElementById("answer").innerHTML = "Wrong Answer"
        removeEl();
        quizQuestion2();
    })
    document.getElementById("2").addEventListener('click', function(){
        document.getElementById("answer").innerHTML = "Correct Answer"
        removeEl();
        quizQuestion2();
    })
    document.getElementById("3").addEventListener('click', function(){
        document.getElementById("answer").innerHTML = "Wrong Answer"
        removeEl();
        quizQuestion2();
    }) 
}

function quizQuestion2()
{   
    //add question
    var questionEl = document.createElement("span");
    questionEl.textContent = questionsArray[displayedQuestion2].question;
    questionEl.className = "quizQuestions";
    questionEl.setAttribute("id", "quizQuestion");
    document.getElementById("quizQuestions").appendChild(questionEl);
    //answer buttons
    for (var i = 0; i< questionsArray[displayedQuestion2].possibleAnswers.length; i++) {
        var answerBtnsEl = document.createElement("button");
    answerBtnsEl.textContent = questionsArray[displayedQuestion2].possibleAnswers[i];
    answerBtnsEl.className = "answerBtns";
    answerBtnsEl.setAttribute('id', [i]);
    document.getElementById("quizAnswers").appendChild(answerBtnsEl);
    }
    //Display if selection was right or wrong
    document.getElementById("0").addEventListener('click', function(){
        document.getElementById("answer").innerHTML = "Wrong Answer"
        removeEl();
        quizQuestion3();
    })
    document.getElementById("1").addEventListener('click', function(){ 
        document.getElementById("answer").innerHTML = "Wrong Answer"
        removeEl();
        quizQuestion3(); 
    })
    document.getElementById("2").addEventListener('click', function(){
        document.getElementById("answer").innerHTML = "Correct Answer"
        removeEl();
        quizQuestion3();
    })
    document.getElementById("3").addEventListener('click', function(){
        document.getElementById("answer").innerHTML = "Wrong Answer"
        removeEl();
        quizQuestion3(); 
    })
}

function quizQuestion3()
{   
    //add question
    var questionEl = document.createElement("span");
    questionEl.textContent = questionsArray[displayedQuestion3].question;
    questionEl.className = "quizQuestions";
    questionEl.setAttribute("id", "quizQuestion");
    document.getElementById("quizQuestions").appendChild(questionEl);
    //answer buttons
    for (var i = 0; i< questionsArray[displayedQuestion3].possibleAnswers.length; i++) {
        var answerBtnsEl = document.createElement("button");
    answerBtnsEl.textContent = questionsArray[displayedQuestion3].possibleAnswers[i];
    answerBtnsEl.className = "answerBtns";
    answerBtnsEl.setAttribute('id', [i]);
    document.getElementById("quizAnswers").appendChild(answerBtnsEl);
    }
    //Display if selection was right or wrong
    document.getElementById("0").addEventListener('click', function(){
        document.getElementById("answer").innerHTML = "Wrong Answer"
        removeEl();
        quizQuestion4();
    })
    document.getElementById("1").addEventListener('click', function(){ 
        document.getElementById("answer").innerHTML = "Wrong Answer"
        removeEl();
        quizQuestion4(); 
    })
    document.getElementById("2").addEventListener('click', function(){
        document.getElementById("answer").innerHTML = "Wrong Answer"
        removeEl();
        quizQuestion4();
    })
    document.getElementById("3").addEventListener('click', function(){
        document.getElementById("answer").innerHTML = "Correct Answer" 
        removeEl();
        quizQuestion4();
    })
}

function quizQuestion4()
{   
    //add question
    var questionEl = document.createElement("span");
    questionEl.textContent = questionsArray[displayedQuestion4].question;
    questionEl.className = "quizQuestions";
    questionEl.setAttribute("id", "quizQuestion");
    document.getElementById("quizQuestions").appendChild(questionEl);
    //answer buttons
    for (var i = 0; i< questionsArray[displayedQuestion4].possibleAnswers.length; i++) {
        var answerBtnsEl = document.createElement("button");
    answerBtnsEl.textContent = questionsArray[displayedQuestion4].possibleAnswers[i];
    answerBtnsEl.className = "answerBtns";
    answerBtnsEl.setAttribute('id', [i]);
    document.getElementById("quizAnswers").appendChild(answerBtnsEl);
    }
    //Display if selection was right or wrong
    document.getElementById("0").addEventListener('click', function(){
        document.getElementById("answer").innerHTML = "Wrong Answer"
        removeEl();
        quizQuestion5();
    })
    document.getElementById("1").addEventListener('click', function(){ 
        document.getElementById("answer").innerHTML = "Wrong Answer" 
        removeEl();
        quizQuestion5();
    })
    document.getElementById("2").addEventListener('click', function(){
        document.getElementById("answer").innerHTML = "Correct Answer"
        removeEl();
        quizQuestion5();
    })
    document.getElementById("3").addEventListener('click', function(){
        document.getElementById("answer").innerHTML = "Wrong Answer" 
        removeEl();
        quizQuestion5();
    })
}

function quizQuestion5()
{   
    //add question
    var questionEl = document.createElement("span");
    questionEl.textContent = questionsArray[displayedQuestion5].question;
    questionEl.className = "quizQuestions";
    questionEl.setAttribute("id", "quizQuestion");
    document.getElementById("quizQuestions").appendChild(questionEl);
    //answer buttons
    for (var i = 0; i< questionsArray[displayedQuestion5].possibleAnswers.length; i++) {
        var answerBtnsEl = document.createElement("button");
    answerBtnsEl.textContent = questionsArray[displayedQuestion5].possibleAnswers[i];
    answerBtnsEl.className = "answerBtns";
    answerBtnsEl.setAttribute('id', [i]);
    document.getElementById("quizAnswers").appendChild(answerBtnsEl);
    }
    //Display if selection was right or wrong
    document.getElementById("0").addEventListener('click', function(){
        document.getElementById("answer").innerHTML = "Wrong Answer"
        stopTimer();
    })
    document.getElementById("1").addEventListener('click', function(){ 
        document.getElementById("answer").innerHTML = "Wrong Answer" 
        stopTimer();
    })
    document.getElementById("2").addEventListener('click', function(){
        document.getElementById("answer").innerHTML = "Wrong Answer"
        stopTimer();
    })
    document.getElementById("3").addEventListener('click', function(){
        document.getElementById("answer").innerHTML = "Correct Answer"
        stopTimer(); 
    })
}

function removeEl() {
    var removeQuestionEl = document.getElementById("quizQuestion");
    removeQuestionEl.remove();
    document.querySelectorAll('.answerBtns').forEach(e => e.remove());
    setTimeout(function(){var removeMessageEl = document.getElementById('answer').textContent = "";}, 500);
    
}

function gameTimer() {
    //var secondsEl = document.getElementById("timespan").innerText;
    timeInterval = setInterval(function(){
        secondsEl--;
        document.getElementById('timespan').textContent = secondsEl;
        if (secondsEl <= 0) clearInterval(timeInterval);
    }, 1000);
   
}

function stopTimer() {
    clearInterval(timeInterval);
}

function wrongAnswer() {

}

startQuizBtnEl.addEventListener('click', startQuiz)

function startQuiz() {
    titleEl.style.display = "none";
    homeStatment.style.display = "none";
    startQuizBtnEl.style.display = "none";

    quizQuestion1();
    gameTimer();
}