const fileSystem = require("fs");
const zlib = require("zlib"); // it is library to compress files
const gzip = zlib.createGzip();
const readStream = fileSystem.createReadStream("./folder/1.txt");
const writeStream = fileSystem.createWriteStream("./folder/3.txt.gz");
readStream.pipe(gzip).pipe(writeStream);
// above program is reading file from readStream and writing it over to writeStream
// than it is creating the compress version of it by creating a gz compress file

// lets unzip the gz zipped files
const readStream2 = fileSystem.createReadStream("./folder/3.txt.gz");
const writeStream2 = fileSystem.createWriteStream("uncompressed.txt");
const GUnZip = zlib.createGunzip();
readStream2.pipe(GUnZip).pipe(writeStream2); // this would unzip the file
