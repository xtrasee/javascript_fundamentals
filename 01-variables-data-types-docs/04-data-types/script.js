/* 
primitive data types: stored in the stack

string
number
boolean
null - intentional absense
undefined - variable not yet defined
symbol - built-in object whose constructor returns a unique symbol
BigInt - numbers greater than 'number' type can handle

reference types: stored in the heap
object literals
arrays
funcations

static typed v dynamic typed:
javascript is dynamically-typed language

typescript is superset of JavaScrript that allows for static-typing
*/



// string
const firstName = 'Sara';

console.log(firstName, typeof firstName);

// symbol
const id = Symbol('id');