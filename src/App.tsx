import {
  Button,
  Grid,
  GridItem,
  Text,
  Show,
  useColorMode,
} from "@chakra-ui/react";
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
        gridTemplateColumns={{ base: "1fr", lg: "120px auto" }}
      >
        <GridItem area="nav">
          <Nav onToggleMode={toggleColorMode} />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside">
            <Text fontWeight="bold" fontSize="26px" textAlign="center">
              Genres
            </Text>
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
