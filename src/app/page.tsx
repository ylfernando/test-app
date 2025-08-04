"use client";

import { useState } from "react";
import { Person } from "@/types/person";

export const Page = () => {
  const [fullName, setFullName] = useState<Person>({
    name: "Fernando",
    lastName: "Freitas",
  });
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <input
        type="text"
        className="bg-blue-600 text-white p-4 rounded-md"
        placeholder="Nome"
        value={fullName.name}
        onChange={(n) =>
          setFullName({ name: n.target.value, lastName: fullName.lastName })
        }
      ></input>
      <input
        type="text"
        className=" border-white bg-blue-600 text-white p-4 rounded-md"
        placeholder="Sobrenome"
        value={fullName.lastName}
        onChange={(n) =>
          setFullName({ name: fullName.name, lastName: n.target.value })
        }
      ></input>
      <p className="p">Seu nome completo é :</p>
      <p className="p">
        {fullName.name} {fullName.lastName}
      </p>
    </div>
  );
};
export default Page;
