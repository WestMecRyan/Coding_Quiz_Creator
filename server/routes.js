const express = require('express');
const path = require('path');
const fs = require('fs');
const router = express.Router();

const quizzesPath = path.join(__dirname, '..', 'quiz_bank');

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
router.get('/process-quiz', (req, res) => {
    fs.readFile(path.join(quizzesPath, 'XHR_GET_Requests', 'xhr_quiz_1.json'), 'utf8', (err, data) => { 
        if (err) { 
            console.error(err);
            return res.status(500).send('An error occured');
        }
        const quiz = JSON.parse(data);
       
        res.json(quiz);
    });
    
 });

 module.exports = router;