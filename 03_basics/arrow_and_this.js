const user = {
    username: "Vishvjeet Rana",
    age: 28,

    welcomeMessage : function() {
        console.log(`${this.username}, welcome to the website`);
        console.log(this);
    }
}

// console.log(this); // o/p => {}
// user.welcomeMessage();
// user.username = "Aryan Rana";
// user.welcomeMessage();


// In this function, "this" keyword will give us many different values +*+*+*+*+*+*+*+
// function chai() {
//     let username = "helllpndkgjhkaj";
//     console.log(this.username); // undefined as output
//     console.log(this);
// }

// chai();



// Also in this function, "this" keyword will give us many different values +*+*+*+*+*+*+*+
// const chai = function chai2() {
//     let username = "john doe";   `
//     console.log(this.username); // o/p => undefined
//     console.log(this);
// }

// chai();



// +*+*+*+*+*+*+*+*+*+  arrow function  +*+*+*+*+*+*+*+*+*+
// const chai = () => {
//     let user = "Hello";
//     console.log(this.user); // o/p => undefined
//     console.log(this); // o/p => {}
// }

// chai();



// If using "return" , then have to enclose function block in the curly braces {}
// const calculate = (num1 , num2) => {
//     return num1 + num2;
// }

// console.log(calculate(4,5));



// If NOT using "return" , then have not need to enclose function block in the curly braces {}
const calculate = (num1 , num2) => (num1 + num2);

console.log(calculate(4,5));



// If returnig object, then objects should be enclosed in curly braces
const myObject = () => ({username:"Aryan Rana"});

console.log(myObject());



// ================= CONCLUSION =================

// we get many different values of "this" keyword only in simple functins NOT in Arrow functions
// simple function = many different values
// arrow function = {}

// this.currentVals or this.something wll not work in any type of functions 
// o/p = undefined