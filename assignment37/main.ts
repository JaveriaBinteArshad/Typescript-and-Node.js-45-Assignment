// Assignment 37

// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads 
// I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size 
// with a different message.

function make_shirt(size = "large", message = "I love TypeScript") {
    console.log(`The shirt size is ${size} and it will have the message ${message} printed on shirt.`);
}

make_shirt();

make_shirt("Medium");

make_shirt("Small", "You are Great");