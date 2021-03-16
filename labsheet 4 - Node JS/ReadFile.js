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
 * @since : 13/03/2021
 **/
const path = require('path');
const fs = require('fs');
const bf = require('buffer');


// this createReadStream run as async
fs.createReadStream('MyFile').on('data',(chunck)=>{
    console.log(`${chunck}`);
});

// fs.readFile('MyFile',(error,data)=>{
//     console.log(data.toString());
// });

console.log('This is a testing statement 1');


// this readFileSync run as sync
const data = fs.readFileSync('MyFile');
console.log(data.toString());

console.log('This is a testing statement 2');
