const fileSystem = require("fs");
const readLine = require("readline");
const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// fileSystem.writeFile("example.txt", "This is an example", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("File Successfully Created");
//   }
// });

let fileName = "";

rl.question("Insert file name with extension\n", (userInput) => {
  if (userInput != "") {
    fileName = userInput;
    rl.setPrompt("Insert data to be inserted into the file\n");
    rl.prompt();
    rl.on("line", (userData) => {
      if (userData != "") {
        fileSystem.writeFile(`${fileName}`, `${userData}`, (err) => {
          if (err) {
            console.log(err);
          } else {
            console.log("File Successfully Created");
          }
        });
        rl.close();
      }
    });
  }
});

rl.on("close", () => {
  console.log("Successfull");
});
