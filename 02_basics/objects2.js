// const tinderUser = new Object(); // singleton object

const tinderUser = {};

tinderUser.id = "12233";
tinderUser.name = "Vishvjeet";
tinderUser.fullname = "Vishvjeet Rana";

// console.log(tinderUser);

const regularUser = {
    email : "hello@yahoo.com",
    userName : {
        fullName : {
            firstName : "Mumbai",
            lastName : "Indians"
        }
    }
}

console.log(regularUser.userName?.fullName.firstName);

const obj1 = {1 : "a", 2 : "b"};
const obj2 = {3 : "a", 4 : "b"};
const obj3 = {5 : "a", 6 : "b"};

const newObj0 = Object.assign(obj1,obj2,obj3); // in this the values of all obj2 and obj3 objects are starting assign in obj1 but result will be as desired 
const newObj1 = Object.assign({},obj1,obj2,obj3); // now in this the values of all three objects are starting assign in {}

// modern and better way
const newObj2 = {...obj1, ...obj2, ...obj3};
console.log(newObj2);

const user = [
    {
        id : "1234",
        name : "hello"
    },
    {
        id : "1234",
        name : "hello"
    },
    {
        id : "1234",
        name : "hello"
    },
    {
        id : "1234",
        name : "hello"
    },
]

console.log(user[2].name);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(typeof(Object.keys(tinderUser))); // object

console.log(tinderUser.hasOwnProperty('name'));
