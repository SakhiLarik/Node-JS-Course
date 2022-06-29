const http = require("http");
const server = http.createServer((req,res)=>{
    if(req.url == "/"){
        res.end("Home Page");
    }
    else if(req.url == "/about"){
        res.end("this is About Page");
    }
    else if(req.url == "/contacts"){
        res.end("Contacts Page");
    }
    else{
        res.writeHead(404,{"Content-type":"text/html"});
        res.end("<h2 style='color:red;'>Can not find page, you are looking for</h2>");
    }

}).listen('3000',"127.0.0.1",()=>{
    console.log("Listening at port 3000 : ");
});
