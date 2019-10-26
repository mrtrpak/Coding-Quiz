// each "screen" in my html that I can reference too and hide
var startScreen = document.getElementById("start-screen");
var quizScreen = document.getElementById("quiz-screen");
var scoreScreen = document.getElementById("score-screen");

// quiz start button var
var quizBtn = document.getElementById("quiz-btn");

// timer related var
var timeStart = document.getElementById("time-start");
var timer = 60;
var timerInterval ="";

// quiz screen variables
var questionPrompt = document.getElementById("question");
var answerPrompt = document.getElementById("answer-prompt");

// var to get correct questions
var questionNum = 0;

// var for each choice button in quiz
var choice1 = document.getElementById("choice1");
var choice2 = document.getElementById("choice2");
var choice3 = document.getElementById("choice3");
var choice4 = document.getElementById("choice4");

// score var
var score = 0;

// show score when entering initials var
var scoreDisplay = document.getElementById("score-display");

// function to start the timer
function startTimer () {
        timerInterval = setInterval(function() {
        timer--;
        timeStart.textContent = "Timer: " + timer;
        
        if(timer <= 0) {
            clearInterval(timerInterval);
            endQuiz();
        }
    }, 1000);
}

// function to start quiz and timer on start quiz button 
quizBtn.addEventListener("click", function(event) {
    startScreen.classList.add("d-none");
    quizScreen.classList.remove("d-none");
    quizGame();
    startTimer();
});

// function to update the question and answer text
function quizGame () {
    // if statement that checks if quiz at end
    if (questionNum >= questions.length) {
        endQuiz();
        score = timer;
        scoreDisplay.innerHTML = score;
        clearInterval(timerInterval);
    }
    else{
        questionPrompt.innerHTML = questions[questionNum].title;
        choice1.innerHTML = questions[questionNum].choices[0];
        choice2.innerHTML = questions[questionNum].choices[1];
        choice3.innerHTML = questions[questionNum].choices[2];
        choice4.innerHTML = questions[questionNum].choices[3];
        answerPrompt.innerHTML = "";
    }
}

function checkCorrect (clicked_id) {
    if (document.getElementById(clicked_id).innerHTML === (questions[questionNum].answer)) {
        answerPrompt.innerHTML = "Correct!";
        questionNum++;
        quizGame();
    } 
    else {
        timer = timer - 15;
        answerPrompt.innerHTML = "Wrong!";
        questionNum++;
        quizGame();
    }
}    

// end of quiz function
function endQuiz () {
    quizScreen.classList.add("d-none");
    scoreScreen.classList.remove("d-none");
}

// function to clear local storage
function clearLocal () {
    localStorage.clear();
    window.location.reload();
}