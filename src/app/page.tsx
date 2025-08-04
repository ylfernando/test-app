"use client";

import { useState } from "react";

export const Page = () => {
  const [count, setCount] = useState(0);
  const meuBotao = () => {
    setCount(count + 2);
    setCount((c) => c + 2);
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <p>{count}</p>
      <button
        className="bg-blue-700 text-white rounded-md p-4"
        onClick={meuBotao}
      >
        +2
      </button>
    </div>
  );
};
export default Page;
