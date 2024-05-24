const marvel_heros = ["ironman", "thor", "hulk"];
const dc_heros = ["flash", "superman", "batman"];

// marvel_heros.push(dc_heros);
console.log(marvel_heros); // [ 'ironman', 'thor', 'hulk', [ 'flash', 'superman', 'batman' ] ]

// To merege them asa single array we can use "conacat" method
const merged_arrays = marvel_heros.concat(dc_heros);
console.log(merged_arrays); // [ 'ironman', 'thor', 'hulk', 'flash', 'superman', 'batman' ]

// NOTE => "push" pushes in existing array but "concat" returns new array


// Spread operator
console.log([...marvel_heros , ...dc_heros]);


// flat method
const num_array = [0, 1, [2, [3, [4, 5]]]];;
const real_num_array = num_array.flat();
console.log(real_num_array);


// ALL IMPORTANT TEST CASES FOR "FLAT METHOD"
const arr1 = [1, 2, [3, 4]];
arr1.flat();
// [1, 2, 3, 4]

const arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

const arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(Infinity);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]



// Using flat() on sparse arrays
const arr5 = [1, 2, , 4, 5];
console.log(arr5.flat()); // [1, 2, 4, 5]

const array = [1, , 3, ["a", , "c"]];
console.log(array.flat()); // [ 1, 3, "a", "c" ]

const array2 = [1, , 3, ["a", , ["d", , "e"]]];
console.log(array2.flat()); // [ 1, 3, "a", ["d", <1 empty item>, "e"] ]
console.log(array2.flat(2)); // [ 1, 3, "a", "d", "e"]



// Calling flat() on non-array objects


// The flat() method reads the length property of this and then accesses each property 
//whose key is a nonnegative integer less than length. 
//If the element is not an array, it's directly appended to the result. 
//If the element is an array, it's flattened according to the depth parameter.

const arrayLike = {
//   length: 3,
  0: [1, 2],
  // Array-like objects aren't flattened
  1: { length: 2, 0: 3, 1: 4 },
  2: 5,
  3: 3, // ignored by flat() since length is 3
};

console.log(Array.prototype.flat.call(arrayLike));
// [ 1, 2, { '0': 3, '1': 4, length: 2 }, 5 ]