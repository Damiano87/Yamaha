import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  DropdownProvider,
  IndexProvider,
} from "../src/context/dropdowncontext.tsx";
import { FooterProvider } from "../src/context/footerContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DropdownProvider>
      <IndexProvider>
          <FooterProvider>
            <App />
          </FooterProvider>
      </IndexProvider>
    </DropdownProvider>
  </StrictMode>
);
