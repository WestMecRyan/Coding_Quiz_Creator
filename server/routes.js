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
  let correctIndex = 0;
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(seededRandom(seed + i) * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  if (j === correctIndex) {
    correctIndex = i;
  } else if (i === correctIndex) {
    correctIndex = j;
  }
}
return { shuffled: result, correctIndex };
}

router.get("/process-quiz", async (req, res) => {
  console.log('trying');

  try {
    const quizPath = "quiz_bank/SVG_Quiz/svg_quiz.json"; // Adjust the path as necessary
    const quiz = await HttpClient.getQuiz(quizPath);
    const { quizInfo, quizQuestions } = quiz;

    const shouldShuffle = true; // Check if shuffle query parameter is set to 'true'
    let questions = quizQuestions.map(question => {
      const seed = hashString(question.questionName.concat(quizInfo.seedExtension));
      const { shuffled, correctIndex } = shuffleArray(question.options, seed);

      console.log(`Question: ${question.questionName}, Correct Option: ${correctIndex+1}`);
      return {
        id: question.id,
        questionName: question.questionName,
        question: question.question,
        options: shuffled,
        optionLang: question.optionLang,
        correctIndex: correctIndex  // Optionally store this for further use
      };
    });

    if (shouldShuffle) {
      // Shuffle the order of the questions if required
      questions = shuffleArray(questions, Math.random()).shuffled;
    }

    res.json({ quizInfo, quizQuestions: questions });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error while fetching quiz data');
  }
});

module.exports = router;
