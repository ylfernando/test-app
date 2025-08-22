import { questions } from "@/data/questions";
import { Question } from "@/types/Question";
import { useState } from "react";

type Props = {
  question: Question;
  count: number;
  onAnswer: (answer: number) => void;
};
export const QuestionItem = ({ question, count, onAnswer }: Props) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const checkQuestion = (key: number) => {
    if (selectedAnswer === null) {
      setSelectedAnswer(key);
      onAnswer(key);
    }
  };
  return (
    <div>
      <div className="p-5">
        {count}.{question.question}
      </div>
      <div>
        {question.options.map((option, key) => (
          <div
            className={`px-3 border cursor-pointer hover:opacity-50 py-2 rounded-md text-lg bg-blue-300
              ${
                selectedAnswer !== null
                  ? "cursor:auto"
                  : "cursor-pointer hover:opacity-80"
              }
              ${
                selectedAnswer === null &&
                selectedAnswer === question.answer &&
                selectedAnswer === key &&
                "bg-red-500"
              }
              ${
                selectedAnswer !== null &&
                selectedAnswer !== question.answer &&
                selectedAnswer === key &&
                "bg-green-800 border-green-500 text-white"
              }
              }
              `}
            key={key}
          >
            <button onClick={() => checkQuestion(key)}>{option}</button>
          </div>
        ))}
      </div>
    </div>
  );
};
