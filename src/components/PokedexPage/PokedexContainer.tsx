import React from "react";

type PokedexContainerProps = {
  children: React.ReactNode;
};

export const PokedexContainer = (props: PokedexContainerProps) => {
  const { children } = props;

  return <section className="p-4 py-5">{children}</section>;
};
