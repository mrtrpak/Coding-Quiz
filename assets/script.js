var quizBtn = document.getElementById("quiz-btn");
var startScreen = document.getElementById("start-screen");
var quizScreen = document.getElementById("quiz-screen");

quizBtn.addEventListener("click", function(event) {
    startScreen.classList.add("d-none");
    quizScreen.classList.remove("d-none");
});