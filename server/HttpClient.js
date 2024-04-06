// HttpClient.js
const axios = require('axios');
// Assuming you have set these environment variables in your Codespace
const githubEndpoint = "https://api.github.com/repos/WestMecRyan/Quiz_Banks/contents/";
const personalAccessToken = process.env.PERSONAL_PAT; // Ensure this is set in your environment

// Setting up axios to include your GitHub Personal Access Token for requests to GitHub
axios.interceptors.request.use(config => {
  if (config.url.includes(githubEndpoint)) {
    config.headers.Authorization = `token ${personalAccessToken}`;
  }
  return config;
}, error => {
  return Promise.reject(error);
});

module.exports = {
    getQuiz(quizPath) {
      return axios.get(`${githubEndpoint}${quizPath}`);
    },
  };
