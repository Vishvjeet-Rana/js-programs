const name = "john"
let age = "35"
let hobby = "chess"

// This is not a good way
// console.log(name +  age +  hobby);

//concatnate string using "String Interpolation"
// console.log(`my name is ${name} . My age is ${age} and my hobby is to play ${hobby}`);

//another way of string declaratoion
let getName = new String("Kevin-Kv");

// console.log(getName);

// console.log(getName.toUpperCase());
// console.log(getName.toLowerCase());

// console.log(getName.split("-"));

let anotherString = getName.substring(-12,4)
console.log(anotherString)

let anotherStringTwo = getName.slice(-10,4)
console.log(anotherStringTwo);

let newString = "             aryan rana"
console.log(newString.trim());

let replaceString = "https://vishvjeet.com%30vrav"
console.log(replaceString.replace("%30","-"));

console.log(replaceString.includes("jeet"));