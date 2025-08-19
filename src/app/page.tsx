"use client";

import { useState } from "react";
import { Person } from "@/types/person";
import { List } from "@/types/List";

export const Page = () => {
  const [itemInput, setItemInput] = useState("");
  const [textList, setTextList] = useState<List[]>([
    {
      label: "Comer",
      checked: false,
    },
    {
      label: "Dormir",
      checked: false,
    },
  ]);
  const handleAdd = () => {
    if (itemInput.trim() === "") return;
    setTextList([...textList, { label: itemInput, checked: false }]);
    setItemInput("");
  };

  const deleteItem = (index: number) => {
    setTextList(textList.filter((item, key) => key !== index));
  };

  return (
    <div className=" bg-white text-black w-screen h-screen flex flex-col items-center justify-center">
      <h1 className="h1 antialiased text-lg">Lista de tarefas:</h1>
      <input
        type="text"
        className="bg-red-400 m-4 p-4 text-white rounded-md antialiased text-x1"
        placeholder="Tarefa"
        value={itemInput}
        onChange={(e) => setItemInput(e.target.value)}
      ></input>
      <button
        onClick={handleAdd}
        className=" p-5 m-5 button bg-blue-600 text-white text-2x1"
      >
        Enviar tarefas
      </button>
      <ul className="">
        {textList.map((item, index) => (
          <li key={index} className="li text-lg">
            {item.label}
            <button
              onClick={() => deleteItem(index)}
              className="hover:underline"
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
