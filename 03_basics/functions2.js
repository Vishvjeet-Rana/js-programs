function calculateCartPrice( ...num1) {
    return num1;
}

function calculateCartPrice(value1, value2, ...num1) { // in this case the first two values will be taken by value1 and value2 variables and rest is will be returned as an array
    return num1;
}

console.log(calculateCartPrice(500 ,400 ,667 ,202 ,999));


// Objects as function arguments

const user = {
    userName: "Vishvjeet",
    price: 100
}

function getObject(myObject) {
    return `Username is ${myObject.userName} and the price is ${myObject.price}`;
}

// console.log(getObject(user));

console.log(getObject({ // object as argument
    userName: "abc",
    price: 67
}));


// Array as arguments

const newArray = [100, 200, 300, 400, 500];

function getArrayElement(getArray) {
    return getArray[2];
}

// console.log(getArrayElement(newArray));
console.log(getArrayElement([8742, 728, 98210, 10944]));