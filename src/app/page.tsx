"use client";

import { useState } from "react";
import { questions } from "@/data/questions";
import { QuestionItem } from "./components/QuestionItem";

export const Page = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const handleAnswered = (answer: number) => {};
  const title = "Quiz App";
  return (
    <div className="w-full h-screen h-full flex justify-center items-center bg-purple-800">
      <div className="w-full max-w-xl rounded-md bg-white text-black shadow shadow-black">
        <div className="p-5">
          <h1 className="text-2xl font-bold">{title}</h1>
        </div>
        <div className="p-5">
          <QuestionItem
            question={questions[currentQuestion]}
            count={currentQuestion + 1}
            onAnswer={handleAnswered}
          />
        </div>
        <div className="p-5 text-center border-t border-gray-400">
          {currentQuestion + 1} de {questions.length} pergunta{" "}
          {questions.length > 1 ? "s" : ""}
        </div>
      </div>
    </div>
  );
};

export default Page;
