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
import { WishListProvider } from "./context/wishListContext.tsx";
import { disableReactDevTools } from '@fvilers/disable-react-devtools';
import {HelmetProvider} from "react-helmet-async";

if (process.env.NODE_ENV === 'production') disableReactDevTools();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
        <DropdownProvider>
          <IndexProvider>
              <FooterProvider>
                <CompareProvider>
                  <AuthProvider>
                    <WishListProvider>
                      <App />
                    </WishListProvider>
                  </AuthProvider>
                </CompareProvider>
              </FooterProvider>
          </IndexProvider>
    </DropdownProvider>
    </HelmetProvider>
    
  </StrictMode>
);
