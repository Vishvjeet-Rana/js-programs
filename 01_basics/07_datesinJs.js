// Dates

let myDate = new Date();
console.log(myDate); // o/p => 2024-05-22T00:08:07.516Z
console.log(myDate.toString()); // o/p => Wed May 22 2024 00:02:37 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); // o/p => Wed May 22 2024
console.log(myDate.toLocaleString()); // o/p => 5/22/2024, 12:04:34 AM
console.log(myDate.toLocaleDateString()); // o/p => 5/22/2024
console.log(myDate.toLocaleTimeString()); //o/p => 12:06:57 AM
console.log(myDate.toISOString()); // o/p => 2024-05-22T00:05:40.050Z
console.log(typeof myDate); // object

let myCreatedDate = new Date(2023,0,10) // month indexing starts from 0
// let myCreatedDate = new Date(2023,0,10,5,3) // can define time also
// let myCreatedDate = new Date("8-19-2003") // indian date format
console.log(myCreatedDate.toLocaleString());

// Time 

 let myTime = Date.now();
 console.log(myTime); // in milliseconds
 console.log(myTime/1000); // for converting into seconds
 console.log(Math.floor(myTime/1000));

 console.log(myCreatedDate.getTime());
 console.log(Date.now()); // in milliseconds
 console.log(Date.now()/1000);
 console.log(Math.floor(Date.now()/1000));

let newDate = new Date();

console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMinutes());
console.log(newDate.getMonth() + 1); // + 1 for getting exact month as their indexing starts from 0
console.log(newDate.getSeconds());


const date = newDate.toLocaleString('default' , {
    weekday: "long"
})

console.log(date);



