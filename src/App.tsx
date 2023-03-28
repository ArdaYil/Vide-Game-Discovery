import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Text, Grid, GridItem, extendTheme } from "@chakra-ui/react";
import Nav from "./components/Nav";

const config = {
  initialColorMode: "dark",
  useSystemMode: false,
};

const theme = extendTheme({ config });

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Grid templateAreas={`"nav nav" "aside main"`}>
        <GridItem area="nav">
          <Nav />
        </GridItem>
        <GridItem area="aside" background="dodgerblue">
          Aside
        </GridItem>
        <GridItem area="main" background="yellow.400">
          Main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
