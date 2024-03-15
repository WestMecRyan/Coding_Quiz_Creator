// regex to find new lines in javascript
// (?<=escaped[\s\S]*?)\n
const fs = require("fs");
const path = require("path");

// Path to your JS file
const filePath = path.join(__dirname, "./quiz_bank/pre_code_test/question1.js");

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("data is", data);
  // Escape new lines, tabs, and double quotes
  let singleLineData = data.split("\n").join("");
  let escapedData = singleLineData;
  // .replace(/\\/g, "\\\\") // Escape backslashes first
  // .replace(/\n\s{2}/gm, "hello");
  // .replace(/\t/g, "\\t")
  // .replace(/"/g, '\\"');
  console.log("escaped data is", escapedData);
  //   escapedData = `"${escapedData}"`;
  fs.writeFile("escapedOutput.txt", `"${escapedData}"`, (err) => {
    if (err) {
      console.error("Error writing to file:", err);
    } else {
      console.log("Escaped string written to escapedOutput.txt");
    }
  });
  // Print the escaped string
  //   console.log(`"${escapedData}"`);
});
