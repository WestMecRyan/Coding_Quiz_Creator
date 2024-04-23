// HttpClient.js
const axios = require('axios');
const fs = require('fs').promises;
const path = require('path');
// Assuming you have set these environment variables in your Codespace
const githubEndpoint = "https://api.github.com/repos/WestMecRyan/Quiz_Banks/contents/";
const personalAccessToken = process.env.QUIZ_ACCESS; // Ensure this is set in your environment
const isProduction = true;
// process.env.NODE_ENV === 'production';
// Setting up axios to include your GitHub Personal Access Token for requests to GitHub
axios.interceptors.request.use(config => {
  console.log("Making request to:", config.url);
  if (config.url.includes(githubEndpoint)) {
      if (!personalAccessToken) {
          console.error("No personal access token available!");
          return Promise.reject(new Error("No personal access token set!"));
      }
      config.headers['Authorization'] = `token ${personalAccessToken}`;
  }
  console.log("Headers after setting token:", config.headers);
  return config;
}, error => {
  return Promise.reject(error);
});


const getQuiz = async (quizPath) => { 
  if (isProduction) {
    console.log('in production');
    return axios.get(`${githubEndpoint}${quizPath}`).then(response => { 
      const content = Buffer.from(response.data.content, 'base64').toString('utf8');
      return JSON.parse(content);
    });
  } else {
    const localPath = path.resolve(__dirname, '../../Quiz_Banks', quizPath);
    const data = await fs.readFile(localPath, 'utf8');
    return JSON.parse(data);
   }
}
module.exports = {
    getQuiz,
  };
