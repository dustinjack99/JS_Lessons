import React, { useState } from "react";
const QuizInterface = ({ quiz, i }) => {
  const [answer, setAnswer] = useState(quiz.choice1);
  return (
    <div>
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
    </div>
  );
};

export default QuizInterface;
