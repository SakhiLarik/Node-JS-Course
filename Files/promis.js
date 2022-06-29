
const fs = require("fs");
function getText(path){
    return new Promise((resolve,reject)=>{
        fs.readFile(path,"utf-8",(err,data)=>{
            if(err){
                reject(err)
            }else{
                resolve(data);
            }
        });
    });
}
getText("./1.txt").then(result => console.log(result)).catch(err=>console.log(err));
