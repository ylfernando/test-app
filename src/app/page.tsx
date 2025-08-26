"use client";

import { useState, useReducer } from "react";
import { Item } from "@/types/Item";
import { listReducer } from "./reducers/listReducer";

export const Page = () => {
  const [list, dispatch] = useReducer(listReducer, []);
  const [text, setText] = useState("");
  const newItem = () => {
    if (text.trim() === "") return false;
    dispatch({ type: "add", payload: { newText: text.trim() } });
    setText("");
  };
  const editItem = (id: number) => {
    dispatch({
      type: "edit",
      payload: {
        id,
        newText:
          prompt("Edit task", list.find((item) => item.id === id)?.text) || "",
      },
    });
  };
  const checkedBox = (id: number) => {
    dispatch({
      type: "toggleDone",
      payload: { id, done: !list.find((item) => item.id === id)?.done },
    });
    console.log("clicou em", id, !list.find((item) => item.id === id)?.done);
  };
  return (
    <div>
      <div className="flex items-center justify-center m-4">
        <input
          type="text"
          value={text}
          className="p-2 border-2 border-gray-300 rounded-lg"
          onChange={(e) => setText(e.target.value)}
        />
        <button
          onClick={newItem}
          className="bg-blue-500 p-2 rounded-lg m-2 hover:bg-blue-700"
        >
          Adicionar tarefa
        </button>
      </div>
      <h1 className="text-4xl text-center">Lista de tarefas:</h1>
      <div className="div border-4 m-4 bg-gray-800 ">
        <ul className="p-10 text-center">
          {list.map((item) => (
            <li
              key={item.id}
              className="text-xl flex justify-center items-center"
            >
              <input
                type="checkbox"
                checked={item.done}
                onChange={() => checkedBox(item.id)}
              />

              <h1 className="text-lg">{item.text}</h1>
              <button
                className="bg-green-500 p-1 rounded-lg m-2 hover:bg-green-700"
                onClick={() => editItem(item.id)}
              >
                Editar
              </button>
              <button
                onClick={() =>
                  dispatch({ type: "delete", payload: { id: item.id } })
                }
                className="bg-red-500 p-1 rounded-lg m-2 hover:bg-red-700"
              >
                Remover
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
  console.log(list);
};

export default Page;
