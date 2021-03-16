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

show dbs
show collections
use sliit

db.sliit.insertOne({
    name: 'John',
    dateOfBirth: new Date(1990, 1, 1, 0, 0, 0, 0),
    subjects: [
        'Application frameworks',
        'Computer architecture'
    ]
});

db.sliit.find();

db.sliit.find({name: 'John'});

// find the document by Object ID
db.sliit.find({_id: ObjectId('6050bc3df788d94d9d461da9')});

db.sliit.update(
    {name: 'John'},
    {$push: {subjects: 'Distributed Computing'}}
);

db.sliit.insertMany([
    {
        name: 'Smith',
        dateOfBirth: '1990-01-15T00:00:00Z',
        subjects: ['Application frameworks', 'Computer architecture'],
        isActive: true
    },
    {
        name: 'Jane',
        dateOfBirth: "1990-02-15T00:00:00Z",
        subjects: ['Application frameworks', 'Computer architecture'],
        isActive: false
    }
]);


db.sliit.update({
    name: 'Smith',
    isActive: true
}, {
    $push: {subjects: 'Distributed Computing'}
});

db.sliit.updateMany(
    {},
    {
        $set: { isActive: false }
    });

// just update the first document
db.sliit.updateOne({},
    {
        $set: { isActive:false }
    });

// remove the first document
db.sliit.deleteOne({});
