var http = require('http');
var server = http.createServer(function(req , res)
{
    res.end("Sakhawat Server Started");
});
server.listen(3000 , 'localhost' , function()
{
        console.log("Server Started On Host 3000");
});