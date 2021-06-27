const body = document.getElementById("body");
document.title = "A Really Useful Quiz";

//header
const header = document.createElement("h1");
header.textContent = "Neal's Really Useful Quiz";
header.style = "background-color:blue;color:yellow;text-align:center";
body.appendChild(header);
//header

//quiz questions
const quiz = [
  {
    question: "Where is the Island of Sodor located?",
    answers: [
      "The Caspian Sea",
      "The Irish Sea",
      "The Black Sea",
      "The Aegean Sea",
    ],
    answer: "The Irish Sea",
  },
  {
    question: "What is the primary railway on the Island of Sodor?",
    answers: [
      "Great Western Railway",
      "North Western Railway",
      "Southern Railway",
      "North Eastern Railway",
    ],
    answer: "North Western Railway",
  },
  {
    question:
      "Which Engine was the first character created for the Railway Series, and in-universe, the oldest engine on the Sodor Railway?",
    answers: ["Thomas", "Gordon", "Henry", "Edward"],
    answer: "Edward",
  },
  {
    question: "The Great Western Engine Duck got his nickname because of his characteristic 'waddle.' What is his given name?",
    answers: [
      "Rheneas",
      "Ainsleigh",
      "Montague",
      "Carlisle",
    ],
    answer: "Montague",
  },
  {
    question: "Gordon the Big Blue Engine is known for doing this job.",
    answers: [
      "Shunting Trucks in the Yard",
      "Pulling the Mail Train",
      "Rescuing Derailed Engines",
      "Pulling the Express Train",
    ],
    answer: "Pulling the Express Train",
  },
  {
    question: "James is known for being vain and boastful - but if you ask him, he's a 'Very ____ Engine!'",
    answers: [
      "Handsome",
      "Splendid",
      "Grand",
      "Spiffing",
    ],
    answer: "Splendid",
  },
  {
    question: "What is the proper name for someone from the Island of Sodor?",
    answers: [
      "Sodoran",
      "Sodran",
      "Sodorian",
      "Sudrian",
    ],
    answer: "Sudrian",
  },
  {
    question: "The port of Brendam began as a humble fishing town, but experienced a mining and industrial boom when this was discovered there.",
    answers: [
      "Clay",
      "Coal",
      "Zinc",
      "Granite",
    ],
    answer: "Clay",
  },
  {
    question: "This fish is one of Sodor's main exports, well known on breakfast tables around the world, and even has a train named for it - The Flying ____.",
    answers: [
      "Cod",
      "Haddock",
      "Kipper",
      "Saury",
    ],
    answer: "Kipper",
  },
  {
    question: "The author of the Railway Series is Rev. W. Awdry. What does the 'W' stand for?",
    answers: [
      "Wilbert",
      "Warwick",
      "Wulfric",
      "Westlin",
    ],
    answer: "Wilbert",
  },
];
//quiz questions

//intro with button
const iDiv = document.createElement("div");
iDiv.className = "iDiv";
body.appendChild(iDiv);
const intro = document.createElement("p");
intro.className = "intro";
intro.style = "font-size:20px;text-align:center"
iDiv.appendChild(intro);
intro.textContent =
  "The Island of Sodor is surrounded on all sides by blue seas. It has trees of green and sandy yellow beaches. It also has lots and lots of railway lines. See how well you know this fictional island in this little quiz. But do be careful - you'll be on a strict schedule, and it won't do to be late.";
const question01 = document.createElement("img");
question01.classname = "question01";
question01.style = "height:100px;justify-content:center";
iDiv.appendChild(question01);
question01.src = "./assets/latest.webp";
//a picture of the fat controller

const begin = document.createElement("button");
begin.className = "begin";
iDiv.appendChild(begin); //<<<Start Button
begin.textContent = "Begin!";
begin.style = "align-self:center"

