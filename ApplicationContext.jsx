import { createContext, useState } from "react";

import { useFetchApi } from "./src/useFetchApi";

export const CharactersContext = createContext();

export default function ApplicationContext({ children }) {
  const [isAuth, setIsAuth] = useState(false);

  const { dataCharacters } = useFetchApi(
    "https://rickandmortyapi.com/api/character"
  );

  console.log(dataCharacters);

  const [favoriteCharacters, setFavoriteCharacters] = useState([]);
  const [isCharacterMarkedAsFavorite, setIsCharacterMarkedAsFavorite] =
    useState({});

  return (
    <CharactersContext.Provider
      value={{
        dataCharacters,
        isAuth,
        setIsAuth,
        favoriteCharacters,
        setFavoriteCharacters,
        isCharacterMarkedAsFavorite,
        setIsCharacterMarkedAsFavorite,
      }}>
      {children}
    </CharactersContext.Provider>
  );
}
