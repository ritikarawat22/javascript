// #Primitive Data Type(call by value)-means changes r done on copy of value.
// 7 types: String,Number,Boolean,Null,Undefined,Symbol(to make a value unique),BigInt

// Is javascript dynamic typed or static typed?

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null

let userEmail; // will have undefined value.

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

// const bigNumber = 34556768798796764544321n // bigInt

// Reference Type Datatype(Non-Primitive)-memory reference can be allocated in this.
//Arrays,Objects,Functions -->typeof returns datatype as object but function's typeof is object function.

const heroes = ["shaktiman","naagraj","doga"]
let myObj ={
    name_1:"Ritika",
    age: 22,                                   //objects are written inside curly braces as a key value pair.
}

//function can be treated as a variable in javascript.

//function(){}  --> function defination

const myFunction  = function(){                                 //function defination stored in  a variable.
    console.log("Hello World!!");
}       

console.log(typeof bigNumber);  //typeof gives datatype of the variable.
console.log(typeof outsideTemp);
console.log(typeof heroes);
console.log(typeof myObj);
console.log(typeof myFunction);
console.log(typeof id);
console.log(typeof anotherId);


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// stack memory(used in primitive datatype)-you get  variable copy,heap memory(Non-Primitive datatype) -you get reference of original value.

let myYoutubename = "ritikarawatdotcom"
let anothername = myYoutubename
anothername = "chaiaurcode"
console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email:"user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);
