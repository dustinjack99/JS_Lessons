import QuizInterface from "./components/QuizInterface";
const Form = () => {
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
    {
      question: "question 3",
      questionText: "Bungee Gum has the properties of ____________?",
      choice1: "A Bungee cord and steel",
      choice2: "Anything it touches",
      choice3: "Toothpaste and Orange Juice",
      choice4: "Rubber and Gum",
      answer: "Rubber and Gum",
    },
    {
      // Write this question
      question: "question 4",
      questionText: "What is Goku's signature move called?",
      choice1: "Kamehameha",
      choice2: "Rasengan",
      choice3: "Bankai",
      choice4: "Stone Cold Stunner",
      answer: "Kamehameha",
    },
    {
      // Write this question
      question: "question 5",
      questionText: "What is Goku's signature move called?",
      choice1: "Kamehameha",
      choice2: "Rasengan",
      choice3: "Bankai",
      choice4: "Stone Cold Stunner",
      answer: "Kamehameha",
    },
    {
      question: "question 6",
      questionText: "What is the ship the Outlaw Star's design name?",
      choice1: "VS-DO2-C",
      choice2: "Gilliam II",
      choice3: "XGP-15A-II",
      choice4: "Heifong V",
      answer: "XGP-15A-II",
    },
  ];
  return (
    <div>
      {quizData.map((quiz, i) => {
        return <QuizInterface quiz={quiz} i={i} />;
      })}
    </div>
  );
};

export default Form;
