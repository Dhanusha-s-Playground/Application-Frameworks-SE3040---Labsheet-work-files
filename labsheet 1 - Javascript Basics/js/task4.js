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


/**
 * accepts the tax percentage,
 * and returns a function which accepts the tax amount
 * (this function returns the calculated total tax amount according to the given tax percentage)
 * */
 function calcTax(taxPercentage) {
    return function (amount) {
        // can not use this.taxPercentage here, it leads to a compile time error
        return amount + (amount * (taxPercentage / 100));
    }
}

var getCalculatedTaxAmount = calcTax(10);
console.log(getCalculatedTaxAmount(100));
