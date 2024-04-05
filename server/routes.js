const express = require("express");
const axios = require('axios');
const router = express.Router();
const HttpClient = require("./HttpClient");
function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const character = str.charCodeAt(i);
    hash = (hash << 5) - hash + character;
    hash &= hash; // Convert to 32bit integer
  }
  return hash;
}

function seededRandom(seed) {
  return Math.sin(seed) * 10000 - Math.floor(Math.sin(seed) * 10000);
}

function shuffleArray(array, seed) {
  const result = array.slice();
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(seededRandom(seed + i) * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

router.get("/process-quiz", async (req, res) => {
    console.log('trying');

  try {
    const quizPath = "quiz_bank/XHR_GET_Requests/xhr_quiz_1.json"; // Adjust the path as necessary
    const response = await HttpClient.getQuiz(quizPath);

    const content = Buffer.from(response.data.content, 'base64').toString('utf8');
    const quiz = JSON.parse(content);
    // const json = await response.json();
    // const content = Buffer.from(json.content, 'base64').toString('utf8');
    // const quiz = JSON.parse(content);
    const { quizInfo, quizQuestions } = quiz;

    // Log correct answers in order
    quizQuestions.sort((a, b) => a.questionName.localeCompare(b.questionName))
      .forEach(question => {
        console.log(`Correct answer for "${question.questionName}": ${question.options[question.correctIndex]}`);
      });

    // Shuffle the order of the questions
    const questions = shuffleArray(quizQuestions, Math.random()).map(question => {
      const seed = hashString(question.questionName.concat(quizInfo.seedExtension));
      const randomizedOptions = shuffleArray(question.options, seed);

      return {
        id: question.id,
        questionName: question.questionName,
        question: question.question,
        options: randomizedOptions,
        optionLang: question.optionLang,
      };
    });

    res.json({ quizInfo, quizQuestions: questions });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error while fetching quiz data');
  }
});

module.exports = router;
