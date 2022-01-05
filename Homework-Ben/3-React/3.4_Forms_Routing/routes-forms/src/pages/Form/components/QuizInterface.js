import React, { useState } from "react";
const QuizInterface = ({ quiz, i }) => {
  const [answer, setAnswer] = useState(quiz.choice1);
  const [answeredCorrectly, setAnsweredCorrectly] = useState(false);
  return (
    <div class="questionsWithFlair">
      <div class="questions">
        <div key={i}>
          <div class="header">
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
          {!answeredCorrectly ? (
            <button
              class="buttons"
              onClick={(e) => {
                if (answer === quiz.answer) {
                  return setAnsweredCorrectly(true);
                } else {
                  return console.log("answer incorrect", answer);
                }
              }}
            >
              Answer
            </button>
          ) : (
            <div></div>
          )}
          <h4>{answeredCorrectly ? quiz.answer + " is correct!" : ""}</h4>
        </div>
      </div>
      <img class="flair" src={quiz.flair} alt="relating to anime in the quiz" />
    </div>
  );
};

export default QuizInterface;
