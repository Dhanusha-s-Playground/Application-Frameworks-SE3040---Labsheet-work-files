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
 * @since : 20/02/2021
 **/

console.log('We gonna learn constructor functions, ' +
    'arrow functions, and inheritance concepts' +
    ' ...!');

function Vehicle(id, model, name, type) {
    this.id = id;
    this.model = model;
    this.name = name;
    this.type = type;

    // Vehicle.VehicleCount++;

    // arrow function is used here
    this.print = ()=> {
        console.log('******** Vehical details ********');
        console.log('Vehicle ID: ' + this.id);
        console.log('Vehicle Model: ' + this.model);
        console.log('Vehicle Name: ' + this.name);
        console.log('Vehicle Type: ' + this.type);
    }
}


let vehicle = new Vehicle(1,'Mitsubishi', 'Lancer', 'Car');

// console.log(vehicle);
vehicle.print();

// let's create a static variable
Vehicle.VehicleCount = 0;

console.log(Vehicle.VehicleCount);


function Car(id, model, name, type, color) {
    this.color = color;
    Vehicle.call(this,id, model, name, type);
}

/* Car extends Vehicle */
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

let nissanGTR = new Car(2,"Nissan","GTR","Car","Blue");
console.log(nissanGTR);
nissanGTR.print();

