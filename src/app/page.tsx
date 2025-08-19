"use client";

import { useState } from "react";
import { List } from "@/types/List";

export const Page = () => {
  const [itemInput, setItemInput] = useState("");
  const [textList, setTextList] = useState<List[]>([
    { label: "Comer", checked: false },
    { label: "Dormir", checked: false },
  ]);

  const handleAdd = () => {
    if (itemInput.trim() === "") return;
    setTextList([...textList, { label: itemInput, checked: false }]);
    setItemInput("");
  };

  const deleteItem = (index: number) => {
    setTextList(textList.filter((_, key) => key !== index));
  };

  // Função para alterar o texto da tarefa
  const alterarItem = (index: number, novoTexto: string) => {
    const novaLista = [...textList];
    novaLista[index].label = novoTexto;
    setTextList(novaLista);
  };

  return (
    <div className="bg-white text-black w-screen h-screen flex flex-col items-center justify-center">
      <h1 className="antialiased text-lg">Lista de tarefas:</h1>
      <input
        type="text"
        className="bg-red-400 m-4 p-4 text-white rounded-md antialiased text-xl"
        placeholder="Tarefa"
        value={itemInput}
        onChange={(e) => setItemInput(e.target.value)}
      />
      <button
        onClick={handleAdd}
        className="p-5 m-5 bg-blue-600 text-white text-2xl rounded-md"
      >
        Enviar tarefas
      </button>
      <ul>
        {textList.map((item, index) => (
          <li key={index} className="text-lg flex items-center">
            <button
              onClick={() => alterarItem(index, itemInput)}
              className="hover:underline mr-2"
            >
              [ALTERAR]
            </button>
            <input
              type="text"
              className="m-4 p-4 text-black rounded-md antialiased text-lg"
              placeholder="ALTERAR TEXTO"
              onChange={(e) => setItemInput(e.target.value)}
            />
            {item.label}
            <button
              onClick={() => deleteItem(index)}
              className="hover:underline ml-4"
            >
              [DELETAR]
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
