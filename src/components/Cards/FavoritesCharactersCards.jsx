import { useContext } from "react";

import {
  Card,
  Avatar,
  Badge,
  CardBody,
  CardHeader,
  CardFooter,
  Button,
} from "@nextui-org/react";

import { CharactersContext } from "../../../ApplicationContext";
import { SaveIcon } from "../svg";

export default function FavoritesCharactersCards() {
  const { favoriteCharacters, toggleFavorite, isCharacterMarkedAsFavorite } =
    useContext(CharactersContext);

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {favoriteCharacters.map((character) => (
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
      ))}
    </div>
  );
}
