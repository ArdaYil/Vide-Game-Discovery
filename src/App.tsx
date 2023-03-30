import { Button, Grid, GridItem, useColorMode } from "@chakra-ui/react";
import Nav from "./components/Nav";
import Games from "./components/Games";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Grid templateAreas={`"nav nav" "aside main"`}>
        <GridItem area="nav">
          <Nav onToggleMode={toggleColorMode} />
        </GridItem>
        <GridItem area="aside" background="dodgerblue">
          Aside
        </GridItem>
        <GridItem area="main" background="yellow.400">
          <Games />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
