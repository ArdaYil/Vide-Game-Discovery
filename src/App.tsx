import { Button, Grid, GridItem, Show, useColorMode } from "@chakra-ui/react";
import Nav from "./components/Nav";
import Games from "./components/Games";
import Genres from "./components/Genres";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import Platforms from "./components/Platforms";
import { Platform } from "./hooks/usePlatform";

export interface GameQuery {
  genre: Genre | null;
  parent_platforms: Platform | null;
}

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
      <Grid
        gap="20px"
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        gridTemplateColumns={{ base: "1fr", lg: "150px 1fr" }}
      >
        <GridItem area="nav">
          <Nav onToggleMode={toggleColorMode} />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside">
            <Genres
              currentGenre={gameQuery.genre}
              onGenreUpdate={(genre: Genre | null) =>
                setGameQuery({ ...gameQuery, genre })
              }
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <Platforms
            currentPlatform={gameQuery.parent_platforms}
            onSelect={(platform: Platform) =>
              setGameQuery({ ...gameQuery, parent_platforms: platform })
            }
          />
          <Games gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
