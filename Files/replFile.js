const repl = require("repl");
const local = repl.start("Enter Your Command => ");

local.on("exit",()=>{
    console.log("Thanks for using repl");
    process.exit();
});

