import { Header } from "@/app/components/header";
import { peopleList } from "@/data/peopleList";

export const app = () => {
  return (
    <>
      <ul>
        {peopleList.map((person) => (
          <li key={person.id}>
            {person.nome} - {person.profissao}
          </li>
        ))}
      </ul>
    </>
  );
};

export default app;
