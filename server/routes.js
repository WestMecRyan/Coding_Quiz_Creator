const express = require("express");
const path = require("path");
const fs = require("fs");
const router = express.Router();

const quizzesPath = path.join(__dirname, "..", "quiz_bank");

function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const character = str.charCodeAt(i);
    hash = (hash << 5) - hash + character;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash;
}

function seededRandom(seed) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function shuffleArray(array, seed) {
  const result = array.slice();
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(seededRandom(seed + i) * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
router.get("/process-quiz", (req, res) => {
  fs.readFile(
    path.join(quizzesPath, "XHR_GET_Requests", "xhr_quiz_1.json"),
    "utf8",
    (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).send("An error occurred");
      }
      let quiz = JSON.parse(data);
      const quizInfo = quiz.quizInfo;
      let questions = quiz.quizQuestions;

      // Sort questions by questionName for logging
      const sortedQuestions = [...questions].sort((a, b) =>
        a.questionName.localeCompare(b.questionName)
      );

      // Log correct answers in order
      sortedQuestions.forEach((question) => {
        const correctOption = question.options[question.correctIndex];
        console.log(
          `Correct answer for "${question.questionName}": ${correctOption}`
        );
      });
      // Optional: Shuffle the order of the questions
      questions = shuffleArray(questions, Math.random());

      // Process each question
      questions = questions.map((question) => {
        const seed = hashString(
          question.questionName.concat(quizInfo.seedExtension)
        );
        // Shuffle the options
        const randomizedOptions = shuffleArray(question.options, seed);
        const correctOption = question.options[question.correctIndex];
        // Create a new object for the question without the 'correctIndex'
        
        return {
          id: question.id,
          questionName: question.questionName,
          question: question.question,
          options: randomizedOptions, // Use the shuffled options
          optionLang: question.optionLang,
        };
      });

      // Send the processed quiz data without the correct answers
      res.json({
        quizInfo: quizInfo,
        quizQuestions: questions,
      });
    }
  );
});

module.exports = router;
