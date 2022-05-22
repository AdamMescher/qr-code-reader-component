import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import App from "./components/App";
import GlobalStyle from "./components/GlobalStyle";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>
);
