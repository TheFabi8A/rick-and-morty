import { useContext } from "react";

import { Card, Avatar, Badge, CardBody, CardHeader } from "@nextui-org/react";

import { CharactersContext } from "../../ApplicationContext";

export default function FavoritesCharactersCards() {
  const { favoriteCharacters } = useContext(CharactersContext);

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {favoriteCharacters.map((character) => (
        <Card key={character.id} className="rounded-xl p-4 gap-4">
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
                isBordered
                radius="lg"
                className="w-24 h-24"
                src={character.image}
                alt={`${character.name} photo`}
                color={
                  character.status === "Alive"
                    ? "success"
                    : character.status === "Dead"
                    ? "danger"
                    : character.status === "unknown"
                    ? "default"
                    : null
                }
              />
            </Badge>
          </CardHeader>
          <CardBody className="max-w-[105px] p-0 block">
            <h2 className="text-lg font-black leading-5">{character.name}</h2>
            <p>Specie: {character.species}</p>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}
