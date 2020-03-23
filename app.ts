import $ from 'jquery';

/* variable that contains my name */
let myName = 'Hallie';
// console.log(myName);


// constant that contains the number of states in the U.S
const states = 50;
// console.log(states);


// result of adding 5 and 4 
let number = 5 + 4;
// console.log(number);


// write a function called sayHello the displays an alert that says Hello World!
function sayHello(num1: number, num2: number) {
    console.log('Hello World!');
    return num1 + num2;
}

sayHello(6,8);

// fire checkAge function that checks for name and age
function firstCheckAge(name: string, age: number) {
    if (age <= 20) {
        alert("Sorry, " + name + ", you aren't old enough to view this page!")
    } else {
        alert("You may enter, " + name)
    }
}

firstCheckAge("Charles", 21)
firstCheckAge("Abby", 27)
firstCheckAge("James", 18)
firstCheckAge("John", 17)



// array of my favorite vegetables 
let vegetables = [ "potato", "broccoli", "edamame", "lettuce"];

for (let veggies of vegetables){
    console.log(veggies);
}


// create a checkage but with a loop
let array = [
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
function getLength(str: string) {
    if (str.length % 2 == 0) {
        return('The world is nice and even!')
    }
    else if(str.length % 2 != 0) {
        return('The World is an odd place!')
    }
}

console.log(getLength('hello world!'));
console.log(getLength("Goodbye World!"));