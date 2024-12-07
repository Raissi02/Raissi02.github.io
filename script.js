
function submitQuiz() {
  var score = 0;
  var totalQuestions = 15; 
  var correctAnswers = {
      q1: "Paris",
      q2: "Mars",
      q3: "Shakespeare",
      q4: "Pacific",
      q5: "Da Vinci",
      q6: "Vatican City",
      q7: "1912",
      q8: "Oxygen",
      q9: "Blue Whale",
      q10: "Japan",
      q11: "Nile",
      q12: "Neil Armstrong",
      q13: "Einstein",
      q14: "Avocado",
      q15: "Australia",
  };

  var form = document.forms["quizForm"];
  var resultHTML = "";

  for (var key in correctAnswers) {
      var userAnswer = form[key].value;
      if (userAnswer === correctAnswers[key]) {
          score++;
      } else {
          resultHTML += `<div class="wrong-answer">Question ${key.replace('q', '')}: Wrong! The correct answer is <strong>${correctAnswers[key]}</strong>.</div>`;
      }
  }

  resultHTML = `<div class="correct-answer">Your score is ${score} out of ${totalQuestions}.</div>` + resultHTML;
  document.getElementById("result").innerHTML = resultHTML;
}
