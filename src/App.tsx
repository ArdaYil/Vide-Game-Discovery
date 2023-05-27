import { Button, Grid, GridItem, Show, useColorMode } from "@chakra-ui/react";
import Nav from "./components/Nav";
import Games from "./components/Games";
import Genres from "./components/Genres";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

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
            <Genres />
          </GridItem>
        </Show>
        <GridItem area="main">
          <Games />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
