var fs = require('fs');
fs.writeFile('./hello.txt', 'Sakhawat Ali Larik How Are You Boy...' , function(err,data)
    {
        if(!err)
        {
            fs.readFile('./hello.txt',function(err ,data)
            {
                if(!err)
                {
                    console.log(data.toString());
                }
             });
        }
    });
