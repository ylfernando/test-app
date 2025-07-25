"use client";
import { usuario } from "./components/usuario";
import { students } from "@/data/students";
import { StudentTable } from "./components/StudentTable";
const meuBotao = () => {
  return alert("olá mundo!");
};
export const Page = () => {
  return (
    <div className="container mx-auto">
      <StudentTable students={students} />
    </div>
  );
};
export default Page;
