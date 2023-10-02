// # FizzBuzz Challenge

// When you go to get a job as a web developer, you may be given specific programming challenges. It's good to practice challenges like this not only for job interviews, but it sharpens your skills in general. You'll find that most challeneges have some kind of iteration involved. One of the most common challenges is the FizzBuzz challenge. This has to do with loops and conditionals, so I think that this is a good challenge at this point in the course.

// **Instructions:**

// - Print/log the numbers from 1 to 100
// - For **multiples of three** print "Fizz" instead of the number
// - For **multiples of five** print "Buzz"
// - For numbers which are **multiples of both three and five** print "FizzBuzz".

// **Hints:**


for (i = 1; i <= 100; i++){
    if (i % 3 === 0 && i % 5===0) {
        console.log("FizzBuzz");
    }

    else if (i % 3 === 0) {
        console.log("Fizz");
    }

    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}

