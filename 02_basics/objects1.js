// singleton
// Object.create

// object literals

const myKey = Symbol("mine key");

const jsUser = {
    name : "Vishvjeet",
    age : 1000,
    email : "hello@google.com",
    "full name" : "Vishvjeet Rana", //because we can't write keys as separated words like full name. If we need this then have to write it in double quotes.
    city : "Karnal",
    [myKey] : "not mine key"
}

console.log(jsUser.name);
console.log(jsUser["name"]);
console.log(jsUser["full name"]); // Syntax for accessing key of more than two or more words. And can be used for every key.
console.log(jsUser[myKey]); // Keys of type Symbol we don't need to write them in double quotes inside the brackets

// console.log(jsUser);

jsUser.email = "hello@chatgpt.com";
Object.freeze(jsUser);
jsUser.email = "hello@microsoft.com";
console.log(jsUser);

jsUser.greetings = function() {
    console.log("helloji kaise ho sab");
}

console.log(jsUser.greetings); // [Function (anonymous)] => function not executed just its reference that we got
console.log(jsUser.greetings()); 

jsUser.greetings2 = function() {
    console.log(`Hello! my name is ${this.email}`); // values those will be access by brackets will not trigger by dot(.) after "this" keyword
}

console.log(jsUser.greetings2());