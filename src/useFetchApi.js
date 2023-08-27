import { useEffect, useState } from "react";

export function useFetchApi() {
  const [dataCharacters, setDataCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((dataApi) => setDataCharacters(dataApi.results));
  }, []);

  return { dataCharacters };
}
