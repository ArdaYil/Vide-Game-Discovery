import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeScript, ThemeConfig } from "@chakra-ui/react";
import App from "./App";
import theme from "./typescript/theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
