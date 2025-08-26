"use client";

import { useState, useReducer, useContext } from "react";
import { CountContext, CountProvider } from "./contexts/CountContext";
const Header = () => {
  return (
    <header>
      <OnlineUsers />
    </header>
  );
};
const OnlineUsers = () => {
  const count = useContext(CountContext);
  return (
    <>
      <h1 className="text-center">
        Contagem de Usuários Online: {count?.onlineCount}
      </h1>
      <button onClick={() => count?.setOnlineCount(0)}>Zerar Contagem</button>
    </>
  );
};

export const Page = () => {
  const [onlineCount, setOnlineCount] = useState(200);

  return (
    <div className="flex items-center justify-center m-4">
      <CountProvider>
        <Header />
      </CountProvider>
    </div>
  );
};

export default Page;
