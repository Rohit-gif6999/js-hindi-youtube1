// 2 types of data types
//   1. Primitive(call by value)

// 7 types : String,Number,Boolean,null,undefined,symbol,BigInt
const score = 100      // dynamically type no need to declare datatypes
const score_1 = 100.3  // number


const isLoggedIn = false // Boolean
const outsideTemp = null  // null
let userEmail = undefined
let email;  // by default undefined


const id = Symbol('123')         // both are different
const anotherid = Symbol('123')  // symbol

// console.log(id===anotherid);


const bigNumber = 12345678n //BigInt






//   2. Non Primitive(call by reference)

// 3 types : Array,Objects,Functions


const heros = ["tania","parineeti"];  // Arrays

let myObj = {           // objects
    name: "rohit",
    age: 23,
}


const myFunction = function()
{
    console.log("Hello world");
}


// console.log(typeof heros);





// ++++++++++++++++++++++++++++++++++++++++

// stack (Primitive) , heap(Non primitive)

let myYoutubename = "abcde.com"

let anothername = myYoutubename;
anothername = "chai aur code";
console.log(myYoutubename)
console.log(anothername)
let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "rohit@google.com"

console.log(userOne.email);
console.log(userTwo.email);


