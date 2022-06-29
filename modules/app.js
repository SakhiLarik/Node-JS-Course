// Modules are basically javascript files
// it is a way to seprate vereous application files
// Modules are exported and imported according to need
const importModlue = require("./module");
// console.log(importModlue);
console.log(importModlue.sum(1, 7));
console.log(importModlue.PI);
console.log(new importModlue.SomeMathObjects());
