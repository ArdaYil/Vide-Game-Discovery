import { Grid, GridItem, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import Game from "./Game";

export default function Games() {
  const { games, errors } = useGame();

  return (
    <div>
      {errors && <Text>{errors}</Text>}
      <Grid gap="30px" gridTemplateColumns="1fr 1fr 1fr 1fr">
        {games.map((game) => {
          return (
            <GridItem>
              <Game key={game.id} game={game} />
            </GridItem>
          );
        })}
      </Grid>
    </div>
  );
}
