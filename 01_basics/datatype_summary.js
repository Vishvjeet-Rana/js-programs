//On the basis of that how we access data to/from memory js has two types of data types
// 1.) Primitive data type
// 2.) Non-primitive data type (Reference type)

//primitive 
let bigNumber = 75937486927892697629n;
let isLoggedIn = false;
let score = 33;
const Id = "456";
const userPersonalId = Symbol("1234");
const userPublicId = Symbol("1234"); //these two aren't same Symbol makes them unique

console.log(typeof userPublicId);

//non - primitive
//1. Arrays 2. functions 3. Objects

let cities = ["london","newyork","hongkong","dubai","mumbai","delhi"]; //Arrays

const myFunction = function(){  // object functions
    console.log("Hello Aliens!!");
}

const info = {  //objects
    name : "John doe",
    age : 35,
    address : "Gol Street"
}

console.log(typeof info);

//********************************************************* */
//Memory types in javaScript
// 1.) Stack for primitive data types - original value get copied only and passed to another variable
// 2.) Heap for non-primitive data types - if value of one var. passed onto another va. then
//they will point to same reference in the heap memory

// Stack
let mySchoolName = "john"
let myHomeName = mySchoolName

myHomeName = "Kevin"

console.log(mySchoolName)
console.log(myHomeName)

//Heap
let userOne = {
    name : "one",
    email : "one@google.com"
}

let userTwo = userOne

userTwo.name = "hello"

console.log(userOne)
console.log(userTwo);