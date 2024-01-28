"use strict";
// namespace LogSuccess {
//     export function log(message:string) : void {
//         console.log(`%c ${message}` , 'color:green')
//     }
// }
/// <reference path="./logger-success.ts" />
// namespace LogError {
//     export function log(message:string) : void {
//         console.log(`%c ${message}` , 'color:red')
//     }
// }
// class Logger {
//     success(message : string) : void {
//         console.log(message)
//     }
// }
//
//
//
// export default new Logger()
/// <reference path="./logger-success.ts" />
/// <reference path="./logger-error.ts" />
// Types
var text = null;
var list = ['amir', 'ali'];
var list2 = ['amir', 'ali', 3];
// enums
var test;
// enums
(function (test) {
    test[test["a"] = 1] = "a";
    test[test["b"] = 2] = "b";
})(test || (test = {}));
// functions
var sum = function (x, y) {
    return x + y;
};
console.log(sum(1, 2));
var sum2 = function (x, y) {
    var numbers = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        numbers[_i - 2] = arguments[_i];
    }
    if (y) {
        return x + y;
    }
    return x;
};
console.log(sum2(1, 2, 3, 4, 5, 6));
var person = { name: 'Ali', age: function (num) { return '15'; } };
var search; // it is a function with our custom functional type
// Class
var Car = /** @class */ (function () {
    // Constructor
    function Car(color) {
        this.color = color;
        // Properties
        this.name = 'Benz';
        this.engine = '2000 cc';
        this.model = '1995';
        this.price = '20000 $';
        this.color = color;
    }
    // Methods
    Car.prototype.calculatePrice = function () {
        return this.price;
    };
    Car.logGears = function () {
        console.log(this.gear);
    };
    Car.gear = 6;
    return Car;
}());
var car1 = new Car('Black');
console.log(car1.calculatePrice());
function print(labelObj) {
    console.log(labelObj.label);
}
var obj = { size: 10, label: 'Sheet' };
print(obj);
var Amir = /** @class */ (function () {
    function Amir(name, family, age) {
        this.name = name;
        this.family = family;
        this.age = age;
    }
    Amir.prototype.fullName = function () {
        return this.name + ' ' + this.family;
    };
    return Amir;
}());
var amirhossein = new Amir('amirhossein', 'soleymani', 25);
console.log(amirhossein.fullName());