const restart = document.createElement("button");
restart.className = "restart";
restart.textContent = "Try again?";
restart.addEventListener("click", () => {
  location.reload();
});

let timer = 60; //<<<Set Timer Length
begin.addEventListener("click", () => {
  //timer
  const pDiv = document.createElement("div");
  pDiv.id = "timer";
  body.appendChild(pDiv);
  let interval = setInterval(function () {
    timer--;
    pDiv.textContent = "Time remaining: " + timer;
    if (timer < 0) {
      clearInterval(interval);
      const losePic = document.createElement("img"); //<<<Failure Screen
      losePic.id = "losePic";
      losePic.src = "./assets/Lose.jpg";
      const loseMsg = document.createElement("div");
      loseMsg.className = "loseMsg";
      body.replaceChild(loseMsg, pDiv);
      const loseText = document.createElement("p");
      loseText.className = "loseText";
      loseText.textContent = "You have caused confusion and delay!"; //change msg add button for restart
      loseMsg.appendChild(loseText);
      loseMsg.appendChild(restart);
      body.replaceChild(losePic, qDiv);
    }
  }, 1000);
  //timer
  //question format construction
  const qDiv = document.createElement("div");
  qDiv.className = "qDiv";
  const questionText = document.createElement("p");
  questionText.className = "questionText";
  const a1 = document.createElement("button");
  const a2 = document.createElement("button");
  const a3 = document.createElement("button");
  const a4 = document.createElement("button");
  a1.className = "answers";
  a2.className = "answers";
  a3.className = "answers";
  a4.className = "answers";
  a1.id = "a1";
  a2.id = "a2";
  a3.id = "a3";
  a4.id = "a4";
  a1.style.color = "#150070";
  a2.style.color = "#150070";
  a3.style.color = "#150070";
  a4.style.color = "#150070";
  //question format construction
  body.replaceChild(qDiv, iDiv);

  //first set of questions
  let n = 0;
  questionText.textContent = quiz[n].question;
  a1.textContent = quiz[n].answers[0];
  a2.textContent = quiz[n].answers[1];
  a3.textContent = quiz[n].answers[2];
  a4.textContent = quiz[n].answers[3];
  body.appendChild(qDiv);
  qDiv.appendChild(questionText);
  qDiv.appendChild(a1);
  qDiv.appendChild(a2);
  qDiv.appendChild(a3);
  qDiv.appendChild(a4);
  //first set of questions
  document.querySelectorAll(".answers").forEach((answer) => {
    answer.addEventListener("click", nextQuestion);
    function nextQuestion(c) {
      if (n < quiz.length - 1 && c.target.innerText == quiz[n].answer) {
        n++; // ++n
        questionText.textContent = quiz[n].question;
        a1.textContent = quiz[n].answers[0];
        a2.textContent = quiz[n].answers[1];
        a3.textContent = quiz[n].answers[2];
        a4.textContent = quiz[n].answers[3];
        a1.style.color = "#150070";
        a2.style.color = "#150070";
        a3.style.color = "#150070";
        a4.style.color = "#150070";
        console.log("Toot Toot!");
        //Else-If for victory
      } else if (c.target.innerText == quiz[n].answer) {
        console.log("Really Very Useful!"); //final answer trigger
        const wDiv = document.createElement("div");
        wDiv.className = "wDiv";
        const wText = document.createElement("p");
        wText.textContent = "Well-Done! You are a Really Useful Engine!"; // <<<"Win" Text
        wDiv.appendChild(wText);
        const wImage = document.createElement("img");
        wImage.className = "wImage";
        wDiv.appendChild(restart);
        wDiv.appendChild(wImage);
        body.removeChild(pDiv);
        wImage.src = "./assets/Win.jpg"; //<<<Win Image
        body.replaceChild(wDiv, qDiv);
      } else {
        console.log("toot toot!");
        c.target.style.color = "red"; //turn button red
        timer = timer - 7;
      }
    }
  });
});
