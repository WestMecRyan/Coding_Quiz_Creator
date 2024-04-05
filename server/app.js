const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const quizRoutes = require("./routes");
app.use(cors());
app.use(express.static(path.join(__dirname, '..', 'public')));
const port = 3000;

//const publicPath = path.join(__dirname, "..", "public");
app.use('/', quizRoutes);
// app.get("/", (req, res) => {
//   res.sendFile(path.join(publicPath, "index.html"));
// });
app.listen(port, () => {
  console.log(`app is listening on port ${3000}`);
});
