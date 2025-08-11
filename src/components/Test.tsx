"use client";

import { useState } from "react";
import type { Quiz } from "@/types/Quiz";

export default function Test({ quizData }: { quizData: Quiz }) {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [answered, setAnswered] = useState(false);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (answer: string) => {
    const isCorrect =
      answer ===
      quizData.questions[current].options[
        quizData.questions[current].correctAnswer
      ];
    if (isCorrect) {
      setScore(score + quizData.questions[current].points);
      setFeedback("✅ ¡Correcto!");
    } else {
      setFeedback(`❌ Incorrecto. ${quizData.questions[current].explanation}`);
    }
    setAnswered(true);
    if (current + 1 === quizData.questions.length) {
      setShowScore(true);
    }
  };

  const nextQuestion = () => {
    if (current + 1 < quizData.questions.length) {
      setCurrent(current + 1);
      setFeedback("");
      setAnswered(false);
    } else {
      setShowScore(true);
    }
  };

  const q = quizData.questions[current];

  return (
    <div className="p-6 rounded-lg shadow-lg mb-8 min-w-xs xl:min-w-xl max-w-lg mx-auto">
      <h3
        className="text-xl lg:text-3xl font-bold mb-4"
        dangerouslySetInnerHTML={{ __html: q.question }}
      ></h3>
      <div className="flex flex-col gap-3">
        {q.options.map((a, idx) => (
          <button
            key={idx}
            onClick={() => handleAnswer(a)}
            disabled={answered}
            dangerouslySetInnerHTML={{ __html: a }}
            className={`p-3 rounded-lg border text-xl ${
              answered
                ? a === q.options[q.correctAnswer]
                  ? "bg-green-500 text-white"
                  : "bg-red-500 text-white"
                : "bg-white hover:bg-sky-600 hover:text-white text-black"
            }`}
          ></button>
        ))}
      </div>
      {feedback && (
        <div
          className="mt-4 p-3 xl:text-2xl bg-gray-100 rounded"
          dangerouslySetInnerHTML={{ __html: feedback }}
        ></div>
      )}
      {current !== quizData.questions.length - 1 && (
        <>
        {!answered && <p className="pt-2">Selecciona una opción antes de continuar</p>}
        <button
          onClick={nextQuestion}
          className="mt-6 px-4 py-2 disabled:bg-gray-400  bg-sky-600 text-white rounded hover:bg-sky-600/90 hover:cursor-pointer"
          disabled={!answered}
        >
          Siguiente pregunta →
        </button>
        </>
      )}
      {showScore && (
        <div className="p-6 text-center">
          <p className="text-lg">
            Tu puntuación fue de: <strong>{score}</strong> /{" "}
            {quizData.questions.length}
          </p>
          <p>¡Gracias por participar!</p>
          <button
            onClick={() => {
              setCurrent(0);
              setScore(0);
              setFeedback("");
              setAnswered(false);
              setShowScore(false);
            }}
            className="mt-6 px-4 py-2 bg-sky-600 text-white rounded hover:bg-sky-600/90 hover:cursor-pointer"
          >
            Volver a empezar
          </button> 
        </div>
      )}
    </div>
  );
}
