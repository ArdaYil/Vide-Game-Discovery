import { Button, Grid, GridItem, Show, useColorMode } from "@chakra-ui/react";
import Nav from "./components/Nav";
import Games from "./components/Games";

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
      >
        <GridItem area="nav">
          <Nav onToggleMode={toggleColorMode} />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" background="dodgerblue">
            Aside
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
