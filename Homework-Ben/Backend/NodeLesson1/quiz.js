// Write your inquirer quiz app here!
const inquirer = require("inquirer");
inquirer
  .prompt([
    { name: "Q1", message: "What is your name?", type: "input" },
    {
      name: "Q3",
      message: "Can you hold your breath for 88 minutes?",
      type: "confirm",
    },
    {
      name: "Q4",
      message: "Which of these would you like on your ice-cream?",
      type: "checkbox",
      choices: ["Chocolate Chips", "Caramel", "Peanuts", "Cherry"],
    },
    {
      name: "Q2",
      message: "Which is my favorite Final Fantasy?",
      type: "rawlist",
      choices: ["FFVII", "FFIX", "FFX"],
      answer: "FFVII",
    },
    {
      name: "Q5",
      message: "Who main-evented Wrestlemania 18?",
      type: "checkbox",
      choices: [
        "Stone Cold",
        "Triple H",
        "The Rock",
        "Hulk Hogan",
        "Kurt Angle",
        "Chris Jericho",
        "Brock Lesnar",
      ],
      answer: ["Triple H", "Chris Jericho"],
    },
    {
      name: "Q6",
      message: "Which of these isn't the title of a Dragon Ball Z episode?",
      type: "rawlist",
      choices: [
        "Saiyans Emerge",
        "Frieza Strikes!",
        "Fighting Power: One Million?",
        "The Secret of Dr. Gero",
        "Bow to the Prince",
        "The Terror of Majin Buu",
        "The Earth's Spirit Bomb",
        "Buu's Reincarnation",
      ],
    },
    {
      name: "Q7",
      message: "If I could be any Avenger which would I choose?",
      type: "rawlist",
      choices: [
        "Iron-Man",
        "Thor",
        "Hulk",
        "Captain America",
        "Spider-Man",
        "Doctor Strange",
        "Ant-Man",
        "Star Lord",
        "Black Panther",
        "Captain Marvel",
      ],
    },
    {
      name: "Q8",
      message: "Which of these Smash Bros. have I played the least",
      type: "rawlist",
      choices: [
        "Mewtwo",
        "Kirby",
        "Samus",
        "Zero-Suit Samus",
        "Ganondorf",
        "Lucario",
        "Ike",
        "Sheik",
        "Lucina",
        "Roy",
        "Marth",
      ],
    },
    {
      name: "Q9",
      message: "During which block did I start playing Magic?",
      type: "rawlist",
      choices: ["Ravnica", "Lorwyn", "Alara", "Innistrad", "Tarkir"],
    },
    {
      name: "Q10",
      message: "What is the original designation of the ship the 'Outlaw Star'?",
      type: "input",
    },
  ])
  .then((answers) => {
    let score = 1;
    console.info(answers.Q1 + "'s Answers", answers);
    // Q3
    if (!answers.Q3) {
      console.log(
        `We learned you aren't a liar ${answers.Q1}. 88 minutes is WAY too long to hold your breath!`
      );
      score++;
    } else {
      console.log(`88 minutes?! No points for dirty liars ${answers.Q1}!`);
    }
    // Q4
    console.log(`One Ice-cream with ${answers.Q4} coming up!`);
    score++;
    // Q2
    if (answers.Q2 === "FFVII") {
      console.log("Of course it's FFVII. That's an easy one.");
      score++;
    } else {
      console.log(`${answers.Q2} is good but not my favorite. It's FFVII.`);
    }
    // Q5
    let Q5A = "Triple H,Chris Jericho";
    if (answers.Q5.toString() === Q5A) {
      console.log("Wrestlemania 18 was indeed finished with Triple H vs Chris Jericho");
      score++;
    } else {
      console.log(
        `Wrestlemania 18's main-event was actually Triple H vs Chris Jericho, not ${answers.Q5[0]} vs ${answers.Q5[1]}`
      );
    }
    // Q6
    if (answers.Q6 === "The Earth's Spirit Bomb") {
      console.log(
        "Good job! The episode was actually named 'People of the Earth Unite'."
      );
      score++;
    } else {
      console.log(
        `${answers.Q6} is a real episode title. The imposter was actually 'The Earth's Spirit Bomb'.`
      );
    }
    // Q7
    if (answers.Q7 === "Doctor Strange") {
      console.log(
        "Yes, being Sorcerer Supreme sounds like the most amazing job with endless possibilities!"
      );
      score++;
    } else {
      console.log(
        `Yes being ${answers.Q7} would be cool too but Doctor Strange would be my first choice.`
      );
    }
    // Q8
    if (answers.Q8 === "Ganondorf") {
      console.log("Correct, Ganondorf was never one of my guys.");
      score++;
    } else {
      console.log(`Incorrect. I played ${answers.Q8} much more than I played Ganondorf.`);
    }
    // Q9
    if (answers.Q9 === "Lorwyn") {
      console.log("Right you are, I started with Lorwyn. All the way back in 2007!");
      score++;
    } else {
      console.log(`Oops, I started Magic in Lorwyn, not ${answers.Q9}.`);
    }
    // Q10
    if (answers.Q10 === "XGP 15A-II") {
      console.log("XGP-15A-II! How the fuck did you know that!?");
      score++;
    } else {
      console.log(
        `The Outlaw Star wasn't called the ${answers.Q10} but it's ok ${answers.Q1}... I didn't expect anyone to know that.`
      );
    }
    // console.log(Object.keys(answers).length); This gives you an array of the object's "Keys"
    console.log(`score: ${score}/${Object.keys(answers).length}`);
  });
