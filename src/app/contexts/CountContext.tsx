import { createContext, useState } from "react";

type CountContextType = {
  onlineCount: number;
  setOnlineCount: (count: number) => void;
};
export const CountContext = createContext<CountContextType | null>(null);

type Props = { children: React.ReactNode };
export const CountProvider = ({ children }: Props) => {
  const [onlineCount, setOnlineCount] = useState(299);

  return (
    <CountContext.Provider value={{ onlineCount, setOnlineCount }}>
      {children}
    </CountContext.Provider>
  );
};
