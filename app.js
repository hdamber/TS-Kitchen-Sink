"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* variable that contains my name */
var myName = 'Hallie';
// console.log(myName);
// constant that contains the number of states in the U.S
var states = 50;
// console.log(states);
// result of adding 5 and 4 
var number = 5 + 4;
// console.log(number);
// write a function called sayHello the displays an alert that says Hello World!
function sayHello(num1, num2) {
    console.log('Hello World!');
    return num1 + num2;
}
sayHello(6, 8);
// fire checkAge function that checks for name and age
function firstCheckAge(name, age) {
    if (age <= 20) {
        alert("Sorry, " + name + ", you aren't old enough to view this page!");
    }
    else {
        alert("You may enter, " + name);
    }
}
firstCheckAge("Charles", 21);
firstCheckAge("Abby", 27);
firstCheckAge("James", 18);
firstCheckAge("John", 17);
// array of my favorite vegetables 
var vegetables = ["potato", "broccoli", "edamame", "lettuce"];
for (var _i = 0, vegetables_1 = vegetables; _i < vegetables_1.length; _i++) {
    var veggies = vegetables_1[_i];
    console.log(veggies);
}
// create a checkage but with a loop
var array = [
    { name: "Hallie", age: 25 },
    { name: "TJ", age: 26 },
    { name: "Wendy", age: 9 },
    { name: "Jack", age: 14 },
    { name: "Mercedes", age: 21 },
];
// function checkAge(name: string, age: number) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i].age < 21) {
//             console.log("Sorry, " + array[i].name + ", you aren't old enough to view this page!")
//         } else {
//             console.log("You may enter, " + array[i].name + ".")
//         }
//     }
// }
// checkAge(array)
// create getLength function
function getLength(str) {
    if (str.length % 2 == 0) {
        return ('The world is nice and even!');
    }
    else if (str.length % 2 != 0) {
        return ('The World is an odd place!');
    }
}
console.log(getLength('hello world!'));
console.log(getLength("Goodbye World!"));
