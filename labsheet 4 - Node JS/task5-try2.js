const http = require('http');
const fs = require('fs');
http.createServer(((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    switch (req.method){
        case 'GET':
            res.write('<h1>Hello! It is a get request!</h1>');
            res.end();
            break;
        case 'POST':
            req.on('data', (chunk => {
                fs.writeFile('./customer-info.txt', chunk.toString(), err => {
                    if (err){
                        console.error(err);
                        res.statusCode = 500;
                    } else {
                        console.log('File was written successfully.');
                        res.statusCode = 200;
                    }
                });
            }));
            res.end();
            break;
        default:
            console.log('Request method is not matched');
    }

})).listen(3000, err => {
    if (err){
        console.error(err);
    } else {
        console.log('Server is running on port: 3000');
    }
});
