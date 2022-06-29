const console = require('console');
const fs = require('fs');
// Read and Write Synchro
const sync_first = fs.readFileSync("./1.txt","utf-8",);
const sync_second = fs.readFileSync("./2.txt","utf-8",);
// console.log(first,"\n",second);
const sync_output = fs.writeFileSync("./output.txt",`Here is the result \n ${first} \n ${second}`);


// Read and Write ASynchro
fs.readFile("./1.txt","utf-8",(err,result)=>{
    if(err){
        console.log(err);
        return 
    }
    const async_first = result;
    fs.readFile("./2.txt","utf-8",(err,result)=>{
        if(err){
            console.log(err);
            return 
        }
        const async_second = result
        const output = fs.writeFile("./output.txt",`Here is the Result : \n ${async_first} \n ${async_second}`,{flag : 'a'},(err,result)=>{
            if(err){
                console.log(err);
                return 
            }
            console.log(output);
        });
    });
});