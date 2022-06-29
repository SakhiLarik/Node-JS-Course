const sum = (a, b) => a + b;
const PI = 3.14;
class SomeMathObjects {
  constructor() {
    console.log("Object Created Successfully");
  }
}
// module.exports = sum; it is method to export only one module
module.exports.sum = sum; // it is method to export one object with its properity
module.exports.PI = PI;
module.exports.SomeMathObjects = SomeMathObjects;
// instead of exporting each individually we use object litrel as follows
// module.exports = {
//   sum: sum,
//   PI: PI,
//   SomeMathObjects: SomeMathObjects,
// };
