import QuizInterface from "./components/QuizInterface";
import "./Form.css";
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
      flair:
        "https://www.pxpng.com/public/uploads/small/11604236477ob7ong1xadtyaxccswbrgqlixde3abajk9phjhmwj4tps12uoc0d9f9blv37nyijjgrbsyg2dar737wwb18kh0gxpvbheb6hr5ws.png",
    },
    {
      question: "question 2",
      questionText: "What is Goku's signature move called?",
      choice1: "Kamehameha",
      choice2: "Rasengan",
      choice3: "Bankai",
      choice4: "Stone Cold Stunner",
      answer: "Kamehameha",
      flair:
        "https://static.miraheze.org/loathsomecharacterswiki/thumb/0/05/0.png/300px-0.png",
    },
    {
      question: "question 3",
      questionText: "Bungee Gum has the properties of ____________?",
      choice1: "A Bungee cord and steel",
      choice2: "Anything it touches",
      choice3: "Toothpaste and Orange Juice",
      choice4: "Rubber and Gum",
      answer: "Rubber and Gum",
      flair:
        "https://i.pinimg.com/originals/1d/02/c4/1d02c4dd7ec48dc2c16283128ccc932d.jpg",
    },
    {
      question: "question 4",
      questionText: "What year did Sailor Moon premier in America?",
      choice1: "1989",
      choice2: "1992",
      choice3: "1995",
      choice4: "1997",
      answer: "1995",
      flair:
        "https://64.media.tumblr.com/d0e64c8c875ca751c6a4040a57b8aea6/tumblr_mul4amSga41s6zbxuo2_1280.png",
    },
    {
      question: "question 5",
      questionText: "What is the ship the Outlaw Star's design name?",
      choice1: "VS-DO2-C",
      choice2: "Gilliam II",
      choice3: "XGP-15A-II",
      choice4: "Heifong V",
      answer: "XGP-15A-II",
      flair:
        "https://external-preview.redd.it/g0fWCs-AtEDVz7AS-9R1nyKhsQscNrYcEvdfXJenvQ0.jpg?width=640&crop=smart&auto=webp&s=82aaa5e2bb5faae4d571c45e09887b3f8e2572b7",
    },
  ];
  return (
    <div id="quiz">
      {quizData.map((quiz, i) => {
        return <QuizInterface quiz={quiz} i={i} />;
      })}
    </div>
  );
};

export default Form;
