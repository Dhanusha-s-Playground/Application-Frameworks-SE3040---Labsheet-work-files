/**
 MIT License

 Copyright (c) 2021 Dhanusha Perera

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */
/**
 * @author : Dhanusha Perera
 * @since : 16/03/2021
 **/

const http = require('http');

http.createServer((req,res)=>{
    res.setHeader('Content-Type', 'text/html');

    // res.write('<h1>Hello Detective!</h1>');
    // res.end();

    switch (req.method) {
        case 'GET':
            res.write('<h1>Hello Detective!</h1>');
            res.end();
            break;
        case 'POST':
            req.on('data',(data) => {
                console.log(`Name of the criminal: ${data}`);
                res.write(`<h1>Criminal reported !</h1><p>Name:</p><p>${data}</p>`);
                res.end();
            });
            break;
        default:
            res.write('<h1>I have no idea what you want me to do</h1>');
            res.end();
    }
}).listen(3000,(err) => {
    console.log('Server is listening to port 3000');
});
