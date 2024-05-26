let a = 10;
const b = 20;
var c = 30;

if(true) {
    let a = 100;
    const b = 200;
    var c = 300;
}

console.log(a); // it will not be printing as 100 as its scope limited to if statement only
console.log(b); // its scope also limited to if statement only
console.log(c); // but it's value will be overide by c = 300 as var is a global keyword and its scope isn't limited

// ++++++++++ IMPORTANT ++++++++++
// The global scope in console of browser and in code enviroment are not same.
// Or where we runs code using node in code editor, global scope is different from console's global scope.