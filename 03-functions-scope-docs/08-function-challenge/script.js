// ## Challenge 1

// solution 1
function getCelsuis(x) {
    return (x - 32) * 5 / 9
}

// bonus one line solution
const x = x => (x - 32) * 5 / 9;


console.log(x(50));
console.log(getCelsuis(70));

// ## Challenge 2
 
function minMax(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    return {
        min, max
    };
}

console.log(minMax([1, 4, 10]));

// ## Challenge 3

((len, width) => {
    const area = len * width;
    console.log(`The area of a rectangle with a length of ${len} and a width of ${width} is ${area}`);
})(20, 5)