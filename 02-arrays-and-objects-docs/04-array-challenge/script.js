// CHALLENGE #1 SOLUTION

const arr = [1, 2, 3, 4, 5];

arr.push(6);
arr.reverse();

console.log(arr);


// ### Challenge 2:

// **Instructions:**

// Combine `arr1` and `arr2` into a new array called `arr3` with the following elements:

// ```js
// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [5, 6, 7, 8, 9, 10];
// ````

// Notice that both `arr1` and `arr2` include the number 5. You will have to find a way to get rid of the extra 5.

// **Expected Result:**

// ```js
// console.log(arr3);
// // [1,2,3,4,5,6,7,8,9,10]
// ```

// **Hint**: There are many ways to do this, but think of the concat() method or the spread operator as well as the slice() or splice() methods

// <details>
//   <summary>Click For Solution</summary>
  
// ```js
// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [5, 6, 7, 8, 9, 10];


// CHALLENGE #2 SOLUTION

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

arr2.splice(0, 1);
const arrOutput = arr1.concat(arr2);

console.log(arrOutput);