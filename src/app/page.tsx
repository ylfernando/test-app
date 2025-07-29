"use client";
import { usuario } from "./components/usuario";
import { students } from "@/data/students";
import { StudentTable } from "./components/StudentTable";
import { useState } from "react";

export const Page = () => {
  const [count, setCount] = useState<number>(99);
  const meuBotao = () => {
    setCount(count + 1);
  };

  return (
    <div className="container mx-auto">
      <h1>{count}</h1>
      <button onClick={meuBotao}>Clique aqui</button>
    </div>
  );
};
export default Page;
