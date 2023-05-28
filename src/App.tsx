import { Button, Grid, GridItem, Show, useColorMode } from "@chakra-ui/react";
import Nav from "./components/Nav";
import Games from "./components/Games";
import Genres from "./components/Genres";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import Platforms from "./components/Platforms";
import { Platform } from "./hooks/usePlatform";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [currentGenre, setCurrentGenre] = useState<Genre | null>(null);
  const [currentPlatform, setCurrentPlatform] = useState<Platform | null>(null);

  console.log(currentGenre);

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
              currentGenre={currentGenre}
              onGenreUpdate={(genre: Genre | null) => setCurrentGenre(genre)}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <Platforms
            currentPlatform={currentPlatform}
            onSelect={(platform: Platform) => setCurrentPlatform(platform)}
          />
          <Games
            currentGenre={currentGenre}
            currentPlatform={currentPlatform}
          />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
