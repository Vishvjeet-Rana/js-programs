//we do comparision using == > < >= <= these operators
//let do some fun

console.log("now we will play with zero");

console.log(0 == 0); //true
console.log(0 < 0); //false
console.log(0 > 0); //false
console.log(0 >= 0); //true
console.log(0 <= 0); //true

console.log("now we will play with null");

console.log(null == null); //true
console.log(null >= null); //true
console.log(null <= null); //true
console.log(null > null); //false
console.log(null < null); //false

console.log("now we will play with undefined");

console.log(undefined == undefined); //true
console.log(undefined <= undefined); //false
console.log(undefined >= undefined); //false
console.log(undefined < undefined); //false
console.log(undefined > undefined); //false

//lets explore some more things with null and zero
console.log(null == 0);
console.log(null <= 0);
console.log(null >= 0);
console.log(null > 0);

/*
Imp to Note :- In Js, eequality checker == and comparision operators < > <= >=
works differently.
Comparision converts null to a number, treating it as 0. 
That's why (3) null >= 0 gives true and (1) null > 0 false.
*/

console.log(undefined == 0); //false
console.log(undefined < 0); //false
console.log(undefined > 0); //false

console.log(undefined == null);//true - because undefined loosely equal to only null