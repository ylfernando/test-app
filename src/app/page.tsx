"use client";

import { useState, useReducer, useContext } from "react";
import { CountContext, CountData } from "./contexts/CountContext";
const Header = () => {
  return (
    <header>
      <OnlineUsers />
    </header>
  );
};
const OnlineUsers = () => {
  const count = useContext(CountContext);
  return <p className="text-center">Usuários online: {count}</p>;
};

export const Page = () => {
  return (
    <div className="flex items-center justify-center m-4">
      <CountContext.Provider value={CountData}>
        <Header />
      </CountContext.Provider>
    </div>
  );
};

export default Page;
