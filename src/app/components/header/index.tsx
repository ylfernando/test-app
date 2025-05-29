import { ReactNode } from "react";

type Props = {
  author?: string;
  writing: string;
  children: ReactNode;
};

export const Header = ({ author, writing, children }: Props) => {
  return (
    <div>
      <h1>A frase: {writing}</h1>
      <p>Foi escrita por: {author ? author : "Autor desconhecido"}</p>
      <div>{children}</div>
    </div>
  );
};
