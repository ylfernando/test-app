"use client";
import { usuario } from "./components/usuario";
import { students } from "@/data/students";
import { StudentTable } from "./components/StudentTable";
import { useState } from "react";

export const Page = () => {
  const [name, setName] = useState("");
  const meuBotao = () => {
    return alert(name);
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <input
        type="text"
        placeholder="digite seu nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <p>Seu nome é: {name}</p>

      <button onClick={meuBotao}>Aperte aqui para enviar seu nome</button>
    </div>
  );
};
export default Page;
