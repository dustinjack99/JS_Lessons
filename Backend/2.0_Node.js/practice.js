//check node installation
// node -v

// type "node"!
//test out JS things, math functions, compare to code

//ctrl+c

//hello world!
// console.log("hello world!");

//variable exercise
//demo console logging document, alert

//warning about DOM + code written for project 1
// good news: arrays, variables, functions, loops, all still exist!

//DRY - Do Not Repeat Yourself 

//console.log(process.argv)
//breakdown of command line args, node and file

//filesystem, built into node.js
// const fs = require("fs");

// fs.readFile(__dirname + '/writeme.txt', 'UTF8', (err, data) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(data, "data!")
// })

//read file with (filename, charset, callback(err, data))
// Q: does this look familiar?

//activity!!
// fs.writeFile(__dirname + '/writeme.txt', process.argv[2], (err, data) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(data, "data!")
// })
// write to writeme.txt file, using (filename, data, callback(err))
//write a new file
//write new file with process.argv[2]

//activity!!
//how might we 'append' to a file?
// console.log(process.argv)
// fs.appendFile(__dirname + '/writeme.txt', '\n' + process.argv[2], (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(data, "data!")
// })

// import js file from local path;
//** ^^^ must be local path, Node looks for modules / built in libraries first
// log the imported values

//*** JUMP TO LESSON Pt. 2 */
// -------------------
//*** PRACTICE PT. 2 */

/*
inquirer.prompt(
    [
        {
            // input / password
            type: '',
            //message for the user
            message: '',
            //name = stored as
            name: ''
        }
    ]
)
This is async!! .then()
JSON.stringify() will need to be used
*/
