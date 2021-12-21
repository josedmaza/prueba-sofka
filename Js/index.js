import {categories} from "../Js/data.js";

let jugadores = {
  name: "",
  score: 0,
};

// 1. Create a function that takes in a category name and returns the questions for that category.
class game {
  constructor(categories) {
    this.categories = categories;
    this.currentCategory = categories.animales;
    this.currentQuestion = 0;
    this.questionCount = 1;
    this.score = 0;
  }
}

let $document = document;
let $game = $document.getElementById("game");
let $start = $document.getElementById("start");
let $score = $document.getElementById("score");
let $questionCount = $document.getElementById("questionCount");
let $restart = $document.getElementById("restart");
let $submit = $document.getElementById("submit");
let $question = $document.getElementById("question");
let $option = $document.getElementById("option");
let $optionA = $document.getElementById("optionA");
let $optionB = $document.getElementById("optionB");
let $optionC = $document.getElementById("optionC");
let $optionD = $document.getElementById("optionD");
let $categorySelect = $document.getElementById("categorySelect");
let $playerName = $document.getElementById("playerName");



  


$start.addEventListener("click", function () {
  $start.style.display = "none";
  $game.style.display = "flex";
});

const player1 = new game(categories);
let rand = Math.floor(Math.random()*25);
$question.innerHTML =
  player1.currentCategory.data[rand].question;
$optionA.innerHTML =
  player1.currentCategory.data[rand].options[0];
$optionB.innerHTML =
  player1.currentCategory.data[rand].options[1];
$optionC.innerHTML =
  player1.currentCategory.data[rand].options[2];
$optionD.innerHTML =
  player1.currentCategory.data[rand].options[3];

let opcion;
$optionA.addEventListener("click", function () {
  opcion = $optionA.textContent;
  $optionA.style.backgroundColor = "#00ff00";
  $optionB.style.backgroundColor = "#ff0000";
  $optionC.style.backgroundColor = "#ff0000";
  $optionD.style.backgroundColor = "#ff0000";
});
$optionB.addEventListener("click", function () {
  opcion = $optionB.textContent;
  $optionA.style.backgroundColor = "#ff0000";
  $optionB.style.backgroundColor = "#00ff00";
  $optionC.style.backgroundColor = "#ff0000";
  $optionD.style.backgroundColor = "#ff0000";
});
$optionC.addEventListener("click", function () {
  opcion = $optionC.textContent;
  $optionA.style.backgroundColor = "#ff0000";
  $optionB.style.backgroundColor = "#ff0000";
  $optionC.style.backgroundColor = "#00ff00";
  $optionD.style.backgroundColor = "#ff0000";
});
$optionD.addEventListener("click", function () {
  opcion = $optionD.textContent;
  $optionA.style.backgroundColor = "#ff0000";
  $optionB.style.backgroundColor = "#ff0000";
  $optionC.style.backgroundColor = "#ff0000";
  $optionD.style.backgroundColor = "#00ff00";
});

function resetGame() {
  $optionA.style.backgroundColor = "#F4F7F9";
  $optionB.style.backgroundColor = "#F4F7F9";
  $optionC.style.backgroundColor = "#F4F7F9";
  $optionD.style.backgroundColor = "#F4F7F9";
  player1.currentQuestion = 0;
  player1.score = 0;
  player1.questionCount = 1;
  $score.innerHTML = player1.score;
  $questionCount.innerHTML = player1.currentQuestion + 1;
  $question.innerHTML =
    player1.currentCategory.data[rand].question;
  $optionA.innerHTML =
    player1.currentCategory.data[rand].options[0];
  $optionB.innerHTML =
    player1.currentCategory.data[rand].options[1];
  $optionC.innerHTML =
    player1.currentCategory.data[rand].options[2];
  $optionD.innerHTML =
    player1.currentCategory.data[rand].options[3];
}

$submit.addEventListener("click", function () {
  if (player1.questionCount < 5) {
    if (player1.currentCategory.data[rand].ans == opcion) {
      player1.score += 100;
      player1.questionCount++;
      player1.currentQuestion++;
      rand++;
      $score.innerHTML = player1.score;
      $questionCount.innerHTML = player1.questionCount;
      $question.innerHTML =
        player1.currentCategory.data[rand].question;
      $optionA.innerHTML =
        player1.currentCategory.data[rand].options[0];
      $optionB.innerHTML =
        player1.currentCategory.data[rand].options[1];
      $optionC.innerHTML =
        player1.currentCategory.data[rand].options[2];
      $optionD.innerHTML =
        player1.currentCategory.data[rand].options[3];
      $optionA.style.backgroundColor = "#F4F7F9";
      $optionB.style.backgroundColor = "#F4F7F9";
      $optionC.style.backgroundColor = "#F4F7F9";
      $optionD.style.backgroundColor = "#F4F7F9";
    } else {
      alert("END GAME");
      resetGame();
    }
  } else {
    alert("YOU WIN");
    resetGame();
  }
});

$restart.addEventListener("click", resetGame);
