import React from "react";
import ReactDOM from "react-dom/client";
import {ChakraProvider} from "@chakra-ui/react";

import {DataProvider} from "./context";
import App from "./App";
import {theme} from "./theme";

import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <DataProvider>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </DataProvider>
  </React.StrictMode>,
);
