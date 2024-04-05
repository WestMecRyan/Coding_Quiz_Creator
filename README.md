# Coding_Quiz_Creator
A light-weight application to create exams and quizzes.

# How to Build a QUIZ

- Make a new folder in the quiz_bank folder named after the quiz you want to create.

- initialize a quiz.json file named after the quiz name. The format should be the following
```json
{
  "quizInfo": {
    "title": "Quiz Title",
    "date": "mm/dd/yy",
    "description": "Quiz Description",
    "seedExtension": "xhr_quiz_1",
    "version": "A"
  },
  "quizQuestions": [
    {
      "id": 1,
      "question": "",
      "questionName": "A",
      "options": ["", "", "", ""],
      "optionLang": "language-text",
      "correctIndex": 0
    },
    {
      "id": 2,
      "question": "",
      "questionName": "B",
      "options": ["", "", "", ""],
      "optionLang": "language-text",
      "correctIndex": 0
    },
    {
      "id": 3,
      "question": "",
      "questionName": "C",
      "options": ["", "", "", ""],
      "optionLang": "language-text",
      "correctIndex": 0
    }
  ]
}
```

- the language types are language-text, language-css, language-html, language-js