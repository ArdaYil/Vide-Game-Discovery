import { GridItem, SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import Game from "./Game";
import GameCardSkeleton from "./GameCardSkeleton";

export default function Games() {
  const { games, errors, isLoading } = useGame();
  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ];

  return (
    <>
      {errors && <Text>{errors}</Text>}
      <SimpleGrid
        padding="10px"
        spacing="10px"
        columns={{ base: 1, sm: 2, md: 2, lg: 3, xl: 4 }}
      >
        {!isLoading
          ? games.map((game) => {
              return (
                <GridItem key={game.id}>
                  <Game game={game} />
                </GridItem>
              );
            })
          : skeletons.map((s) => {
              return (
                <GridItem key={s}>
                  <GameCardSkeleton />
                </GridItem>
              );
            })}
      </SimpleGrid>
    </>
  );
}
