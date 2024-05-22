// Arrays in Js

const myArr = [0, 1, 2, 3, 4, 5];

const myArr2 = ["hello", "world"]

const myArr3 = [0, 1, 2, "aryan", true, false]

console.log(myArr);
console.log(myArr2);
console.log(myArr3);

// +++++++++++++ Array Methods +++++++++++++++

console.log(myArr[3]);
console.log(myArr.indexOf(4));
console.log(myArr.includes(6));
console.log(myArr.push(6)); // if we print it then it'll give length of array after pushing the element
console.log(myArr.push(7)); // same
console.log(myArr.pop()); // if we print it then it'll give length of array after popping the element
console.log(myArr);

console.log(myArr.join()); // now type of the o/p will be "String"
myArr.unshift(9); // pushes value at the front of the array
myArr.shift(); // pop element from front of the array
console.log(myArr);


// slice and splice methods

console.log("A " , myArr);

const myn1 = myArr.slice(1,3); // end-index is exclusive
console.log(myn1);

console.log("B " , myArr);

const myn2 = myArr.splice(1,3); // end-index is inclusive
console.log(myn2);

console.log("C " , myArr); 
// ++++++++++++++++ IMPORTANT ++++++++++++++
// original array will also be changed.
// if original array is [0,1,2,3,4,5] and splice(1,3) then slice will give [1,2,3] and
// orginal array will look like as [0,4,5]

