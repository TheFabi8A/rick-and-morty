import { useEffect, useState } from "react";

export function useFetchApi() {
  const [charactersData, setCharactersData] = useState([]);
  const [isLoadingFetch, setIsLoadingFetch] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    setIsLoadingFetch(true);
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((dataApiRickAndMorty) =>
        setCharactersData(dataApiRickAndMorty.results)
      )
      .catch((error) => setFetchError(error))
      .finally(() => setIsLoadingFetch(false));
  }, []);

  return { charactersData, isLoadingFetch, fetchError };
}
