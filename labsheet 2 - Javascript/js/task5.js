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

/* Vehicle class */
class Vehicle{

    /* constructor */
    constructor(id, model, name, type) {
        this._id =id;
        this._model=model;
        this._name=name;
        this._type=type;
    }

    /* getters and setters */
    get id(){
        return this._id;
    }

    set id(id){
        this._id = id;
    }

    get model(){
        return this._model;
    }

    set model(model){
        this._model = model;
    }

    get name(){
        return this._name;
    }

    set name(name){
        this._name = name;
    }

    get type(){
        return this._type;
    }

    set type(type){
        this._type = type;
    }

    // functions

    printDetails(){
        console.log('******** Vehical details ********');
        console.log('Vehicle ID: ' + this._id);
        console.log('Vehicle Model: ' + this._model);
        console.log('Vehicle Name: ' + this._name);
        console.log('Vehicle Type: ' + this._type);
    }
}

/* Car class is inherited from the Vehicle class */
class Car extends Vehicle{
    constructor(id, model, name, type,color) {
        super(id, model, name, type);
        this._colour = color;
    }

    printDetails() {
        super.printDetails();
        console.log('Vehicle Colour: ' + this._colour);
    }
}

/* Vehicle class */
const vehicle = new Vehicle(2,'Nissan','Sunny','Car');
vehicle.printDetails();


/* Car extends Vehicle */
const nissanGTR = new Car(7,'Nissan','GTR','Super Car','Blue');
nissanGTR.printDetails();
