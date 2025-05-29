import { Header } from "@/app/components/header";
import { peopleList } from "@/data/peopleList";

export const app = () => {
  return (
    <>
      <Header writing="A vida é bela!">
        <h1>teste</h1>
      </Header>
      <ul>
        {peopleList.map((Person) => (
          <li>{Person.nome}</li>
        ))}
      </ul>
    </>
  );
};

export default app;
