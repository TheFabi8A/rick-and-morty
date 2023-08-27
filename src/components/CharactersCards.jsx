import { useContext } from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
  Badge,
} from "@nextui-org/react";

import SaveSVG from "./svg/SaveSVG";
import { CharactersContext } from "../../ApplicationContext";

export default function CharactersCards() {
  const {
    dataCharacters,
    setIsCharacterMarkedAsFavorite,
    isCharacterMarkedAsFavorite,
    favoriteCharacters,
    setFavoriteCharacters,
    filtroSpecie,
  } = useContext(CharactersContext);

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

  console.log(favoriteCharacters);

  const personajesFiltrados = dataCharacters.filter((character) => {
    if (filtroSpecie === "All") {
      return true;
    }
    return character.species === filtroSpecie;
  });

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {personajesFiltrados.map((character) => {
        return (
          <Card
            key={character.id}
            className="max-w-[350px] w-full rounded-xl flex-row items-center justify-between p-4 gap-4">
            <CardHeader className="w-max p-0">
              <Badge
                content={character.status}
                variant="shadow"
                color={
                  character.status === "Alive"
                    ? "success"
                    : character.status === "Dead"
                    ? "danger"
                    : character.status === "unknown"
                    ? "default"
                    : null
                }>
                <Avatar
                  color={
                    character.status === "Alive"
                      ? "success"
                      : character.status === "Dead"
                      ? "danger"
                      : character.status === "unknown"
                      ? "default"
                      : null
                  }
                  isBordered
                  radius="lg"
                  className="w-20 h-20"
                  src={character.image}
                  alt={`${character.name} photo`}
                />
              </Badge>
            </CardHeader>
            <CardBody className="text-center block p-0 w-1/4">
              <h2 className="text-lg font-black leading-5">{character.name}</h2>
              Specie: <strong>{character.species}</strong>
            </CardBody>
            <CardFooter className="w-auto block p-0">
              <Button
                onClick={() => toggleFavorite(character)}
                className="p-[10px]"
                isIconOnly
                color={
                  isCharacterMarkedAsFavorite[character.id]
                    ? "success"
                    : "default"
                }
                aria-label={`set ${character.name} character as favorite`}>
                <span className="fill-transparent">
                  <SaveSVG />
                </span>
              </Button>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}
