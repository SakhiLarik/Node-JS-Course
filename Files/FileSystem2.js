const fileSystem = require("fs");

fileSystem.writeFile("example.txt", "This is an example", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File Successfully Created");
    fileSystem.readFile("example.txt", "utf-8", (err, file) => {
      if (err) {
        console.log(err);
      } else {
        console.log("File data is : " + file);
      }
    });
    // fileSystem.rename("example.txt", "example2.txt", (err) => {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     console.log("File Successfully Renamed");
    //   }
    // });
    fileSystem.appendFile(
      "example.txt",
      " Some Other Data has been added",
      (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Successfully Appended to file. ");
        }
      }
    );
    fileSystem.unlink("example.txt", (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("File Deleted Successfully");
      }
    });
  }
});
