const fileSystem = require("fs");
// Working With Folders
fileSystem.mkdir("New Folder", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Folder Successfully Created");
  }
});
setTimeout(() => {
  fileSystem.rmdir("New Folder", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Folder Deleted Successfully");
    }
  });
}, 2000);

// List all files in a directory
fileSystem.readdir("folder", (err, files) => {
  if (err) {
    console.log(err);
  } else {
    let a = 0;
    files.forEach((file) => {
      a++;
      // we can rename, delete or apply other operation on all files here
      console.log(`${a} : ${file}`);
    });
  }
});
// Deleting a folder is not possible if folder contains file
// So try first deleting the files from folder and than delete folder as follows

// fileSystem.unlink("./New Folder/1.txt", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     fileSystem.rmdir("New Folder", (err) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log("Folder Deleted Successfully");
//       }
//     });
//   }
// });
