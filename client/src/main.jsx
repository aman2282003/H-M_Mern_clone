import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import AuthContextProvider from "./context/Authcontext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <Router>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </Router>
  </ChakraProvider>
);
