import { createContext, useState } from "react";

import { useFetchApi } from "./src/useFetchApi";

export const CharactersContext = createContext();

export default function ApplicationContext({ children }) {
  const [isAuth, setIsAuth] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const { dataCharacters } = useFetchApi(
    "https://rickandmortyapi.com/api/character"
  );

  console.log(dataCharacters);

  const [favoriteCharacters, setFavoriteCharacters] = useState([]);
  const [isCharacterMarkedAsFavorite, setIsCharacterMarkedAsFavorite] =
    useState({});

  const [filtroSpecie, setFiltroSpecie] = useState("All");

  console.log(`filtro seleccionado: ${filtroSpecie}`);

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
        filtroSpecie,
        setFiltroSpecie,
        searchQuery,
        setSearchQuery,
      }}>
      {children}
    </CharactersContext.Provider>
  );
}
