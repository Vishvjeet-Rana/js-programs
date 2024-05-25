// Functions in JS

// function - 1 for printing the characters of a string
function printString(str) {
    for(let i = 0 ; i < str.length; i++) {
        console.log(str.charAt(i) + " ");
    }
}

//printString => simple functions name is reference to it or functions reference. o/p => [Function: printString]
printString("Hello"); // function calling 

// function - 2 for basic math addition
function addTwoNumbers(num1 , num2) {
    return num1 + num2;
    // console.log("this is a function");  // unreachable code as we're writing this line after return statement
}

const result = addTwoNumbers(6 , 5); // way 1
console.log(result);

console.log(addTwoNumbers(10 , 20)); // way 2


function logginUserMessage(userName) {
    return `${userName} is just logged in`;
}

logginUserMessage(); // this will print nothing becoz we are not printing it.
console.log(logginUserMessage()); // we didn't passed any argument or value so it will print "undefined is just logged in".
console.log(logginUserMessage("Vishvjeet Rana"));



function logginUserMessage2(userName) {
    if(!userName) {
        console.log("sahi naam daal de bhai");
        return;
    }

    return `${userName} just logged in`;
}

console.log(logginUserMessage2("Johnson Dakota"));

// the undefined thing is resolved now.
// userName === undefined can also be written as !userName bacause of truthy & falsy values associated to everything in Js.