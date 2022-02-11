const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log("Welcome to the password validator tool!");
reader.question("Please enter a password to validate ", function(input) {
    password = input;


    if(password.length >= 10) {
        console.log("success! password will work") 
    } else if (password.length < 10) {
        console.log("error! password is not valid")
    }

    reader.close()
})