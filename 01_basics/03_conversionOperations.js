let some = undefined
let convertNum = Number(some) 
// console.log(typeof convertNum); 
// console.log(convertNum); 

// NOTES - CONVERSION TO INT/NUMBER
// "33" => 33
// "33abcsjf" => NaN but typeof NaN is number
// null => 0
// undefined => NaN
// true => 1 and false => 0


let isLogged = 0
let convertBool = Boolean(isLogged)
// console.log(typeof convertBool);
// console.log(convertBool);

// NOTES - CONVERSION TO BOOLEAN
// "" => false
// "something" => true
// null => false
// undefined => false
// any +ve or -ve value => true
// 1 => true and 0 => false 


let stringVal = undefined
let convertString = String(stringVal) 
// console.log(typeof convertString)
// console.log(convertString);  

// NOTES - CONVERTSION TO STRING
// null => null - but as a string
// undefined => undefined - but as a string
// any number as it is but as a string
// both true and false as it is but as a string

console.log(true)
let varia = 1 + "2" + 1
console.log(varia);
console.log(typeof varia);