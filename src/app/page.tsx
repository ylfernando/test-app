import { Header } from "@/app/components/header";
import { peopleList } from "@/data/peopleList";

export const app = () => {
  const fullTime = new Intl.DateTimeFormat("pt-BR", {
    timeStyle: "short",
    hour12: false,
  }).format();

  const hour = new Date().getHours();
  let greeting = "";

  if (hour >= 0 && hour <= 12) {
    greeting = "Bom dia!";
  } else if (hour >= 13 && hour <= 18) {
    greeting = "Boa tarde!";
  } else if (hour >= 18 && hour <= 23) {
    greeting = "Boa noite!";
  }

  return (
    <>
      <div className="w-screen h-screen flex flex-col justify-center items-center text-white bg-gradient-to-l from-sky-500 to-indigo-500">
        <div className="text-9x1">{fullTime}</div>
        <div className="text-5x1">{greeting}!</div>
      </div>
    </>
  );
};

export default app;
