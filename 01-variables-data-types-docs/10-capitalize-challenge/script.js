// **Instructions**:

// Take the variable `myString` and capitalize the first letter of the word using some of the methods that we talked about in the last video. Put the result in a variable called `myNewString`.

// Create multiple solutions if you would like.

// **Expected Result:**

// ```JavaScript
// const myString = 'developer';

// console.log(myNewString); // 'Developer'


// Solution One
// const myString = 'developer';
// const myNewString = myString[0].toUpperCase() + myString.slice(1,9);
// console.log(myNewString);

// Solution Two
const myString = 'developer';
const myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);
console.log(myNewString);

