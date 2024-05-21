const score = 540
console.log(score);

const balance = new Number(128.759028)
console.log(balance.toFixed(2));

console.log(balance.toPrecision(3));

console.log(balance.toString().length);

let hundreds = 10000000000000
console.log(hundreds.toLocaleString('en-IN'));

//************************ MATHEMATICS *************** */
console.log(Math);
console.log(Math.abs(-55));
console.log(Math.round(6.4));
console.log(Math.ceil(5.3));
console.log(Math.floor(7.4));
console.log(Math.min(5, 4, 8, 1));
console.log(Math.max(5, 8, 10 ,5 , 67));

console.log(Math.random()); // it will give us value in range 0-1
console.log(Math.random()*10); // Multiplying it by 10 scales this range to be between 0 (inclusive) and 10 (exclusive).Example values: 0.123, 4.567, 9.999, etc.
console.log((Math.random()*10)+1); // Adding 1 shifts this range up by 1, resulting in a range between 1 (inclusive) and 11 (exclusive). Example values: 1.123, 5.567, 10.999, etc.

//suppose if we want to set the range or want values in a defined range
const min = 10;
const max = 20;

console.log(Math.random() * (max - min + 1) + min); // range will be from 10(inclusive) to 20(exclusive)

// The outputs of all above random functions will be in the range of floating number
