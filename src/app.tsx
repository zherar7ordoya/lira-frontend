import React, { FC } from "react";
import useQuery from "@apollo/react-hooks";
import { GET_CHARACTER } from "./queries/characterQueries";
import { Character } from "./models/character";

const App: React.FC = () => {
  const { loading, error, data } = useQuery(GET_CHARACTER);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>ERROR</p>;

  const characters: Character[] = data.getCharacters;

  return characters.map((ch, idx) => <p key={idx}>{ch.name}</p>);
};

export default App;
