const fs = require("fs");
const badmath = require("badmath");

// fs.readFile(__dirname + "/writeme.txt", "UTF8", (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(data, "data!");
// });

// fs.appendFile(__dirname + "/writeme.txt", "\n" + nick, (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("data recorded");
// });

// node {filename} {5 names separated by spaces}

let name1 = process.argv[2];
let name2 = process.argv[3];
let name3 = process.argv[4];
let name4 = process.argv[5];
let name5 = process.argv[6];
let site = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p>
     ${name1}: Did you ever hear the tragedy of Darth ${name2} the Wise?
     <br>
${name3}: No.
<br>
${name1}: I thought not. It's not a story ${name4} would tell you. It's a Sith legend. Darth ${name2} was a Dark Lord of the Sith, so powerful and so wise. He could use the Force to influence the midi-chlorians to create... life. He had such a knowledge of the Dark Side that he could even keep the ones he cared about... from dying.
<br>
${name3}: He could actually... save people from death?
<br>
${name1}: The Dark Side of the Force is a pathway to many abilities some consider to be unnatural.
<br>
${name3}: What happened to him?
<br>
${name1}: He became so powerful, the only thing he was afraid of was... losing his power which, eventually of course, he did. Unfortunately, he taught ${name5} everything he knew. And then ${name5} killed him in his sleep. Ironic. He could save others from death... but not himself.
<br>
${name3}: Is it possible to learn this power?
<br>
${name1}: Not from ${name4}
    </p>
</body>
</html>
`;
console.log(process.argv);

fs.writeFile(
  __dirname + "../../../Frontend" + "/superawesomewebpage.html",
  site,
  (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("site written");
  }
);
