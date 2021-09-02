var inquirer = require("inquirer");
let playerScore = 0;

inquirer
  .prompt([
    { type: "input", name: "delicious", message: "What is Delicious?" },
    {
      type: "list",
      name: "lute",
      message: "How many courses are on a Baroque Lute?",
      choices: ["3-4", "5-7", "8-10", "11-13"],
    },
    {
      type: "list",
      name: "ossobuco",
      message: "What language is 'Osso Buco' from?",
      choices: [
        "Spanish",
        "French",
        "Italian",
        "Romanian",
        "Igbo",
        "Russian",
        "Latin",
      ],
    },
    {
      type: "list",
      name: "is",
      message: "What is?",
      choices: ["All.", "Nothing.", "Me."],
    },

    {
      type: "input",
      name: "cats",
      message: "Why are cats such assholes?",
    },
    {
      type: "input",
      name: "toast",
      message: "Which is better - Peanut Butter, or Biscoff?",
    },
    {
      type: "list",
      name: "takeout",
      message: "What is your favorite thing to get at a Chinese restaurant?",
      choices: [
        "Lo Mein",
        "Egg Foo Yung",
        "Fried Rice",
        "Kung Pao",
        "General Tso's Chicken",
        "Crab Rangoon",
        "Fried Wontons",
        "Fragrant Eggplant",
        "Soup",
        "I don't like Chinese food",
      ],
    },
  ])

  .then((playerAnswers) => {
    console.log(playerAnswers);
    if (playerAnswers.delicious.toLowerCase() == "candy") {
      console.log("Correct. Candy is Delicious."), playerScore++;
    } else if ((playerAnswers.delicious = String)) {
      console.log("Yum!"), playerScore++;
    } else {
      console.log("Not right.");
    }
    if (playerAnswers.lute == "11-13") {
      console.log("That's right! Nerd."), playerScore++;
    } else {
      console.log(
        "Honestly I wouldn't expect ANYONE to know this. Don't feel bad."
      ),
        playerScore++;
    }
    if (playerAnswers.ossobuco == "Italian") {
      console.log(
        "Brava! Bellissima, Ben fatto! Brava! ...Cazzo, ora ho fame."
      ),
        playerScore++;
    } else if (playerAnswers.ossobuco == "Latin") {
      console.log("Versutus es. Reverentiam tibi."), playerScore++;
    } else {
      console.log("IT'S *RAWWWW!*");
    }
    if (playerAnswers.is == "Me.") {
      console.log("Cogito. Ergo, sum."), playerScore++;
    } else if (playerAnswers.is == "Nothing.") {
      console.log("Well that's just depressing, isn't it.");
    } else {
      console.log(
        "A Buddhist monk walks up to to a hot dog vendor and says 'make me One with Everything.'"
      );
      playerScore++;
    }
    if ((playerAnswers.cats = String)) {
      console.log("Yeah, I mean... probably? Fucking cats, man."),
        playerScore++;
    } else {
      console.log("Hey! Don't ignore me!");
    }
    if (playerAnswers.toast.toLowerCase() == "peanut butter") {
      console.log("Nice."), playerScore++;
    } else if (playerAnswers.toast.toLowerCase() == "biscoff") {
      console.log(
        "Either you're British or you're some kind of fucking hipster. Still though - respect."
      ),
        playerScore++;
    } else if (playerAnswers.toast.toLowerCase() == "nutella") {
      console.log("Ah, I see you are a man of culture."), playerScore++;
    } else {
      console.log("What are you, some kinda wiseguy?");
    }
    if (playerAnswers.takeout == "I don't like Chinese food") {
      console.log(
        "Okay, fair - still, it wouldn't hurt you to be more adventurous."
      ),
        playerScore++;
    } else {
      console.log("You have good taste, my dude."), playerScore++;
    }
    console.log("YOUR SCORE IS: " + playerScore);
  });
