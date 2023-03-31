import { GridItem, SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import Game from "./Game";

export default function Games() {
  const { games, errors } = useGame();

  return (
    <>
      {errors && <Text>{errors}</Text>}
      <SimpleGrid
        padding="10px"
        spacing="10px"
        columns={{ base: 1, sm: 2, md: 2, lg: 3, xl: 4 }}
      >
        {games.map((game) => {
          return (
            <GridItem key={game.id}>
              <Game game={game} />
            </GridItem>
          );
        })}
      </SimpleGrid>
    </>
  );
}
