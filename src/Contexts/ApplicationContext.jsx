import { createContext, useEffect, useState } from "react";

import { useFetchApi } from "../Hooks";
import { ChildrenPropTypes } from "../propTypes";

ApplicationContext.propTypes = {
  children: ChildrenPropTypes,
};

export const CharactersContext = createContext();

export default function ApplicationContext({ children }) {
  const storedIsAuth = localStorage.getItem("isAuth");
  // TODO -> Guardar en el localStorage también los personajes favoritos

  const [isAuth, setIsAuth] = useState(storedIsAuth === "true");
  const [searchQuery, setSearchQuery] = useState("");

  const { charactersData, isLoadingFetch, fetchError } = useFetchApi();

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

  const charactersFiltered = charactersData.filter((character) => {
    const specieFilterSelected =
      speciesFilter === "All" || character.species === speciesFilter;
    const statusFilterSelected =
      statusFilter === "All" || character.status === statusFilter;
    const nameMatchesSearchQuery = character.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return (
      specieFilterSelected && statusFilterSelected && nameMatchesSearchQuery
    );
  });

  useEffect(() => {
    localStorage.setItem("isAuth", isAuth);
  }, [isAuth]);

  return (
    <CharactersContext.Provider
      value={{
        charactersFiltered,
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
