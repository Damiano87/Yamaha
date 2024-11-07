import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  DropdownProvider,
  IndexProvider,
} from "../src/context/dropdowncontext.tsx";
import { FooterProvider } from "../src/context/footerContext.tsx";
import { CompareProvider } from "./context/compareContext.tsx";
import { AuthProvider } from "./context/authContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DropdownProvider>
      <IndexProvider>
          <FooterProvider>
            <CompareProvider>
              <AuthProvider>
                <App />
              </AuthProvider>
            </CompareProvider>
          </FooterProvider>
      </IndexProvider>
    </DropdownProvider>
  </StrictMode>
);
