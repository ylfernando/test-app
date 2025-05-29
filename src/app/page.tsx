import { Header } from "@/app/components/header";
import { peopleList } from "@/data/peopleList";

export const app = () => {
  const matematics = peopleList.filter(
    (person) => person.profissao === "mathematic"
  );
  return (
    <>
      <ul>
        {peopleList.map((person) => (
          <li key={person.id}>
            {person.nome} - {person.profissao}
          </li>
        ))}
        <h1>Aqui estão os matematicos:</h1>
        {matematics.length > 0 && (
          <>
            {matematics.map((person) => (
              <li key={person.id}> {person.nome}</li>
            ))}
          </>
        )}
      </ul>
    </>
  );
};

export default app;
