// scope understanding in Functions
function one() {
    const username = "Vishvjeet";
    if(true) {
        const surname = "Rana";;
        // console.log(username);
    }
    // console.log(surname); // This will give error as its (surname) scope only limited to if block
}

// console.log(username); // This also will give error as it's (username) scope limited to function block only
one();


// +++++++++++++ IMPORTANT +++++++++++++++
console.log(two(5));
function two(num) {
    return num + 1; 
}
// This will not give any error if function call before or after the function initialization


console.log(result(5));
const result = function three(num) {
    return num + 1;
}
// Now this thing will us error because its depend on how we are declaring functions
// variable functions gives error if called before function initialization



// Thia will not give error as we are calling "function variable" after the initialization
// const result = function three(num) {
//     return num + 1;
// }
// console.log(result(5));

