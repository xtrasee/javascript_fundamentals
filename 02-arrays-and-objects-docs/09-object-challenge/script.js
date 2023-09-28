
// Step 1
const library = 
    [
        {
            title: 'Cookies',
            author: 'Tracy Nguyen',
            status: {
                own: true,
                reading: false,
                read: false,
            }
        },

        {
            title: 'Milk',
            author: 'Tracy Nguyen',
            status: {
                own: true,
                reading: false,
                read: false,
            }
        }
    ]


// Step 2
library[0].status.read = true;
library[1].status.read = true;
console.log(library);

// Step 3
const { title: firstBook} = library[0];
console.log(library);

// Step 4
const str = JSON.stringify(library);
console.log(str);
