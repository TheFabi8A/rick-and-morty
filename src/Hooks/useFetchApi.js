import { useEffect, useState } from "react";

export function useFetchApi() {
  const [charactersData, setCharactersData] = useState([]);
  const [isLoadingFetch, setIsLoadingFetch] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  const fetchCharacterPage = async (url) => {
    try {
      const response = await fetch(url);
      const dataApiRickAndMorty = await response.json();
      return dataApiRickAndMorty;
    } catch (error) {
      setFetchError(error);
    }
  };

  useEffect(() => {
    setIsLoadingFetch(true);
    const baseUrl = "https://rickandmortyapi.com/api/character";
    const allCharacters = [];

    const fetchAllPages = async (url) => {
      let nextPage = url;
      while (nextPage) {
        const dataApiRickAndMorty = await fetchCharacterPage(nextPage);
        allCharacters.push(...dataApiRickAndMorty.results);
        nextPage = dataApiRickAndMorty.info.next;
      }

      setCharactersData(allCharacters);
      setIsLoadingFetch(false);
    };
    fetchAllPages(baseUrl);
  }, []);

  return { charactersData, isLoadingFetch, fetchError };
}
