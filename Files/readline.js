const readLine = require("readline");
const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// rl.question("What is Your Name \n", (userInput) => {
//   console.log("Your Name is " + userInput);
//   rl.close();
// });

let a = Math.floor(Math.random() * 10) + 1;
let b = Math.floor(Math.random() * 10) + 1;
let answer = a + b;
rl.question(`What is ${a} + ${b} \n`, (userInput) => {
  if (userInput.trim() == answer) {
    // console.log("Correct");
    console.log("Your Value is " + userInput);
    rl.close();
  } else {
    // console.log("Incorrect, Please Try Again");
    rl.setPrompt("Incorrect please try again\n");
    rl.prompt();
    rl.on("line", (userInput) => {
      if (userInput.trim() == answer) {
        rl.close();
      } else {
        rl.setPrompt(
          `Your answer ${userInput} is incorrect please try again\n`
        );
        rl.prompt();
      }
    });
  }
});

rl.on("close", () => {
  console.log("Done...");
});
