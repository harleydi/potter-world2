import { IoIosClose } from "react-icons/io";
import questions from "../api/quizQuestions";
import { useState } from "react";
import Checkbox from "./Checkbox";
import QuizButton from "./QuizButton";
import { useOutletContext } from "react-router";

const SortingQuiz = () => {
  const { setIsQuizModalOpen } = useOutletContext();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizInput, setQuizInput] = useState("");
  const [quizAnswers, setQuizAnswers] = useState({
    Gryffindor: 0,
    Slytherin: 0,
    Ravenclaw: 0,
    Hufflepuff: 0,
  });

  const handleNextQuestion = (house) => {
    if (quizInput) {
      setQuizAnswers((prev) => ({
        ...prev,
        [house]: prev[house] + 1,
      }));
    }

    if (currentQuestion < 7) {
      setCurrentQuestion(prev => prev + 1);
    }

    setQuizInput("");

    // console.log(quizAnswers)
  };

  const handleOnChange = (e) => {
    setQuizInput(e.target.value);
  };

  const handleSubmit = (house) => {
    if (quizInput) {
        setQuizAnswers((prev) => ({
          ...prev,
          [house]: prev[house] + 1,
        }));
    }

    for (let prop in quizAnswers) {
        console.log(quizAnswers[prop])
    }
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full  flex justify-center items-center z-50">
      <div className="bg-black/80 w-[40rem] h-[30rem] rounded-lg">
        <div className="flex p-2 gap-1">
          <div>
            <span
              onClick={() => setIsQuizModalOpen(false)}
              className="bg-blue-500 inline-block center w-4 h-4 rounded-full"
            >
              <IoIosClose className="text-black text-center" />
            </span>
          </div>
          <div className="circle">
            <span className="bg-purple-500 inline-block center w-4 h-4 rounded-full" />
          </div>
          <div className="circle">
            <span className="bg-pink-500 box inline-block center w-4 h-4 rounded-full" />
          </div>
        </div>
        <div className="text-white text-center">
          <h1 className="text-4xl">Sorting Quiz</h1>
          <p>Question {currentQuestion + 1}/7</p>
          <p>{questions[currentQuestion].question}</p>
          <div>
            {questions[currentQuestion].options.map((option, index) => (
              <label
                key={index}
                className="flex items-center justify gap-6 pt-6"
              >
                <input
                  type="radio"
                  name={`q${option.id}`}
                  value={option.house}
                  onChange={handleOnChange}
                  checked={quizInput === option.house}
                />
                <span>{option.text}</span>
                {/* {console.log(option.house)} */}
              </label>
            ))}
          </div>
          {/* <button type="button" onClick={handleNextQuestion}>Next Question</button> */}

          {currentQuestion === 6 ? (
            <QuizButton 
                title={"Submit"}
                onclick={() => handleSubmit(quizInput)}
            />
          ) : (
            <QuizButton
              title={"Next Question"}
              onclick={() => handleNextQuestion(quizInput)}
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default SortingQuiz;
