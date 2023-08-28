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

import { CharactersContext } from "../../../ApplicationContext";
import { SaveIcon } from "../svg";

export default function CharactersCards() {
  const {
    charactersData,
    isCharacterMarkedAsFavorite,
    speciesFilter,
    statusFilter,
    toggleFavorite,
    isLoadingFetch,
    fetchError,
    searchQuery,
  } = useContext(CharactersContext);

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

  return (
    <div
      className={`${
        isLoadingFetch || fetchError
          ? "grid place-items-center min-h-screen"
          : "flex flex-wrap justify-center gap-4"
      }`}>
      {isLoadingFetch && (
        <h2 className="text-4xl font-black">Obteniendo datos...</h2>
      )}
      {fetchError && (
        <>
          <div className="w-1/2">
            <h2 className="text-4xl font-black">
              Ah ocurrido un error inesperado:
            </h2>
            <p className="mt-4">{fetchError}</p>
          </div>
        </>
      )}
      {charactersFiltered.map((character) => {
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
                <SaveIcon />
              </Button>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}
