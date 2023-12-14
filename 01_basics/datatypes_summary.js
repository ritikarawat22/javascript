// #Primitive Data Type(call by value)-means changes r done on copy of value.
// 7 types: String,Number,Boolean,Null,Undefined,Symbol(to make a value unique),BigInt

// Reference Type Datatype(Non-Primitive)-memory reference can be allocated in this.
//Arrays,Objects,Functions

// Is javascript dynamic typed or static typed?

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null

let userEmail; // will have undefined value.

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);
