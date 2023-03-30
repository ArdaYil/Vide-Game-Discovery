import { Button, Grid, GridItem, useColorMode } from "@chakra-ui/react";
import Nav from "./components/Nav";
import Games from "./components/Games";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Grid
        marginRight="20px"
        gap="20px"
        gridTemplateColumns="250px auto"
        templateAreas={`"nav nav" "aside main"`}
      >
        <GridItem area="nav">
          <Nav onToggleMode={toggleColorMode} />
        </GridItem>
        <GridItem area="aside" background="dodgerblue">
          Aside
        </GridItem>
        <GridItem area="main">
          <Games />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
