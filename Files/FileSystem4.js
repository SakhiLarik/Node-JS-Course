// ReadStream and WriteStream is better than appending data manually
// ReaFile make errors for larger files therefore we must use readStream
// and write stream for larger files.

// Read Stream uses a memory buffer but smaller than readFile buffere
// readFile uses four buffer therefore it must be a larger free space in memory
// to read larger files by readFile method.
// but in same place ReadStream uses small buffer
// by readStream we are getting chunk of the file when the data event occures
// not entire file to be loaded but chunk only

const fileSystem = require("fs");
// Read File Stream
const readStream = fileSystem.createReadStream("./folder/1.txt", "utf-8");
// Write File Stream
const writeStream = fileSystem.createWriteStream("./folder/2.txt");
readStream.on("data", (chunk) => {
  // Reading and Storing into Chunk Variable
  console.log(chunk);
  // Writing data by getting from Chunk Variable
  writeStream.write(chunk);
});

readStream.pipe(writeStream);
// it is shorter method for upper whole thing.
// it simply take data from readStream and write it into writeStream
// we need source stream and destination stream in order to use pipes
// source.pipe(destination) = readStream.pipe(writeStream);
