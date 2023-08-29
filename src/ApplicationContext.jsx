import { createContext, useState } from "react";

import { useFetchApi } from "./useFetchApi";
import { ChildrenPropTypes } from "./propTypes";

ApplicationContext.propTypes = {
  children: ChildrenPropTypes,
};

export const CharactersContext = createContext();

export default function ApplicationContext({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const { charactersData, isLoadingFetch, fetchError } = useFetchApi(
    "https://rickandmortyapi.com/api/character"
  );

  const [favoriteCharacters, setFavoriteCharacters] = useState([]);
  const [isCharacterMarkedAsFavorite, setIsCharacterMarkedAsFavorite] =
    useState([]);

  const [speciesFilter, setSpeciesFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  const toggleFavorite = (character) => {
    setIsCharacterMarkedAsFavorite((prevFavorites) => ({
      ...prevFavorites,
      [character.id]: !prevFavorites[character.id],
    }));

    if (!favoriteCharacters.includes(character)) {
      setFavoriteCharacters([...favoriteCharacters, character]);
    } else {
      setFavoriteCharacters(favoriteCharacters.filter((c) => c !== character));
    }
  };

  return (
    <CharactersContext.Provider
      value={{
        charactersData,
        isAuth,
        setIsAuth,
        favoriteCharacters,
        setFavoriteCharacters,
        isCharacterMarkedAsFavorite,
        setIsCharacterMarkedAsFavorite,
        speciesFilter,
        setSpeciesFilter,
        searchQuery,
        setSearchQuery,
        statusFilter,
        setStatusFilter,
        toggleFavorite,
        isLoadingFetch,
        fetchError,
      }}>
      {children}
    </CharactersContext.Provider>
  );
}
