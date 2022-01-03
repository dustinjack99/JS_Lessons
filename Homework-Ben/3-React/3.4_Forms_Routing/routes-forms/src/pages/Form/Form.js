import React, { useState } from "react";
const Form = () => {
  const [answer, setAnswer] = useState("Kamehameha");
  const quizData = [
    {
      question: "question 1",
      questionText: "What is Naruto's signature move called?",
      choice1: "Kamehameha",
      choice2: "Rasengan",
      choice3: "Bankai",
      choice4: "Stone Cold Stunner",
      answer: "Rasengan",
    },
    {
      question: "question 2",
      questionText: "What is Goku's signature move called?",
      choice1: "Kamehameha",
      choice2: "Rasengan",
      choice3: "Bankai",
      choice4: "Stone Cold Stunner",
      answer: "Kamehameha",
    },
  ];
  return (
    <div>
      {quizData.map((quiz, i) => {
        return (
          <div key={i}>
            <div>
              <h2>{i + 1}.</h2>
              <h2>{quiz.questionText}</h2>
            </div>
            <p>{quiz.choice1}</p>
            <p>{quiz.choice2}</p>
            <p>{quiz.choice3}</p>
            <p>{quiz.choice4}</p>
            <select
              id={i}
              onChange={(e) => {
                setAnswer(e.target.value);
              }}
            >
              <option value={quiz.choice1}>{quiz.choice1}</option>
              <option value={quiz.choice2}>{quiz.choice2}</option>
              <option value={quiz.choice3}>{quiz.choice3}</option>
              <option value={quiz.choice4}>{quiz.choice4}</option>
            </select>
            <button
              onClick={(e) => {
                if (answer === quiz.answer) {
                  return console.log("answer correct", answer);
                } else {
                  return console.log("answer incorrect", answer, i);
                }
              }}
            >
              Final Answer
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Form;
